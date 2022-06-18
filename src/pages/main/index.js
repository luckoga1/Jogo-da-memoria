import "./style.css";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import Cards from "../../cards.js";
import CongratsImage from "../../assets/congrats.png";

function Main() {
  const [stateCards, setStateCards] = useState([...Cards]);

  return (
    <div className="container">
      <Sidebar card={Cards} setStateCards={setStateCards} />

      <div className="container-main">
        <div
          className="container-cards"
          style={{
            justifyContent: `${stateCards.length ? "flex-start" : "center"}`,
          }}
        >
          {stateCards.length ? (
            stateCards.map((card) => (
              <Card
                key={card.id}
                card={card}
                stateCards={stateCards}
                setStateCards={setStateCards}
              />
            ))
          ) : (
            <img src={CongratsImage} alt="parabéns" />
          )}
        </div>
      </div>
    </div>
  );
}

export default Main;
