'use client'
import dynamic from 'next/dynamic'

const Footer = dynamic(() => import('./components/Footer'), {
 ssr: false
})


export default function Home() {
  const navigationItems = [
    {
      title: 'ABOUT',
      href: '/about',
      icon: '📖',
      description: 'Learn about FLOBBI and our mission to revolutionize meme coins'
    },
    {
      title: 'ROADMAP & TOKENOMICS',
      href: '/roadmap&tokenomics',
      icon: '🗺️',
      description: 'Explore our roadmap and tokenomics structure'
    },
    {
      title: 'HOW TO BUY',
      href: '/howtobuy',
      icon: '💰',
      description: 'Step-by-step guide to purchase FLOBBI tokens'
    },
    {
      title: 'CONTACT',
      href: '/contact',
      icon: '📞',
      description: 'Get in touch with the FLOBBI team'
    },
    {
      title: 'TEAM EXECUTIVES',
      href: '/team',
      icon: '👥',
      description: 'Meet the amazing team behind FLOBBI'
    },
    {
      title: 'HALL OF MEMES',
      href: '/hallofmemes',
      icon: '🏆',
      description: 'Discover the legendary FLOBBI memes'
    }
  ];

  return (
    <main style={{
      position: 'relative',
      width: '100%',
      background: 'transparent',
      overflowX: 'hidden',
      zIndex: 2,
    }}>
      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(6, 0, 16, 0.8) 100%)',
        padding: '80px 20px',
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(/image.ico)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2,
          zIndex: 1,
          backgroundAttachment: 'fixed'
        }} />

        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '1200px',
          width: '100%'
        }}>
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 8rem)',
            fontWeight: '900',
            color: '#00ffff',
            marginBottom: '2rem',
            textShadow: '0 0 30px rgba(0, 255, 255, 0.5)',
            lineHeight: '1.1'
          }}>
            FLOBBI
          </h1>

          <p style={{
            fontSize: 'clamp(1.2rem, 3vw, 2rem)',
            color: '#fff',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem auto',
            lineHeight: '1.6'
          }}>
            The Future of Meme Coins is Here
          </p>

          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem'
          }}>
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
              Buy FLOBBI
            </a>

            <a 
              href="/about" 
              style={{
                border: '2px solid #00ffff',
                color: '#00ffff',
                background: 'transparent',
                padding: '1rem 2.5rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 'bold',
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
              Learn More
            </a>
          </div>

          {/* Stats Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{
              background: 'rgba(0, 255, 255, 0.1)',
              border: '1px solid #00ffff',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ color: '#00ffff', fontSize: '2rem', marginBottom: '0.5rem' }}>🚀</h3>
              <p style={{ color: '#fff', fontSize: '1.1rem' }}>Innovative</p>
            </div>

            <div style={{
              background: 'rgba(0, 255, 255, 0.1)',
              border: '1px solid #00ffff',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ color: '#00ffff', fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</h3>
              <p style={{ color: '#fff', fontSize: '1.1rem' }}>Fast</p>
            </div>

            <div style={{
              background: 'rgba(0, 255, 255, 0.1)',
              border: '1px solid #00ffff',
              borderRadius: '20px',
              padding: '2rem',
              textAlign: 'center',
              backdropFilter: 'blur(10px)'
            }}>
              <h3 style={{ color: '#00ffff', fontSize: '2rem', marginBottom: '0.5rem' }}>🌟</h3>
              <p style={{ color: '#fff', fontSize: '1.1rem' }}>Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section style={{
        padding: '100px 20px',
        background: 'rgba(6, 0, 16, 0.8)',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            color: '#00ffff',
            marginBottom: '3rem',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
          }}>
            Explore FLOBBI
          </h2>

          <div className="nav-boxes">
            {navigationItems.map((item, index) => (
              <a 
                key={index}
                href={item.href}
                className="nav-box"
                style={{
                  background: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid #00ffff',
                  borderRadius: '25px',
                  padding: '3rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textDecoration: 'none',
                  minWidth: '280px',
                  flexGrow: 1
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '1rem'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ color: '#00ffff', fontSize: '1.5rem', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ color: '#fff', lineHeight: '1.6' }}>{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(6, 0, 16, 0.9) 100%)',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            color: '#00ffff',
            marginBottom: '2rem',
            textShadow: '0 0 20px rgba(0, 255, 255, 0.3)'
          }}>
            Ready to Join the FLOBBI Revolution?
          </h2>

          <p style={{
            fontSize: '1.2rem',
            color: '#fff',
            marginBottom: '3rem',
            lineHeight: '1.6'
          }}>
            Be part of the next generation of meme coins. Join our community and start your FLOBBI journey today.
          </p>

          <div style={{
            display: 'flex',
            gap: '2rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
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

            <a 
              href="/hallofmemes" 
              style={{
                border: '2px solid #00ffff',
                color: '#00ffff',
                background: 'transparent',
                padding: '1.2rem 3rem',
                borderRadius: '50px',
                textDecoration: 'none',
                fontSize: '1.2rem',
                fontWeight: 'bold',
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
              Hall of Memes
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}