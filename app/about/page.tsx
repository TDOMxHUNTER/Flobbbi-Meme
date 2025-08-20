
'use client'
import Footer from '../components/Footer'

export default function About() {
  return (
    <main style={{
      position: 'relative',
      width: '100vw',
      minHeight: '100vh',
      background: 'transparent',
      display: 'flex',
      flexDirection: 'column',
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
        flex: 1,
        padding: '120px 20px 40px 20px',
        position: 'relative',
        zIndex: 2,
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%'
      }}>
        <h1 style={{
          color: '#00ffff',
          fontSize: '3rem',
          textAlign: 'center',
          marginBottom: '20px',
          textShadow: '0 0 20px rgba(0, 255, 255, 0.5)'
        }}>
          About FLOBBI
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '3rem',
          marginTop: '4rem'
        }}>
          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '20px',
            padding: '3rem',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{ color: '#00ffff', fontSize: '2rem', marginBottom: '1.5rem' }}>
              🚀 Our Mission
            </h2>
            <p style={{ color: '#fff', lineHeight: '1.6', fontSize: '1.1rem' }}>
              FLOBBI is revolutionizing the meme coin space by combining cutting-edge blockchain technology 
              with community-driven innovation. We're not just another meme coin – we're building the 
              future of decentralized finance with a touch of humor and endless possibilities.
            </p>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '20px',
            padding: '3rem',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{ color: '#00ffff', fontSize: '2rem', marginBottom: '1.5rem' }}>
              🌟 What Makes Us Special
            </h2>
            <ul style={{ color: '#fff', lineHeight: '1.8', fontSize: '1.1rem', listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '1rem' }}>✅ Community-first approach</li>
              <li style={{ marginBottom: '1rem' }}>✅ Transparent tokenomics</li>
              <li style={{ marginBottom: '1rem' }}>✅ Innovative DeFi features</li>
              <li style={{ marginBottom: '1rem' }}>✅ Strong development team</li>
              <li style={{ marginBottom: '1rem' }}>✅ Regular community events</li>
            </ul>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '20px',
            padding: '3rem',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{ color: '#00ffff', fontSize: '2rem', marginBottom: '1.5rem' }}>
              💎 The FLOBBI Ecosystem
            </h2>
            <p style={{ color: '#fff', lineHeight: '1.6', fontSize: '1.1rem' }}>
              Our ecosystem includes staking rewards, NFT collections, gaming integrations, 
              and a vibrant community of meme creators. FLOBBI holders enjoy exclusive benefits 
              and governance rights in shaping the future of our platform.
            </p>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '20px',
            padding: '3rem',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{ color: '#00ffff', fontSize: '2rem', marginBottom: '1.5rem' }}>
              🎯 Our Vision
            </h2>
            <p style={{ color: '#fff', lineHeight: '1.6', fontSize: '1.1rem' }}>
              To become the leading meme coin that bridges traditional finance with decentralized 
              innovation, creating value for our community while maintaining the fun and 
              engaging spirit that defines the meme coin culture.
            </p>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '4rem',
          padding: '3rem',
          background: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '25px',
          border: '2px solid #00ffff'
        }}>
          <h2 style={{ color: '#00ffff', fontSize: '2.5rem', marginBottom: '2rem' }}>
            Join the FLOBBI Revolution!
          </h2>
          <p style={{ color: '#fff', fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.6' }}>
            Be part of something bigger. Join our community and help shape the future of FLOBBI.
          </p>
          <a 
            href="/howtobuy"
            style={{
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              color: '#000',
              padding: '1.2rem 3rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 255, 255, 0.3)',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 255, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 255, 255, 0.3)';
            }}
          >
            Get FLOBBI Now
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
