import nodemailer, { Transporter, SendMailOptions } from 'nodemailer'
import models from './models'

export default (model: string): [Transporter, SendMailOptions] => {
  const config = models[model]
  if (!config) {
    throw new Error('No model found!')
  }

  const [options, defaults] = config
  return [nodemailer.createTransport(options), defaults]
}
