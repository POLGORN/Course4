const router = require('express').Router();
const sqlite3 = require('sqlite3').verbose();

const render_table = (req, res) => {
    let query = "SELECT * FROM contracts1";
    (new sqlite3.Database('./private/shelter.db'))
        .all(query, [], (err, rows) => {
            if (err) return console.error(err);
            let model = { arr: rows };
            res.render("index.hbs", model);
        })
        .close();
}

router.get('/', render_table);

module.exports = router;
