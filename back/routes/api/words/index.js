const router = require('express').Router();
const dao = require('./dao'); //데이터 모듈 호출

router.get('/:idx', dao.list);

router.all('*',(req, res)=> {
	res.status(404).send({success:false, msg:'words unknown uri ${req.path}'});
})

module.exports = router;