import React, { useEffect, useState } from "react";
import api from "./services/api";

const nome = prompt("Digite o nome do usuário do github")

export default function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    api
        .get("/users/" + nome)
        .then((response) => setUser(response.data))
        .catch((err) => {
          console.error("Infelizmente, algo deu errado." + err );
        });
  }, []);




  return (
    <div className="App">
      <h1> Aplicativo de requisição a api do github</h1>
      <table border="1">
        <tr>
          <td><p>Usuário: {user?.login}</p></td>
        </tr>
        <tr>
        <td><p>Biografia: {user?.bio}</p></td>
        </tr>
      </table>
    </div>
  );
}