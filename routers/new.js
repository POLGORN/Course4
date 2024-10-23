const sqlite3 = require('sqlite3').verbose();
const router = require('express').Router();
const htmlParser = require('express').urlencoded({extended: false});

router.post('/', htmlParser, (req, res) => {
    let Имя = req.body.Имя; // находим по имени тега в шаблоне
    let Число = +req.body.Число; // находим по имени тега в шаблоне
    let arr_values = [Имя, Число];

    let query_insert = `INSERT INTO Record(Имя,Число) VALUES(?,?)`;
    (new sqlite3.Database('./private/record.db'))
        .run(query_insert, arr_values, (err) => {
            if (err) return console.error(err);
            res.redirect('/');
        })
        .close();
});

module.exports = router;

/*
SPA
1 оставить Del с подтверждением
2 поменять Del на иконку
3 добавить сортировку при нажании на заголовок каждого столбца - по возрастанию
- 4 сделать отдельное окно для добавления собаки
5 UPDATE
*/