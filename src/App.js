import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import React, { useState } from 'react';
import UserRow from './UserRow';

const App = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    country: '',
    gender: '0',
    other: ''
  });
  const [userList, setUserList] = useState([]);
  const [page, setPage] = useState('home');
  
  const handleChangePage = (page) => {
    setPage(page);
  }

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newUser = {...form};
    setUserList([...userList, newUser ]);
  }

  const handleRemoveUser = (userIndex) => {
    const newUserList = userList.splice(userIndex, 1)
    setUserList(newUserList);
  }

  return (
    <div className="page-content">
      <Header />
      <main className="page-main">
        <div className="container">
          <div className="page-wrapper">
            <nav className="nav nav-tabs">
              <button 
                className={`nav-item ${page === 'home' ? 'active' : ''}`}
                onClick={() => handleChangePage('home')}
              >Home page</button>
              <button 
                className={`nav-item ${page === 'about' ? 'active' : ''}`}
                onClick={() => handleChangePage('about')}
              >About page</button>
            </nav>
            <div className="tab-content">
              {(page === 'home') && 
                <div className="tab-pane">
                  <div className="row">
                    <form className="col-4" onSubmit={handleSubmit}>
                      <h2 className="mb-4">Register</h2>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="text"
                          name="email"
                          className="form-control"
                          onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          onChange={handleChange} />
                      </div>
                      <div className="form-group">
                        <label>Your country</label>
                        <select className="form-control" name="country" value={form.country} onChange={handleChange}>
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
                              onChange={handleChange} />
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
                              onChange={handleChange} />
                          <label className="form-check-label">Female</label>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Other information</label>
                        <textarea className="form-control" name="information" onChange={handleChange}></textarea>
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
                          ? userList.map((user, index) => <UserRow key={index} id={index} user={user} onRemoveUser={handleRemoveUser}/>)
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

export default App;
