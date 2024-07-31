const express = require('express');
const app = express();
const PORT = 8080;
const router = require('./routes/todo');
const {sequelize} = require('./models/index');


app.set('view engine','ejs');
app.set('views','./views')

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.use('/todos',router);



//force :true ; 서버실행할때마다 테이블 재생성
//force :false ; 서버실행 시, 테이블 없으면 생성
sequelize
    .sync({force:false})
    .then(()=>{
        app.listen(PORT , () =>{
            console.log('con succeeded!');
            console.log(`${PORT} is running`);
        })
    })
    .catch((err)=>{
        console.error(err);
    })
