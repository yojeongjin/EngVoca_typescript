const db = require('../../../config/db');
const conn =  db.init();


exports.list = (req,res) => { 
	const { idUser } = req.query

	conn.query("select * from mydb_type.Day where idUser =  ?",[ idUser ],(err,row) => { 
		if(err) throw err;
		res.send(row)
	})
}

exports.modify = (req,res) => { 
	const { Day, active, idUser } = req.body

	const sql = `update mydb_type.Day set ${Day} = ? where idUser = ?`
	conn.query(sql,[ active, idUser ],(err,row) => { 
		if(err) throw err;

		return res.send({
			success: true,
			code: 200,
			msg:'수정되었습니다.'
		})
	})
}