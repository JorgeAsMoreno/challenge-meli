import React from 'react';
import { footerCards } from './links';

const FooterCards = () => {
  return (
    <div className='footerCards_container'>
      {
        Object.values(footerCards).map((card, index) => (
          <div key={index} className='footerCards_container__card'>
            <img
              alt={card.title}
              src={card.image}
              loading='lazy'
            />
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            {
              card.ctaLink !== null ?
              <a href={card.link} rel='noreferrer'>{card.ctaLink}</a> : null
            }
          </div>
        ))
      }
    </div>
  )
}

export default FooterCards
