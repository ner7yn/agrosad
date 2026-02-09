const overviewSnapshot = {
  workspace: {
    name: 'AgroSad Studio',
    plan: 'Enterprise · Hybrid',
  },
  user: {
    name: 'Мария Коваленко',
    role: 'Product Lead',
    initials: 'МК',
  },
  metrics: [
    { id: 'm1', label: 'Активные проекты', value: '12', delta: '+2' },
    { id: 'm2', label: 'Задач в работе', value: '86', delta: '+12%' },
    { id: 'm3', label: 'SLA поддержки', value: '98%', delta: '+3%' },
    { id: 'm4', label: 'Выполнение OKR', value: '74%', delta: '+6%' },
  ],
  quarterGoals: [
    { id: 'q1', title: 'Запуск витрины партнеров', progress: 62 },
    { id: 'q2', title: 'Сократить время онбординга', progress: 45 },
    { id: 'q3', title: 'Автоматизация SLA', progress: 79 },
  ],
  projects: [
    { id: 'p1', name: 'Маркетплейс', status: 'В работе', owner: 'Ирина' },
    { id: 'p2', name: 'Служба заботы', status: 'На ревью', owner: 'Даниил' },
    { id: 'p3', name: 'Аналитика', status: 'Запланировано', owner: 'Юлия' },
  ],
  board: [
    {
      id: 'c1',
      title: 'Бэклог',
      total: 14,
      tasks: [
        {
          id: 't1',
          title: 'Перезапуск витрины тарифов',
          tags: ['Growth', 'UI'],
          assignee: 'АС',
          priority: 'medium',
        },
      ],
    },
    {
      id: 'c2',
      title: 'В работе',
      total: 9,
      tasks: [
        {
          id: 't3',
          title: 'Сценарии поддержки B2B',
          tags: ['Support'],
          assignee: 'МК',
          priority: 'low',
        },
      ],
    },
    {
      id: 'c3',
      title: 'На проверке',
      total: 6,
      tasks: [
        {
          id: 't6',
          title: 'UX для команд поддержки',
          tags: ['Design'],
          assignee: 'ЕА',
          priority: 'medium',
        },
      ],
    },
    {
      id: 'c4',
      title: 'Готово',
      total: 21,
      tasks: [
        {
          id: 't7',
          title: 'Витрина интеграций',
          tags: ['Release'],
          assignee: 'НС',
          priority: 'low',
        },
      ],
    },
  ],
  sprints: [
    {
      id: 's1',
      name: 'Sprint 24 · Интеграции',
      progress: 72,
      focus: 'CRM, 1C, вебхуки',
      dates: '14 — 27 окт',
    },
    {
      id: 's2',
      name: 'Sprint 25 · Аналитика',
      progress: 38,
      focus: 'LTV, churn, сегменты',
      dates: '28 окт — 10 ноя',
    },
  ],
  tasks: [
    {
      id: 'l1',
      title: 'Сценарий эскалации SLA',
      project: 'Служба заботы',
      assignee: 'Мария',
      status: 'В работе',
      priority: 'P1',
      due: 'Сегодня',
      tags: ['SLA', 'Support'],
    },
  ],
  activity: [
    {
      id: 'a1',
      message: 'Мария обновила OKR квартала и назначила владельцев.',
      time: '12 минут назад',
    },
  ],
}

module.exports = { overviewSnapshot }
