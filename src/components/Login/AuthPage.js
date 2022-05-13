import React, { useEffect, useState } from 'react';

const AuthPage = () => {
  const [url, setUrl] = useState(null);

  const getUrl = async () => {
    await fetch('http://localhost:8000/api/auth/geturl', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        const url = data.authUrl;
        console.log(url);
        setUrl(url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUrl();
  }, []);

  return (
    <div>
      <h2>Authorization Page</h2>
      <br />
      {url && <p>{url}</p>}

      <br />
      {url && <a href={url}>Authorize your account</a>}
    </div>
  );
};

export default AuthPage;
