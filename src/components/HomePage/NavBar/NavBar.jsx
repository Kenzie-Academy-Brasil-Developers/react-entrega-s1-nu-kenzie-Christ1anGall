import "./style.css";

const NavBar = ({ setStart }) => {
  function Logout() {
    setStart(false);
  }
  return (
    <header className="NavBarContainer">
      <img
        className="NavBarContainerLogo"
        src="/Nu-Kenzie-Logo-Black.svg"
        alt=""
      />

      <button
        className="NavBarContainerButton"
        onClick={() => {
          Logout();
        }}
      >
        Início
      </button>
    </header>
  );
};

export default NavBar;
