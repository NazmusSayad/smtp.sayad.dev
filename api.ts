import cors from 'cors'
import Route from 'next-api-method'

export default Route({
  middlewares: [cors({ origin: /.*/ })],
  errorHandler(err, req, res) {
    console.log(err)
    res.status(400).json({ status: 'fail', message: err.message })
  },
})
