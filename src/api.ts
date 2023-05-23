import Route from 'next-api-method'

export default Route({
  errorHandler(err, req, res) {
    res.status(400).json({ status: 'fail', message: err.message })
  },
})
