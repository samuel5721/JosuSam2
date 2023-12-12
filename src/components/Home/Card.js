import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Card.module.css';

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired
}
/**
 * 
 * @param id 아이디 고유 번호 1부터 시작
 * @param title 제목 문자열
 * @returns 프로그램 카드 출력
 */
function Card({ id, title }) {
  const navigate = useNavigate();

  const images = require.context('../../image/Cards/', true);
  let image;
  try {
    image = images(`./card${id}.png`);
  } catch (e) {
    image = images(`./test.gif`);
  }
  
  return (
  <div className={styles.Wrapper} onClick={() => {navigate(`/program/${id}`); window.location.reload();}}>
    <div className={styles.ImageWrapper}>
      <img className={styles.Image} alt={`card${id}`} src={image} />
    </div>
    <div className={styles.Title}>{title}</div>
  </div>
  );
}

export default Card;