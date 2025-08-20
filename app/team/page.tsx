'use client'
import Footer from '../components/Footer'

export default function Team() {
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
          Team Executives
        </h1>

        <p style={{
          color: '#fff',
          fontSize: '1.2rem',
          textAlign: 'center',
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px auto'
        }}>
          Meet the dedicated team behind FLOBBI's success and innovation.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginTop: '3rem'
        }}>
          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000'
            }}>👑</div>
            <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>Flobbi Master</h3>
            <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>VEXEL_THE_OG_TRADER</p>
            <p style={{ color: '#000', fontSize: '0.9rem', marginBottom: '1rem' }}>Flobbi CEO TRADER OG FOUNDER</p>
            <a href="https://x.com/vexel_theog" target="_blank" rel="noopener noreferrer" style={{
              color: '#00ffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              border: '1px solid #00ffff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}>Connect</a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000'
            }}>🔒</div>
            <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>Flobbi Telegram Manager</h3>
            <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>Lareyyy</p>
            <p style={{ color: '#000', fontSize: '0.9rem', marginBottom: '1rem' }}>Handle Telegram Community</p>
            <a href="https://x.com/FineBoy_Larey" target="_blank" rel="noopener noreferrer" style={{
              color: '#00ffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              border: '1px solid #00ffff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}>Connect</a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000'
            }}>👥</div>
            <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>Community Manager</h3>
            <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>GOJO (not from jujutsu kaisen)</p>
            <p style={{ color: '#000', fontSize: '0.9rem', marginBottom: '1rem' }}>You can see him every where in Flobbi official chats helping people</p>
            <a href="https://x.com/Anonymeme10430" target="_blank" rel="noopener noreferrer" style={{
              color: '#00ffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              border: '1px solid #00ffff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}>Connect</a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '1px solid #00ffff',
            borderRadius: '10px',
            padding: '2rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              color: '#000'
            }}>🤝</div>
            <h3 style={{ color: '#00ffff', marginBottom: '0.5rem' }}>Mysterious Person 3.0</h3>
            <p style={{ color: '#fff', marginBottom: '0.5rem', fontWeight: 'bold' }}>DukeCM</p>
            <p style={{ color: '#000', fontSize: '0.9rem', marginBottom: '1rem' }}>Mysterious Person 3.0</p>
            <a href="yo" target="_blank" rel="noopener noreferrer" style={{
              color: '#00ffff',
              textDecoration: 'none',
              fontSize: '0.9rem',
              border: '1px solid #00ffff',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease'
            }}>i dont know</a>
          </div>
        </div>

        <div style={{
          marginTop: '4rem',
          textAlign: 'center',
          background: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '20px',
          padding: '3rem',
          border: '2px solid #00ffff'
        }}>
          <h2 style={{ color: '#00ffff', fontSize: '2rem', marginBottom: '1rem' }}>
            Join Our Team!
          </h2>
          <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '2rem' }}>
            We're always looking for talented individuals to join the FLOBBI revolution. 
            Check out our opportunities and become part of our amazing team!
          </p>
          <a 
            href="/contact"
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
              e.currentTarget.style.transform = '<strong></strong>0';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 255, 255, 0.3)';
            }}
          >
            Contact Us
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}