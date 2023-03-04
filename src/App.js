import { useState, useEffect } from 'react';
import { auth, onAuthStateChanged } from './firebase';
import Main from './components/Main';
import Menu from './components/Menu';
import './App.css';

function App() {
  const [ user, setUser ] = useState(null);
  const [ profiles, setProfiles ] = useState([]);

  const API_PROFILES = 'https://ecom-dash-backend.onrender.com/api/profiles';

  // PROFILES
  const getProfiles = async () => {
    try {
        const token = await user.getIdToken();
        const response = await fetch(API_PROFILES,{
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await response.json();
        setProfiles(data);
    }catch (error) {
            console.log(error)
    }   
  }
  const createProfile = async (profile) => {
      try {
          const token = await user.getIdToken();
          await fetch(API_PROFILES, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + token
              },
              body: JSON.stringify(profile)
          });
      } catch (error) {
          console.log(error)
      }
      getProfiles();
  }

  useEffect(() => {    
    const unsubscribe = onAuthStateChanged(auth, user => setUser(user));
    return unsubscribe;
  });

  return (
    <>
      {
        user ? 
        <>
          <Menu user={user} profiles={profiles} getProfiles={getProfiles}/>
          <Main user={user} profiles={profiles} createProfile={createProfile} getProfiles={getProfiles}/>
        </>
        :
          <Main user={user}/>
      }
    </>
  )
}

export default App;
