"use client";
import { useState } from 'react';
import { Send, MoreVertical, Phone, Video } from 'lucide-react';

const MATCHES = [
    { id: 1, name: 'Priya Patel', lastMsg: 'Hi! I saw your profile...', time: '10:30 AM', active: true },
    { id: 2, name: 'Sneha Deshmukh', lastMsg: 'Thanks for the request!', time: 'Yesterday', active: false },
];

export default function MatchesPage() {
    const [selectedMatch, setSelectedMatch] = useState(MATCHES[0]);
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([
        { sender: 'them', text: 'Hi! I saw your profile and thought we might have things in common.' },
        { sender: 'me', text: 'Hello Priya! Thanks for reaching out. I liked your profile too.' },
        { sender: 'them', text: 'Are you currently living in Mumbai?' },
    ]);

    const handleSend = (e) => {
        e.preventDefault();
        if (!message.trim()) return;
        setChatHistory([...chatHistory, { sender: 'me', text: message }]);
        setMessage('');
    };

    return (
        <div className="container chat-page">
            <div className="chat-layout">
                {/* Sidebar */}
                <div className="matches-sidebar glass-panel">
                    <div className="sidebar-header">
                        <h3>Matches ({MATCHES.length})</h3>
                    </div>
                    <div className="matches-list">
                        {MATCHES.map(match => (
                            <div
                                key={match.id}
                                className={`match-item ${selectedMatch.id === match.id ? 'active' : ''}`}
                                onClick={() => setSelectedMatch(match)}
                            >
                                <div className="avatar">{match.name[0]}</div>
                                <div className="match-info">
                                    <h4>{match.name}</h4>
                                    <p>{match.lastMsg}</p>
                                </div>
                                <span className="time">{match.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Chat Area */}
                <div className="chat-area glass-panel">
                    <div className="chat-header">
                        <div className="header-info">
                            <div className="avatar small">{selectedMatch.name[0]}</div>
                            <div>
                                <h3>{selectedMatch.name}</h3>
                                <span className="status">{selectedMatch.active ? 'Online' : 'Offline'}</span>
                            </div>
                        </div>
                        <div className="header-actions">
                            <button className="icon-btn"><Phone size={20} /></button>
                            <button className="icon-btn"><Video size={20} /></button>
                            <button className="icon-btn"><MoreVertical size={20} /></button>
                        </div>
                    </div>

                    <div className="messages-container">
                        {chatHistory.map((msg, idx) => (
                            <div key={idx} className={`message ${msg.sender}`}>
                                <div className="bubble">{msg.text}</div>
                            </div>
                        ))}
                    </div>

                    <form className="chat-input" onSubmit={handleSend}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary"><Send size={18} /></button>
                    </form>
                </div>
            </div>

            <style jsx>{`
        .chat-page {
          padding-top: 2rem;
          padding-bottom: 2rem;
          height: calc(100vh - 80px);
        }
        .chat-layout {
          display: grid;
          grid-template-columns: 300px 1fr;
          gap: 1.5rem;
          height: 100%;
        }
        .glass-panel {
          background: white;
          border: 1px solid var(--border);
          border-radius: 1rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        /* Sidebar */
        .sidebar-header {
          padding: 1.5rem;
          border-bottom: 1px solid var(--border);
        }
        .matches-list {
          flex: 1;
          overflow-y: auto;
        }
        .match-item {
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: background 0.2s;
          border-bottom: 1px solid #f1f5f9;
        }
        .match-item:hover, .match-item.active {
          background: #f8fafc;
        }
        .avatar {
          width: 40px;
          height: 40px;
          background: var(--primary);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
        }
        .avatar.small { width: 36px; height: 36px; }
        .match-info h4 { font-size: 0.95rem; margin-bottom: 0.2rem; }
        .match-info p { font-size: 0.8rem; color: var(--text-muted); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 120px; }
        .time { font-size: 0.75rem; color: var(--text-muted); margin-left: auto; }

        /* Chat Area */
        .chat-header {
          padding: 1rem 1.5rem;
          border-bottom: 1px solid var(--border);
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: white;
        }
        .header-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .status {
          font-size: 0.8rem;
          color: #22c55e;
        }
        .header-actions {
          display: flex;
          gap: 0.5rem;
        }
        .icon-btn {
          background: none;
          border: none;
          padding: 0.5rem;
          color: var(--text-muted);
          border-radius: 50%;
        }
        .icon-btn:hover { background: #f1f5f9; color: var(--primary); }

        .messages-container {
          flex: 1;
          padding: 1.5rem;
          overflow-y: auto;
          background: #f8fafc;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .message {
          display: flex;
        }
        .message.me { justify-content: flex-end; }
        .message.them { justify-content: flex-start; }
        
        .bubble {
          max-width: 70%;
          padding: 0.8rem 1.2rem;
          border-radius: 1rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }
        .me .bubble {
          background: var(--primary);
          color: white;
          border-bottom-right-radius: 0.2rem;
        }
        .them .bubble {
          background: white;
          border: 1px solid var(--border);
          border-bottom-left-radius: 0.2rem;
        }

        .chat-input {
          padding: 1rem;
          background: white;
          border-top: 1px solid var(--border);
          display: flex;
          gap: 1rem;
        }
        .chat-input input {
          flex: 1;
          padding: 0.8rem 1.2rem;
          border: 1px solid var(--border);
          border-radius: 2rem;
          font-family: inherit;
        }
        .chat-input input:focus { outline: none; border-color: var(--primary); }

        @media (max-width: 768px) {
          .chat-layout { grid-template-columns: 1fr; }
          .matches-sidebar { display: none; } /* Hide sidebar on mobile for now */
        }
      `}</style>
        </div>
    );
}
