const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const { overviewSnapshot } = require('./seed/overview')
const { Task } = require('./models/Task')

const app = express()

app.use(cors())
app.use(express.json())

const { MONGODB_URI = '' } = process.env

if (MONGODB_URI) {
  mongoose
    .connect(MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((error) => console.error('MongoDB connection error', error))
}

app.get('/api/overview', async (_req, res) => {
  if (!MONGODB_URI) {
    return res.json(overviewSnapshot)
  }

  const tasks = await Task.find().limit(20)
  return res.json({
    ...overviewSnapshot,
    tasks: tasks.map((task) => ({
      id: task.externalId,
      title: task.title,
      project: task.project,
      assignee: task.assignee,
      status: task.status,
      priority: task.priority,
      due: task.dueLabel,
      tags: task.tags,
    })),
  })
})

app.get('/api/tasks', async (_req, res) => {
  const tasks = await Task.find().sort({ createdAt: -1 })
  return res.json(tasks)
})

app.post('/api/tasks', async (req, res) => {
  const task = await Task.create(req.body)
  return res.status(201).json(task)
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
