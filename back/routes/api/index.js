const router = require('express').Router();
const signin = require('./signin')

router.use("/signin", signin);

router.all('*',(req, res)=>{
	res.status(404).send({success:false, msg:`api unknown uri ${req.path}`});
})

module.exports = router;