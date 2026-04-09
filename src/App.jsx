import React from 'react'

function App() {
  return (
    <>
      <div className="background-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="app-container">
        <div className="hero-glass">
          <h1>Welcome to the Future</h1>
          <p className="subtitle">
            Your Vite + React application is ready. Experience breathtaking performance 
            with a premium aesthetic right out of the box.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-desc">Powered by Vite for hot module replacement in milliseconds.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3 className="feature-title">Premium Design</h3>
              <p className="feature-desc">Glassmorphism, dynamic blobs, and aesthetic gradients built-in.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Deploy Ready</h3>
              <p className="feature-desc">Configured for seamless deployment on Vercel.</p>
            </div>
          </div>
          
          <button className="cta-button" onClick={() => window.open('https://vercel.com/new', '_blank')}>
            Deploy to Vercel
          </button>
        </div>
      </div>
    </>
  )
}

export default App
