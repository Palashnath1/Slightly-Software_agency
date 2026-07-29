import { useState } from 'react'
import { motion } from 'framer-motion'
import { Folder, FileText, Image, Video, Download, Search, Grid, List, FolderOpen } from 'lucide-react'

const folders = [
  { name: 'Brand Assets', files: 24, color: '#e91e8c', icon: Folder, updated: '2 days ago' },
  { name: 'Website Designs', files: 18, color: '#7b2d9e', icon: Folder, updated: '1 day ago' },
  { name: 'Content Library', files: 45, color: '#ffd700', icon: Folder, updated: '3 hours ago' },
  { name: 'SEO Reports', files: 12, color: '#4ade80', icon: Folder, updated: '1 week ago' },
]

const files = [
  { name: 'Brand_Guidelines_v3.pdf', type: 'pdf', size: '4.2 MB', date: '2025-07-20', icon: FileText, color: '#e91e8c' },
  { name: 'Homepage_Mockup_Final.png', type: 'image', size: '8.1 MB', date: '2025-07-19', icon: Image, color: '#7b2d9e' },
  { name: 'Logo_Pack_v2.zip', type: 'zip', size: '12.4 MB', date: '2025-07-18', icon: Folder, color: '#ffd700' },
  { name: 'SEO_Report_July.pdf', type: 'pdf', size: '1.8 MB', date: '2025-07-15', icon: FileText, color: '#4ade80' },
  { name: 'Brand_Video_Teaser.mp4', type: 'video', size: '34 MB', date: '2025-07-14', icon: Video, color: '#c2185b' },
  { name: 'Content_Calendar_Q3.xlsx', type: 'spreadsheet', size: '0.5 MB', date: '2025-07-10', icon: FileText, color: '#e91e8c' },
]

export default function FileDrive() {
  const [search, setSearch] = useState('')
  const [view, setView] = useState('grid')

  const filtered = files.filter((f) => f.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-display text-white">File Drive</h1>
        <p className="text-gray-400 text-sm mt-1">Access and download all your project deliverables.</p>
      </div>

      {/* Folders */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {folders.map((folder, i) => (
          <motion.div
            key={folder.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="dashboard-card p-4 cursor-pointer group"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform"
              style={{ background: `${folder.color}20` }}
            >
              <FolderOpen size={20} style={{ color: folder.color }} />
            </div>
            <div className="text-sm font-medium text-white truncate">{folder.name}</div>
            <div className="text-xs text-gray-500 mt-0.5">{folder.files} files · {folder.updated}</div>
          </motion.div>
        ))}
      </div>

      {/* Files Panel */}
      <div className="dashboard-card overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-white/5 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-xs">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search files..."
              className="w-full pl-9 pr-3 py-2 rounded-lg text-sm text-white placeholder-gray-500 outline-none"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            />
          </div>
          <div className="flex gap-1">
            {[
              { icon: Grid, val: 'grid' },
              { icon: List, val: 'list' },
            ].map(({ icon: Icon, val }) => (
              <button
                key={val}
                onClick={() => setView(val)}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                style={view === val
                  ? { background: 'linear-gradient(135deg, #e91e8c, #7b2d9e)', color: 'white' }
                  : { color: '#6b7280', background: 'rgba(255,255,255,0.04)' }
                }
              >
                <Icon size={14} />
              </button>
            ))}
          </div>
        </div>

        {/* Files */}
        <div className={`p-4 ${view === 'grid' ? 'grid grid-cols-2 md:grid-cols-3 gap-3' : 'space-y-2'}`}>
          {filtered.map((file, i) => (
            <motion.div
              key={file.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
              className={`group cursor-pointer transition-all duration-200 rounded-xl ${
                view === 'grid' ? 'p-4 border border-white/5 hover:border-vibrant-fuchsia/25' : 'flex items-center gap-4 p-3 hover:bg-white/3'
              }`}
              style={view === 'grid' ? { background: 'rgba(255,255,255,0.02)' } : {}}
            >
              <div
                className={`flex items-center justify-center rounded-xl ${view === 'grid' ? 'w-10 h-10 mb-3' : 'w-8 h-8 flex-shrink-0'}`}
                style={{ background: `${file.color}15` }}
              >
                <file.icon size={view === 'grid' ? 20 : 16} style={{ color: file.color }} />
              </div>
              <div className={view === 'grid' ? '' : 'flex-1 min-w-0'}>
                <div className={`text-white font-medium truncate ${view === 'grid' ? 'text-xs mb-1' : 'text-sm'}`}>{file.name}</div>
                <div className="text-xs text-gray-500">{file.size} · {file.date}</div>
              </div>
              <button className={`text-gray-500 hover:text-vibrant-fuchsia transition-colors ${view === 'grid' ? 'mt-2' : 'ml-auto'} opacity-0 group-hover:opacity-100`}>
                <Download size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
