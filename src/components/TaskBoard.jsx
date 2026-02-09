const priorityMap = {
  high: 'bg-rose-500/20 text-rose-200',
  medium: 'bg-amber-500/20 text-amber-200',
  low: 'bg-emerald-500/20 text-emerald-200',
}

export default function TaskBoard({ columns }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Доска спринта</h2>
        <button
          type="button"
          className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition hover:border-brand-500 hover:text-white"
        >
          Все задачи
        </button>
      </div>
      <div className="mt-5 grid gap-4 lg:grid-cols-4">
        {columns.map((column) => (
          <div key={column.id} className="rounded-2xl bg-slate-950/60 p-3">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span className="font-semibold">{column.title}</span>
              <span className="text-xs text-slate-500">{column.total}</span>
            </div>
            <div className="mt-3 space-y-3">
              {column.tasks.map((task) => (
                <div
                  key={task.id}
                  className="rounded-2xl border border-slate-800 bg-slate-900/80 p-3 text-sm"
                >
                  <p className="font-semibold text-slate-100">{task.title}</p>
                  <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-400">
                    {task.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-slate-700 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <span
                      className={`rounded-full px-2 py-0.5 ${priorityMap[task.priority]}`}
                    >
                      {task.priority === 'high'
                        ? 'Высокий'
                        : task.priority === 'medium'
                        ? 'Средний'
                        : 'Низкий'}
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-800 text-[10px] text-slate-200">
                      {task.assignee}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
