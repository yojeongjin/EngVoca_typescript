const db = require('../../../config/db');
const conn =  db.init();
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.list = (req,res) => { 
	conn.query("select * from mydb_type.User",(err,row) => { 
		if(err) throw err;
		res.send(row)
	})
}

exports.view = (req,res) => {
  const { email, password } = req.body


	sql = "select * from mydb_type.User where UserEmail = ? and UserPw = ?";
	conn.query(sql,[ email, password ],(err,rows)=>{
		if(err) throw err;

    if(rows.length === 0) {
      return res.send({
				success: false,
				code: 400,
				msg:'회원정보가 존재하지 않습니다.'
			})
    } else {
      console.log(rows[0])
      const { idUser, UserName, UserEmail, UserImg } = rows[0]
      const secret = process.env.SECRETKEY

      const token = jwt.sign(
        { userIdx: idUser, UserName: UserName },
        secret
      )
      return res.send({
        result: { jwt: token, idUser: idUser, UserName: UserName, UserEmail: UserEmail, UserImg: UserImg },
        success: true,
        code: 200,
        msg:'로그인 성공'
      })
    }
	})
}


exports.modify = (req,res) => { 
	const { name, img, idUser } = req.body

	const sql = "update mydb_type.User set UserName = ?, UserImg = ? where idUser = ?"
	conn.query(sql,[ name, img, idUser ],(err,row) => { 
		if(err) throw err;

		return res.send({
			success: true,
			code: 200,
			msg:'수정되었습니다.'
		})
	})
}