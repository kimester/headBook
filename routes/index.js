const router = require('express').Router();
const { route } = require('./api');
const apiRoutes = require('./api')


router.use('/api', apiRoutes);

router.use((req, res)=>{
return res.send('wrong route')
})

module.exports = router;