import { motion } from 'framer-motion'
import { CheckCircle, Clock, AlertCircle, ChevronRight } from 'lucide-react'

const projects = [
  {
    id: 1,
    name: 'TechVision Website Redesign',
    service: 'Web Development',
    progress: 75,
    status: 'in-progress',
    deadline: '2025-08-15',
    manager: 'Marcus W.',
    color: '#e91e8c',
    milestones: [
      { label: 'Discovery', done: true },
      { label: 'Design', done: true },
      { label: 'Development', done: false, current: true },
      { label: 'Testing', done: false },
      { label: 'Launch', done: false },
    ],
  },
  {
    id: 2,
    name: 'Q3 SEO Campaign',
    service: 'SEO Optimization',
    progress: 45,
    status: 'in-progress',
    deadline: '2025-09-30',
    manager: 'James O.',
    color: '#7b2d9e',
    milestones: [
      { label: 'Audit', done: true },
      { label: 'Keywords', done: true },
      { label: 'On-Page', done: false, current: true },
      { label: 'Link Build', done: false },
      { label: 'Report', done: false },
    ],
  },
  {
    id: 3,
    name: 'Brand Identity Package',
    service: 'Branding',
    progress: 90,
    status: 'review',
    deadline: '2025-07-30',
    manager: 'Priya A.',
    color: '#ffd700',
    milestones: [
      { label: 'Brief', done: true },
      { label: 'Concepts', done: true },
      { label: 'Refinement', done: true },
      { label: 'Finals', done: true, current: true },
      { label: 'Delivery', done: false },
    ],
  },
]

const statusConfig = {
  'in-progress': { icon: Clock, color: '#e91e8c', label: 'In Progress' },
  'review': { icon: AlertCircle, color: '#ffd700', label: 'In Review' },
  'complete': { icon: CheckCircle, color: '#4ade80', label: 'Complete' },
}

export default function ActiveProjects({ standalone }) {
  return (
    <div className={standalone ? '' : ''}>
      {standalone && (
        <div className="mb-6">
          <h1 className="text-2xl font-bold font-display text-white">Active Projects</h1>
          <p className="text-gray-400 text-sm mt-1">Track progress across all your running campaigns.</p>
        </div>
      )}
      {!standalone && (
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold font-display text-white">Active Projects</h2>
          <a href="/dashboard/projects" className="text-xs text-vibrant-fuchsia hover:text-white transition-colors flex items-center gap-1">
            View All <ChevronRight size={12} />
          </a>
        </div>
      )}

      <div className="space-y-4">
        {projects.map((project, i) => {
          const StatusIcon = statusConfig[project.status].icon
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="dashboard-card p-5"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-white text-sm">{project.name}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-xs text-gray-500">{project.service}</span>
                    <span className="text-xs text-gray-500">· {project.manager}</span>
                    <span className="text-xs text-gray-500">· Due {project.deadline}</span>
                  </div>
                </div>
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: `${statusConfig[project.status].color}15`,
                    color: statusConfig[project.status].color,
                  }}
                >
                  <StatusIcon size={10} />
                  {statusConfig[project.status].label}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="text-xs text-gray-500">Overall Progress</span>
                  <span className="text-xs font-bold" style={{ color: project.color }}>{project.progress}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${project.color}, rgba(123,45,158,0.8))` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  />
                </div>
              </div>

              {/* Milestones (Gantt-style) */}
              <div className="flex items-center gap-2">
                {project.milestones.map((milestone, mi) => (
                  <div key={mi} className="flex-1 relative">
                    <div
                      className="h-1.5 rounded-full mb-1.5 transition-all duration-300"
                      style={{
                        background: milestone.done
                          ? project.color
                          : milestone.current
                          ? `${project.color}50`
                          : 'rgba(255,255,255,0.08)',
                      }}
                    />
                    <div
                      className="text-center text-xs truncate"
                      style={{ color: milestone.done ? 'rgba(255,255,255,0.7)' : milestone.current ? project.color : 'rgba(255,255,255,0.2)', fontSize: '0.6rem' }}
                    >
                      {milestone.label}
                    </div>
                    {milestone.current && (
                      <div
                        className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full border-2 border-deep-aubergine"
                        style={{ background: project.color }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
