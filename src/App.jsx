import { useEffect, useMemo, useState } from 'react'
import { demoOverview } from './data/demoData'
import { fetchOverview } from './api/client'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import Metrics from './components/Metrics'
import TaskBoard from './components/TaskBoard'
import TaskTable from './components/TaskTable'
import SprintTimeline from './components/SprintTimeline'
import ActivityFeed from './components/ActivityFeed'

const DEMO_DEFAULT = true

function App() {
  const [demoMode, setDemoMode] = useState(DEMO_DEFAULT)
  const [overview, setOverview] = useState(demoOverview)
  const [status, setStatus] = useState({ loading: false, error: null })

  const summary = useMemo(() => overview, [overview])

  useEffect(() => {
    if (demoMode) {
      setOverview(demoOverview)
      setStatus({ loading: false, error: null })
      return
    }

    const load = async () => {
      setStatus({ loading: true, error: null })
      try {
        const data = await fetchOverview()
        setOverview(data)
        setStatus({ loading: false, error: null })
      } catch (error) {
        setOverview(demoOverview)
        setStatus({
          loading: false,
          error: 'Не удалось подключиться к бэкенду. Показаны демо-данные.',
        })
      }
    }

    load()
  }, [demoMode])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex">
        <Sidebar workspace={summary.workspace} projects={summary.projects} />
        <div className="flex-1">
          <TopBar
            user={summary.user}
            demoMode={demoMode}
            onToggleDemo={() => setDemoMode((prev) => !prev)}
            status={status}
          />
          <main className="space-y-8 px-6 pb-10 pt-6">
            <section className="grid gap-4 lg:grid-cols-4">
              <Metrics metrics={summary.metrics} />
              <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-soft lg:col-span-2">
                <h2 className="text-lg font-semibold text-slate-100">
                  Прогресс квартала
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  План на 12 недель, фокус на продуктовые инициативы и
                  клиентскую поддержку.
                </p>
                <div className="mt-5 space-y-4">
                  {summary.quarterGoals.map((goal) => (
                    <div key={goal.id}>
                      <div className="flex items-center justify-between text-sm text-slate-200">
                        <span>{goal.title}</span>
                        <span className="text-slate-400">{goal.progress}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-800">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-brand-500 to-sky-400"
                          style={{ width: `${goal.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
              <TaskBoard columns={summary.board} />
              <SprintTimeline sprints={summary.sprints} />
            </section>

            <section className="grid gap-6 xl:grid-cols-[1.6fr_0.6fr]">
              <TaskTable tasks={summary.tasks} />
              <ActivityFeed activity={summary.activity} />
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
