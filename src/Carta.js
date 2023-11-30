import { useState } from 'react'

// Carta.js
import React from 'react';

export default function Card({ card, index, clickhandler }) {
  const cardClassName = card && card.status ? card.status : '';

  return (
    <div className={`card ${cardClassName}`} onClick={() => clickhandler(index)}>
      {card && card.img && <img src={card.img} alt={card.name} />}
    </div>
  );
}
