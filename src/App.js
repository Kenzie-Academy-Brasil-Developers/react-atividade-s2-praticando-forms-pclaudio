import './App.css';
import { useState } from 'react';
import LoginForm from './components/LoginForm';
import UserData from './components/UserData';

function App() {
  const [ user, setUser ] = useState({});
  
  return (
    <div className="App">
      <header className="App-header">
        { Object.keys(user).length === 0 ? (
          <LoginForm setUser={ setUser }/>
        ) : (
          <UserData user={ user } setUser={ setUser } />
        ) }
      </header>
    </div>
  );
}

export default App;