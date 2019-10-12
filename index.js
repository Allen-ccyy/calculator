const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const { Pool } = require('pg');
var pool;
pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.connect();

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.urlencoded({ extended: false }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  //.get('/', (req, res) => res.render('pages/index'))
  .get('/',(req,res) =>{
    var getUserQuery = `SELECT * FROM userstab`;
    pool.query(getUserQuery, (error,result) =>{
      if(error)
        res.end(error);
      var results = {'rows': result.rows};
      res.render('pages/users',results);
    })
  })
  .post('/login', (req, res) => {
    //console.log('post');
    var a = req.body.name;
    var b = Number(req.body.weight);
    var c = Number(req.body.hight);
    var d = Number(req.body.fly);
    var e = Number(req.body.fight);
    var f = Number(req.body.fire);
    var g = Number(req.body.water);
    var h = Number(req.body.electric);
    var i = Number(req.body.frozen);
    var j = Number(req.body.total);
    if(a != ''){
    var insert = `INSERT INTO userstab(name, weight, height, fly, fight, fire, water, electric,frozen, total) VALUES ('${a}',${b},${c},${d},${e},${f},${g},${h},${i},${j});`;
    pool.query(insert, (error,result) =>{
      if(error)
        res.end(error);
    })
    res.render('pages/login');
  }
  else{
     res.render('pages/Error', { reason: "The name of Tokimon cannot be empty!" });
  }
  })

  .post('/delete', (req, res) => {
    var j = req.body.delete;
    var remove = `DELETE FROM userstab WHERE name = '${j}';`;
    if(j != ''){
    pool.query(remove, (error,result) =>{
      if(error)
        res.end(error);
      if(result.rowCount == 0){
        res.render('pages/Error',{ reason: "The Tokimon name that you entered does not exist!" });
      }
    })
    res.render('pages/login');
  }
    else{
      res.render('pages/Error',{ reason: "The name of Tokimon cannot be empty!" });
    }
  })

  .post('/change', (req, res) =>{
    var att = req.body.attribute;
    var val = req.body.number;
    var toki = req.body.names;
    var temp = val;
    var change;
    if(att == ''|| val == '' || toki == ''){
        res.render('pages/Error',{ reason: "The form is incomplete!" });
    }
    else{
      if(!isNaN(Number(temp))){
        change = `UPDATE userstab SET ${att} = ${val} WHERE name = '${toki}';`;
      }
      else{
        change = `UPDATE userstab SET ${att} = '${val}' WHERE name = '${toki}';`;
      }
      if (isNaN(Number(temp)) && att != 'name' ) {
        res.render('pages/Error',{ reason: "The non-name attribute should be positive integer!" });
      }
      else {
        pool.query(change, (error,result) =>{
          if(error)
            res.end(error);
        })
        res.render('pages/login');
      }
    }
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
