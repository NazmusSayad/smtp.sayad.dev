import { SendMailOptions } from 'nodemailer'
type Models = {
  [i: string]: [any, SendMailOptions]
}

const name = 'Nazmus Sayad'

const config = {
  host: 'smtp.gmail.com',
  secure: true,
  port: 465,

  auth: {
    user: process.env.USER_1,
    pass:  process.env.PASS_1,
  },
}

const models: Models = {
  'no-reply': [
    config,
    {
      priority: 'high',
      from: { name, address: 'no-reply@sayad.dev' },
    },
  ],

  mail: [
    config,
    {
      priority: 'high',
      from: { name, address: 'mail@sayad.dev' },
    },
  ],

  me: [
    config,
    {
      priority: 'high',
      from: { name, address: 'me@sayad.dev' },
    },
  ],

  'no-reply-nazmussayad': [
    config,
    {
      priority: 'high',
      from: { name, address: 'no-reply@nazmussayad.com' },
    },
  ],

  'mail-nazmussayad': [
    config,
    {
      priority: 'high',
      from: { name, address: 'mail@nazmussayad.com' },
    },
  ],
}

export default models
