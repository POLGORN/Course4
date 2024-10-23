const router = require('express').Router();
const sqlite3 = require('sqlite3').verbose();

const del_dog = (req, res) => {
    let id = +req.params.id;
    let query_delete = `DELETE FROM contracts1 WHERE id=?`;
    (new sqlite3.Database('./private/shelter.db'))
        .run(query_delete, [id], (err) => {
            if (err) return console.error(err);
            res.redirect('/');
        })
        .close();
}

router.get('/:id', del_dog);

module.exports = router;

