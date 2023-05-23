import cors from '../cors'
import models from '../mail/models'

export default cors((req, res) => {
  const entries = Object.entries(models)
  const modelsList = entries.map(([model, [, config]]) => ({
    model,
    config,
  }))

  res.json({ status: 'success', data: { models: modelsList } })
})
