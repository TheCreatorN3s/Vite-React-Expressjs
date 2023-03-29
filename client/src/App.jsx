import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";

function App() {
  const [users, setUsers] = useState([]);

  const APi_URL = "http://localhost:3000/api/backend";
  
  const getUsers = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getUsers(APi_URL);
  }, []);

  return (
    <div>
        {users.map(user => (
          <h1 className="text-center text-3xl">{user.name}</h1>
        ))}
    </div>
  );
}

export default App;
