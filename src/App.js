import logo from './logo.svg';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="page-content">
      <Header />
      <main className="page-main">
        <div className="text-center">
          <img src={logo} className="logo-img" alt="logo" />
          <h2>Hello React!</h2>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
