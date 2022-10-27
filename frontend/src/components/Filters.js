import React, { useState, useContext } from 'react'
import { AppContext } from '../context'

const Filters = () => {
  const [isActive, setActive] = useState(false)
  const displayMobileFilters = () => {
    setActive(!isActive)
  }
  const { updateSearchParams, getSearchParamsFromUrl } = useContext(AppContext)
  const [filterParams, setFilterParams] = useState(getSearchParamsFromUrl)
  const [sortParams, setSortParams] = useState(getSearchParamsFromUrl)

  function updateSearchParamsInUrl(paramsObject) {
    const url = new URL(`${window.location.href}`)
    url.hash = `#!/products?`
    let params = new URLSearchParams(url.search)
    for (let paramName in paramsObject) {
      params.append(paramName, paramsObject[paramName])
    }
    window.location = `${url}${params}`
  }

  const handleSortChange = (e) => {
    setSortParams({ sort: e.target.value })
    updateSearchParamsInUrl({ ...filterParams, sort: e.target.value })
    updateSearchParams({ ...filterParams, sort: e.target.value })
  }

  const handleFilterChange = (e) => {
    setFilterParams({ category: e.target.value })
    updateSearchParamsInUrl({ ...sortParams, category: e.target.value })
    // Copy the object and add category propriety
    updateSearchParams({ ...sortParams, category: e.target.value })
  }

  return (
    <>
      <i
        className='fas fa-bars dark-color'
        id='fa-bars-filter'
        onClick={displayMobileFilters}
      ></i>
      <section
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
            <input
              type='radio'
              value='all'
              name='filter'
              id='all'
              defaultChecked={
                !filterParams || filterParams.category === 'all'
                  ? 'checked'
                  : ''
              }
              onClick={handleFilterChange}
            />
            <label htmlFor='all'>Tout</label>
          </li>
          <li>
            <input
              type='radio'
              value='plantes'
              name='filter'
              id='plantes'
              defaultChecked={
                filterParams.category === 'plantes' ? 'checked' : ''
              }
              onClick={handleFilterChange}
            />
            <label htmlFor='plantes'>Plantes</label>
          </li>
          <li>
            <input
              type='radio'
              value='cactus'
              name='filter'
              id='cactus'
              defaultChecked={
                filterParams.category === 'cactus' ? 'checked' : ''
              }
              onClick={handleFilterChange}
            />
            <label htmlFor='cactus'>Cactus</label>
          </li>
          <li>
            <input
              type='radio'
              value='fleurs'
              name='filter'
              id='fleurs'
              defaultChecked={
                filterParams.category === 'fleurs' ? 'checked' : ''
              }
              onClick={handleFilterChange}
            />
            <label htmlFor='fleurs'>Fleurs</label>
          </li>
        </ul>
        <div>
          <select
            name='sort'
            id='sort'
            defaultValue='createdAt'
            onChange={handleSortChange}
          >
            <option value='createdAt'>Plus récent</option>
            <option value='price'>Prix croissants</option>
            <option value='-price'>Prix décroissants</option>
          </select>
        </div>
      </section>
    </>
  )
}

export default Filters
