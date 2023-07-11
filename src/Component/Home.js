import React, {useEffect, useState} from 'react'

const Home = () => {
  const [show, setShow] = useState(false);

  const [userName, setUserName] = useState('');

  const userHome = async () => {
    try {
      const res = await fetch('/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setShow(true);

    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userHome();
  }, []);

  return (
    <div className="home-page">
        <div className="home-div"></div>
        <p>WELCOME</p>
        <h1>{userName}</h1>
        <h2>{ show ? "Happy to see you" : "M A MERN STACK DEVELOPER"}</h2>

        <div className=''></div>
      </div>

  )
}

export default Home
