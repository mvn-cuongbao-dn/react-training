import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import React, { Component } from 'react';
import UserRow from './UserRow';

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
      ],
      form: {
        email: '',
        password: '',
        country: '',
        gender: '0',
        information: ''
      },
      userList: []
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

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(state => ({
      form: {
        ...state.form,
        [name]: value
      }
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const user = { ...this.state.form };
    this.setState(state => ({
      userList: [
          ...state.userList,
          user
        ]
    }))
  }

  handleRemoveUser = (userIndex) => {
    this.setState(prev => ({
      userList: prev.userList.splice(userIndex, 1)
    }));
  }

  render() {
    const { page, form, userList } = this.state;

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
                    <div className="row">
                      <form className="col-4" onSubmit={this.handleSubmit}>
                        <h2 className="mb-4">Register</h2>
                        <div className="form-group">
                          <label>Email Address</label>
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                          <label>Your country</label>
                          <select className="form-control" name="country" value={form.country} onChange={this.handleChange}>
                            <option value="">Please choose</option>
                            <option value="England">England</option>
                            <option value="Vietnam">Vietnam</option>
                            <option value="US">United States</option>
                            <option value="Korea">Korea</option>
                          </select>
                        </div>
                        <div className="form-group mr-1">
                        <label>Gender</label>
                          <div className="form-check form-check-inline">
                            <input 
                                className="form-check-input"
                                type="radio"
                                name="gender"
                                id="male"
                                value="0" 
                                checked={form.gender === '0'}
                                onChange={this.handleChange} />
                            <label className="form-check-label">Male</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                                className="form-check-input" 
                                type="radio"
                                name="gender"
                                id="female"
                                value="1" 
                                checked={form.gender === '1'}
                                onChange={this.handleChange} />
                            <label className="form-check-label">Female</label>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Other information</label>
                          <textarea className="form-control" name="information" onChange={this.handleChange}></textarea>
                        </div>
                        <button className="btn btn-block btn-dark">Submit</button>
                      </form>
                      <div className="col-8">
                        <table className="table">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Email</th>
                              <th>Country</th>
                              <th>Gender</th>
                              <th>Other information</th>
                              <th className="txt-center">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                          {userList.length 
                            ? userList.map((user, index) => <UserRow key={user.id} id={index} user={user} onRemoveUser={this.handleRemoveUser}/>)
                            : <tr><td className="text-center" colSpan="5">No user found</td></tr>}
                          </tbody>
                        </table>
                      </div>
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
