import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'home',
      todoList: [
        {
          id: 1, 
          title: 'This is title 1', 
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        },
        {
          id: 2, 
          title: 'This is title 2',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        },
        {
          id: 3, 
          title: 'This is title 3',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        },
        {
          id: 4, 
          title: 'This is title 4',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        },
        {
          id: 5, 
          title: 'This is title 5',
          desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
        }
      ]
    };
  }

  handleChangePage(page) {
    this.setState({
      page
    });
  }

  handleDeteleTodo(todoId) {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(item => item.id !== todoId)
    }));
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
                    { this.state.todoList.length 
                        ? <ul className="list-group">
                            { this.state.todoList.map((item) =>
                              <li className="list-group-item" key={item.id}>
                                <button type="button" className="close" onClick={()=>{this.handleDeteleTodo(item.id)}}>
                                  <span aria-hidden="true">×</span>
                                </button>
                                <h5 className="mb-1">{item.title}</h5>
                                <p>{item.desc}</p>
                              </li>
                            )}
                          </ul>
                        : <p className="text-center">No contents</p>
                    }
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
