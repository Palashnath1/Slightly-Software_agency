import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Paperclip, Smile } from 'lucide-react'

const conversations = [
  {
    id: 1,
    name: 'Marcus W.',
    role: 'CTO / Dev Lead',
    emoji: '👨‍💻',
    lastMessage: 'The homepage redesign is looking fantastic!',
    time: '2m ago',
    unread: 2,
    color: '#e91e8c',
  },
  {
    id: 2,
    name: 'Priya A.',
    role: 'Creative Director',
    emoji: '👩‍🎨',
    lastMessage: 'Brand assets ready for your review 🎨',
    time: '1h ago',
    unread: 1,
    color: '#7b2d9e',
  },
  {
    id: 3,
    name: 'James O.',
    role: 'SEO Lead',
    emoji: '📈',
    lastMessage: 'Traffic up 32% this week! Great results.',
    time: '3h ago',
    unread: 0,
    color: '#ffd700',
  },
]

const mockMessages = {
  1: [
    { id: 1, sender: 'Marcus W.', text: 'Hey! Just pushed the latest homepage updates.', time: '10:30 AM', mine: false },
    { id: 2, sender: 'You', text: 'Looks amazing! Love the new hero section.', time: '10:32 AM', mine: true },
    { id: 3, sender: 'Marcus W.', text: 'The homepage redesign is looking fantastic!', time: '10:35 AM', mine: false },
    { id: 4, sender: 'Marcus W.', text: 'Should be ready for testing by Friday.', time: '10:35 AM', mine: false },
  ],
  2: [
    { id: 1, sender: 'Priya A.', text: 'Hi! The brand package is almost done.', time: '9:00 AM', mine: false },
    { id: 2, sender: 'You', text: "Can't wait to see it!", time: '9:05 AM', mine: true },
    { id: 3, sender: 'Priya A.', text: 'Brand assets ready for your review 🎨', time: '9:10 AM', mine: false },
  ],
  3: [
    { id: 1, sender: 'James O.', text: 'Monthly SEO report is in.', time: '8:00 AM', mine: false },
    { id: 2, sender: 'James O.', text: 'Traffic up 32% this week! Great results.', time: '8:01 AM', mine: false },
  ],
}

export default function Messaging() {
  const [activeConv, setActiveConv] = useState(1)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState(mockMessages)

  const handleSend = () => {
    if (!message.trim()) return
    setMessages((prev) => ({
      ...prev,
      [activeConv]: [
        ...prev[activeConv],
        { id: Date.now(), sender: 'You', text: message, time: 'Just now', mine: true },
      ],
    }))
    setMessage('')
  }

  const activeConvData = conversations.find((c) => c.id === activeConv)

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold font-display text-white">Messages</h1>
        <p className="text-gray-400 text-sm mt-1">Chat directly with your project managers.</p>
      </div>

      <div className="dashboard-card overflow-hidden" style={{ height: '560px', display: 'flex' }}>
        {/* Conversation List */}
        <div className="w-72 flex-shrink-0 border-r border-white/5 flex flex-col">
          <div className="p-4 border-b border-white/5">
            <h3 className="text-sm font-semibold text-white">Conversations</h3>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) => (
              <button
                key={conv.id}
                onClick={() => setActiveConv(conv.id)}
                className={`w-full flex items-start gap-3 p-4 text-left transition-all duration-200 border-b border-white/5 ${
                  activeConv === conv.id ? 'bg-vibrant-fuchsia/8' : 'hover:bg-white/3'
                }`}
                style={activeConv === conv.id ? { background: 'rgba(233,30,140,0.08)' } : {}}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0"
                  style={{ background: `${conv.color}20` }}
                >
                  {conv.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-white truncate">{conv.name}</span>
                    <span className="text-xs text-gray-500 flex-shrink-0 ml-2">{conv.time}</span>
                  </div>
                  <div className="text-xs text-gray-500 mb-0.5">{conv.role}</div>
                  <div className="text-xs text-gray-400 truncate">{conv.lastMessage}</div>
                </div>
                {conv.unread > 0 && (
                  <span
                    className="w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0 mt-1"
                    style={{ background: conv.color }}
                  >
                    {conv.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-white/5" style={{ background: 'rgba(255,255,255,0.02)' }}>
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: `${activeConvData.color}20` }}
            >
              {activeConvData.emoji}
            </div>
            <div>
              <div className="text-sm font-semibold text-white">{activeConvData.name}</div>
              <div className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {(messages[activeConv] || []).map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.mine ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    msg.mine
                      ? 'text-white rounded-br-sm'
                      : 'text-gray-200 rounded-bl-sm'
                  }`}
                  style={msg.mine
                    ? { background: 'linear-gradient(135deg, #e91e8c, #7b2d9e)' }
                    : { background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }
                  }
                >
                  <p>{msg.text}</p>
                  <p className={`text-xs mt-1 ${msg.mine ? 'text-pink-200' : 'text-gray-500'}`}>{msg.time}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/5">
            <div
              className="flex items-center gap-3 rounded-xl px-4 py-2"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <button className="text-gray-500 hover:text-gray-300 transition-colors">
                <Paperclip size={16} />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
              />
              <button className="text-gray-500 hover:text-gray-300 transition-colors">
                <Smile size={16} />
              </button>
              <button
                onClick={handleSend}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white transition-all hover:opacity-80"
                style={{ background: 'linear-gradient(135deg, #e91e8c, #7b2d9e)' }}
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
