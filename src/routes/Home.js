import React, { useEffect, useState } from 'react';

import Card from '../components/Home/Card'

import Styles from './Home.module.css'

function Home() {
  return (
    <section className={Styles.Section}>
      <div className={Styles.SectionLine}>
        <Card id={0} imgUrl={'test.gif'} title={'까와이'}/>
        <Card id={1} imgUrl={'test.gif'} title={'까와이'}/>
        <Card id={2} imgUrl={'test.gif'} title={'까와이'}/>
        <Card id={3} imgUrl={'test.gif'} title={'까와이'}/>
        <Card id={4} imgUrl={'test.gif'} title={'까와이'}/>
      </div>
      <div className={Styles.SectionLine}>
        <Card id={5} imgUrl={'test.gif'} title={'까와이'}/>
        <Card id={6} imgUrl={'test.gif'} title={'까와이'}/>
        <Card id={7} imgUrl={'test.gif'} title={'까와이'}/>
        <Card id={8} imgUrl={'test.gif'} title={'까와이'}/>
        <Card id={9} imgUrl={'test.gif'} title={'까와이'}/>
      </div>
    </section>
    )
}

export default Home;