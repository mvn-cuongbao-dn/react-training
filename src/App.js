import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import React, { Component } from 'react';
import Circle from './modules/Circle';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
    };
  }

  handleChangePage(page) {
    this.setState({
      page
    });
  }

  render() {
    const { page } = this.state;

    return (
      <div className="page-content">
        <Header />
        <main className="page-main">
          <div className="container">
            <div className="page-wrapper">
              <nav className="nav nav-tabs">
                <button 
                  className={`nav-item ${page === 'home' ? 'active' : ''}`}
                  onClick={() => this.handleChangePage('home')}
                >Home page</button>
                <button 
                  className={`nav-item ${page === 'about' ? 'active' : ''}`}
                  onClick={() => this.handleChangePage('about')}
                >About page</button>
              </nav>
              <div className="tab-content">
                {(page === 'home') && 
                  <div className="tab-pane">
                    <div className="d-flex justify-content-around">
                      <Circle number="50"></Circle>
                      <Circle number="40"></Circle>
                      <Circle number="30"></Circle>
                    </div>
                  </div>}
                {(page === 'about') && <div className="tab-pane">About page</div>}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
