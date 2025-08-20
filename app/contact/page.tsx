
'use client'
import Footer from '../components/Footer'

export default function Contact() {
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
        maxWidth: '1200px',
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
          Contact FLOBBI
        </h1>

        <p style={{
          color: '#fff',
          fontSize: '1.2rem',
          textAlign: 'center',
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px auto'
        }}>
          Get in touch with the FLOBBI team. We're here to help and answer any questions you might have.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '3rem',
          marginTop: '3rem'
        }}>
          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 2rem auto',
              color: '#000'
            }}>📧</div>
            <h3 style={{ color: '#00ffff', fontSize: '1.5rem', marginBottom: '1rem' }}>
              Email Us
            </h3>
            <p style={{ color: '#fff', marginBottom: '1.5rem' }}>
              Have questions? Drop us an email and we'll get back to you soon.
            </p>
            <a 
              href="mailto:support@flobbi.com"
              style={{
                color: '#00ffff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                border: '2px solid #00ffff',
                padding: '0.8rem 2rem',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#00ffff';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#00ffff';
              }}
            >
              support@flobbi.com
            </a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 2rem auto',
              color: '#000'
            }}>💬</div>
            <h3 style={{ color: '#00ffff', fontSize: '1.5rem', marginBottom: '1rem' }}>
              Join Our Telegram
            </h3>
            <p style={{ color: '#fff', marginBottom: '1.5rem' }}>
              Connect with our community and get real-time updates.
            </p>
            <a 
              href="https://t.me/flobbicommunity"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#00ffff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                border: '2px solid #00ffff',
                padding: '0.8rem 2rem',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#00ffff';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#00ffff';
              }}
            >
              Join Telegram
            </a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 2rem auto',
              color: '#000'
            }}>🐦</div>
            <h3 style={{ color: '#00ffff', fontSize: '1.5rem', marginBottom: '1rem' }}>
              Follow on Twitter
            </h3>
            <p style={{ color: '#fff', marginBottom: '1.5rem' }}>
              Stay updated with the latest FLOBBI news and announcements.
            </p>
            <a 
              href="https://twitter.com/flobbicoin"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#00ffff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                border: '2px solid #00ffff',
                padding: '0.8rem 2rem',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#00ffff';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#00ffff';
              }}
            >
              Follow Twitter
            </a>
          </div>

          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '20px',
            padding: '3rem',
            textAlign: 'center',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto 2rem auto',
              color: '#000'
            }}>💼</div>
            <h3 style={{ color: '#00ffff', fontSize: '1.5rem', marginBottom: '1rem' }}>
              Business Inquiries
            </h3>
            <p style={{ color: '#fff', marginBottom: '1.5rem' }}>
              Interested in partnerships or business opportunities?
            </p>
            <a 
              href="mailto:business@flobbi.com"
              style={{
                color: '#00ffff',
                textDecoration: 'none',
                fontSize: '1.1rem',
                border: '2px solid #00ffff',
                padding: '0.8rem 2rem',
                borderRadius: '25px',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#00ffff';
                e.currentTarget.style.color = '#000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#00ffff';
              }}
            >
              business@flobbi.com
            </a>
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
            💡 Need Help Getting Started?
          </h2>
          <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '2rem' }}>
            New to FLOBBI? Check out our comprehensive guide on how to buy and get started!
          </p>
          <a 
            href="/howtobuy"
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
            How to Buy FLOBBI
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
