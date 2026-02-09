const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema(
  {
    externalId: String,
    title: { type: String, required: true },
    project: String,
    assignee: String,
    status: String,
    priority: String,
    dueLabel: String,
    tags: [String],
  },
  { timestamps: true }
)

const Task = mongoose.model('Task', taskSchema)

module.exports = { Task }
