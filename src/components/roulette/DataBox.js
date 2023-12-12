import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Styles from './DataBox.module.css';

DataBox.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  onSizeChange: PropTypes.func.isRequired,
}
/**
 * 
 * @param name 데이터 제목 문자열
 * @param size 데이터할당 크기 정수 
 * @param color 색깔 문자열
 * @param onSizeChange 값 변경 시 실행할 함수
 * @returns 데이터박스 출력
 */
function DataBox({ name, size, color, onSizeChange }) {
  const handleSizeChange = (event) => {
    onSizeChange(Number(event.target.value));
  };

  return(
    <div className={Styles.Wrapper}>
      <div className={Styles.NameWrapper}>
        <div className={Styles.ColorCircle} style={{ backgroundColor:`${color}` }} />
        <div className={Styles.Name}>{name}</div>
      </div>
      <input 
        className={Styles.SizeInput} 
        type='number' 
        value={size} 
        onChange={handleSizeChange} 
        onFocus={(event) => {event.target.select();}}
      />
    </div>
  );
}


export default DataBox