const router = require('express').Router();
const signin = require('./signin')
const day = require('./day')
const words = require('./words')
const save = require('./save')

router.use("/signin", signin);
router.use("/day", day);
router.use("/words", words);
router.use("/save", save);

router.all('*',(req, res)=>{
	res.status(404).send({success:false, msg:`api unknown uri ${req.path}`});
})

module.exports = router;