var express = require('express');
var router = express.Router();
//hien thi form(GET)
router.get('/',(req, res) => {
    //render ra file: views/employee/add.hbs
    res.render('employee/add');
});

// nhan va show du lieu tu form(POST)
router.post('/',(req, res) => {
    //render ra file: views/employee/view.hbs
    var employee = req.body;
    res.render('employee/view',{employee:employee});
});

module.exports = router;