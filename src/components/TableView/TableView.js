import "./TableView.css";
function TableView() {
  return (
    <div class="container">
      <table>
        <tr>
          <th>Descrição</th>
          <th>A</th>
          <th>B</th>
          <th>Ação</th>
        </tr>
        <tr>
          <td>Banana</td>
          <td>10</td>
          <td>2</td>
          <td>
            <button>Selecionar</button>
          </td>
        </tr>
        <tr>
          <td>Maçã</td>
          <td>0</td>
          <td>5</td>
          <td>
            <button>Selecionar</button>
          </td>
        </tr>
      </table>
    </div>
  );
}

export default TableView;
