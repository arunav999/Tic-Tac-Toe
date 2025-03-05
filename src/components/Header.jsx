import headImg from "../../public/game-logo.png";

const Header = () => {
  return (
    <header>
      <img src={headImg} alt="Game Logo" />
      <h1>Tic-Tac-Toe</h1>
    </header>
  );
};

export default Header;
