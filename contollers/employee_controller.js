const express = require('express'),
    router = express.Router()

const db = require('../db.js')

router.get('/', (req, res) => {
    // res.send('List of employees');
    db.query("SELECT * FROM employee")
        .then(data => { res.send(data) })
        .catch(err => console.log(err))
})

module.exports = router;