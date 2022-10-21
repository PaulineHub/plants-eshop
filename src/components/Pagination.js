const Pagination = () => {
  return (
    <>
      <div className='pagination' data-js-pagination></div>
      <template data-js-page-button-template>
        <button type='button' data-js-page-id={{ number }}>
          {{ number }}
        </button>
      </template>
    </>
  )
};

export default Pagination;
