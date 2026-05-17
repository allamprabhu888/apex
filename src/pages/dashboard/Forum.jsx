import React, { useState, useEffect } from 'react';
import T from '../../styles/theme';

export default function Forum() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const fetchPosts = () => {
    fetch('http://localhost:5000/api/forum')
      .then(res => res.json())
      .then(data => {
        if(data.success) setPosts(data.posts);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('apex_user') || '{}');
    fetch('http://localhost:5000/api/forum', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author_name: user.name || 'Student', title: newPost.title, content: newPost.content })
    }).then(res => res.json()).then(data => {
      if(data.success) {
        setNewPost({ title: '', content: '' });
        setShowForm(false);
        fetchPosts();
      }
    });
  };

  return (
    <div className="fade-up">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 700, color: T.ink, marginBottom: 8 }}>Discussion Forum & Q&A</h1>
          <p style={{ color: T.ink2 }}>Post your doubts and get them resolved by faculty and peers.</p>
        </div>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "12px 24px", background: T.orange, color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer" }}>
          {showForm ? "Cancel" : "+ Ask a Doubt"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} style={{ background: "#fff", padding: 24, borderRadius: 12, border: `1px solid ${T.cream2}`, marginBottom: 24 }}>
          <input required placeholder="Doubt Title" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} style={{ width: "100%", padding: 12, borderRadius: 8, border: `1px solid ${T.cream2}`, marginBottom: 12 }} />
          <textarea required placeholder="Describe your doubt..." value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} style={{ width: "100%", padding: 12, borderRadius: 8, border: `1px solid ${T.cream2}`, marginBottom: 12, minHeight: 100 }} />
          <button type="submit" style={{ padding: "10px 20px", background: T.orange, color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, cursor: "pointer" }}>Post Doubt</button>
        </form>
      )}

      {/* Forum Posts */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {posts.length === 0 ? <p style={{ color: T.ink3 }}>No posts yet.</p> : posts.map((p, i) => (
          <div key={p.id || i} style={{ background: "#fff", padding: 24, borderRadius: 12, border: `1px solid ${T.cream2}` }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                 <div style={{ width: 32, height: 32, borderRadius: "50%", background: T.cream2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600 }}>{p.author_name?.[0] || '?'}</div>
                 <div>
                   <div style={{ fontSize: 14, fontWeight: 600, color: T.ink }}>{p.author_name}</div>
                   <div style={{ fontSize: 12, color: T.ink3 }}>{new Date(p.created_at).toLocaleDateString()}</div>
                 </div>
              </div>
            </div>
            
            <h3 style={{ fontSize: 18, fontWeight: 600, color: T.ink, marginBottom: 8 }}>{p.title}</h3>
            <p style={{ fontSize: 15, color: T.ink2, lineHeight: 1.5, marginBottom: 16 }}>{p.content}</p>
            
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <button style={{ background: "none", border: "none", fontSize: 14, color: T.orange, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6 }}>
                💬 Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
