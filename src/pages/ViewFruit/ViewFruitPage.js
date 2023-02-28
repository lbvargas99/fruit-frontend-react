import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function ViewFruitPage() {
  const { id } = useParams();
  const [fruit, setFruit] = useState({});
  let [resultOperation, setResultOperation] = useState(null);

  function multiplicar(e) {
    e.preventDefault();
    setResultOperation(fruit.valueA * fruit.valueB);
    return resultOperation;
  }

  function dividir(e) {
    e.preventDefault();
    if (!(fruit.valueA < fruit.valueB) || !(fruit.valueB === 0)) {
      setResultOperation(fruit.valueA / fruit.valueB);
      return resultOperation;
    }
    return;
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5027/api/fruit/${id}`)
      .then((response) => {
        setFruit(response.data.data);
      })
      .catch(() => {
        console.log("Problemas com a requisição!");
      });
  }, []);
  return (
    <>
      <form className="form">
        <div className="field">
          <label>Descrição</label>
          <input placeholder={fruit.description} readOnly />
        </div>
        <div className="field">
          <label>Valor A</label>
          <input placeholder={fruit.valueA} readOnly />
        </div>
        <div className="field">
          <label>Valor B</label>
          <input placeholder={fruit.valueB} readOnly />
        </div>
        <div className="form_buttons">
          <button onClick={multiplicar}>Multiplicar</button>
          <button onClick={dividir}>Dividir</button>
        </div>
      </form>
      {resultOperation ? (
        <p>Resultado: {resultOperation}</p>
      ) : (
        <p>Aguardando operação</p>
      )}
      <Link to="/">
        <button>Voltar</button>
      </Link>
    </>
  );
}

export default ViewFruitPage;
