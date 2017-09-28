import * as dotenv from 'dotenv'

/**
 * Load environment variables from .env file.
 */
dotenv.config()

const isRequired = (name: string): never => {
  throw new Error(`${name} is required`)
}

interface Config {
  PORT: number
}

const config: Config = {
  PORT: parseInt(process.env.PORT, 10) || isRequired('PORT')
}

export = config
