const router = require('express').Router();
const signin = require('./signin')
const day = require('./day')
const words = require('./words')
const save = require('./save')
const eachtype = require('./eachtype')
const join = require('./join')
const test = require('./test')
const mail = require('./mail')

router.use("/mail", mail)
router.use("/signin", signin);
router.use("/day", day);
router.use("/words", words);
router.use("/save", save);
router.use("/eachtype", eachtype);
router.use("/join", join)
router.use("/test", test)

router.all('*',(req, res)=>{
	res.status(404).send({success:false, msg:`api unknown uri ${req.path}`});
})

module.exports = router;