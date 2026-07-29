import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer, Legend, Area, AreaChart
} from 'recharts'
import { TrendingUp, TrendingDown } from 'lucide-react'

const trafficData = [
  { month: 'Jan', organic: 4200, paid: 2800, direct: 1500 },
  { month: 'Feb', organic: 5100, paid: 3200, direct: 1800 },
  { month: 'Mar', organic: 5800, paid: 2900, direct: 2100 },
  { month: 'Apr', organic: 7200, paid: 4100, direct: 2400 },
  { month: 'May', organic: 8500, paid: 4800, direct: 2800 },
  { month: 'Jun', organic: 9800, paid: 5200, direct: 3100 },
  { month: 'Jul', organic: 11200, paid: 5800, direct: 3500 },
]

const conversionData = [
  { week: 'Wk 1', conversions: 24, leads: 68 },
  { week: 'Wk 2', conversions: 38, leads: 92 },
  { week: 'Wk 3', conversions: 31, leads: 84 },
  { week: 'Wk 4', conversions: 52, leads: 118 },
  { week: 'Wk 5', conversions: 44, leads: 105 },
  { week: 'Wk 6', conversions: 61, leads: 142 },
  { week: 'Wk 7', conversions: 58, leads: 136 },
  { week: 'Wk 8', conversions: 74, leads: 168 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="text-xs font-bold text-white mb-2">{label}</p>
        {payload.map((entry) => (
          <div key={entry.name} className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full" style={{ background: entry.color }} />
            <span className="text-gray-400">{entry.name}:</span>
            <span className="text-white font-semibold">{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    )
  }
  return null
}

const metrics = [
  { label: 'Organic Traffic', value: '11,200', change: '+32%', positive: true, color: '#e91e8c' },
  { label: 'Conversions', value: '74', change: '+27%', positive: true, color: '#7b2d9e' },
  { label: 'Avg. CPC', value: '$1.24', change: '-8%', positive: true, color: '#ffd700' },
  { label: 'Bounce Rate', value: '38%', change: '-5%', positive: true, color: '#4ade80' },
]

export default function PerformanceCharts({ standalone }) {
  const [activeTab, setActiveTab] = useState('traffic')

  return (
    <div>
      {standalone && (
        <div className="mb-6">
          <h1 className="text-2xl font-bold font-display text-white">Performance Analytics</h1>
          <p className="text-gray-400 text-sm mt-1">Real-time metrics across all your campaigns.</p>
        </div>
      )}
      {!standalone && (
        <h2 className="text-lg font-bold font-display text-white mb-4">Performance Analytics</h2>
      )}

      {/* Metric Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            className="dashboard-card p-4"
          >
            <div className="text-xl font-black font-display mb-0.5" style={{ color: m.color }}>{m.value}</div>
            <div className="text-xs text-gray-400 mb-1">{m.label}</div>
            <div className={`flex items-center gap-1 text-xs font-semibold ${m.positive ? 'text-green-400' : 'text-red-400'}`}>
              {m.positive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
              {m.change} vs last period
            </div>
          </motion.div>
        ))}
      </div>

      {/* Chart Tabs */}
      <div className="dashboard-card p-5">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold text-white text-sm">Campaign Analytics</h3>
          <div className="flex gap-2">
            {['traffic', 'conversions'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-200 ${
                  activeTab === tab
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                style={activeTab === tab ? { background: 'linear-gradient(90deg, #e91e8c, #7b2d9e)' } : {}}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ height: 280 }}
        >
          <ResponsiveContainer width="100%" height="100%">
            {activeTab === 'traffic' ? (
              <AreaChart data={trafficData}>
                <defs>
                  <linearGradient id="organicGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#e91e8c" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#e91e8c" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="paidGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7b2d9e" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#7b2d9e" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="month" tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '11px', color: '#9ca3af' }} />
                <Area type="monotone" dataKey="organic" stroke="#e91e8c" fill="url(#organicGrad)" strokeWidth={2} dot={false} />
                <Area type="monotone" dataKey="paid" stroke="#7b2d9e" fill="url(#paidGrad)" strokeWidth={2} dot={false} />
                <Area type="monotone" dataKey="direct" stroke="#ffd700" fill="none" strokeWidth={1.5} strokeDasharray="4 2" dot={false} />
              </AreaChart>
            ) : (
              <BarChart data={conversionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                <XAxis dataKey="week" tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#6b7280', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: '11px', color: '#9ca3af' }} />
                <Bar dataKey="conversions" fill="#e91e8c" radius={[4, 4, 0, 0]} />
                <Bar dataKey="leads" fill="#7b2d9e" radius={[4, 4, 0, 0]} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </motion.div>
      </div>
    </div>
  )
}
