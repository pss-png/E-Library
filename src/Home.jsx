import React from 'react'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Hero Section */}
      <div style={{
        textAlign: 'center',
        color: 'white',
        marginBottom: '3rem'
      }}>
        <h1 style={{
          fontSize: '3.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          📚 Welcome to E-Library
        </h1>
        <p style={{
          fontSize: '1.3rem',
          marginBottom: '2rem',
          opacity: '0.9'
        }}>
          Discover thousands of books at your fingertips
        </p>
        <button style={{
          backgroundColor: '#ff6b6b',
          color: 'white',
          border: 'none',
          padding: '15px 30px',
          fontSize: '1.1rem',
          borderRadius: '25px',
          cursor: 'pointer',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          transition: 'transform 0.3s ease'
        }}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          Start Reading Now
        </button>
      </div>

      {/* Features Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
        marginBottom: '3rem'
      }}>
        <div style={{
          backgroundColor: '#4ecdc4',
          padding: '2rem',
          borderRadius: '15px',
          textAlign: 'center',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          color: 'white'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📖</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Vast Collection</h3>
          <p>Access over 10,000 books across all genres and categories</p>
        </div>

        <div style={{
          backgroundColor: '#45b7d1',
          padding: '2rem',
          borderRadius: '15px',
          textAlign: 'center',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          color: 'white'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Fast Access</h3>
          <p>Lightning-fast search and instant book downloads</p>
        </div>

        <div style={{
          backgroundColor: '#f7b731',
          padding: '2rem',
          borderRadius: '15px',
          textAlign: 'center',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
          color: 'white'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💎</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Premium Quality</h3>
          <p>High-quality digital books with excellent formatting</p>
        </div>
      </div>

      {/* Popular Categories */}
      <div style={{
        backgroundColor: 'rgba(255,255,255,0.9)',
        padding: '2rem',
        borderRadius: '15px',
        marginBottom: '3rem'
      }}>
        <h2 style={{
          textAlign: 'center',
          color: '#333',
          marginBottom: '2rem',
          fontSize: '2.5rem'
        }}>
          Popular Categories
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center'
        }}>
          {['Fiction', 'Science', 'History', 'Biography', 'Technology', 'Art'].map(category => (
            <span key={category} style={{
              backgroundColor: '#6c5ce7',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '20px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#a29bfe'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#6c5ce7'
              e.target.style.transform = 'translateY(0)'
            }}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '1rem',
        textAlign: 'center'
      }}>
        <div style={{
          backgroundColor: '#ff7675',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '10px'
        }}>
          <h3 style={{ fontSize: '2rem', margin: '0' }}>50K+</h3>
          <p style={{ margin: '0.5rem 0 0 0' }}>Happy Readers</p>
        </div>
        <div style={{
          backgroundColor: '#00b894',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '10px'
        }}>
          <h3 style={{ fontSize: '2rem', margin: '0' }}>15K+</h3>
          <p style={{ margin: '0.5rem 0 0 0' }}>Books Available</p>
        </div>
        <div style={{
          backgroundColor: '#fdcb6e',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '10px'
        }}>
          <h3 style={{ fontSize: '2rem', margin: '0' }}>99%</h3>
          <p style={{ margin: '0.5rem 0 0 0' }}>Satisfaction Rate</p>
        </div>
        <div style={{
          backgroundColor: '#e17055',
          color: 'white',
          padding: '1.5rem',
          borderRadius: '10px'
        }}>
          <h3 style={{ fontSize: '2rem', margin: '0' }}>24/7</h3>
          <p style={{ margin: '0.5rem 0 0 0' }}>Access Available</p>
        </div>
      </div>
      </div>
      
  )
}