const navItems = [
  { label: 'Обзор', active: true },
  { label: 'Проекты', active: false },
  { label: 'Бэклог', active: false },
  { label: 'Клиенты', active: false },
  { label: 'Отчеты', active: false },
]

export default function Sidebar({ workspace, projects }) {
  return (
    <aside className="hidden min-h-screen w-72 flex-col border-r border-slate-900 bg-slate-950/80 p-6 lg:flex">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-sky-500 text-sm font-semibold text-white">
          AS
        </div>
        <div>
          <p className="text-sm font-semibold">{workspace.name}</p>
          <p className="text-xs text-slate-500">{workspace.plan}</p>
        </div>
      </div>

      <nav className="mt-10 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            type="button"
            className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-sm transition ${
              item.active
                ? 'bg-slate-900 text-white'
                : 'text-slate-400 hover:bg-slate-900/60 hover:text-white'
            }`}
          >
            <span>{item.label}</span>
            {item.active && (
              <span className="rounded-full bg-brand-500/20 px-2 py-0.5 text-xs text-brand-300">
                Live
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="mt-10">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          Быстрые проекты
        </p>
        <div className="mt-3 space-y-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-slate-800 bg-slate-900/40 px-3 py-2 text-xs text-slate-300"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">{project.name}</span>
                <span className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px] text-slate-400">
                  {project.status}
                </span>
              </div>
              <p className="mt-1 text-[11px] text-slate-500">
                Владелец: {project.owner}
              </p>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
