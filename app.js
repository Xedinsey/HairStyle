// Импорты
const express = require('express')
const {engine} = require('express-handlebars')
const {getFortune} = require("./lib/fortune")
const hbs = require('hbs')

// Точка старта
const app = express()
const port = process.env.PORT || 3000


// Настройки
// Настройка механизма представлений Handlebars.
app.engine('hbs', engine({defaultLayout: 'main'}))
// app.set('view engine', 'handlebars')

app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')
app.use(express.static(__dirname + '/public'))

// Роуты
// Страница О нас
app.get('/about', (req, res) => res.render('about'))
// Страница блога
app.get('/blog', (req, res) => res.render('blog'))
// Страница контакты
app.get('/contact', (req, res) => res.render('contact'))
// Страница услуги
app.get('/services', (req, res) => res.render('services'))
// Домашняя страница
app.get('/', (req, res) => res.render('home'))

// Страница "О нас из учебника"
// app.get('/about', (req, res) => {
//     res.render('about' , { fortune: getFortune() })
// })

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