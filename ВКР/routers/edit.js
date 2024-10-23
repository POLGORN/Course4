const router = require('express').Router();
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const htmlParser = express.urlencoded({extended: false});

const render_edit = (req, res) => {
    let id = +req.params.id;
    let query = `SELECT * FROM contracts1 WHERE id = ?`;
    (new sqlite3.Database('./private/shelter.db'))
        .all(query, [id], (err, data) => {
            if (err) return console.error(err.message);
            let model = { 
                'id': data[0].id,
                'Number': data[0].Number,
                'HeadName': data[0].HeadName,
                'Date': data[0].Date,
                'Body': data[0].Body,
                'ResponsibleOne': data[0].ResponsibleOne
            };
            res.render("edit.hbs", model);
        })
        .close();
}

const render_update = (req, res) => {
    let id = +req.params.id;
    let Number = req.body.Number;
    let HeadName = req.body.HeadName; 
    let Date = req.body.Date;
    let Body = req.body.Body;
    let ResponsibleOne = req.body.ResponsibleOne;

    let query_update = `
        UPDATE contracts1
        SET Number=?, HeadName=?, Date=?, Body=?, ResponsibleOne=?
        WHERE id=?`;
    
    (new sqlite3.Database('./private/shelter.db'))
        .run(query_update, [Number,HeadName,Date,Body,ResponsibleOne,id], (err) => {
            if (err) return console.error(err.message);
            res.redirect("/");
        })
        .close();
}

router.get('/:id', render_edit);

router.post('/:id', htmlParser, render_update);

module.exports = router;
