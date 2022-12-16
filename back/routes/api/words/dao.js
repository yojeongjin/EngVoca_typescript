const db = require('../../../config/db');
const conn =  db.init();


exports.list = (req,res) => { 
  const { idx } = req.query

	conn.query("select * from mydb_type.Vocabulary where DayCheck = ?",[ idx ],(err,row) => { 
		if(err) throw err;
		res.send(row)
	})
}