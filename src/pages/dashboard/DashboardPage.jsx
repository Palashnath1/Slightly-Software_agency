import { useState } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  LayoutDashboard, FolderKanban, BarChart2, MessageSquare,
  CreditCard, FolderOpen, Settings, Bell, ChevronRight,
  LogOut, Menu, X
} from 'lucide-react'
import ActiveProjects from '../../components/dashboard/ActiveProjects'
import PerformanceCharts from '../../components/dashboard/PerformanceCharts'
import Messaging from '../../components/dashboard/Messaging'
import Billing from '../../components/dashboard/Billing'
import FileDrive from '../../components/dashboard/FileDrive'

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
  { icon: FolderKanban, label: 'Active Projects', path: '/dashboard/projects' },
  { icon: BarChart2, label: 'Performance', path: '/dashboard/performance' },
  { icon: MessageSquare, label: 'Messages', path: '/dashboard/messages', badge: 3 },
  { icon: CreditCard, label: 'Billing', path: '/dashboard/billing' },
  { icon: FolderOpen, label: 'File Drive', path: '/dashboard/files' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
]

function DashboardOverview() {
  const quickStats = [
    { label: 'Active Projects', value: '4', change: '+2 this month', color: '#e91e8c' },
    { label: 'Pending Invoices', value: '$12,400', change: '3 invoices', color: '#7b2d9e' },
    { label: 'Avg. Traffic Growth', value: '+127%', change: 'vs last month', color: '#ffd700' },
    { label: 'Satisfaction Score', value: '98%', change: '↑ from 95%', color: '#4ade80' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold font-display text-white">Welcome back! 👋</h1>
        <p className="text-gray-400 text-sm mt-1">Here's a snapshot of your account activity.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="dashboard-card p-5"
          >
            <div className="text-3xl font-black font-display mb-1" style={{ color: stat.color }}>{stat.value}</div>
            <div className="text-sm text-white font-medium mb-1">{stat.label}</div>
            <div className="text-xs text-gray-500">{stat.change}</div>
          </motion.div>
        ))}
      </div>

      {/* Render sub-sections inline on overview */}
      <ActiveProjects />
      <PerformanceCharts />
    </div>
  )
}

export default function DashboardPage() {
  const location = useLocation()
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  const isActive = (path) => {
    if (path === '/dashboard') return location.pathname === '/dashboard'
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen flex" style={{ background: '#060010' }}>
      {/* Sidebar */}
      <>
        {/* Desktop Sidebar */}
        <motion.aside
          initial={{ x: -250, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden lg:flex flex-col w-64 flex-shrink-0 border-r border-white/5 py-6"
          style={{ background: 'rgba(13,1,24,0.95)', backdropFilter: 'blur(20px)', position: 'sticky', top: 0, height: '100vh' }}
        >
          {/* Logo */}
          <div className="px-6 mb-8">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #e91e8c, #7b2d9e)' }}>
                <span className="text-white font-black font-display">S</span>
              </div>
              <span className="text-white font-bold font-display">Slightly</span>
            </Link>
            <div className="mt-4 px-3 py-2 rounded-xl" style={{ background: 'rgba(233,30,140,0.08)', border: '1px solid rgba(233,30,140,0.12)' }}>
              <div className="text-xs text-gray-400">Client Portal</div>
              <div className="text-sm text-white font-medium">TechVision Inc.</div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 px-3 space-y-1">
            {sidebarItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`sidebar-link ${isActive(item.path) ? 'active' : ''}`}
              >
                <item.icon size={18} />
                <span className="flex-1">{item.label}</span>
                {item.badge && (
                  <span
                    className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #e91e8c, #7b2d9e)' }}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            ))}
          </nav>

          {/* Bottom */}
          <div className="px-3 mt-4 pt-4 border-t border-white/5">
            <Link to="/" className="sidebar-link">
              <LogOut size={18} />
              <span>Back to Website</span>
            </Link>
          </div>
        </motion.aside>

        {/* Mobile sidebar overlay */}
        <AnimatePresence>
          {mobileSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: 'rgba(0,0,0,0.7)' }}
              onClick={() => setMobileSidebarOpen(false)}
            />
          )}
        </AnimatePresence>
      </>

      {/* Main Area */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        {/* Top Bar */}
        <header
          className="flex items-center justify-between px-6 h-16 flex-shrink-0 border-b border-white/5 sticky top-0 z-30"
          style={{ background: 'rgba(6,0,16,0.95)', backdropFilter: 'blur(20px)' }}
        >
          <button className="lg:hidden text-gray-400 hover:text-white" onClick={() => setMobileSidebarOpen(true)}>
            <Menu size={22} />
          </button>
          <div className="hidden lg:flex items-center gap-2 text-xs text-gray-500">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-gray-300">Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-gray-400 hover:text-white transition-colors">
              <Bell size={18} />
              <span
                className="absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-xs text-white"
                style={{ background: '#e91e8c' }}
              >
                3
              </span>
            </button>
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
                style={{ background: 'linear-gradient(135deg, #e91e8c, #7b2d9e)' }}
              >
                T
              </div>
              <div className="hidden sm:block">
                <div className="text-xs text-white font-medium">TechVision</div>
                <div className="text-xs text-gray-500">Standard Plan</div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<DashboardOverview />} />
              <Route path="/projects" element={<ActiveProjects standalone />} />
              <Route path="/performance" element={<PerformanceCharts standalone />} />
              <Route path="/messages" element={<Messaging />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/files" element={<FileDrive />} />
              <Route path="/settings" element={
                <div className="text-center py-20 text-gray-500">Settings coming soon...</div>
              } />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </div>
  )
}
