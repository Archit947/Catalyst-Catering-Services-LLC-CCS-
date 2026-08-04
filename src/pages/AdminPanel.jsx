import React, { useState, useEffect } from 'react';

function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('jobs'); // 'jobs' or 'downloads'
  
  // Login State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Data State
  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [dataError, setDataError] = useState(null);

  // Form state for Jobs
  const [title, setTitle] = useState('');
  const [department, setDepartment] = useState('');
  const [location, setLocation] = useState('');
  const [type, setType] = useState('Full-Time');
  const [description, setDescription] = useState('');
  const [isSubmittingJob, setIsSubmittingJob] = useState(false);

  const API_BASE = import.meta.env.DEV ? 'http://localhost:8000/api' : '/api';
  const MEDIA_BASE = import.meta.env.DEV ? 'http://localhost:8000' : '';

  // Check if already logged in (via sessionStorage)
  useEffect(() => {
    const token = sessionStorage.getItem('adminToken');
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
      
      sessionStorage.setItem('adminToken', data.token);
      setIsAuthenticated(true);
    } catch (err) {
      setLoginError(err.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };

  const fetchData = async () => {
    setLoadingData(true);
    setDataError(null);
    try {
      if (activeTab === 'jobs') {
        const res = await fetch(`${API_BASE}/jobs.php`);
        if (!res.ok) throw new Error('Failed to fetch jobs');
        const data = await res.json();
        setJobs(data);
      } else if (activeTab === 'applications') {
        const res = await fetch(`${API_BASE}/applications.php`);
        if (!res.ok) throw new Error('Failed to fetch applications');
        const data = await res.json();
        setApplications(data);
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

  const handleAddJob = async (e) => {
    e.preventDefault();
    if (!title || !department || !location || !type || !description) {
      alert("Please fill in all fields.");
      return;
    }

    setIsSubmittingJob(true);
    try {
      const res = await fetch(`${API_BASE}/jobs.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, department, location, type, description })
      });
      if (!res.ok) throw new Error('Failed to add job');
      
      // Reset form
      setTitle(''); setDepartment(''); setLocation(''); setType('Full-Time'); setDescription('');
      
      // Refresh list
      fetchData();
      alert("Job added successfully!");
    } catch (err) {
      alert("Error adding job: " + err.message);
    } finally {
      setIsSubmittingJob(false);
    }
  };

  const handleDeleteJob = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job opening?")) return;

    try {
      const res = await fetch(`${API_BASE}/jobs.php`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });
      if (!res.ok) throw new Error('Failed to delete job');
      fetchData();
    } catch (err) {
      alert("Error deleting job: " + err.message);
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', fontFamily: 'var(--font-sans)' }}>
        <div style={{ width: '100%', maxWidth: '400px', backgroundColor: 'white', padding: '2.5rem', borderRadius: '16px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 style={{ color: 'var(--color-primary-dark)', fontSize: '1.8rem', fontWeight: 800, margin: '0 0 0.5rem 0' }}>Admin <span style={{ color: 'var(--color-accent)' }}>Login</span></h1>
            <p style={{ color: '#64748b', fontSize: '0.95rem', margin: 0 }}>Sign in to manage Catalyst.</p>
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
            CATALYST <span style={{ color: 'var(--color-accent)' }}>ADMIN</span>
          </h2>
        </div>
        <nav style={{ flex: 1, padding: '1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button 
            onClick={() => setActiveTab('jobs')}
            style={{ 
              background: activeTab === 'jobs' ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: 'none', color: activeTab === 'jobs' ? 'var(--color-accent)' : '#cbd5e1', 
              padding: '1rem 1.5rem', textAlign: 'left', cursor: 'pointer', fontSize: '1rem', fontWeight: 600,
              borderLeft: activeTab === 'jobs' ? '4px solid var(--color-accent)' : '4px solid transparent'
            }}
          >
            📋 Job Openings
          </button>
          <button 
            onClick={() => setActiveTab('applications')}
            style={{ 
              background: activeTab === 'applications' ? 'rgba(255,255,255,0.1)' : 'transparent',
              border: 'none', color: activeTab === 'applications' ? 'var(--color-accent)' : '#cbd5e1', 
              padding: '1rem 1.5rem', textAlign: 'left', cursor: 'pointer', fontSize: '1rem', fontWeight: 600,
              borderLeft: activeTab === 'applications' ? '4px solid var(--color-accent)' : '4px solid transparent'
            }}
          >
            📄 Job Applications
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
            {activeTab === 'jobs' ? 'Manage Job Openings' : 'Job Applications'}
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
            {/* Jobs View */}
            {activeTab === 'jobs' && (
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                <section style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', alignSelf: 'start' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>Add New Job</h2>
                  <form onSubmit={handleAddJob} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: '#334155' }}>Job Title</label>
                      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} placeholder="e.g. Head Chef" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: '#334155' }}>Department</label>
                      <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} placeholder="e.g. Culinary" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: '#334155' }}>Location</label>
                      <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none' }} placeholder="e.g. Dubai, UAE" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: '#334155' }}>Type</label>
                      <select value={type} onChange={(e) => setType(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', backgroundColor: 'white' }}>
                        <option value="Full-Time">Full-Time</option>
                        <option value="Part-Time">Part-Time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.4rem', color: '#334155' }}>Description</label>
                      <textarea value={description} onChange={(e) => setDescription(e.target.value)} required rows={4} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #cbd5e1', outline: 'none', resize: 'vertical' }}></textarea>
                    </div>
                    <button type="submit" disabled={isSubmittingJob} className="btn btn-primary" style={{ padding: '0.875rem', marginTop: '0.5rem', opacity: isSubmittingJob ? 0.7 : 1 }}>
                      {isSubmittingJob ? 'Adding...' : 'Add Job Opening'}
                    </button>
                  </form>
                </section>

                <section style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                  <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>Current Openings</h2>
                  {jobs.length === 0 ? (
                    <p style={{ color: '#64748b' }}>No active job openings.</p>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {jobs.map((job) => (
                        <div key={job.id} style={{ padding: '1.25rem', border: '1px solid #e2e8f0', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <div>
                            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
                              <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', backgroundColor: '#f1f5f9', color: '#475569', borderRadius: '4px', fontWeight: 600 }}>{job.department}</span>
                              <span style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', backgroundColor: '#fef3c7', color: '#92400e', borderRadius: '4px', fontWeight: 600 }}>{job.type}</span>
                            </div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-primary-dark)', margin: '0 0 0.25rem 0' }}>{job.title}</h3>
                            <p style={{ fontSize: '0.875rem', color: '#64748b', margin: '0 0 0.75rem 0' }}>📍 {job.location}</p>
                            <p style={{ fontSize: '0.9rem', color: '#334155', margin: 0 }}>{job.description}</p>
                          </div>
                          <button onClick={() => handleDeleteJob(job.id)} style={{ padding: '0.4rem 0.8rem', backgroundColor: '#fee2e2', color: '#b91c1c', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600 }}>
                            Delete
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              </div>
            )}

            {/* Applications View */}
            {activeTab === 'applications' && (
              <section style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '12px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                {applications.length === 0 ? (
                  <p style={{ color: '#64748b', textAlign: 'center', padding: '2rem 0' }}>No job applications received yet.</p>
                ) : (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                      <thead>
                        <tr style={{ backgroundColor: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                          <th style={{ padding: '1rem', color: '#334155', fontWeight: 600 }}>Applied For</th>
                          <th style={{ padding: '1rem', color: '#334155', fontWeight: 600 }}>Applicant</th>
                          <th style={{ padding: '1rem', color: '#334155', fontWeight: 600 }}>Contact Info</th>
                          <th style={{ padding: '1rem', color: '#334155', fontWeight: 600 }}>Date</th>
                          <th style={{ padding: '1rem', color: '#334155', fontWeight: 600 }}>Resume</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((app) => (
                          <tr key={app.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                            <td style={{ padding: '1rem', color: 'var(--color-primary-dark)', fontWeight: 700 }}>{app.job_title}</td>
                            <td style={{ padding: '1rem', color: '#334155', fontWeight: 500 }}>{app.name}</td>
                            <td style={{ padding: '1rem', color: '#475569', fontSize: '0.9rem' }}>
                              <a href={`mailto:${app.email}`} style={{ color: 'var(--color-primary)', textDecoration: 'none', display: 'block' }}>{app.email}</a>
                              <a href={`tel:${app.phone}`} style={{ color: '#64748b', textDecoration: 'none' }}>{app.phone}</a>
                            </td>
                            <td style={{ padding: '1rem', color: '#64748b', fontSize: '0.9rem' }}>
                              {new Date(app.applied_at).toLocaleDateString()}
                            </td>
                            <td style={{ padding: '1rem' }}>
                              <a 
                                href={`${MEDIA_BASE}/${app.cv_path}`} 
                                target="_blank" rel="noopener noreferrer"
                                style={{ padding: '0.4rem 0.8rem', backgroundColor: '#f1f5f9', color: 'var(--color-primary)', borderRadius: '6px', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, display: 'inline-block' }}
                              >
                                View CV
                              </a>
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

export default AdminPanel;
