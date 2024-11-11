import "../../style/cards.css";
import diamond from "../../../public/icons_main/diamond.svg";
import bananas from "../../../public/shop/eat/bananas.svg";
import { useState, useEffect } from "react";

// Инициализация карточек
const initialItems = [
  { icon: bananas, label: "Gym Лига", value: 100 },
  { icon: diamond, label: "Gym Лига", value: 1 },
  { icon: diamond, label: "Gym Лига", value: 2 },
  { icon: diamond, label: "Gym Лига", value: 3 },
  { icon: diamond, label: "Gym Лига", value: 4 },
  { icon: diamond, label: "Gym Лига", value: 5 },
  { icon: diamond, label: "Gym Лига", value: 6 },
  { icon: diamond, label: "Gym Лига", value: 7 },
  { icon: diamond, label: "Gym Лига", value: 8 },
];

const UPDATE_INTERVAL = 60000; // Интервал обновления карточек, 60 секунд

const Cards = ({ balans, setBalans }) => {
  const [items, setItems] = useState(initialItems);
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [hasCardBeenClicked, setHasCardBeenClicked] = useState(false);

  // Функция для случайного перемешивания карточек
  const shuffleItems = () => {
    const shuffled = [...items].sort(() => Math.random() - 0.5);
    setItems(shuffled);
  };

  // Перемешивание карточек каждые 60 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      shuffleItems();
      setFlippedIndex(null);
      setHasCardBeenClicked(false);
    }, UPDATE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  // Обработка клика по карточке
  const handleCardClick = (index) => {
    if (!hasCardBeenClicked) {
      setFlippedIndex(index);
      setBalans(balans + items[index].value);
      setHasCardBeenClicked(true);
    }
  };

  return (
    <div className="card_row">
      {items.map((item, index) => (
        <div
          className="flip-card"
          key={index}
          onClick={() => handleCardClick(index)}
        >
          <div
            className={`flip-card-inner ${
              flippedIndex === index ? "flipped" : ""
            }`}
          >
            <div className="flip-card-front">
              <p className="title">?</p>
              <p>{item.label}</p>
            </div>
            <div className="flip-card-back">
              <img src={item.icon} alt="" className="iconPrize" />
              <p className="card_price">{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
