import models from '../../src/mail/models'

export default (req, res) => {
  const entries = Object.entries(models)
  const modelsList = entries.map(([model, [, config]]) => ({
    model,
    config,
  }))

  res.json({ status: 'success', data: { models: modelsList } })
}
