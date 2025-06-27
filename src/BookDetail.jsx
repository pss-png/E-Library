import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function BookDetail({ allbook }) {
  let { id } = useParams();
  let navigate = useNavigate();
  
  let selectedbook = allbook.find(book => book.id === parseInt(id)) || 
                    allbook.find(book => book.id.toString() === id) || 
                    allbook.find(book => book.id == id);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    if (hasHalfStar) {
      stars.push('✨');
    }
    return stars.join('');
  };

  if (!selectedbook) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%)',
        color: 'white',
        fontFamily: 'Arial, sans-serif'
      }}>
        <div style={{ 
          textAlign: 'center',
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '3rem',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)'
        }}>
          <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>📚</div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Book not found</h2>
          <p style={{ fontSize: '1.2rem', opacity: '0.9' }}>The book you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/books')}
            style={{
              marginTop: '2rem',
              padding: '15px 30px',
              fontSize: '1.1rem',
              backgroundColor: '#ff6b6b',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              cursor: 'pointer',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#ff5252';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#ff6b6b';
              e.target.style.transform = 'scale(1)';
            }}
          >
            🏠 Back to Books
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 25%, #fecfef 50%, #a8edea 75%, #fed6e3 100%)',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        style={{
          position: 'fixed',
          top: '2rem',
          margin: '3rem',
          left: '1rem',
          backgroundColor: '#ff6b6b',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          padding: '15px 20px',
          fontSize: '1.1rem',
          cursor: 'pointer',
          fontWeight: 'bold',
          boxShadow: '0 8px 25px rgba(255,107,107,0.3)',
          transition: 'all 0.3s ease',
          zIndex: 1000
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = '#ff5252';
          e.target.style.transform = 'scale(1.1)';
          e.target.style.boxShadow = '0 12px 35px rgba(255,107,107,0.4)';
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor = '#ff6b6b';
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 8px 25px rgba(255,107,107,0.3)';
        }}
      >
        ← Back
      </button>

      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        paddingTop: '1rem'
      }}>
        {/* Main Content Card */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '25px',
          padding: '3rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative Background Elements */}
          <div style={{
            position: 'absolute',
            top: '-50px',
            right: '-50px',
            width: '200px',
            height: '200px',
            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
            borderRadius: '50%',
            opacity: '0.1'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-30px',
            left: '-30px',
            width: '150px',
            height: '150px',
            background: 'linear-gradient(45deg, #45b7d1, #96e6a1)',
            borderRadius: '50%',
            opacity: '0.1'
          }}></div>

          {/* Header Section */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'flex-start',
            marginBottom: '3rem',
            position: 'relative',
            zIndex: 1
          }}>
            {/* Book Cover */}
            <div style={{
              width: '200px',
              height: '300px',
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96e6a1)',
              borderRadius: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              color: 'white',
              textAlign: 'center',
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
              flexShrink: 0,
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)'
              }}></div>
              📖
            </div>

            {/* Book Info */}
            <div style={{ flex: 1 }}>
              <h1 style={{
                color: '#333',
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2'
              }}>
                {selectedbook.title}
              </h1>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <span style={{
                  color: '#666',
                  fontSize: '1.4rem',
                  fontWeight: '600'
                }}>
                  by {selectedbook.author}
                </span>
                <span style={{
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: 'bold'
                }}>
                  {selectedbook.genre}
                </span>
              </div>

              {/* Rating */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  backgroundColor: '#fff3cd',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  border: '2px solid #ffc107'
                }}>
                  <span style={{ fontSize: '1.2rem' }}>
                    {renderStars(selectedbook.rating)}
                  </span>
                  <span style={{
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    color: '#856404'
                  }}>
                    {selectedbook.rating}/5
                  </span>
                </div>
                <div style={{
                  backgroundColor: '#4ecdc4',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  fontWeight: 'bold'
                }}>
                  📅 {selectedbook.year}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}>
                <button style={{
                  background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(255,107,107,0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.boxShadow = '0 12px 35px rgba(255,107,107,0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 8px 25px rgba(255,107,107,0.3)';
                }}
                >
                  📖 Read Now
                </button>
                <button style={{
                  background: 'linear-gradient(45deg, #4ecdc4, #6fd5d2)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(78,205,196,0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.boxShadow = '0 12px 35px rgba(78,205,196,0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 8px 25px rgba(78,205,196,0.3)';
                }}
                >
                  💾 Add to Library
                </button>
                <button style={{
                  background: 'linear-gradient(45deg, #45b7d1, #6bc5e0)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(69,183,209,0.3)'
                }}
                onMouseOver={(e) => {
                  e.target.style.transform = 'translateY(-3px) scale(1.05)';
                  e.target.style.boxShadow = '0 12px 35px rgba(69,183,209,0.4)';
                }}
                onMouseOut={(e) => {
                  e.target.style.transform = 'translateY(0) scale(1)';
                  e.target.style.boxShadow = '0 8px 25px rgba(69,183,209,0.3)';
                }}
                >
                  💝 Share
                </button>
              </div>
            </div>
          </div>

          {/* Description Section */}
          <div style={{
            backgroundColor: '#f8f9ff',
            padding: '2.5rem',
            borderRadius: '20px',
            border: '3px solid transparent',
            background: 'linear-gradient(white, white) padding-box, linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1) border-box',
            position: 'relative',
            zIndex: 1
          }}>
            <h3 style={{
              color: '#333',
              fontSize: '1.8rem',
              fontWeight: 'bold',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              📝 About This Book
            </h3>
            <p style={{
              color: '#555',
              fontSize: '1.2rem',
              lineHeight: '1.8',
              margin: '0',
              textAlign: 'justify'
            }}>
              {selectedbook.description}
            </p>
          </div>

          {/* Stats Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginTop: '2rem',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 8px 25px rgba(255,107,107,0.2)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📊</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {selectedbook.rating}/5
              </div>
              <div style={{ opacity: '0.9' }}>Rating</div>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #4ecdc4, #6fd5d2)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 8px 25px rgba(78,205,196,0.2)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📅</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                {selectedbook.year}
              </div>
              <div style={{ opacity: '0.9' }}>Published</div>
            </div>
            <div style={{
              background: 'linear-gradient(45deg, #45b7d1, #6bc5e0)',
              color: 'white',
              padding: '1.5rem',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0 8px 25px rgba(69,183,209,0.2)'
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏷️</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                {selectedbook.genre}
              </div>
              <div style={{ opacity: '0.9' }}>Genre</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}