import { Panel, View, ModalRoot, ModalCard, Group,  Spacing, Button, SplitLayout, SplitCol, Avatar,  Header, Cell, PanelHeader, Image } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import React, {useEffect, useState } from 'react';
import ProgressBar from '../components/Main/ProgressBar.jsx';
import clickSound from '../assets/click.mp3';
import unit1 from '../assets/unit1.png';
import monkeyImage from '../assets/monkey.png';
import monkeyImage2 from '../assets/monkey2.png';
import monkeyImage3 from '../assets/monkey3.png';

import buter from '../assets/shop/buter.svg'
import soup from '../assets/shop/soup.svg'
import smuzy from '../assets/shop/smuzy.svg'
import juce from '../assets/shop/juce.svg'
import chokolate from '../assets/shop/chokolate.svg'
import bananas from '../assets/shop/bananas.svg'

import tabIconEat from '../assets/shop/eatTabIcon.svg';
import tabIconClothes from '../assets/shop/clothesTabIcon.svg';


import QuestModal from '../components/ModalWindows/QuestModal.jsx';

import UiHeader from '../components/Main/UiHeader.jsx';
import MainContent from '../components/Main/MainContent.jsx';
import BalansAndTimer from '../components/Main/BalansAndTimer.jsx';
import Particles from '../components/Main/Particles.jsx';
import Buster from '../components/Boosters/Buster.jsx';

import ButtonShop from '../components/Buttons/ButtonShop'
import ButtonQuests from '../components/Buttons/ButtonQuests'
import ButtonFight from '../components/Buttons/ButtonFight'

import Assider from '../components/Main/Assider.jsx';
import ButtonSpin from '../components/Buttons/ButtonSpin.jsx'

import MainModal from '../components/CustomModals/MainModal.jsx';

