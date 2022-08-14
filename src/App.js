import './App.css';
import Picture from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import NavBar from './Component/Navbar/NavBar';
function App() {
  return (
    <div className='App'>
      <header>
      <NavBar />
      <h1>Welcoming the new Supply chain Director</h1>
      </header>
      <body>
      <Picture />
      <FullName />
      <Address />
      </body>
    </div>
  );
}

export default App;
