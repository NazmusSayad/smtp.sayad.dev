import api from '../../src/api'
import models from '../../src/mail/models'

const handler = (req, res) => {
  const entries = Object.entries(models)
  const modelsList = entries.map(([model, [, config]]) => ({
    model,
    config,
  }))

  res.json({ status: 'success', data: { models: modelsList } })
}

export default api({
  get: handler,
})
