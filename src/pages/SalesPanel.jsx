import React, { useState, useEffect } from 'react';

function SalesPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('downloads'); // 'downloads' or 'contact'
  
  // Login State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Data State
  const [downloads, setDownloads] = useState([]);
  const [contactMessages, setContactMessages] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [dataError, setDataError] = useState(null);

  const API_BASE = import.meta.env.DEV ? 'http://localhost:8000/api' : '/api';

  // Check if already logged in (via sessionStorage)
  useEffect(() => {
    const token = sessionStorage.getItem('salesToken');
    if (token) setIsAuthenticated(true);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError('');
    try {
      const res = await fetch(`${API_BASE}/login.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Login failed');
      
      if (data.role !== 'sales') {
          throw new Error('Access denied. Invalid role for this portal.');
      }
      
      sessionStorage.setItem('salesToken', data.token);
      setIsAuthenticated(true);
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('salesToken');
    setIsAuthenticated(false);
  };

  const fetchData = async () => {
    setLoadingData(true);
    setDataError(null);
    try {
      if (activeTab === 'downloads') {
        const res = await fetch(`${API_BASE}/downloads.php`);
        if (!res.ok) throw new Error('Failed to fetch downloads');
        const data = await res.json();
        setDownloads(data);
      } else if (activeTab === 'contact') {
        const res = await fetch(`${API_BASE}/contact.php`);
        if (!res.ok) throw new Error('Failed to fetch contact inquiries');
        const data = await res.json();
        setContactMessages(data);
      }
    } catch (err) {
      setDataError(err.message);
    } finally {
      setLoadingData(false);
    }
  };

  // Fetch data whenever the active tab changes or user logs in
  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [activeTab, isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', fontFamily: 'var(--font-sans)' }}>
        <div style={{ width: '100%', maxWidth: '400px', backgroundColor: 'white', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ color: 'var(--color-primary-dark)', fontSize: '1.8rem', fontWeight: 800, margin: '0 0 0.5rem 0' }}>Sales <span style={{ color: 'var(--color-accent)' }}>Portal</span></h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>Sign in to view leads and inquiries.</p>
          </div>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {loginError && (
              <div style={{ padding: '0.75rem', backgroundColor: '#fee2e2', color: '#b91c1c', borderRadius: '8px', fontSize: '0.9rem', textAlign: 'center' }}>
                {loginError}
              </div>
            )}
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} />
            </div>
            <button type="submit" disabled={isLoggingIn} className="btn btn-primary" style={{ padding: '0.9rem', marginTop: '0.5rem', opacity: isLoggingIn ? 0.7 : 1 }}>
              {isLoggingIn ? 'Authenticating...' : 'Sign In'}
            </button>
          </form>
          
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
             <button onClick={() => window.location.hash = ''} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', textDecoration: 'underline' }}>Return to public site</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', backgroundColor: '#f8fafc', fontFamily: 'var(--font-sans)' }}>
      {/* Sidebar */}
      <aside style={{ width: '250px', backgroundColor: 'var(--color-primary-dark)', color: 'white', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '2rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: 0, letterSpacing: '1px' }}>
            SALES <span style={{ color: 'var(--color-accent)' }}>PORTAL</span>
          </h2>
        </div>
        <nav style={{ flex: 1, padding: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button 
            onClick={() => setActiveTab('downloads')}
            style={{ 
              background: activeTab === 'downloads' ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: 'none', color: activeTab === 'downloads' ? 'var(--color-accent)' : '#cbd5e1', 
              padding: '1rem 1.5rem', textAlign: 'left', cursor: 'pointer', fontSize: '1rem', fontWeight: 600,
              borderLeft: activeTab === 'downloads' ? '4px solid var(--color-accent)' : '4px solid transparent'
            }}
          >
            📥 Profile Downloads
          </button>
          <button 
            onClick={() => setActiveTab('contact')}
            style={{ 
              background: activeTab === 'contact' ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: 'none', color: activeTab === 'contact' ? 'var(--color-accent)' : '#cbd5e1', 
              padding: '1rem 1.5rem', textAlign: 'left', cursor: 'pointer', fontSize: '1rem', fontWeight: 600,
              borderLeft: activeTab === 'contact' ? '4px solid var(--color-accent)' : '4px solid transparent'
            }}
          >
            ✉️ Contact Inquiries
          </button>
        </nav>
        <div style={{ padding: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <button onClick={handleLogout} style={{ width: '100%', padding: '0.75rem', backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 600 }}>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: 'var(--color-primary-dark)', fontSize: '2rem', fontWeight: 800, margin: 0 }}>
            {activeTab === 'downloads' ? 'Profile Downloads Log' : 'Contact Us Inquiries'}
          </h1>
          <button 
            onClick={() => window.location.hash = ''} 
            style={{ padding: '0.6rem 1.2rem', backgroundColor: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer', fontWeight: 600, color: 'var(--color-primary)' }}
          >
            View Live Site
          </button>
        </header>

        {loadingData ? (
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Loading data...</p>
        ) : dataError ? (
          <div style={{ padding: '1rem', backgroundColor: '#fee2e2', color: '#991b1b', borderRadius: '8px' }}>Error: {dataError}</div>
        ) : (
          <>
            {/* Downloads View */}
            {activeTab === 'downloads' && (
              <section style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                {downloads.length === 0 ? (
                  <p style={{ color: '#64748b', textAlign: 'center', padding: '2rem 0' }}>No profile downloads recorded yet.</p>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                          <th style={{ padding: '1rem', color: '#334155', fontWeight: 600 }}>Name</th>
                          <th style={{ padding: '1rem', color: '#334155', fontWeight: 600 }}>Email</th>
                          <th style={{ padding: '1rem', color: '#334155', fontWeight: 600 }}>Date Downloaded</th>
                        </tr>
                      </thead>
                      <tbody>
                        {downloads.map((dl) => (
                          <tr key={dl.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                            <td style={{ padding: '1rem', color: 'var(--color-primary-dark)', fontWeight: 500 }}>{dl.name}</td>
                            <td style={{ padding: '1rem', color: '#475569' }}>
                              <a href={`mailto:${dl.email}`} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{dl.email}</a>
                            </td>
                            <td style={{ padding: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
                              {new Date(dl.downloaded_at).toLocaleString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            )}

            {/* Contact Inquiries View */}
            {activeTab === 'contact' && (
              <section style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                {contactMessages.length === 0 ? (
                  <p style={{ color: '#64748b', textAlign: 'center', padding: '2rem 0' }}>No contact inquiries received yet.</p>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                          <th style={{ padding: '1rem', color: '#334155', fontWeight: 600 }}>Date</th>
                          <th style={{ padding: '1rem', color: '#334155', fontWeight: 600 }}>Contact Info</th>
                          <th style={{ padding: '1rem', color: '#334155', fontWeight: 600 }}>Company</th>
                          <th style={{ padding: '1rem', color: '#334155', fontWeight: 600 }}>Subject & Message</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contactMessages.map((msg) => (
                          <tr key={msg.id} style={{ borderBottom: '1px solid #e2e8f0', verticalAlign: 'top' }}>
                            <td style={{ padding: '1rem', color: '#64748b', fontSize: '0.9rem', width: '120px' }}>
                              {new Date(msg.submitted_at).toLocaleDateString()}
                            </td>
                            <td style={{ padding: '1rem', color: '#334155' }}>
                              <div style={{ fontWeight: 700, color: 'var(--color-primary-dark)' }}>{msg.name}</div>
                              <a href={`mailto:${msg.email}`} style={{ color: 'var(--color-primary)', textDecoration: 'none', display: 'block', fontSize: '0.9rem', marginTop: '0.2rem' }}>{msg.email}</a>
                              <a href={`tel:${msg.phone}`} style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.9rem' }}>{msg.phone}</a>
                            </td>
                            <td style={{ padding: '1rem', color: '#475569', fontWeight: 500 }}>
                              {msg.company || '-'}
                            </td>
                            <td style={{ padding: '1rem' }}>
                              <div style={{ fontWeight: 600, color: 'var(--color-primary-dark)', marginBottom: '0.4rem', fontSize: '1rem' }}>
                                {msg.subject}
                              </div>
                              <div style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5, backgroundColor: '#f8fafc', padding: '0.75rem', borderRadius: '6px', whiteSpace: 'pre-wrap' }}>
                                {msg.message}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default SalesPanel;
