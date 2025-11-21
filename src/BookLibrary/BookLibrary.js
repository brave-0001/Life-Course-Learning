import React, { useState } from 'react';
import { Search, Settings, Grid3x3, BookOpen, Bookmark, Check, Plus, RotateCcw, Calendar, ExternalLink, X } from 'lucide-react';
import './BookLibrary.css';

export default function BookLibrary() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [activeBookTab, setActiveBookTab] = useState('overview');

  const books = [
    {
      id: 1,
      title: "Handbook on Electricity Regulation",
      author: "Jean-Michel Glachant, Michael G. Pollitt, Paul L. Joskow",
      category: "Business & Economics",
      pages: 558,
      year: 2025,
      isbn: "9781035314355, 1035314355",
      published: "June 9, 2025",
      publisher: "Edward Elgar Publishing Limited",
      format: "ebook",
      language: "English",
      subject: "Business & Economics / Industrial Management",
      previewPages: 58,
      coverImage: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=560&fit=crop",
      link: "#"
    },
    {
      id: 2,
      title: "Advanced Circuit Analysis",
      author: "Robert Smith",
      category: "Engineering",
      pages: 432,
      year: 2024,
      isbn: "9781234567890, 1234567890",
      published: "March 15, 2024",
      publisher: "Tech Books Publishing",
      format: "ebook",
      language: "English",
      subject: "Engineering / Electrical",
      previewPages: 45,
      coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=560&fit=crop",
      link: "#"
    },
    {
      id: 3,
      title: "Digital Marketing Strategies",
      author: "Sarah Johnson",
      category: "Business & Economics",
      pages: 298,
      year: 2024,
      isbn: "9780987654321, 0987654321",
      published: "August 22, 2024",
      publisher: "Marketing Press",
      format: "ebook",
      language: "English",
      subject: "Business & Economics / Marketing",
      previewPages: 32,
      coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=560&fit=crop",
      link: "#"
    },
    {
      id: 4,
      title: "Introduction to Data Science",
      author: "David Chen",
      category: "Technology",
      pages: 512,
      year: 2025,
      isbn: "9781122334455, 1122334455",
      published: "January 10, 2025",
      publisher: "Data Science Publications",
      format: "ebook",
      language: "English",
      subject: "Technology / Data Science",
      previewPages: 50,
      coverImage: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400&h=560&fit=crop",
      link: "#"
    },
    {
      id: 5,
      title: "Modern Architecture Principles",
      author: "Emma Wilson",
      category: "Design",
      pages: 384,
      year: 2024,
      isbn: "9785544332211, 5544332211",
      published: "May 18, 2024",
      publisher: "Design House Publishing",
      format: "ebook",
      language: "English",
      subject: "Design / Architecture",
      previewPages: 40,
      coverImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=560&fit=crop",
      link: "#"
    },
    {
      id: 6,
      title: "Renewable Energy Systems",
      author: "Michael Brown",
      category: "Engineering",
      pages: 467,
      year: 2025,
      isbn: "9786677889900, 6677889900",
      published: "February 28, 2025",
      publisher: "Green Tech Publishers",
      format: "ebook",
      language: "English",
      subject: "Engineering / Environmental",
      previewPages: 48,
      coverImage: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=560&fit=crop",
      link: "#"
    }
  ];

  const categories = ['All', 'Business & Economics', 'Engineering', 'Technology', 'Design'];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' || book.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const totalBooks = books.length;
  const totalPages = books.reduce((sum, book) => sum + book.pages, 0);

  const handleMenuClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
    setSelectedBook(null);
    if (section === 'all-books') {
      setSearchTerm('');
    }
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setActiveBookTab('overview');
    setActiveSection('book-detail');
  };

  const handleBackToLibrary = () => {
    setSelectedBook(null);
    setActiveSection('home');
  };

  return (
    <div className="library-wrapper">
      {/* Header */}
      <header className="library-header">
        <div className="header-container">
          <div className="header-left">
            <button 
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg className="menu-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="logo-container">
              <img src="/pageLogo.jpg" alt="Life-course Learning" className="logo-img" />
              <span className="logo-text">Life-course Learning</span>
            </div>
          </div>

          <div className="header-center">
            <div className="search-bar">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search Library"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              <button 
                className="advanced-search-btn"
                onClick={() => setShowAdvancedSearch(true)}
              >
                Advanced search
              </button>
              <Settings className="settings-icon" />
            </div>
          </div>

          <div className="header-right">
            <button className="icon-button">
              <Grid3x3 className="icon" />
            </button>
            <div className="user-avatar">
              <img src="https://ui-avatars.com/api/?name=User&background=f4c542&color=fff" alt="User" />
            </div>
          </div>
        </div>
      </header>

      {/* Advanced Search Modal */}
      {showAdvancedSearch && (
        <div className="modal-overlay" onClick={() => setShowAdvancedSearch(false)}>
          <div className="advanced-search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Advanced Book Search</h2>
              <button className="close-button" onClick={() => setShowAdvancedSearch(false)}>
                <X className="close-icon" />
              </button>
            </div>
            
            <div className="modal-body">
              <div className="search-section-header">
                <h3>Find results</h3>
                <div className="search-controls">
                  <select className="results-dropdown">
                    <option>10 results</option>
                    <option>25 results</option>
                    <option>50 results</option>
                  </select>
                  <button className="search-button">Search</button>
                </div>
              </div>

              <div className="search-field">
                <label>with all of the words</label>
                <input type="text" className="search-input-field" />
              </div>

              <div className="search-field">
                <label>with the <strong>exact phrase</strong></label>
                <input type="text" className="search-input-field" />
              </div>

              <div className="search-field">
                <label>with <strong>at least one</strong> of the words</label>
                <input type="text" className="search-input-field" />
              </div>

              <div className="search-field">
                <label><strong>without</strong> the words</label>
                <input type="text" className="search-input-field" />
              </div>

              <div className="search-options">
                <div className="option-row">
                  <label className="option-label">Search:</label>
                  <div className="radio-group">
                    <label><input type="radio" name="search" defaultChecked /> All books</label>
                    <label><input type="radio" name="search" /> Limited preview and full view</label>
                    <label><input type="radio" name="search" /> Full view only</label>
                    <label><input type="radio" name="search" /> Google eBooks only</label>
                  </div>
                </div>

                <div className="option-row">
                  <label className="option-label">Content:</label>
                  <div className="radio-group">
                    <label><input type="radio" name="content" defaultChecked /> All content</label>
                    <label><input type="radio" name="content" /> Books</label>
                    <label><input type="radio" name="content" /> Magazines</label>
                    <label><input type="radio" name="content" /> Newspapers</label>
                  </div>
                </div>

                <div className="option-row">
                  <label className="option-label">Language</label>
                  <div className="field-group">
                    <span>Return pages written in</span>
                    <select className="language-select">
                      <option>any language</option>
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>

                <div className="option-row">
                  <label className="option-label">Title</label>
                  <div className="field-group">
                    <span>Return books with the title</span>
                    <input type="text" className="text-input" placeholder="e.g. Books and Culture" />
                  </div>
                </div>

                <div className="option-row">
                  <label className="option-label">Author</label>
                  <div className="field-group">
                    <span>Return books written by</span>
                    <input type="text" className="text-input" placeholder='e.g. Hamilton Mabie or "Hamilton Wright Mabie"' />
                  </div>
                </div>

                <div className="option-row">
                  <label className="option-label">Publisher</label>
                  <div className="field-group">
                    <span>Return books published by</span>
                    <input type="text" className="text-input highlighted" placeholder="e.g. O'Reilly" />
                  </div>
                </div>

                <div className="option-row">
                  <label className="option-label">Subject</label>
                  <div className="field-group">
                    <span>Return books on subject</span>
                    <input type="text" className="text-input" placeholder='e.g. Medieval History or "Medieval History"' />
                  </div>
                </div>

                <div className="option-row">
                  <label className="option-label">Publication Date</label>
                  <div className="field-group">
                    <div className="radio-group vertical">
                      <label><input type="radio" name="date" defaultChecked /> Return content published anytime</label>
                      <label><input type="radio" name="date" /> Return content published between</label>
                    </div>
                    <div className="date-inputs">
                      <select className="date-select"><option>Month</option></select>
                      <input type="text" className="year-input" placeholder="Year" />
                      <span>and</span>
                      <select className="date-select"><option>Month</option></select>
                      <input type="text" className="year-input" placeholder="Year" />
                    </div>
                    <small className="hint">e.g. 1999 and 2000, or Jan 1999 and Dec 2000</small>
                  </div>
                </div>

                <div className="option-row">
                  <label className="option-label">ISBN</label>
                  <div className="field-group">
                    <span>Return books with the ISBN</span>
                    <input type="text" className="text-input" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="main-layout">
        {/* Sidebar Menu */}
        {menuOpen && (
          <aside className="sidebar">
            <div className="sidebar-section">
              <h3 className="sidebar-title">Your Library</h3>
              <nav className="sidebar-nav">
                <button 
                  className={`nav-item ${activeSection === 'all-books' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('all-books')}
                >
                  <BookOpen className="nav-icon" />
                  All books
                </button>
                <button 
                  className={`nav-item ${activeSection === 'reading-list' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('reading-list')}
                >
                  <Bookmark className="nav-icon" />
                  Reading list
                </button>
                <button 
                  className={`nav-item ${activeSection === 'books-read' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('books-read')}
                >
                  <Check className="nav-icon" />
                  Books you've read
                </button>
                <button 
                  className={`nav-item ${activeSection === 'create-collection' ? 'active' : ''}`}
                  onClick={() => handleMenuClick('create-collection')}
                >
                  <Plus className="nav-icon" />
                  Create collection
                </button>
              </nav>
            </div>

            <div className="sidebar-section">
              <h3 className="sidebar-title">Classic LifeCourse Books</h3>
              <button 
                className="nav-item"
                onClick={() => handleMenuClick('classic')}
              >
                <RotateCcw className="nav-icon" />
                Back to classic LifeCourse Books
              </button>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <main className="main-content">
          {/* Book Detail Page */}
          {activeSection === 'book-detail' && selectedBook && (
            <div className="book-detail-page">
              <button className="back-button" onClick={handleBackToLibrary}>
                ← Back to Library
              </button>

              <div className="book-detail-header">
                <div className="book-detail-info">
                  <h1 className="book-detail-title">{selectedBook.title}</h1>
                  <p className="book-detail-year">{selectedBook.year}</p>

                  <div className="book-actions">
                    <button className="action-btn primary">
                      <BookOpen className="btn-icon" />
                      Preview
                    </button>
                    <button className="action-btn secondary">
                      <Search className="btn-icon" />
                      Search inside
                    </button>
                    <button className="action-btn secondary">
                      <Bookmark className="btn-icon" />
                      Save
                    </button>
                  </div>
                </div>

                <div className="book-detail-preview">
                  <div className="preview-main">
                    <img src={selectedBook.coverImage} alt={selectedBook.title} />
                    <div className="preview-badge">
                      Preview<br/>{selectedBook.previewPages} pages
                    </div>
                  </div>
                  <div className="preview-thumbs">
                    <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=120&h=160&fit=crop" alt="Page preview" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=160&fit=crop" alt="Page preview" />
                  </div>
                </div>
              </div>

              <div className="book-tabs">
                <button 
                  className={`tab ${activeBookTab === 'overview' ? 'active' : ''}`}
                  onClick={() => setActiveBookTab('overview')}
                >
                  Overview
                </button>
                <button 
                  className={`tab ${activeBookTab === 'get-book' ? 'active' : ''}`}
                  onClick={() => setActiveBookTab('get-book')}
                >
                  Get the book
                </button>
              </div>

              <div className="book-detail-content">
                <div className="edition-section">
                  <h2>About this edition</h2>
                  <div className="info-grid">
                    <div className="info-row">
                      <span className="info-label">ISBN:</span>
                      <span className="info-value">{selectedBook.isbn}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Page count:</span>
                      <span className="info-value">{selectedBook.pages}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Published:</span>
                      <span className="info-value">{selectedBook.published}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Format:</span>
                      <span className="info-value">{selectedBook.format}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Publisher:</span>
                      <span className="info-value link">{selectedBook.publisher}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Language:</span>
                      <span className="info-value link">{selectedBook.language}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Editors:</span>
                      <span className="info-value">{selectedBook.author}</span>
                    </div>
                  </div>

                  <div className="edition-actions">
                    <button className="link-btn">
                      <svg className="btn-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"/>
                        <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"/>
                      </svg>
                      Create citation
                    </button>
                    <button className="link-btn">
                      <svg className="btn-icon" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                      </svg>
                      Table of contents
                    </button>
                  </div>
                </div>

                <div className="work-section">
                  <h2>About the work</h2>
                  <div className="work-info">
                    <p><span className="work-label">Originally published:</span> {selectedBook.published}</p>
                    <p><span className="work-label">Editors:</span> {selectedBook.author}</p>
                    <p><span className="work-label">Subject:</span> {selectedBook.subject}, <button className="text-link">see more</button></p>
                  </div>
                  <div className="publisher-section">
                    <h3>Publisher</h3>
                    <p className="publisher-name">{selectedBook.publisher}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Home Section */}
          {activeSection === 'home' && (
            <div className="home-section">
              <div className="stats-header">
                <div>
                  <h1 className="main-title">My Library</h1>
                  <p className="main-subtitle">Your personal collection of knowledge</p>
                </div>
                <div className="stats-container">
                  <div className="stat-box">
                    <div className="stat-number">{totalBooks}</div>
                    <div className="stat-label">Books</div>
                  </div>
                  <div className="stat-box">
                    <div className="stat-number">{totalPages.toLocaleString()}</div>
                    <div className="stat-label">Pages</div>
                  </div>
                </div>
              </div>

              <div className="category-filters">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="books-grid">
                {filteredBooks.map(book => (
                  <div 
                    key={book.id} 
                    className="book-card"
                    onClick={() => handleBookClick(book)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="book-cover">
                      <div className="book-spine"></div>
                      <div className="book-content">
                        <BookOpen className="book-icon" />
                      </div>
                    </div>
                    
                    <div className="book-details">
                      <div className="book-category">{book.category}</div>
                      <h3 className="book-title">{book.title}</h3>
                      <p className="book-author">{book.author}</p>
                      
                      <div className="book-meta">
                        <div className="meta-item">
                          <Calendar className="meta-icon" />
                          <span>{book.year}</span>
                        </div>
                        <div className="meta-item">
                          <BookOpen className="meta-icon" />
                          <span>{book.pages} pages</span>
                        </div>
                      </div>
                      
                      <div className="open-btn">
                        <ExternalLink className="btn-icon" />
                        View Details
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'all-books' && (
            <div className="all-books-section">
              <div className="search-section">
                <h2 className="section-title">Search for a Book</h2>
                <div className="search-box">
                  <Search className="search-box-icon" />
                  <input
                    type="text"
                    placeholder="Enter book title or author..."
                    className="search-box-input"
                  />
                </div>
              </div>
              
              <div className="empty-state">
                <img 
                  src="https://illustrations.popsy.co/amber/man-fishing.svg" 
                  alt="Search for books" 
                  className="empty-state-img"
                />
                <p className="empty-state-text">Try to search for something</p>
              </div>
            </div>
          )}

          {activeSection === 'reading-list' && (
            <div className="section-placeholder">
              <BookOpen className="placeholder-icon" />
              <h2>Reading List</h2>
              <p>Your reading list is empty</p>
            </div>
          )}

          {activeSection === 'books-read' && (
            <div className="section-placeholder">
              <Check className="placeholder-icon" />
              <h2>Books You've Read</h2>
              <p>No books marked as read yet</p>
            </div>
          )}

          {activeSection === 'create-collection' && (
            <div className="section-placeholder">
              <Plus className="placeholder-icon" />
              <h2>Create Collection</h2>
              <p>Start organizing your books into collections</p>
            </div>
          )}

          {activeSection === 'classic' && (
            <div className="section-placeholder">
              <RotateCcw className="placeholder-icon" />
              <h2>Classic LifeCourse Books</h2>
              <p>Browse the classic collection</p>
            </div>
          )}

          <footer className="library-footer">
            © 2025 LifeCourse Books Library. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}