const db = require('../../../config/db');
const conn =  db.init();


exports.list = (req,res) => { 
	const { vocaIdx, chapter } = req.query

	console.log(req.query)
  sql = "select * from mydb_type.AllVoca where vocaIdx = ? and chapter like ?"
	conn.query(sql,[ vocaIdx, chapter ],(err,row) => { 
		if(err) throw err;
		res.send(row)
	})
}