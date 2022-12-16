const db = require('../../../config/db');
const conn =  db.init();


exports.list = (req,res) => { 
	conn.query("select * from mydb_type.Day",(err,row) => { 
		if(err) throw err;
		res.send(row)
	})
}

exports.modify = (req,res) => { 
	const { active, day } = req.body

	sql = "update mydb_type.Day set DayActive = ? where idDay = ?"
	conn.query(sql,[ active, day ],(err,row) => { 
		if(err) throw err;

		return res.send({
			success: true,
			code: 200,
			msg:'수정되었습니다.'
		})
	})
}