import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import React, { useState, useEffect } from 'react';
import UserRow from './UserRow';

const api = 'https://reqres.in/api/users?page=';

const App = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    country: '',
    gender: '0',
    other: ''
  });
  const [userList, setUserList] = useState([]);
  const [view, setView] = useState('home');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  
  const handleChangeView = (view) => {
    setView(view);
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

  const handleChangePage = (newPage) => {
    if (newPage < 1 || newPage > totalPages) {
      return;
    }
    setCurrentPage(newPage);
  }

  useEffect(() => {
    fetch(`${api}${currentPage}`)
      .then(results => results.json())
      .then(res => {
        setUserList(res.data);
        setTotalPages(res.total_pages);
      });
  }, [currentPage]);

  return (
    <div className="page-content">
      <Header />
      <main className="page-main">
        <div className="container">
          <div className="page-wrapper">
            <nav className="nav nav-tabs">
              <button 
                className={`nav-item ${view === 'home' ? 'active' : ''}`}
                onClick={() => handleChangeView('home')}
              >Home page</button>
              <button 
                className={`nav-item ${view === 'about' ? 'active' : ''}`}
                onClick={() => handleChangeView('about')}
              >About page</button>
            </nav>
            <div className="tab-content">
              {(view === 'home') && 
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
                          ? userList.map((user) => <UserRow key={user.id} user={user} onRemoveUser={handleRemoveUser}/>)
                          : <tr><td className="text-center" colSpan="5">No user found</td></tr>}
                        </tbody>
                      </table>
                      <nav className="d-flex justify-content-center">
                        <ul className="pagination">
                          <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`} onClick={() => handleChangePage(currentPage - 1)}>
                            <span className="page-link">Previous</span>
                          </li>
                          {[...Array(totalPages)].map((page, i) =>
                            <li key={i} className={`page-item ${currentPage === (i + 1) ? 'selected' : ''}`} onClick={() => handleChangePage(i + 1)}>
                              <a className="page-link" href="#">{i + 1}</a>
                            </li>
                          )}
                          <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`} onClick={() => handleChangePage(currentPage + 1)}>
                            <span className="page-link">Next</span>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>}
              {(view === 'about') && <div className="tab-pane">About page</div>}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
