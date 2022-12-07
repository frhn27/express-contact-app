const express = require('express')
const expressLayouts=require('express-ejs-layouts')
const {loadContact,findContact}=require('./utility/contact')
const app = express()
const port = 3000

app.set('view engine','ejs')
app.use(expressLayouts)
app.use(express.static('public'))



app.get('/home', (req, res) => {
  const mahasiswa =[
    {
    nama  :'Risky Eky',
    email :'risky@gmail.com'
    },
    {
    nama  :'Fadhillah Kamil',
    email :'kamil@gmail.com'
    },
    {
    nama  :'Mustopa',
    email :'Mus@gmail.com'
    },
    {
    nama  :'Risky Eky',
    email :'risky@gmail.com'
    }
] 
  res.render('index',{
    nama :'Risky', 
    title :'Halaman Home',
    mahasiswa:mahasiswa,
    layout: 'layouts/main-layout',
  })
})

app.get('/about', (req, res,next) => {
  res.render('about',{
    layout: 'layouts/main-layout',
    title : 'Halaman About'
  })
})

app.get('/contact', (req, res) => {
  const contacts = loadContact();
  res.render('contact',{
    layout: 'layouts/main-layout',
    title : 'Halaman Contact',
    contacts: contacts,
  } )
})
app.get('/contact/:nama', (req, res) => {
  const contact = findContact(req.params.nama);
  res.render('details',{
    layout: 'layouts/main-layout',
    title : 'Halaman Contact',
    contact: contact,
  } )
})

app.use((req, res) => {
  res.status(404)
  res.send('<h1>Not found</>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})