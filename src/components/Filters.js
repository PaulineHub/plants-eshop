import React, { useState } from 'react'

const Filters = () => {
  const [isActive, setActive] = useState(false);
  const displayMobileFilters = () => {
    setActive(!isActive);
  }
  return (
    <>
      <i
        className='fas fa-bars dark-color'
        id='fa-bars-filter'
        onClick={displayMobileFilters}
      ></i>
      <section
        data-js-catalogue-filter
        className={`filter-section ${isActive ? 'show-filter-mobile' : ''}`}
      >
        <i
          className='fa-solid fa-xmark dark-color'
          id='closeFilterBtn'
          onClick={displayMobileFilters}
        ></i>
        <ul>
          <span>Sélection</span>
          <li>
            <input type='radio' value='all' name='filter' id='all' />
            <label htmlFor='all'>Tout</label>
          </li>
          <li>
            <input type='radio' value='plantes' name='filter' id='plantes' />
            <label htmlFor='plantes'>Plantes</label>
          </li>
          <li>
            <input type='radio' value='cactus' name='filter' id='cactus' />
            <label htmlFor='cactus'>Cactus</label>
          </li>
          <li>
            <input type='radio' value='fleurs' name='filter' id='fleurs' />
            <label htmlFor='fleurs'>Fleurs</label>
          </li>
        </ul>
        <div>
          <select name='sort' id='sort'>
            <option value='createdAt' selected>
              Plus récent
            </option>
            <option value='price'>Prix croissants</option>
            <option value='-price'>Prix décroissants</option>
          </select>
        </div>
      </section>
    </>
  )
}

export default Filters
