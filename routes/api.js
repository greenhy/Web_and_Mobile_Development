var express = require('express');
var router = express.Router();
var mysql = require("mysql");
/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({status:'success'});
//   res.render('index', { title: 'Express' });
});

router.get('/City', function(req, res, next) {
    var query = "SELECT name, district FROM ??;";
    var table = ['City'];

    query = mysql.format(query, table);

    req.db.query(query, function(err, rows){
        if(err) {
            res.json({
                Error: true,
                Message: `Erro excution MYSQL query: ${err}`,
            })
        }else{
            res.json({
                Error: false,
                Message: "success",
                City: rows
            })
        };
    });
});

router.get('/City/:country', function(req, res, next) {
    var query = "SELECT name, district FROM ?? WHERE ??=?;";
    var table = ['City','CountyrCode','req.params.country'];

    query = mysql.format(query, table);

    req.db.query(query, function(err, rows){
        if(err) {
            res.json({
                Error: true,
                Message: `Erro excution MYSQL query: ${err}`,
            })
        }else{
            res.json({
                Error: false,
                Message: "success",
                City: rows
            })
        };
    });
});

module.exports = router;
