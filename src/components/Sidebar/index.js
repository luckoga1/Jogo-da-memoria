import "./style.css";
import Logo from "../../assets/logo.svg";

const Sidebar = ({ setStateCards, card }) => {
  const handleReset = () => {
    card.forEach((card) => {
      card.turned = false;
    });

    setStateCards(card);
  };

  return (
    <div className="sidebar">
      <img src={Logo} alt="logo" />
      <button onClick={() => handleReset()}>RESET</button>
    </div>
  );
};

export default Sidebar;
