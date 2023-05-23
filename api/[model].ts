import cors from '../cors'
import transporter from '../mail/transporter'

export default cors(async (req, res) => {
  if (req.headers.secret !== process.env.SECRET) {
    throw new Error('Auth Failed!')
  }

  const { model } = req.query
  const [client, defaults] = transporter(model)

  const data = await client.sendMail({
    ...req.body,
    ...defaults,
    date: new Date(),
  })

  res.json({ status: 'success', data })
})
