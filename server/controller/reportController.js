const { dba } = require('../database');
const { hasilBegadang } = require('../helper/hasilBegadang');

module.exports = {
  Revenue: async (req, res) => {
    let { month } = req.params;
    let revenueSql = `SELECT SUM(payment_to_admin) AS revenue FROM transaction WHERE status_trx = 'Close'`;
    let monthSql = 'SELECT MONTHNAME(date_of_trx) AS month FROM transaction GROUP BY MONTH(date_of_trx)';
    let totalTrx = `SELECT SUM(invoice_total) AS totalTransaction FROM invoice`; 

    if (month !== 'All') {
      revenueSql += ` && MONTHNAME(date_of_trx) = '${month}'`;
      totalTrx += ` WHERE MONTHNAME(invoice_date) = '${month}'`;
    } 
    
    try {
      let revenue = await dba(revenueSql);
      let month = await dba(monthSql);
      let total = await dba(totalTrx);
      
      let arrMonth = [];
      for (let i = 0; i < month.length; i++) {
        arrMonth.push(month[i].month);
      }

      res.status(200).send({
        status: 'Success',
        revenue: revenue[0].revenue,
        month: arrMonth,
        totTrx: total[0].totalTransaction
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }
  },
  MostBidder: async (req, res) => {
    let { month } = req.params;
    let sql = `
      SELECT 
        u.username, 
        COUNT(count) AS count
      FROM bid b
      JOIN users u ON b.bidder_id = u.user_id`;

    if (month !== 'All') {
      sql += ` WHERE MONTHNAME(b.time) = '${month}'`
    }

    sql += ` GROUP BY b.bidder_id ORDER BY b.count DESC LIMIT 3`;
    try {
      let response = await dba(sql);

      let arrName = [];
      let arrCount = [];
      for (let i = 0; i < response.length; i++) {
        arrName.push(response[i].username);
        arrCount.push(response[i].count)
      }
      res.status(200).send({
        mostBidder: arrName,
        totalBid: arrCount
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }
  },
  PopularCategory: async (req, res) => {
    let { month } = req.params;
    let sql = `
      SELECT 
        c.category,
        COUNT(count) AS count
      FROM bid b
      JOIN product p ON b.product_id = p.product_id
      JOIN category c ON p.product_category = c.id 
    `;
    if (month !== 'All') {
      sql += ` WHERE MONTHNAME(b.time) = '${month}'`;
    }
    sql += ` GROUP BY c.category ORDER BY b.count DESC LIMIT 3`;

    try {
      let response = await dba(sql);

      let arrCtg = [];
      let arrCount = [];
      for (let i = 0; i < response.length; i++) {
        arrCtg.push(response[i].category);
        arrCount.push(response[i].count);
      }
      res.status(200).send({
        mostPopular: arrCtg,
        count: arrCount
      });
    } catch (err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }
  },
  ProductSell: async (req, res) => {
    let { month } = req.params;
    let sql = `SELECT COUNT(bid_result_id) AS count FROM transaction`;

    if (month !== 'All') sql += ` WHERE MONTHNAME(date_of_trx) = '${month}'`;

    try {
      let response = await dba(sql);
      res.status(200).send({
        totalSell: response[0].count
      });
    } catch(err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }
  },
  WeeklyBid: async (req, res) => {
    let { month } = req.params;
    let sql = `SELECT DAYNAME(time) AS day, COUNT(bid_id) AS count FROM bid`;

    if (month !== 'All') sql += ` WHERE MONTHNAME(time) = '${month}'`;
    sql += ` GROUP BY day ORDER BY DAYOFWEEK(time)`;

    try {
      let response = await dba(sql);
      let finalRes = hasilBegadang(response);
      // console.log(finalRes);
      
      let arrDay = [];
      let arrCount = [];
      for (let i = 0; i < finalRes.length; i++) {
        arrDay.push(finalRes[i].day);
        arrCount.push(finalRes[i].count);
      }

      res.status(200).send({
        day: arrDay,
        count: arrCount
      });      
    } catch(err) {
      console.log(err.message);
      res.status(500).send(err.message);
    }
  }
};

