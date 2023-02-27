import { Link } from "react-router-dom";
import "./TableView.css";

function meuEvento() {
  alert("opa");
}

function TableView() {
  const frutas = [
    {
      description: "banana",
      valorA: 10,
      valorB: 2,
    },
    {
      description: "maça",
      valorA: 100,
      valorB: 20,
    },
    {
      description: "Laranja",
      valorA: 15,
      valorB: 5,
    },
    {
      description: "Bergamota",
      valorA: 5,
      valorB: 1,
    },
  ];
  return (
    <div className="container">
      <table>
        <tr>
          <th>Descrição</th>
          <th>A</th>
          <th>B</th>
          <th>Ação</th>
        </tr>
        {frutas.map((fruta) => (
          <tr>
            <td>{fruta.description}</td>
            <td>{fruta.valorA}</td>
            <td>{fruta.valorB}</td>
            <td>
              <Link to="/fruit"><button>Selecionar</button></Link>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default TableView;
