
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FlobbiMeme',
  description: 'The FlobbiMeme Official Website',
  icons: {
    icon: '/flobbi.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="fixed-background" />
        <div id="page-transition" className="page-transition" />
        {children}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Space travel transition
            document.addEventListener('DOMContentLoaded', function() {
              const transition = document.getElementById('page-transition');
              const links = document.querySelectorAll('a[href^="/"]');
              
              links.forEach(link => {
                link.addEventListener('click', function(e) {
                  if (this.href !== window.location.href) {
                    e.preventDefault();
                    transition.classList.add('active');
                    setTimeout(() => {
                      window.location.href = this.href;
                    }, 400);
                  }
                });
              });
            });
          `
        }} />
      </body>
    </html>
  )
}
