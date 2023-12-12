import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAtom } from 'jotai';

import Header from '../../../components/Header.js';
import { objectsAtom } from './RouletteAtom.js';

import Styles from './RouletteSettings.module.css'

function  RouletteSettings() {
  const [isShowingNumberInput, setIsShowingNumberInput] = useState(false);
  const [isShowingWordsInput, setIsShowingWordsInput] = useState(false);

  const [firstNumber, setFirstNumber] = useState(1);
  const [lastNumber, setLastNumber] = useState(30);
  const [exceptNumbers, setExceptNumbers] = useState([]);
  const [numbers, setNumbers] = useState([]);

  const [words, setWords] = useState([]);

  const [objects, setObjects] = useAtom(objectsAtom);

  const navigate = useNavigate();

  const changeFirstNumber = (event) => {
    let value = event.target.value;
    if(!Number.isInteger(value)) value = Math.round(value);
    if(value < 0) setFirstNumber(0);
    else if(value > 999) setFirstNumber(999);
    else setFirstNumber(value);
  }

  const changeLastNumber = (event) => {
    let value = event.target.value;
    if(!Number.isInteger(value)) value = Math.round(value);
    if(value < 0) setLastNumber(0);
    else if(value > 999) setLastNumber(999);
    else setLastNumber(value);
  }
  
  const changeExceptNumber = (event) => {
    let value = event.target.value;
    let splitValue = [];
    value = value.replace(/ /g, '');
    splitValue = value.split(',');

    let newExceptNumbers = [];
  for (let i of splitValue) {
    if (!isNaN(parseInt(i))) {
      newExceptNumbers.push(parseInt(i));
    }
  }
  setExceptNumbers(newExceptNumbers);
  }

  const showNumberInput = () => {
    setIsShowingNumberInput(true);
    setIsShowingWordsInput(false);
  }

  const showWordsInput = () => {
    setIsShowingNumberInput(false);
    setIsShowingWordsInput(true);
  }

  const readyNumberRoulette = () => {
    let newNumbers = [];
    for(let i = firstNumber; i <= lastNumber; i++) {
      if(!exceptNumbers.includes(i)) newNumbers.push(i);
    }
    setNumbers(newNumbers);
  
    let newObjects = [];
    for(let i of newNumbers) { // newNumbers 배열을 직접 사용
      newObjects.push({
        option: `${i}`,
        style: { backgroundColor: 'gray', textColor: 'white'  },
        percentage: (1/newNumbers.length)*100, // newNumbers.length를 사용
        optionSize: 1
      });
    }
    setObjects(newObjects);
  
    navigate(`/program/1/play/`);
  }

  

  const readyWordsRoulette = () => {

  }

  return (
    <div>
      <Header />
      <section>
        <h1 className={Styles.Head} onClick={showNumberInput}>번호 뽑기</h1>
        {
          (isShowingNumberInput) &&
          <div className={Styles.SettingsWrapper}>
            <div className={Styles.InputWrapper}>
              <div className={Styles.NumberInputWrapper}>
                <input
                  type='number'
                  value={firstNumber}
                  onChange={changeFirstNumber}
                  onFocus={(event) => {event.target.select();}}
                />
                <p>번 부터</p>
                <div /><div /><div />
                <input
                  type='number'
                  value={lastNumber}
                  onChange={changeLastNumber}
                  onFocus={(event) => {event.target.select();}}
                />
                <p>번 까지</p>
              </div>
              <div className={Styles.NumberExceptInputWrapper}>
                <p>제외할 번호 입력(쉼표로 구분)</p>
                <input
                  placeholder='예시) 1,2,3'
                  onChange={changeExceptNumber}
                />
              </div>
            </div>
            <button className={Styles.RouletteBtn} onClick={readyNumberRoulette}>추첨하기</button>
          </div>
        }
        <h1 className={Styles.Head} onClick={showWordsInput}>단어 뽑기</h1>
        {
          (isShowingWordsInput) &&
          <div className={Styles.SettingsWrapper}>
            <div className={Styles.InputWrapper}>
              <div className={Styles.WordsInputWrapper}>
                <textarea placeholder={'추첨할 단어를 쉼표로 구분해주세요\n 예시) 사과, 바나나, 배'} />
              </div>
            </div>
            <button className={Styles.RouletteBtn} onClick={readyWordsRoulette}>추첨하기</button>
          </div>
        }
      </section>
    </div>
  );
}

export default RouletteSettings;

