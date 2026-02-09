export default function TopBar({ user, demoMode, onToggleDemo, status }) {
  return (
    <header className="border-b border-slate-900 bg-slate-950/80 px-6 py-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-400">Рабочее пространство</p>
          <h1 className="text-2xl font-semibold text-white">
            Центр управления продуктом
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="rounded-full border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-300">
            {status.loading ? 'Синхронизация...' : 'Синхронизировано'}
          </div>
          <button
            type="button"
            onClick={onToggleDemo}
            className={`rounded-full px-3 py-2 text-xs font-semibold transition ${
              demoMode
                ? 'bg-brand-500 text-white'
                : 'bg-slate-800 text-slate-200'
            }`}
          >
            {demoMode ? 'Демо-режим' : 'Live-режим'}
          </button>
          <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-3 py-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-800 text-xs font-semibold text-slate-200">
              {user.initials}
            </div>
            <div className="text-left text-xs">
              <p className="font-semibold text-slate-200">{user.name}</p>
              <p className="text-slate-500">{user.role}</p>
            </div>
          </div>
        </div>
      </div>
      {status.error && (
        <div className="mt-4 rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-2 text-sm text-rose-200">
          {status.error}
        </div>
      )}
    </header>
  )
}
