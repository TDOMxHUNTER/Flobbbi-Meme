
'use client'
import Footer from '../components/Footer'

export default function HowToBuy() {
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
          How to Buy FLOBBI
        </h1>

        <p style={{
          color: '#fff',
          fontSize: '1.2rem',
          textAlign: 'center',
          marginBottom: '40px',
          maxWidth: '800px',
          margin: '0 auto 40px auto'
        }}>
          Follow these simple steps to join the FLOBBI revolution and get your tokens today!
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2rem',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* Step 1 */}
          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '20px',
            padding: '2.5rem',
            backdropFilter: 'blur(10px)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '30px',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              color: '#000',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>1</div>
            <h3 style={{ color: '#00ffff', fontSize: '1.5rem', marginBottom: '1rem', marginTop: '1rem' }}>
              Set Up Your Wallet
            </h3>
            <p style={{ color: '#fff', lineHeight: '1.6', marginBottom: '1rem' }}>
              Download and install a compatible crypto wallet like MetaMask, Trust Wallet, or any Ethereum-compatible wallet.
              Make sure your wallet is properly secured with a strong password and backup phrase.
            </p>
            <a 
              href="https://metamask.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#00ffff',
                textDecoration: 'none',
                fontSize: '1rem',
                border: '1px solid #00ffff',
                padding: '0.5rem 1.5rem',
                borderRadius: '20px',
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
              Get MetaMask
            </a>
          </div>

          {/* Step 2 */}
          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '20px',
            padding: '2.5rem',
            backdropFilter: 'blur(10px)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '30px',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              color: '#000',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>2</div>
            <h3 style={{ color: '#00ffff', fontSize: '1.5rem', marginBottom: '1rem', marginTop: '1rem' }}>
              Get Some ETH
            </h3>
            <p style={{ color: '#fff', lineHeight: '1.6' }}>
              Purchase Ethereum (ETH) from a reputable exchange like Coinbase, Binance, or Kraken.
              Transfer the ETH to your wallet address. You'll need ETH to pay for gas fees and to swap for FLOBBI.
            </p>
          </div>

          {/* Step 3 */}
          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '20px',
            padding: '2.5rem',
            backdropFilter: 'blur(10px)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '30px',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              color: '#000',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>3</div>
            <h3 style={{ color: '#00ffff', fontSize: '1.5rem', marginBottom: '1rem', marginTop: '1rem' }}>
              Connect to Uniswap
            </h3>
            <p style={{ color: '#fff', lineHeight: '1.6', marginBottom: '1rem' }}>
              Go to Uniswap (app.uniswap.org) and connect your wallet. Make sure you're on the official Uniswap website
              to avoid scams. Once connected, you'll be able to swap your ETH for FLOBBI tokens.
            </p>
            <a 
              href="https://app.uniswap.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#00ffff',
                textDecoration: 'none',
                fontSize: '1rem',
                border: '1px solid #00ffff',
                padding: '0.5rem 1.5rem',
                borderRadius: '20px',
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
              Open Uniswap
            </a>
          </div>

          {/* Step 4 */}
          <div style={{
            background: 'rgba(0, 255, 255, 0.1)',
            border: '2px solid #00ffff',
            borderRadius: '20px',
            padding: '2.5rem',
            backdropFilter: 'blur(10px)',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '30px',
              background: 'linear-gradient(45deg, #00ffff, #0099cc)',
              color: '#000',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem',
              fontWeight: 'bold'
            }}>4</div>
            <h3 style={{ color: '#00ffff', fontSize: '1.5rem', marginBottom: '1rem', marginTop: '1rem' }}>
              Swap ETH for FLOBBI
            </h3>
            <p style={{ color: '#fff', lineHeight: '1.6', marginBottom: '1rem' }}>
              Use our contract address to find FLOBBI tokens on Uniswap. Enter the amount of ETH you want to swap,
              review the transaction details, and confirm the swap. Your FLOBBI tokens will appear in your wallet!
            </p>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: '1rem',
              borderRadius: '10px',
              border: '1px solid #00ffff',
              marginTop: '1rem'
            }}>
              <p style={{ color: '#00ffff', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Contract Address:</p>
              <p style={{ 
                color: '#fff', 
                fontSize: '0.8rem', 
                wordBreak: 'break-all',
                background: 'rgba(0, 255, 255, 0.1)',
                padding: '0.5rem',
                borderRadius: '5px'
              }}>
                0x1234567890123456789012345678901234567890
              </p>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div style={{
          marginTop: '3rem',
          background: 'rgba(255, 255, 0, 0.1)',
          border: '2px solid #ffff00',
          borderRadius: '20px',
          padding: '2rem',
          backdropFilter: 'blur(10px)'
        }}>
          <h3 style={{ color: '#ffff00', fontSize: '1.5rem', marginBottom: '1rem' }}>
            ⚠️ Important Security Tips
          </h3>
          <ul style={{ color: '#fff', lineHeight: '1.6', paddingLeft: '1.5rem' }}>
            <li>Always double-check contract addresses before swapping</li>
            <li>Start with a small amount for your first transaction</li>
            <li>Never share your private keys or seed phrase with anyone</li>
            <li>Be aware of gas fees during high network congestion</li>
            <li>Only use official links and verified contract addresses</li>
          </ul>
        </div>

        {/* Support Section */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center',
          background: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '20px',
          padding: '2.5rem',
          border: '2px solid #00ffff'
        }}>
          <h3 style={{ color: '#00ffff', fontSize: '1.8rem', marginBottom: '1rem' }}>
            Need Help?
          </h3>
          <p style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '2rem' }}>
            Our community is here to help! Join our Telegram group for support and updates.
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
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 255, 255, 0.3)';
            }}
          >
            Get Support
          </a>
        </div>
      </div>

      <Footer />
    </main>
  )
}
