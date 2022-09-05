import { useState, useEffect } from 'react';
import { auth, onAuthStateChanged } from './firebase';
import Main from './components/Main';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, user => setUser(user));
   return unsubscribe;
  }, []);

  return (
    <>
      {
        user ? 
        <>
          <Menu user={user} />
          <Main user={user} />
        </>
        :
        <Main user={user}/>
      }
    </>
  )
}

export default App;
