import Cors from 'cors'

const cors = Cors({
  origin: '*',
  methods: ['POST', 'GET'],
})

function runMiddleware(req, res) {
  return new Promise((resolve, reject) => {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin ?? '*')

    cors(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default function (handler) {
  return async (req, res) => {
    await runMiddleware(req, res)

    try {
      const rv = handler(req, res)
      if (rv instanceof Promise) await rv
    } catch (err) {
      res.status(400).json({ status: 'fail', message: err.message })
    }
  }
}
