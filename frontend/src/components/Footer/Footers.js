import React from 'react';
import { footerLinks } from './links';
import './footer.scss'
import FooterCards from './FooterCards';

const Footer = () => {
  return (
    <footer className='footer_container'>
      <div>
        <FooterCards />
      </div>
      <div>
        <ul className='footer_container__list'>
          {Object.values(footerLinks).map(({ link, title}, index) => (
            <li key={index}>
              <a href={link} rel='noreferrer'>
                {title}
              </a>
            </li>
          ))}
        </ul>
        <small>
        Copyright © 1999-2023 El presente canal de instrucción o ambiente, es operado por DeRemate.Com de México, S. de R.L. de C.V. identificada bajo la marca comercial "Mercado Libre". <br />
        Insurgentes Sur 1602 Piso 9 Suite 900, Crédito Constructor Benito Juarez, 03940 Ciudad de México, CDMX, Mexico
        </small>
      </div>
    </footer>
  )
}

export default Footer
