import api from '../../src/api'
import client from '../../src/mail/client'

export default api({
  post: [
    (req, res, next) => {
      if (req.headers.secret !== process.env.SECRET) {
        throw new Error('Auth Failed!')
      }

      next()
    },

    async (req, res) => {
      const { model } = req.query
      const [transporter, defaults] = client(model)

      const data = await transporter.sendMail({
        ...req.body,
        ...defaults,
        date: new Date(),
      })

      res.json({ status: 'success', data })
    },
  ],
})
