import "./style.css";
import Card from "./Card/Card";
import { useState } from "react";

const List = ({ entry, SetEntry }) => {
  const [filterEntry, SetfilterEntry] = useState([]);

  return entry.length > 0 ? (
    <>
      <section className="resumeFinContainer">
        <p className="resumeFinText">Resumo financeiro</p>
        <div>
          <button
            className="resumeFinbtnAll"
            onClick={() => {
              SetfilterEntry([]);
            }}
          >
            Todos
          </button>
          <button
            className="resumeFinbtn"
            onClick={() => {
              let filteredEntre = entry.filter((value) => {
                return value.type === "entrada";
              });

              SetfilterEntry(filteredEntre);
            }}
          >
            Entradas
          </button>
          <button
            className="resumeFinbtn"
            onClick={() => {
              let filteredEntre = entry.filter((value) => {
                return value.type === "despesa";
              });
              SetfilterEntry(filteredEntre);
            }}
          >
            Despesas
          </button>
        </div>
      </section>
      <ul>
        {filterEntry.length > 0
          ? filterEntry.map((elem) => {
              console.log(elem.id);
              return (
                <Card
                  SetfilterEntry={SetfilterEntry}
                  entry={entry}
                  SetEntry={SetEntry}
                  identification={elem.id}
                  description={elem.description}
                  type={elem.type}
                  value={elem.value}
                />
              );
            })
          : entry.map((elem) => {
              console.log(elem.id);

              return (
                <Card
                  SetfilterEntry={SetfilterEntry}
                  entry={entry}
                  SetEntry={SetEntry}
                  identification={elem.id}
                  description={elem.description}
                  type={elem.type}
                  value={elem.value}
                />
              );
            })}
      </ul>
    </>
  ) : (
    <>
      <section className="resumeFinContainer">
        <p className="resumeFinText">Resumo financeiro</p>
        <div>
          <button className="resumeFinbtnAll">Todos</button>
          <button className="resumeFinbtn">Entradas</button>
          <button className="resumeFinbtn">Despesas</button>
        </div>
      </section>
      <p className="resumeFinEmpty">Você ainda não possui nenhum lançamento</p>
      <img className="resumeFinEmptyImg" src="/NoCard.svg" alt=""></img>
    </>
  );
};

export default List;
