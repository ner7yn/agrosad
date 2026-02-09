export default function SprintTimeline({ sprints }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-white">Спринты и контроль</h2>
      <div className="mt-5 space-y-4">
        {sprints.map((sprint) => (
          <div
            key={sprint.id}
            className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-100">
                  {sprint.name}
                </p>
                <p className="text-xs text-slate-500">{sprint.dates}</p>
              </div>
              <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-300">
                {sprint.progress}%
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-400">{sprint.focus}</p>
            <div className="mt-3 h-2 rounded-full bg-slate-800">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-emerald-400"
                style={{ width: `${sprint.progress}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-sm text-slate-400">
        Синхронизировано с Jira и 1С · обновление каждые 15 минут.
      </div>
    </section>
  )
}
