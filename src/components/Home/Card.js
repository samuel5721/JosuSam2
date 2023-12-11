import React, { useEffect, useState } from 'react';
import { Params, useParams, Link } from 'react-router-dom';
import styles from './Card.module.css';

/**
 * 
 * @param id 아이디 고유 번호 0부터 시작
 * @param imgUrl 이미지 경로 문자열
 * @param title 제목 문자열
 * @returns 
 */
function Card({ id, imgUrl, title }) {
  const images = require.context('../../image/Cards/', true);
  let image;
  try {
    image = images(`./${imgUrl}`);
  } catch (e) {
    image = images(`./test.gif`);
  }
  
  return (
  <div className={styles.Wrapper}>
    <div className={styles.ImageWrapper}>
      <img className={styles.Image} alt='이미지없음' src={image} />
    </div>
    <div className={styles.Title}>{title}</div>
  </div>
  );
}

export default Card;