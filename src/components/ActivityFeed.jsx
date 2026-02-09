export default function ActivityFeed({ activity }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Активность</h2>
        <span className="rounded-full bg-slate-800 px-2 py-1 text-xs text-slate-400">
          Сегодня
        </span>
      </div>
      <div className="mt-5 space-y-4">
        {activity.map((item) => (
          <div key={item.id} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
            <p className="text-sm text-slate-200">{item.message}</p>
            <p className="mt-2 text-xs text-slate-500">{item.time}</p>
          </div>
        ))}
      </div>
      <button
        type="button"
        className="mt-6 w-full rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-300 transition hover:border-brand-500 hover:text-white"
      >
        Открыть полный журнал
      </button>
    </section>
  )
}
