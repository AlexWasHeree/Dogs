import React from 'react';

const UserPost = () => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('https://');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={({ target }) => {
          setUsername(target.value);
        }}
      />
      <input
        type="text"
        placeholder="Password"
        value={password}
        onChange={({ target }) => {
          setPassword(target.value);
        }}
      />
      <input
        type="text"
        placeholder="email"
        value={email}
        onChange={({ target }) => {
          setEmail(target.value);
        }}
      />
      <button>Enviar</button>
    </form>
  );
};

export default UserPost;
