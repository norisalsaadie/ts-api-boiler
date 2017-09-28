import * as express from 'express'
import * as compression from 'compression'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import { PORT } from './config/index'

/**
 * Create Express server.
 */
const server = express()

server
  .use(helmet())
  .use(compression())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .get('/', (req, res, next) => res.json({ message: 'bye world' }))
  .listen(PORT, () => console.log(`working on ${PORT}`))
