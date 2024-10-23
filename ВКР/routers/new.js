const sqlite3 = require('sqlite3').verbose();
const router = require('express').Router();
const htmlParser = require('express').urlencoded({extended: false});

router.post('/', htmlParser, (req, res) => {
    let Number = req.body.Number;
    let HeadName = req.body.HeadName; 
    let Date = req.body.Date;
    let Body = req.body.Body;
    let ResponsibleOne = req.body.ResponsibleOne;
    let arr_values = [Number,HeadName,Date,Body,ResponsibleOne];

    let query_insert = `
    INSERT INTO contracts1(Number,HeadName,Date,Body,ResponsibleOne) 
    VALUES(?,?,?,?,?)`;

    (new sqlite3.Database('./private/shelter.db'))
        .run(query_insert, arr_values, (err) => {
            if (err) return console.error(err);
            res.redirect('/');
        })
        .close();
});

module.exports = router;
