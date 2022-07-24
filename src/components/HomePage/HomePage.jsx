import "./style.css";
import Form from "./Form/Form";
import List from "./List/List";
import { useState } from "react";
import NavBar from "./NavBar/NavBar";
import TotalMoney from "./TotalMoney/TotalMoney";

const HomePage = ({ setStart }) => {
  const [entry, SetEntry] = useState([]);

  return (
    <>
      <NavBar setStart={setStart} />

      <section className="Container">
        <div>
          <Form SetEntry={SetEntry} />
          <TotalMoney entry={entry} />
        </div>
        <div>
          <List entry={entry} SetEntry={SetEntry} />
        </div>
      </section>
    </>
  );
};

export default HomePage;
