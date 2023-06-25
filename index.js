const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

let plNames = ['c', 'c++', 'java', 'javaScript']

app.get('/', (req,res) => {
  res.status(200).render('index', {Title: 'home page', plNames: plNames})
})

app.post('/', (req,res) => {
  plNames.push(req.body.plName)
  res.status(201).send('data is created')
  res.redirect('/')
  })

  app.get('/contact', (req,res) => {
    res.status(200).render('contact', {Title: 'contact page'})
  })

app.listen(3000, () => {
  console.log('The server is running...')
})