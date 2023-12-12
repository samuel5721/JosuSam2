import React, { useEffect, useState } from 'react';

import Card from '../components/Home/Card';
import Header from '../components/Header';

import Styles from './Home.module.css';

function Home() {

  return (
    <div>
      <Header />
      <section className={Styles.Section}>
        <div className={Styles.SectionLine}>
          <Card id={1} title={'번호/단어 추첨'}/>
          <Card id={2} title={'모둠 추첨'}/>
          <Card id={3} title={'스톱워치/타이머'}/>
          <Card id={4} title={'자리 바꾸기'}/>
          <Card id={5} title={'TTS 말하기'}/>
        </div>
        <div className={Styles.SectionLine}>
          <Card id={6} title={'스피드퀴즈'}/>
          <Card id={7} title={'설정'}/>
          <Card id={8} title={'정보'}/>
          <Card id={9} title={'까와이'}/>
          <Card id={10} title={'까와이'}/>
        </div>
      </section>
    </div>
    )
}

export default Home;