import "./style.css";

const Card = ({
  description,
  type,
  value,
  identification,
  SetEntry,
  entry,
  SetfilterEntry,
}) => {
  let className = "";
  type === "entrada" ? (className = "borderGreen") : (className = "borderGray");
  return (
    <li className={`CardContainer ${className}`} key={identification}>
      <div>
        <h1 className="CardDescription">{description}</h1>
        <h3 className="CardType">{type}</h3>
      </div>
      <section className="CardSection">
        <h2 className="CardValue">{value}</h2>
        <button
          className="CardButton"
          onClick={() => {
            let filterId = entry.filter((elem) => {
              return elem.id !== identification;
            });
            SetEntry(filterId);
            SetfilterEntry([]);
          }}
        >
          <img className="CardImg" src="/trash.svg" alt="" />
        </button>
      </section>
    </li>
  );
};

export default Card;
