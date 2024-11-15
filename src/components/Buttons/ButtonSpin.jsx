import React, { useState, useEffect } from "react";
import card from "../../assets/buttons/cards.svg";
const ButtonSpin = ({ onClick, initialTime = 30 }) => {
  const [timeLeft, setTimeLeft] = useState(0); // Таймер в секундах
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Обновляем таймер каждую секунду
  useEffect(() => {
    let timerInterval = null;

    if (isTimerRunning && timeLeft > 0) {
      timerInterval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsTimerRunning(false);
    }

    return () => clearInterval(timerInterval); // Очищаем интервал при размонтировании
  }, [isTimerRunning, timeLeft]);

  // Форматирование времени в "мм:сс"
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  // Обработка клика по кнопке
  const handleClick = () => {
    if (!isTimerRunning && timeLeft === 0) {
      onClick(); // Открыть модалку
      setTimeLeft(initialTime); // Сбросить таймер
      setIsTimerRunning(true); // Запустить таймер заново
    }
  };

  return (
    <div
      className="spinBg"
      onClick={handleClick}
      style={{ cursor: timeLeft === 0 ? "pointer" : "not-allowed" }}
    >
      <img src={card} alt="card" className="spiner" />
      <div className="timer timerSpinPosition">
        {isTimerRunning ? (
          formatTime(timeLeft)
        ) : (
          <div className="open_btn_card">Открыть</div>
        )}
      </div>
    </div>
  );
};

export default ButtonSpin;
