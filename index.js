const yargs = require('yargs')

const express = require('express')
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

app.all('/', (req, res) => {
  console.log(req);
  res.status(200).send('')
})

app.up('/upload', upload.any(), (req, res) => {
  res.status(200).send('')
})

app.listen(argv.port, "0.0.0.0", () => {
  console.log(`Logger listening at http://localhost:${argv.port}`)
})