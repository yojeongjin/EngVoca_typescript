const db = require('../../../config/db');
const conn =  db.init();


exports.list = (req,res) => { 
	conn.query("select * from mydb_type.Day",(err,row) => { 
		if(err) throw err;
		res.send(row)
	})
}