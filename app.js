const express = require('express')

const app = express()

const port = process.env.PORT || 3000

// Домашняя страница
app.get('/', (req, res) => {
    res.type('text/plain')
    res.send('Домашняя страница')
})

// Страница "О нас"
app.get('/about', (req, res) => {
    res.type('text/plain')
    res.send('Страница о нас')
})

// Пользовательская страница 404
app.use((req, res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - Страница не найдена')
})

// Пользовательская страница 500
app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - Внутренняя ошибка сервера.')
})

app.listen(port, () => console.log(
    `Express запущен на http://localhost:${port}; ` + `Нажмите Ctrl+C для завершения.`
))