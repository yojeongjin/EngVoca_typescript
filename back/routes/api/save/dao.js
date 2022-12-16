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