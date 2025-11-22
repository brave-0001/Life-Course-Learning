import React from 'react';
import './ExplorePage.css';

function ExplorePage() {

  const newArrivals = [
    { id: 1, title: 'The Midnight Library', author: 'Matt Haig', category: 'Fiction', image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop', rating: 4.8 },
    { id: 2, title: 'Atomic Habits', author: 'James Clear', category: 'Self-Help', image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=400&fit=crop', rating: 4.9 },
    { id: 3, title: 'Dune: Part Two', author: 'Frank Herbert', category: 'Science Fiction', image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop', rating: 4.7 },
    { id: 4, title: 'The Art of War', author: 'Sun Tzu', category: 'Philosophy', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop', rating: 4.6 },
  ];

  const trending = [
    { id: 5, title: 'Project Hail Mary', author: 'Andy Weir', category: 'Science Fiction', image: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=300&h=400&fit=crop', rating: 4.9, trending: true },
    { id: 6, title: 'Sapiens', author: 'Yuval Noah Harari', category: 'History', image: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=300&h=400&fit=crop', rating: 4.8, trending: true },
    { id: 7, title: 'Educated', author: 'Tara Westover', category: 'Biography', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop', rating: 4.7, trending: true },
    { id: 8, title: 'The Psychology of Money', author: 'Morgan Housel', category: 'Finance', image: 'https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=300&h=400&fit=crop', rating: 4.8, trending: true },
  ];

  const recommended = [
    { id: 9, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', category: 'Psychology', image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=400&fit=crop', rating: 4.6 },
    { id: 10, title: 'The Lean Startup', author: 'Eric Ries', category: 'Business', image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=300&h=400&fit=crop', rating: 4.5 },
    { id: 11, title: '1984', author: 'George Orwell', category: 'Fiction', image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=300&h=400&fit=crop', rating: 4.9 },
    { id: 12, title: 'Deep Work', author: 'Cal Newport', category: 'Productivity', image: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=300&h=400&fit=crop', rating: 4.7 },
  ];

  const categories = [
    { name: 'All', icon: '📚', value: 'all' },
    { name: 'Fiction', icon: '📖', value: 'fiction' },
    { name: 'Science', icon: '🔬', value: 'science' },
    { name: 'Business', icon: '💼', value: 'business' },
    { name: 'History', icon: '🏛️', value: 'history' },
    { name: 'Self-Help', icon: '💡', value: 'self-help' },
    { name: 'Biography', icon: '👤', value: 'biography' },
    { name: 'Philosophy', icon: '🤔', value: 'philosophy' },
  ];

  // BookCard component defined properly
  const BookCard = ({ book }) => (
    <div className="explore-book-card">
      {book.trending && <span className="trending-badge">🔥 Trending</span>}
      <div className="explore-book-image" style={{ backgroundImage: `url(${book.image})` }}>
        <div className="explore-book-overlay">
          <button className="explore-quick-view">Quick View</button>
        </div>
      </div>
      <div className="explore-book-info">
        <h3 className="explore-book-title">{book.title}</h3>
        <p className="explore-book-author">by {book.author}</p>
        <div className="explore-book-meta">
          <span className="explore-book-category">{book.category}</span>
          <span className="explore-book-rating">⭐ {book.rating}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="explore-page">
      <div className="explore-header">
        <h1 className="explore-main-title">Explore Books</h1>
        <p className="explore-subtitle">Discover your next favorite read from our curated collections</p>
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className="category-btn"
          >
            <span className="category-icon">{cat.icon}</span>
            {cat.name}
          </button>
        ))}
      </div>

      {/* Trending Section */}
      <section className="explore-section">
        <div className="section-header">
          <h2 className="section-title">🔥 Trending Now</h2>
          <p className="section-desc">Books everyone is talking about</p>
        </div>
        <div className="explore-grid">
          {trending.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="explore-section">
        <div className="section-header">
          <h2 className="section-title">✨ New Arrivals</h2>
          <p className="section-desc">Fresh additions to our collection</p>
        </div>
        <div className="explore-grid">
          {newArrivals.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Recommended Section */}
      <section className="explore-section">
        <div className="section-header">
          <h2 className="section-title">💎 Recommended for You</h2>
          <p className="section-desc">Based on your reading interests</p>
        </div>
        <div className="explore-grid">
          {recommended.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="explore-section featured-collections">
        <h2 className="section-title">📚 Featured Collections</h2>
        <div className="collections-grid">
          <div className="collection-card" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop)' }}>
            <h3>Classic Literature</h3>
            <p>Timeless masterpieces</p>
            <button className="collection-btn">Explore →</button>
          </div>
          <div className="collection-card" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop)' }}>
            <h3>Business & Leadership</h3>
            <p>Learn from the best</p>
            <button className="collection-btn">Explore →</button>
          </div>
          <div className="collection-card" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=600&h=400&fit=crop)' }}>
            <h3>Science & Technology</h3>
            <p>Explore the future</p>
            <button className="collection-btn">Explore →</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExplorePage;