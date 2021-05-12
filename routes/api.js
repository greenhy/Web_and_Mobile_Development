var express = require('express');
var router = express.Router();
// var mysql = require("mysql");
/* GET home page. */
router.get('/', function (req, res, next) {
    res.json({ status: 'success' });
    //   res.render('index', { title: 'Express' });
});

router.get('/City', function (req, res, next) {
    //Week10
    
    //.then
    // req.body.from("City").select("name", "district").then((rows)=>{
    //     res.json({Error:false, Message:"Success",Cities: rows});
    // }).catch(()=>{
    //     console.log(err);
    //     res.json({Error:true, Message:"Error executing MYSQL query"});
    // })

    //async
    (async () => {
        try {
            let rows = await req.db.from("City").select("name", "district");
            res.json({ Error: false, Message: "Success", Cities: rows });
        } catch (err){
            console.log(err);
            res.json({ Error: true, Message: "Error executing MYSQL query" });
        };
    }
    )();

    //Week9
    //     var query = "SELECT name, district FROM ??;";
    //     var table = ['City'];

    //     query = mysql.format(query, table);

    //     req.db.query(query, function(err, rows){
    //         if(err) {
    //             res.json({
    //                 Error: true,
    //                 Message: `Erro excution MYSQL query: ${err}`,
    //             })
    //         }else{
    //             res.json({
    //                 Error: false,
    //                 Message: "success",
    //                 City: rows
    //             })
    //         };
    //     });
});

router.get('/City/:country', function(req, res, next) {
    //Week10
    (async () => {
        try {
            let query = req.db
            .from("City")
            .select("name", "district")
            .where("CountryCode","=", req.params.country);
            let rows = await query.andWhere("district","=","Queensland");
            res.json({ Error: false, Message: "Success", Cities: rows });
        } catch (err){
            console.log(err);
            res.json({ Error: true, Message: "Error executing MYSQL query" });
        };
    }
    )();



    //Week9
//     var query = "SELECT name, district FROM ?? WHERE ??=?;";
//     var table = ['City','CountyrCode','req.params.country'];

//     query = mysql.format(query, table);

//     req.db.query(query, function(err, rows){
//         if(err) {
//             res.json({
//                 Error: true,
//                 Message: `Erro excution MYSQL query: ${err}`,
//             })
//         }else{
//             res.json({
//                 Error: false,
//                 Message: "success",
//                 City: rows
//             })
//         };
//     });
});

module.exports = router;
