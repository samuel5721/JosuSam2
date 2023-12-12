import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wheel } from 'react-custom-roulette';
import { useAtom } from 'jotai';

import Header from '../../../components/Header';
import FloatingActionButton from '../../../components/FloatingActionButton';
import DataBox from '../../../components/roulette/DataBox';
import { objectsAtom } from './RouletteAtom';

import Styles from './Roulette.module.css'

function  Roulette() {
  const navigate = useNavigate();

  const [prizeNumber, setPrizeNumber] = useState(0);
  const [mustSpin, setMustSpin] = useState(false);
  const [isShowDataBox, setIsShowDataBox] = useState(false);

  const [data, setData] = useAtom(objectsAtom);


  const updateOptionSize = (index, newSize) => {
    let validatedSize = newSize;

    if (!Number.isInteger(validatedSize)) validatedSize = Math.round(validatedSize);
    if (validatedSize > 1000) validatedSize = 999;
    if (validatedSize === null || validatedSize <= 0) validatedSize = 1;

    // 새로운 데이터 배열 생성
    const newData = data?.map((item, idx) => {
      if (idx === index) {
        return { ...item, optionSize: validatedSize };
      }
      return item;
    });

    // 전체 size 합계 계산
    const totalSize = newData.reduce((acc, item) => acc + item.optionSize, 0);

    // percentage를 비례적으로 업데이트
    const updatedData = newData.map(item => ({
      ...item,
      percentage: (item.optionSize / totalSize) * 100
    }));

    setData(updatedData);
  };

  const handleSpinClick = () => {
    if (!mustSpin) {
      const pivot = Math.floor((Math.random() * 99) +1);
      let stack = 0;

      let percentage = data?.map((row, idx) => row.percentage);

      let newPrizeNumber = null;
      percentage.some((row,idx) => {
        //2. 가중치 누적
        stack += row;

        // 3. 누적 가중치 값이 기준점 이상이면 종료
        if(pivot <= stack){
          newPrizeNumber  = idx;
          return true;
        }

      })
      if(newPrizeNumber === null) {
        setPrizeNumber(0)
      } else {
        setPrizeNumber(newPrizeNumber);
      }
      setMustSpin(true);
    }
  }

  const StopSpinning = () => setMustSpin(false);

  return (
    <div className={Styles.Wrapper}>
      <Header />
      <section className={Styles.Section}>
        <div className={Styles.FloatingWrapper}>
          <FloatingActionButton iconName='ChevronLeft' onClick={() => {navigate(`/program/1/`);}}/>
        </div>
        <div className={Styles.RouletteWrapper}>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            startingOptionIndex={Math.floor(Math.random() * data?.length)} 
            onStopSpinning={StopSpinning}
            innerBorderWidth={0}
            outerBorderWidth={0}
            radiusLineColor='white'
            radiusLineWidth={1}
            spinDuration={0.3}
            
          />
          {
          (!mustSpin) &&
          <>
            <div className={Styles.SelectedPrizeText}>{data[prizeNumber]?.option}</div>
            <div className={Styles.BtnWrapper}>
              <button className={Styles.RollBtn} onClick={handleSpinClick}>추첨</button>
              <button className={Styles.RollBtn} onClick={() => {setIsShowDataBox(!isShowDataBox)}}>확률</button>
            </div>
          </>
          }
        </div>
        {
          (isShowDataBox) && 
          <div className={Styles.DataWrapper}>
          {
            data?.map((e, index) => 
              <DataBox 
                name={e?.option} 
                size={e?.optionSize}
                color={e?.style.backgroundColor}
                onSizeChange={(newSize) => updateOptionSize(index, newSize)} 
              />)
          }
        </div>
        }
      </section>
  </div>
  );
}

export default Roulette;

