import { useState, useEffect } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

export default function IpfsPage() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const session_id = localStorage.getItem("ipfs_session_id");
    if (session_id) setLoggedIn(true);
  }, []);

  return (
    <div>
      {loggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}
