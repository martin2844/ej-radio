import React, {useState, useEffect} from 'react';
import './App.scss';
import Navbar from './components/navbar';
import {Helmet} from "react-helmet";
import Card from './components/cards';

import axios from 'axios';

function App() {
  // useState hook, para la info de tarjetas
  const [cardInfo, setCardInfo] = useState([])

  useEffect(() => {

    axios.get('https://www.mocky.io/v2/5cfbb853300000da1d0a8bd2').then((response) => {
      setCardInfo(response.data);
    }).catch((err) => {
      console.log(err);
      setCardInfo(false);
    });

  }, [cardInfo])




  let cardMap = cardInfo.map((card) => {
    return(
      <Card key={card.url} img={card.image} src={card.url} title={card.title} />
    )
  })




  return (
    <div>
              <Helmet>
                <meta charSet="utf-8" />
                <title>Ej Radio | Martin Chammah</title>
            </Helmet>
      <Navbar/>
      <section className='main-container'>
      {cardMap}
      </section>
    </div>
  );
}

export default App;
