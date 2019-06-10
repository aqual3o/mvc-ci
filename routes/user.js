const router = require ("express").Router ();
const user   = require ("../controllers/user");

router.get ('/', user.ping);

router.get ('/listall', user.listall);


module.exports = router;