import '../style/reset.css'
import '../style/impuls.css';
import '../style/click.css';
import '../input.css';
import '../style/shopGrid.css';
import '../style/main.css';
// import '../components/CustomModals/MainModal.css'
import SpinWheel from '../components/Buttons/Cards.jsx';
import { useSearchParams } from '@vkontakte/vk-mini-apps-router';

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

  const images = [unit1, monkeyImage2, monkeyImage3];

  const MODAL_CARD_MONEY_SEN = 'money-send';
  const MODAL_SHOP = 'modal-shop';
  const MODAL_QUEST = 'modal-quest';
  const MODAL_SPINER = 'modal-spiner';

  const minutesSting = String(Math.floor(seconds / 60)).padStart(2, '0');
  const seceondsString = String(seconds % 60).padStart(2, '0');

  
  const { photo_200, first_name, last_name, city } = fetchedUser || {};
  
  useEffect(() => { // прогресс бар
    if(score >= maxScore) {
      setScore(0);
      setLevel((lvl) => lvl + 1)
      setMaxScore(maxScore + 100);
      openModal(MODAL_CARD_MONEY_SEN);
    }
  }, [score, maxScore])
  
  const setBgColor = () => {// задает фон модалок
    setTimeout(() => {
      let elem = document.querySelector('.vkuiModalCardBase__container');
      elem.style.backgroundColor = '#FFA800';
      elem.style.border = '5px solid #F6C91E'
    }, 10)

  }


  const openModal = (activeModal) => {
    setActiveModal(activeModal);
    setBgColor();
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


  const [imgBust, setImgBust] = useState();

  // активация бустера
  const activeBust = (img, price, time, value) => {
    if (balans >= price) {
      setBalans(balans-price); // уменьшает баланс
      setBust(value);      // Устанавливаем новое значение буста
      setSeconds(time);    // Устанавливаем таймер
      setIsTimerRunning(true); // Запускаем таймер
      closeAllModal(); // закрываем модалку
      setImgBust(img); 
      closeMainModal();
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



  // модалки
  const modal = (
    <ModalRoot activeModal={activeModal} onClose={closeAllModal}>
      <ModalCard 
        style={{color: 'red'}}
        id={MODAL_CARD_MONEY_SEN}
        onClose={() => closeAllModal(null)}
        header='Поздравляем'
        subheader={`Вы достигли ${level} уровня`}
        actions={
        <React.Fragment>
          <Spacing size={16}/>
          <Button
            onClick={closeAllModal}
            size='l'
            mode='primary'
            stretched>
            Закрыть
          </Button>
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
        id={MODAL_SPINER}
        onClose={() => setActiveModal(null)}
        actions={
          <React.Fragment>
            <SpinWheel balans={balans} setBalans={setBalans}/>
          </React.Fragment>
        }
      />
    </ModalRoot>
  );

  const [isOpenModal, setIsOpenModal] = useState(false);
  
  const openMainModal = () => setIsOpenModal(true);
  const closeMainModal = () => setIsOpenModal(false);


  const [activeTab, setActiveTab] = useState('eat');
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }


  // прототип кликера
  return (
    <SplitLayout modal={modal}> 
      <SplitCol>
        <View activePanel={activePanel} >          
          <Panel id="panel1" className="MyPanel">

            {/* Тестовое модальное окно */}
            {isOpenModal && 
            <MainModal onClose={closeMainModal}>
              <div className='header_modal__row'>
                <div className='header_modal__shop'>
                  <button
                    onClick={() => handleTabChange('eat')} 
                    className={`header_modal__btn ${activeTab === 'eat' ? 'active' : ''}`}>
                      <img src={tabIconEat} alt='кнопка магазин'/>
                    </button>

                  <button 
                    onClick={() => handleTabChange('clothes')} 
                    className={`header_modal__btn ${activeTab === 'clothes' ? 'active' : ''}`}>
                      <img src={tabIconClothes} alt='кнопка магазин'/>
                  </button>
                </div>
              </div>
              <div className='shop_container'>

                {activeTab === 'eat' && (
                <>
                  <Buster className="shop_items_style" onClick={() => activeBust(buter, 5, 10, 10 )} img={buter} price={5} time={10} value={10}/>
                  <Buster className="shop_items_style" onClick={() => activeBust(soup, 12, 8, 6 )} img={soup} price={12} time={8} value={6}/>
                  <Buster className="shop_items_style" onClick={() => activeBust(smuzy, 5, 4, 3)} img={smuzy} price={5} time={4} value={3} />
                  <Buster className="shop_items_style" onClick={() => activeBust(juce, 4, 5, 2)} img={juce} price={4} time={5} value={2} />
                  <Buster className="shop_items_style" onClick={() => activeBust(chokolate, 8, 12, 5)} img={chokolate} price={8} time={12} value={5} />
                  <Buster className="shop_items_style" onClick={() => activeBust(bananas, 2, 12, 1.5)} img={bananas} price={2} time={12} value={1.5}/>
                </>
                )}
                {activeTab === 'clothes' && (
                  <>
                    <Buster className="shop_items_style" onClick={() => activeBust(bananas, 2, 12, 1.5)} img={bananas} price={2} time={12} value={1.5}/>
                  </>
                )}
 
              </div>  
            </MainModal>}
                
            <PanelHeader>Gym-лига</PanelHeader>
            <div className='row'>

              <div className='header'>
                <UiHeader balans={balans} ></UiHeader>
              </div>
              <div className='main' >
                <MainContent handleClick={handleClick} score={score} bust={bust} level={level} images={images} isZoomed={isZoomed} particles={particles}/>
                <Assider img={imgBust} minutesSting={minutesSting} seceondsString={seceondsString} isTimerRunning={isTimerRunning}/>
                <ButtonSpin onClick={() => openModal(MODAL_SPINER)} />
              </div>
              
              <ProgressBar value={score} maxValue={maxScore} level={level}/>
              <div  className='MyFooter'>
                {/* нижние кнопки */}
                <div className='footer_buttons'>
                  <ButtonQuests onClick={() =>openModal(MODAL_QUEST)}/>
                  <ButtonFight />
                  <ButtonShop onClick={() =>openMainModal()}/>
                </div>
              </div>
            </div>
              {/* <BalansAndTimer score={score} minutesSting={minutesSting} seceondsString={seceondsString} /> */}
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

