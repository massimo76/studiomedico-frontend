import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Qui simuleremo l'autenticazione
    if (username === 'admin' && password === '1234') {
      alert('Login effettuato!');
    } else {
      alert('Credenziali non valide.');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', paddingTop: '80px' }}>
      <h2>Login StudioMedico</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={e => setUsername(e.target.value)}
          required
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        /><br /><br />
        <button type="submit">Accedi</button>
      </form>
    </div>
  );
};

export default Login;