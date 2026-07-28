import { motion } from 'framer-motion'
import { Download, CreditCard, CheckCircle, Clock, AlertCircle } from 'lucide-react'

const invoices = [
  { id: 'INV-2025-001', service: 'Web Development - Phase 1', amount: 4500, date: '2025-07-01', due: '2025-07-15', status: 'paid' },
  { id: 'INV-2025-002', service: 'SEO Monthly Retainer - July', amount: 1299, date: '2025-07-01', due: '2025-07-15', status: 'paid' },
  { id: 'INV-2025-003', service: 'Brand Identity Package', amount: 3800, date: '2025-07-15', due: '2025-07-30', status: 'pending' },
  { id: 'INV-2025-004', service: 'Content Marketing - July', amount: 2100, date: '2025-07-20', due: '2025-08-03', status: 'pending' },
  { id: 'INV-2025-005', service: 'Social Media Management - June', amount: 899, date: '2025-06-01', due: '2025-06-15', status: 'overdue' },
]

const statusConfig = {
  paid: { icon: CheckCircle, color: '#4ade80', label: 'Paid' },
  pending: { icon: Clock, color: '#ffd700', label: 'Pending' },
  overdue: { icon: AlertCircle, color: '#f87171', label: 'Overdue' },
}

const totalPaid = invoices.filter((i) => i.status === 'paid').reduce((a, b) => a + b.amount, 0)
const totalPending = invoices.filter((i) => i.status !== 'paid').reduce((a, b) => a + b.amount, 0)

export default function Billing() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-display text-white">Billing & Invoices</h1>
        <p className="text-gray-400 text-sm mt-1">Manage your invoices and payment history.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[
          { label: 'Total Paid (2025)', value: `$${totalPaid.toLocaleString()}`, color: '#4ade80', icon: CheckCircle },
          { label: 'Outstanding Balance', value: `$${totalPending.toLocaleString()}`, color: '#ffd700', icon: Clock },
          { label: 'Active Plan', value: 'Standard', color: '#e91e8c', icon: CreditCard },
        ].map((card, i) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="dashboard-card p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-gray-500">{card.label}</span>
              <card.icon size={16} style={{ color: card.color }} />
            </div>
            <div className="text-2xl font-black font-display" style={{ color: card.color }}>{card.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Invoices Table */}
      <div className="dashboard-card overflow-hidden">
        <div className="p-5 border-b border-white/5 flex items-center justify-between">
          <h3 className="font-semibold text-white text-sm">Invoice History</h3>
          <button className="text-xs text-vibrant-fuchsia hover:text-white transition-colors flex items-center gap-1">
            <Download size={12} /> Export All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                {['Invoice', 'Service', 'Amount', 'Date', 'Due', 'Status', ''].map((h) => (
                  <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {invoices.map((inv, i) => {
                const { icon: StatusIcon, color, label } = statusConfig[inv.status]
                return (
                  <motion.tr
                    key={inv.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="border-t border-white/5 hover:bg-white/2 transition-colors"
                    style={{ cursor: 'pointer' }}
                  >
                    <td className="px-5 py-4 text-xs text-gray-400 font-mono">{inv.id}</td>
                    <td className="px-5 py-4 text-sm text-gray-200">{inv.service}</td>
                    <td className="px-5 py-4 text-sm font-bold text-white">${inv.amount.toLocaleString()}</td>
                    <td className="px-5 py-4 text-xs text-gray-400">{inv.date}</td>
                    <td className="px-5 py-4 text-xs text-gray-400">{inv.due}</td>
                    <td className="px-5 py-4">
                      <span
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: `${color}15`, color }}
                      >
                        <StatusIcon size={10} /> {label}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <button className="text-gray-500 hover:text-vibrant-fuchsia transition-colors">
                        <Download size={14} />
                      </button>
                    </td>
                  </motion.tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment Method */}
      <div className="dashboard-card p-5 mt-4">
        <h3 className="font-semibold text-white text-sm mb-4">Payment Method</h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-8 rounded-lg flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #e91e8c, #7b2d9e)' }}
            >
              <CreditCard size={16} className="text-white" />
            </div>
            <div>
              <div className="text-sm text-white font-medium">•••• •••• •••• 4242</div>
              <div className="text-xs text-gray-500">Visa · Expires 09/27</div>
            </div>
          </div>
          <button className="text-xs text-vibrant-fuchsia hover:text-white transition-colors">Update</button>
        </div>
      </div>
    </div>
  )
}
