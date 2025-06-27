import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Book({allbook}) {
  let navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");


  const genres = ["All", ...new Set(allbook.map(b => b.genre))];

  const filteredBooks = allbook.filter(b => {
    const matchesSearch = b.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         b.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === "All" || b.genre === selectedGenre;
    return matchesSearch && matchesGenre;
  });

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

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Header Section */}
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          📚 Our Book Collection
        </h1>
        <p style={{
          fontSize: '1.2rem',
          opacity: '0.9',
          marginBottom: '2rem'
        }}>
          Discover amazing stories from the world's greatest authors
        </p>
        
        {/* Search and Filter Section */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <input
            type="text"
            placeholder="🔍 Search books or authors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: '12px 20px',
              fontSize: '1rem',
              borderRadius: '25px',
              border: 'none',
              minWidth: '300px',
              outline: 'none',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
            }}
          />
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            style={{
              padding: '12px 20px',
              fontSize: '1rem',
              borderRadius: '25px',
              border: 'none',
              outline: 'none',
              backgroundColor: '#4ecdc4',
              color: 'white',
              cursor: 'pointer'
            }}
          >
            {genres.map(genre => (
              <option key={genre} value={genre} style={{ color: 'black' }}>
                {genre}
              </option>
            ))}
          </select>
        </div>
        
        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap'
        }}>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            padding: '1rem 2rem',
            borderRadius: '20px'
          }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {filteredBooks.length}
            </span>
            <p style={{ margin: '0.5rem 0 0 0' }}>Books Found</p>
          </div>
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            padding: '1rem 2rem',
            borderRadius: '20px'
          }}>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {genres.length - 1}
            </span>
            <p style={{ margin: '0.5rem 0 0 0' }}>Genres</p>
          </div>
        </div>
      </div>

      {/* Books Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '2rem'
      }}>
        {filteredBooks.map((b) => (
          <div key={b.id} style={{
            backgroundColor: 'white',
            borderRadius: '15px',
            padding: '1.5rem',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 12px 35px rgba(0,0,0,0.2)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          }}
          >
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              alignItems: 'flex-start'
            }}>
              {/* Book Cover Placeholder */}
              <div style={{
                width: '100px',
                height: '150px',
                backgroundColor: '#f0f0f0',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                flexShrink: 0,
                background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                color: 'white',
                textAlign: 'center'
              }}>
                📖
              </div>
              
              {/* Book Details */}
              <div style={{ flex: 1 }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.5rem'
                }}>
                  <h3 style={{
                    color: '#333',
                    fontSize: '1.3rem',
                    fontWeight: 'bold',
                    margin: '0',
                    lineHeight: '1.3'
                  }}>
                    {b.title}
                  </h3>
                  <span style={{
                    backgroundColor: '#4ecdc4',
                    color: 'white',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    marginLeft: '1rem'
                  }}>
                    {b.genre}
                  </span>
                </div>
                
                <p style={{
                  color: '#666',
                  fontSize: '1rem',
                  fontWeight: '600',
                  margin: '0.5rem 0'
                }}>
                  by {b.author}
                </p>
                
                <p style={{
                  color: '#777',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  margin: '1rem 0'
                }}>
                  {b.description}
                </p>
                
               
                {/* Action Buttons */}
                <div style={{
                  display: 'flex',
                  gap: '1rem',
                  marginTop: '1.5rem'
                }}>
                  <button onClick={() => navigate(`/BookDetail/${b.id}`)} style={{
                    backgroundColor: '#ff6b6b',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                    flex: 1
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
                    📖 Read Now
                  </button>
                  <button onClick={()=>navigate(`/BookDetail/${b.id}`)} style={{
                    backgroundColor: '#45b7d1',
                    color: 'white',
                    border: 'none',
                    padding: '10px 20px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                    flex: 1
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#3498db';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#45b7d1';
                    e.target.style.transform = 'scale(1)';
                  }}
                  >
                    💾 Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Results Message */}
      {filteredBooks.length === 0 && (
        <div style={{
          textAlign: 'center',
          color: 'white',
          padding: '3rem',
          backgroundColor: 'rgba(255,255,255,0.1)',
          borderRadius: '15px',
          marginTop: '2rem'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            No books found
          </h3>
          <p style={{ opacity: '0.8' }}>
            Try adjusting your search terms or genre filter
          </p>
        </div>
      )}
    </div>
  );
}