import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "./TableView.css";

function TableView() {
  const [frutas, setFrutas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5027/api/fruit")
      .then((response) => {
        setFrutas(response.data.data);
      })
      .catch(() => {
        console.log("Problema com a requisição!");
      });
  }, []);
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>A</th>
            <th>B</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
          {frutas.map((fruta) => (
            <tr key={fruta.id}>
              <td>{fruta.description}</td>
              <td>{fruta.valueA}</td>
              <td>{fruta.valueB}</td>
              <td>
                <Link to={"/fruit/" + fruta.id}>
                  <button>Selecionar</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableView;
