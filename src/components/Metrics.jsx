export default function Metrics({ metrics }) {
  return (
    <>
      {metrics.map((metric) => (
        <div
          key={metric.id}
          className="rounded-3xl border border-slate-800 bg-slate-900/60 p-5 shadow-soft"
        >
          <p className="text-sm text-slate-400">{metric.label}</p>
          <div className="mt-3 flex items-end justify-between">
            <p className="text-3xl font-semibold text-white">{metric.value}</p>
            <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs text-emerald-300">
              {metric.delta}
            </span>
          </div>
        </div>
      ))}
    </>
  )
}
