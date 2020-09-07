var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/*', function(req, res, next) {
     console.log(`write to db... ${req.body} received at ${Date.UTC}`)
     console.log("add headers...")
     console.log(".......")
     console.log("do other stuff / send forward..")
     console.log(".......")
     res.redirect(`http://localhost:8081/${req.url}`)
});


module.exports = router;
