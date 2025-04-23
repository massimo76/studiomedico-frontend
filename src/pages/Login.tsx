import React, { useState } from 'react';

const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }), // assicurati che email e password esistano
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login OK:', data);
        // salva token, reindirizza o aggiorna lo stato globale
      } else {
        console.error('Errore login:', data.message);
      }
    } catch (error) {
      console.error('Errore di rete:', error);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Login StudioMedico</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: 'block', marginBottom: '1rem' }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: 'block', marginBottom: '1rem' }}
      />
      <button onClick={handleLogin}>Accedi</button>
    </div>
  );
}

export default Login;
