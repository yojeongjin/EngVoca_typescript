const db = require('../../../config/db');
const conn =  db.init();


exports.add = (req,res) => {
	const { word, meaning, idUser  } = req.body

	sql = "insert into mydb_type.Test ( voca, meaning, idUser ) values ( ?, ?, ?) ";
	conn.query(sql,[ word, meaning, idUser ],(err,rows)=>{
		if(err) throw err;

		if(rows.length !== 0) {
			conn.query("select * from mydb_type.Test",(err,row) => { 
				if(err) throw err;
				return res.send(row)
			})
		}
	})
}

exports.delete = (req,res) => { 
	const { idTest } = req.query

	conn.query("delete from mydb_type.Test where idTest = ?",[ idTest ],(err,row) => { 
		if(err) throw err;

		res.send({
			success: true,
			code: 200,
			msg:'삭제되었습니다.'
		})
	})
}


exports.list = (req,res) => { 
	const { idUser } = req.query

	conn.query("select * from mydb_type.Test where idUser = ?",[ idUser ],(err,row) => { 
		if(err) throw err;
		res.send(row)
	})
}
