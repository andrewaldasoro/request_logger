const yargs = require('yargs')

const express = require('express')
const multer = require('multer')
const app = express()
const upload = multer()

const argv = yargs
  .option('port', {
    alias: 'p',
    type: 'number',
    description: 'Input the port',
    default: 8080
  })
  .argv

app.use((req, res, next) => {
  req.headers['content-type'] = 'multipart/form-data; boundary=----1234'
  next()
})

app.put('/upload', upload.any(), (req, res) => {
  // req.headers['content-type'] = 'multipart/form-data'
  // console.log(req.get('Content-Type'))
  // console.log(req.header('content-type'))
  // if (!req.is()) req.type = 'multipart/form-data'
  console.log(req.is())
  if (req.file) console.log(req.file)
  if (req.files) console.log(req.files)

  res.send('')
})

app.all('/', (req, res) => {
  console.log(req);
  res.status(200).send('')
})


app.listen(argv.port, "0.0.0.0", () => {
  console.log(`Logger listening at http://localhost:${argv.port}`)
})