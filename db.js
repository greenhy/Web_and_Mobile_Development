const mysql = require("mysql");

const connection = mysql.createConnection({
    host:'localhost',
    user:"hayoung",
    password:"1!rktldus",
    database:"world",
});

connection.connect(function(err){
    if(err) throw err;
});

module.exports=(req, res, next)=>{
    req.db = connection;
    next();
}