
'use client'
import Footer from '../components/Footer'

export default function HallOfMemes() {
  const memeImages = [
    '/meme.ico',
    '/meme8.ico'
  ];

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
          textShadow: '0 0 20px #000000'
        }}>
          🏆 Hall of Memes 🏆
        </h1>

        <p style={{
          color: '#fff',
          fontSize: '1.2rem',
          textAlign: 'center',
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px auto'
        }}>
          Welcome to the legendary Hall of Memes! Here we showcase the most iconic FLOBBI memes
          created by our amazing Founder.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {memeImages.map((image, index) => (
            <div key={index} style={{
              background: 'rgba(0, 255, 255, 0.1)',
              border: '2px solid #00ffff',
              borderRadius: '15px',
              padding: '1.5rem',
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src={image}
                alt={`Flobbi Meme ${index + 1}`}
                style={{
                  width: '100%',
                  height: '300px',
                  objectFit: 'contain',
                  borderRadius: '10px'
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div style={{
                display: 'none',
                width: '100%',
                height: '300px',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00ffff',
                fontSize: '1.2rem',
                textAlign: 'center',
                flexDirection: 'column'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🖼️</div>
                <div>Flobbi Meme {index + 1}</div>
                <small style={{ color: '#ccc', fontSize: '0.9rem', marginTop: '0.5rem' }}>Image not available</small>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'rgba(0, 0, 0, 0.8)',
          border: '2px solid #00ffff',
          borderRadius: '20px',
          padding: '2rem',
          textAlign: 'center',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{ color: '#00ffff', fontSize: '1.5rem', marginBottom: '1rem' }}>
            🎨 Want More FLOBBI Memes?
          </h3>
          <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            For more FlobbiMemes Join Meme Library: https://t.me/flobbimemes
          </p>
          <a 
            href="https://t.me/flobbimemes"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              color: '#000',
              padding: '1rem 2.5rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0, 255, 255, 0.3)',
              display: 'inline-block'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 255, 255, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 255, 255, 0.3)';
            }}
          >
            Join Meme Library
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
