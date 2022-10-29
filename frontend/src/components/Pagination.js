import { useState, useContext, useEffect } from 'react'
import { AppContext } from '../context'

const Pagination = ({ number, isPageActive }) => {

   const { searchParams, updateSearchParamsInUrl, updateSearchParams } =
     useContext(AppContext)

  function getPage(e) {
    const button = e.target;
    let numPage = button.innerText;
    updateSearchParamsInUrl({ ...searchParams, page: numPage });
    updateSearchParams({ ...searchParams, page: numPage })
  }

  return (
    <>
      <button
        type='button'
        className={`${isPageActive ? 'active' : ''}`}
        onClick={getPage}
      >
        {number}
      </button>
    </>
  )
}

export default Pagination
