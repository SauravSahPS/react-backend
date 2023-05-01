import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  const [error, setError] = useState("");

  // useEffect(() => {
  //   axios
  //     .get<User[]>("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => setUsers(response.data))
  //     .catch((err) => setError(err.message));
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<User[]>(
          "https://jsonplaceholder.typicode.com/users"
        );

        setUsers(res.data);
      } catch (err) {
        setError((err as AxiosError).message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
