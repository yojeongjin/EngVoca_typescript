const db = require('../../../config/db');
const conn =  db.init();


exports.list = (req,res) => { 
  sql = "select * from mydb_type.AllVoca"
	conn.query(sql,(err,row) => { 
		if(err) throw err;
		res.send(row)
	})
}