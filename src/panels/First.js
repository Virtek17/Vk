import { Panel, View, ModalRoot, ModalCard, Group,  Spacing, Button, SplitLayout, SplitCol, Avatar,  Header, Cell, PanelHeader, Image } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import React, {useEffect, useState } from 'react';
import ProgressBar from '../components/ProgressBar';
import clickSound from '../assets/click.mp3';
import monkeyImage from '../assets/monkey.png';
import monkeyImage2 from '../assets/monkey2.png';
import monkeyImage3 from '../assets/monkey3.png';
import eat1 from '../assets/shop/eat1.svg'
import eat2 from '../assets/shop/eat2.svg'
import eat3 from '../assets/shop/eat3.svg'
import eat4 from '../assets/shop/eat4.svg'
import eat5 from '../assets/shop/eat5.svg'
import eat6 from '../assets/shop/eat6.svg'
import eat7 from '../assets/shop/eat7.svg'
import eat8 from '../assets/shop/eat8.svg'
import eat9 from '../assets/shop/eat9.svg'
import eat10 from '../assets/shop/eat10.svg'
import eat11 from '../assets/shop/eat11.svg'

import buter from '../assets/shop/buter.svg'
import soup from '../assets/shop/soup.svg'
import QuestModal from '../components/QuestModal';

import UiHeader from '../components/UiHeader.jsx';
import MainContent from '../components/MainContent';
import BalansAndTimer from '../components/BalansAndTimer';
import Particles from '../components/Particles';
import Buster from '../components/Busters/Buster';

import ButtonShop from '../components/Buttons/ButtonShop'
import ButtonQuests from '../components/Buttons/ButtonQuests'
import ButtonFight from '../components/Buttons/ButtonFight'

import Assider from '../components/Assider.jsx';

import '../style/impuls.css';
import '../style/click.css';
import '../input.css';
import '../style/shopGrid.css';
import '../style/main.css';

