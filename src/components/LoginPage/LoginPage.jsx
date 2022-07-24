import "./style.css";

const LoginPage = ({ setStart }) => {
  function Login() {
    setStart(true);
  }
  return (
    <section className="HomePageContainer">
      <div className="textGroup">
        <img src="/Nu-Kenzie-Logo-White.svg" alt="" className="textGroupLogo" />
        <h2 className="textGroupH2">Centralize o controle das sas finanças</h2>
        <p className="textGroupP">de forma rápida e segura</p>
        <button onClick={() => Login()} className="textGroupButton">
          Iniciar
        </button>
      </div>
      <img className="HomePageImg" src="/HomePage-img.svg" alt="" />
    </section>
  );
};

export default LoginPage;
