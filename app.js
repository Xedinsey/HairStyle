const express = require('express')
const {engine} = require('express-handlebars')
const {getFortune} = require("./lib/fortune")


const app = express()
const port = process.env.PORT || 3000



// Настройка механизма представлений Handlebars.
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

// Домашняя страница
app.get('/', (req, res) => res.render('home'))

// Страница "О нас"
app.get('/about', (req, res) => {
    res.render('about' , { fortune: getFortune() })
})

// Пользовательская страница 404
app.use((req, res) => {
    res.status(404)
    res.render('404')
})

// Пользовательская страница 500
app.use((err, req, res, next) => {
    res.status(500)
    res.render('500')
})


// Слушатель порта
app.listen(port, () => console.log(
    `Express запущен на http://localhost:${port}; ` + `Нажмите Ctrl+C для завершения.`
))