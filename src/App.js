import React from 'react';
import './App.css'; // Custom CSS for additional styling
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="app-container">
      <header className="header d-flex justify-content-between align-items-center">
        <div className="logo">LOGO</div>
        <div className="search-bar">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
        <div className="user-icon">
          <i className="fas fa-user"></i>
        </div>
      </header>

      <div className="content d-flex">
        <aside className="sidebar">
          <h2>Events</h2>
          <div className="event">
            <p>Family</p>
            <span>06 buy grocery</span>
          </div>
          <div className="event">
            <p>Friends</p>
            <span>07 Dinner out</span>
          </div>
          <div className="quick-links">
            <p>Quick Links</p>
            <p>Copy Right</p>
          </div>
        </aside>

        <main className="main-content">
          <div className="breadcrumb">Home &gt;</div>
          <div className="categories">
            <div className="category-item">
              <img src="family-icon.png" alt="Family" />
              <p>Family</p>
            </div>
            <div className="category-item">
              <img src="friends-icon.png" alt="Friends" />
              <p>Friends</p>
            </div>
            <div className="category-item">
              <img src="others-icon.png" alt="Others" />
              <p>Others</p>
            </div>
            <div className="category-item">
              <img src="add-icon.png" alt="Add More" />
              <p>Add More</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
