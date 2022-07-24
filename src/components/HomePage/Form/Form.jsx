import "./style.css";

const Form = ({ SetEntry }) => {
  return (
    <form
      className="FormContainer"
      onSubmit={(event) => {
        event.preventDefault();

        SetEntry((oldValue) => {
          return [
            ...oldValue,
            {
              id: oldValue.length,
              description: event.target[0].value,
              type: event.target[2].value,
              value: parseFloat(event.target[1].value),
            },
          ];
        });
      }}
    >
      <p className="FormContainerDescription">Descrição</p>
      <input
        className="FormContainerDescriptionInput"
        type="text"
        placeholder="Digite aqui sua descrição"
        required
      />
      <p className="FormContainerDescriptionExample">Ex: Compra de roupas</p>
      <section className="FormInformationContainer">
        <div className="FormInformationContainerDescriptionValue">
          <p>Valor</p>
          <div>
            <input
              className="FormInformationContainerDescriptionValueInput"
              type="number"
              placeholder="1"
              required
            />
            <div> R$</div>
          </div>
        </div>
        <div className="FormInformationContainerDescriptionType">
          <p>Tipo de valor</p>
          <select
            name="value"
            id="value"
            className="FormInformationContainerDescriptionInput"
          >
            <option value="entrada">Entrada</option>
            <option value="despesa">Despesa</option>
          </select>
        </div>
      </section>
      <button className="FormButton" type="submit">
        Inserir valor
      </button>
    </form>
  );
};

export default Form;
