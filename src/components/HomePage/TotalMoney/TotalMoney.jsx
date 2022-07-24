import "./style.css";

const TotalMoney = ({ entry }) => {
  const entradas = entry.filter((value) => {
    return value.type === "entrada";
  });

  const valorEntradas = entradas
    .map((elem) => {
      return elem.value;
    })
    .reduce((acc, value) => {
      return acc + value;
    }, 0);

  const despesa = entry.filter((value) => {
    return value.type === "despesa";
  });

  const valorSaidas = despesa
    .map((elem) => {
      return elem.value;
    })
    .reduce((acc, value) => {
      return acc + value;
    }, 0);

  return (
    <section className="ContainerTotal">
      <div>
        <h4 className="textTotal">Valor Total:</h4>
        <h6 className="textDescription">O valor se refere ao saldo</h6>
      </div>
      <h4 className="textValue">
        $ {(valorEntradas - valorSaidas).toFixed(2)}
      </h4>
    </section>
  );
};

export default TotalMoney;
