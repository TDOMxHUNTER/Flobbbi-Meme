
'use client'
import dynamic from 'next/dynamic'

const RoadmapComponent = dynamic(() => import('../components/RoadmapComponent'), {
  ssr: false
})

const TokenomicsComponent = dynamic(() => import('../components/TokenomicsComponent'), {
  ssr: false
})

import Footer from '../components/Footer'

export default function Roadmap() {
  return (
    <main style={{ 
      position: 'relative', 
      width: '100vw', 
      minHeight: '100vh', 
      background: 'transparent', 
      display: 'block',
      overflowX: 'hidden',
      overflowY: 'auto',
      zIndex: 2,
    }}>
      {/* Back to Home Button */}
      <div style={{
        position: 'fixed',
        top: '20px',
        left: '20px',
        zIndex: 10,
      }}>
        <a 
          href="/"
          style={{
            background: 'rgba(0, 255, 255, 0.2)',
            border: '2px solid #00ffff',
            color: '#00ffff',
            padding: '12px 24px',
            borderRadius: '25px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)',
            display: 'inline-block'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#00ffff';
            e.currentTarget.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(0, 255, 255, 0.2)';
            e.currentTarget.style.color = '#00ffff';
          }}
        >
          ← Back to Home
        </a>
      </div>

      <div style={{
        paddingTop: '120px',
        paddingBottom: '40px',
        paddingLeft: '20px',
        paddingRight: '20px',
        position: 'relative',
        zIndex: 2
      }}>
        <h1 style={{
          color: '#00ffff',
          fontSize: '3rem',
          textAlign: 'center',
          marginBottom: '20px',
          textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
        }}>
          Roadmap & Tokenomics
        </h1>

        <p style={{
          color: '#fff',
          fontSize: '1.2rem',
          textAlign: 'center',
          marginBottom: '60px',
          maxWidth: '800px',
          margin: '0 auto 60px auto'
        }}>
          Discover our journey and the economic structure that powers the FLOBBI ecosystem.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(600px, 1fr))',
          gap: '4rem',
          maxWidth: '1400px',
          margin: '0 auto',
          alignItems: 'start'
        }}>
          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '25px',
            padding: '3rem',
            backdropFilter: 'blur(10px)',
            height: 'fit-content'
          }}>
            <h2 style={{
              color: '#00ffff',
              fontSize: '2.5rem',
              textAlign: 'center',
              marginBottom: '2rem',
              textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
            }}>
              🗺️ Roadmap
            </h2>
            <div className="scrollable-container" style={{
              maxHeight: '600px',
              overflowY: 'auto',
              paddingRight: '1rem'
            }}>
              <RoadmapComponent />
            </div>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '25px',
            padding: '3rem',
            backdropFilter: 'blur(10px)',
            height: 'fit-content'
          }}>
            <h2 style={{
              color: '#00ffff',
              fontSize: '2.5rem',
              textAlign: 'center',
              marginBottom: '2rem',
              textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
            }}>
              💰 Tokenomics
            </h2>
            <div className="scrollable-container" style={{
              maxHeight: '600px',
              overflowY: 'auto',
              paddingRight: '1rem'
            }}>
              <TokenomicsComponent />
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .scrollable-container::-webkit-scrollbar {
          width: 8px;
        }

        .scrollable-container::-webkit-scrollbar-track {
          background: rgba(0, 255, 255, 0.1);
          border-radius: 4px;
        }

        .scrollable-container::-webkit-scrollbar-thumb {
          background: #00ffff;
          border-radius: 4px;
        }

        .scrollable-container::-webkit-scrollbar-thumb:hover {
          background: #00cccc;
        }

        @media (max-width: 1200px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  )
}
