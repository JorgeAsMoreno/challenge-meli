import React from 'react';
import './emptySearch.scss'
import EmptyImage from '../../public/assets/empty.jpeg'

const EmptySearch = ({ querySearch }) => {
  const query = localStorage.getItem('query');

  return (
    <div className='empty-container'>
      <img src={EmptyImage} alt='Mercado libre - No encontramos resultados' loading="lazy"/>
      <div>
        <p>No hay publicaciones que coincidan con tu búsqueda <b>{querySearch || query}</b></p>
        <ul>
          <li><b>Revisa la ortografía</b> de la palabra.</li>
          <li>Utiliza <b>palabras más genéricas</b> o menos palabras.</li>
        </ul>
      </div>
    </div>
  )
}

export default EmptySearch