export const First = ({id, fetchedUser}) => {
  const [activePanel, setActivePanel] = useState('panel1'); // состояние для переключение панелей
  const [balans, setBalans] = useState(5);
  const [score, setScore] = useState(0); // состояние для отображения счёта 
  const [bust, setBust] = useState(1);  // состояние для изменения кол-ва очков за клик
  const [level, setLevel] = useState(1); // состояние для отрисовки уровня
  const [maxScore, setMaxScore] = useState(100); // максимальное число очков для прохождения первого уровня
  const [seconds, setSeconds] = useState(0); // кол-во секунд по умолчанию 
  const [isTimerRunning, setIsTimerRunning] = useState(false); // запущен ли таймер
  const [particles, setParticles] = useState([]); // для исчезающих цифр
  const [activeModal, setActiveModal] = useState(null); // состояние активной модалки
  const [modalHistory, setModalHistory] = useState([]); // массив со всеми модалками  
  const [isZoomed, setIsZoomed] = useState(false); // приближение image при клике

  const images = [monkeyImage, monkeyImage2, monkeyImage3];

  const MODAL_CARD_MONEY_SEN = 'money-send';
  const MODAL_SHOP = 'modal-shop';
  const MODAL_QUEST = 'modal-quest';
  const MODAL_BUY = 'modal-buy';

  const minutesSting = String(Math.floor(seconds / 60)).padStart(2, '0');
  const seceondsString = String(seconds % 60).padStart(2, '0');

  
  const { photo_200, first_name, last_name, city } = fetchedUser || {};
  
  useEffect(() => { // прогресс бар
    if(score >= maxScore) {
      setScore(0);
      setLevel((lvl) => lvl + 1)
      setMaxScore(maxScore + 100);
      changeActiveModal(MODAL_CARD_MONEY_SEN);
    }
  }, [score, maxScore])
  
  const setBgColor = () => {
    setTimeout(() => {
      let elem = document.querySelector('.vkuiModalCardBase__container');
      elem.style.backgroundColor = '#7E9999';
      elem.style.border = '5px solid #333432'
    }, 10)

  }

  // переключение модальных окон
  const changeActiveModal = (activeModal) => {

    activeModal = activeModal || null;
    let localModalHistory = modalHistory ? [...modalHistory] : [];
    
    if (activeModal == null) {
      localModalHistory = [];
    } else if (modalHistory.includes(activeModal)) {
      localModalHistory = localModalHistory.splice(0, localModalHistory.indexOf(activeModal) + 1);
    } else {
      localModalHistory.push(activeModal);
    }
    
    setActiveModal(activeModal);
    setModalHistory(localModalHistory);
    setBgColor();
  }

  // закрытие модального окна
  const modalBack = () => {
    changeActiveModal(modalHistory[modalHistory.length - 2]);
  }

  // закрытие всех модалок
  const closeAllModal = () => {
    setActiveModal(null);
  }

  useEffect(() => { // запуск таймер
    let interval;
    if(isTimerRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => Math.max(s - 1, 0));
      }, 1000);
    } 
    else if (seconds === 0 && isTimerRunning) {
      // таймер закончился
      setBust(1);
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);

  }, [isTimerRunning, seconds]);

  // активация бустера
  const activeBust = (bustValue, duration, coast) => {
    if (balans >= coast) {
      setBalans(balans-coast);
      setBust(bustValue);      // Устанавливаем новое значение буста
      setSeconds(duration);    // Устанавливаем таймер
      setIsTimerRunning(true); // Запускаем таймер
      closeAllModal(); // закрываем модалку
      boughtBust();
    }   
  }

  // зву при клике
  const playSound = (soundUrl) => {
    const audio = new Audio(soundUrl);
    audio.volume = 0.1;
    audio.play();
  };
   
  // действия при клике на image
  const handleClick = () => {
    handleClickOnSquare();
    // playSound(clickSound); // звук клика
    setScore((s) => s + bust); // ++ счет
    setIsZoomed(true); // приближает image
    setTimeout(() => {
      setIsZoomed(false); // отдаляет image
    }, 100);
  }

  // выдает случайный цвет цифрам 
  const getRandomColor = () => {
    const r = Math.random() * 256;
    const g = Math.random() * 256;
    const b = Math.random() * 256;
    return `rgb(${r}, ${g}, ${b})`;
  }

  // при клике на квадарт рисуются цифры
  const handleClickOnSquare = (event) => {
    const randomX = Math.random() * 150;
    const randomY = Math.random() * 150;
    const randomColor = getRandomColor();

    const newParticle = {
      id: Date.now(),
      x: randomX,
      y: randomY,
      color: randomColor,
    };

    setParticles([...particles, newParticle]);

    setTimeout(() => {
      setParticles((particles) =>
        particles.filter((particle) => particle.id !== newParticle.id)
      );
    }, 1000);
  }

  // ДОРАБОТКА (+1 к балансу за каждый пятый клик)
  // +1 к балансу когда счёт кратен пяти
  useEffect(() => {
    if (score % 5 == 0) {
      setBalans((e) => e+=1);
    }
  }, [score])


  const [selectedItem, setSelectedItem] = useState({ image: '', price: 0, time: 0, value: 0 });
  const [purchasedBoosters, setPurchasedBoosters] = useState([]); // список купленных бустеров

  const handleItemClick = (image, price, time, value) => {
    setSelectedItem({ image, price, time, value });
    setPurchasedBoosters((prevBoosters) => [
      ...prevBoosters,
      { image, price, time, value }
    ]);
    changeActiveModal(MODAL_BUY);
  };







  // модалки
  const modal = (
    <ModalRoot activeModal={activeModal} onClose={modalBack}>
      <ModalCard 
        style={{color: 'red'}}
        id={MODAL_CARD_MONEY_SEN}
        onClose={() => changeActiveModal(null)}
        header='Поздравляем'
        subheader={`Вы достигли ${level} уровня`}
        actions={
        <React.Fragment>
          <Spacing size={16}/>
          <Button
            onClick={modalBack}
            size='l'
            mode='primary'
            stretched>
            Закрыть
          </Button>
        </React.Fragment>
        }
      />

      <ModalCard 
        id={MODAL_SHOP}
        
        header="Shop"
        onClose={() => changeActiveModal(null)}
        actions={
          <React.Fragment>
            <div className='shop_container'>
              <Buster className="shop_items_style" onClick={() => handleItemClick(buter, 5, 10, 2)}  name={buter} coast={5}/>
              <Buster className="shop_items_style" onClick={() => handleItemClick(soup, 7, 8, 3)} name={soup} coast={7}/>
              <Buster className="shop_items_style" onClick={() => activeBust(4, 10, 4)} name={eat3} coast={4} />
              <Buster className="shop_items_style" onClick={() => activeBust(10, 5, 10)} name={eat4} coast={10} />
              <Buster className="shop_items_style" onClick={() => activeBust(7, 7, 15)} name={eat5} coast={15} />
              <Buster className="shop_items_style" onClick={() => activeBust(6, 10, 10)} name={eat6} coast={10}/>
              <Buster className="shop_items_style" onClick={() => activeBust(8, 9, 8)} name={eat7} coast={8}/>
              <Buster className="shop_items_style" onClick={() => activeBust(12, 6, 10)} name={eat8} coast={10}/>
              <Buster className="shop_items_style" onClick={() => activeBust(5, 8, 8)} name={eat9} coast={8}/>
              <Buster className="shop_items_style" onClick={() => activeBust(9, 10, 13)} name={eat10} coast={13}/>
              <Buster className="shop_items_style" onClick={() => activeBust(25, 3, 50)} name={eat11} coast={50}/>
            </div>
          </React.Fragment>
        }
      />

      <ModalCard 
        id={MODAL_QUEST}
        actions={
          <QuestModal balance={balans} level={level}></QuestModal>
        }
      />    

      <ModalCard 
        id={MODAL_BUY}
        actions={
          <div className="modalBuy">
            <div className="modalImg"><Image src={selectedItem.image}/></div>
            <div>{`x${selectedItem.value} point`}</div>
            <div>{`${selectedItem.time} sec`}</div>
            <button className="modalBtn" onClick={() => {activeBust(2, 10, 5)}}>{`Price: ${selectedItem.price}`}</button>
          </div>
        }
      />    
    </ModalRoot>
  );



  // прототип кликера
  return (
    <SplitLayout modal={modal}> 
      <SplitCol>
        <View activePanel={activePanel} >          
          <Panel id="panel1" className="MyPanel">
            <PanelHeader>Главная</PanelHeader>
            <div className='row'>

              <div className='header'>
                <UiHeader balans={balans}>
                  {fetchedUser && (<Avatar src={photo_200} size={96 } className='avatar'/>)}
                </UiHeader>
              </div>

              <div className='main' >
                <MainContent handleClick={handleClick} score={score} bust={bust} level={level} images={images} isZoomed={isZoomed} particles={particles}/>
                <Assider minutesString={minutesSting} secondsString={seceondsString} purchasedBoosters={purchasedBoosters}/>
              </div>
              

              <div  className='MyFooter'>
                {/* нижние кнопки */}
                <div style={{height: '108px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%', backgroundColor: '#7E9999', borderTop: '5px solid #F4F1E4', padding: '10px 0', position: 'relative'}}>
                  <ButtonFight />
                  <ButtonQuests onClick={() =>changeActiveModal(MODAL_QUEST)}/>
                  <ProgressBar value={score} maxValue={maxScore} level={level}/>
                  <ButtonShop onClick={() =>changeActiveModal(MODAL_SHOP)}/>
                </div>
              </div>
            </div>
              <BalansAndTimer score={score} minutesSting={minutesSting} seceondsString={seceondsString} />
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>    
  );
}

const styles = `
.currency-counters {
  display: flex;
}
`
export const GlobalStyles = () => <style>{styles}</style>

First.propTypes = {
    id: PropTypes.string.isRequired,
    fetchedUser: PropTypes.shape({
      photo_200: PropTypes.string,
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      city: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  };

