const yargs = require('yargs')
const argv = yargs
  .option('port', {
    alias: 'p',
    type: 'number',
    description: 'Input the port',
    default: 8080
  })
  .argv

const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))

app.all(/.*/, (req, res) => {
  res.status(200).send('OK')
})

app.listen(argv.port, "0.0.0.0", () => {
  console.log(`Logger listening at 0.0.0.0:${argv.port}`)
})