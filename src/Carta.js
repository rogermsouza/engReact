import { useState } from 'react'

export default function Card({ card, index, clickhandler }) {

    const cardClassName = card.status ? 'ativa' : ''
 
    return (
      <div className={`card ${card.status}`} onClick={() => clickhandler(index)}>
        <img src={card.img} alt={card.name} />
      </div>
    );
  }