const router = require('express').Router();
const dao = require('./dao'); //데이터 모듈 호출

router.post('/', dao.send);

router.all('*',(req, res)=> {
	res.status(404).send({success:false, msg:'mail unknown uri ${req.path}'});
})

module.exports = router;