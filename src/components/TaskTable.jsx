const statusStyles = {
  'В работе': 'bg-brand-500/20 text-brand-200',
  'На ревью': 'bg-amber-500/20 text-amber-200',
  'Бэклог': 'bg-slate-700/40 text-slate-300',
  'Готово': 'bg-emerald-500/20 text-emerald-200',
}

const priorityStyles = {
  P1: 'text-rose-300',
  P2: 'text-amber-300',
  P3: 'text-slate-400',
}

export default function TaskTable({ tasks }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Критичные задачи</h2>
        <button
          type="button"
          className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300 transition hover:border-brand-500 hover:text-white"
        >
          Создать задачу
        </button>
      </div>
      <div className="mt-5 overflow-hidden rounded-2xl border border-slate-800">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-950/60 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-4 py-3">Задача</th>
              <th className="px-4 py-3">Проект</th>
              <th className="px-4 py-3">Срок</th>
              <th className="px-4 py-3">Статус</th>
              <th className="px-4 py-3">Приоритет</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-slate-900/50">
                <td className="px-4 py-3">
                  <div className="font-semibold text-slate-200">{task.title}</div>
                  <div className="mt-1 flex flex-wrap gap-2 text-[11px] text-slate-500">
                    {task.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-slate-700 px-2 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-4 py-3 text-slate-400">{task.project}</td>
                <td className="px-4 py-3 text-slate-400">{task.due}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs ${statusStyles[task.status]}`}
                  >
                    {task.status}
                  </span>
                </td>
                <td className={`px-4 py-3 text-xs font-semibold ${priorityStyles[task.priority]}`}>
                  {task.priority}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
