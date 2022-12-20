const db = require('../../../config/db'); //db설정 호출
const conn =  db.init(); //db 연결
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.add = (req,res) => {

	const { email, password, repassword, name, img } = req.body

  if (password === repassword) {
    sql = "insert into mydb_type.User (UserEmail, UserPw, UserRepw, UserName, UserImg) values (?, ?, ?, ?, ?)";
    conn.query(sql,[ email, password, repassword, name, img ],(err,rows)=>{
      if(err) throw err;
      const userIdx = rows.insertId;
      const secret = process.env.SECRETKEY

      if (rows.length !==0) {
        sql = "insert into mydb_type.Day (idUser) values (?)";
        conn.query(sql,[ userIdx ],(err,rows)=>{
          if(err) throw err;
        })
      }

      const token = jwt.sign(
        { userIdx: userIdx, UserName: name },
        secret
      )
      

      res.send({
        result: { jwt: token, idUser: userIdx, UserName: name, UserEmail: email, UserImg: img },
        success: true,
        code: 200,
        msg:'회원가입 성공.'
      })
    })
  } else {
    res.send({
      success: false,
      code: 400,
      message: '비밀번호가 일치하지 않습니다.'
    })
  }
}

exports.list = (req,res) => {
  const { email } = req.query;

  sql = "select * from mydb_type.User where UserEmail = ? ";
  conn.query(sql, [ email ],(err,rows) => { 
    if(err) throw err;
    
    if(rows.length === 0) {
      res.send({
        success: true,
        code: 200,
        msg:'사용 가능한 이메일입니다.'
      })
    } else {
      res.send({
        success: false,
        code: 400,
        msg:'이미 사용 중인 이메일입니다.'
      })
    }
  })

}
