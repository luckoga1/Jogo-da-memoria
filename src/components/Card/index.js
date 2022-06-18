import "./style.css";
import CardBack from "../../assets/card-back.png";

const Card = ({ card, stateCards, setStateCards }) => {
  const handleTurnedCard = () => {
    const localCards = [...stateCards];

    //O current vai procurar a carta que foi clicada
    const currentCard = localCards.find((item) => item.id === card.id);

    //O only turned vai filtrar a carta que está virada
    const onlyTurnedCard = localCards.filter((item) => item.turned);

    if (onlyTurnedCard.length > 1) {
      return;
    }

    if (onlyTurnedCard.length > 0 && card.slug === onlyTurnedCard[0].slug) {
      currentCard.turned = !currentCard.turned;
      setStateCards(localCards);

      setTimeout(() => {
        handleClearCards(currentCard, onlyTurnedCard[0], localCards);
      }, 800);
      return;
    }

    currentCard.turned = !currentCard.turned;
    setStateCards(localCards);

    if (onlyTurnedCard.length) {
      setTimeout(() => {
        localCards.forEach((item) => {
          item.turned = false;
        });
        console.log(localCards);
        setStateCards([...localCards]);
      }, 1000);
    }
  };

  const handleClearCards = (card1, card2, localCard) => {
    //verifica se não esta sendo clicado a mesma carta
    if (card1.id === card2.id) {
      return;
    }
    //filtrar as cartas que não pertencem as escolhidas
    const filteredCards = localCard.filter(
      (item) => item.id !== card1.id && item.id !== card2.id
    );
    setStateCards(filteredCards);
  };

  return (
    <img
      className="card"
      src={card.turned ? card.image : CardBack}
      alt="card"
      onClick={() => handleTurnedCard()}
    />
  );
};

export default Card;
