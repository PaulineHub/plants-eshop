const TestimonialSection = () => {
  return (
    <>
      <section className='testimonial-section'>
        <div className='testimonial-split-img-container'>
          <div className='testimonial-split-img'></div>
        </div>
        <div className='testimonial-split-content'>
          <div className='testimonial-wrapper'>
            <div className='testimonial-stars'>
              <i className='fas fa-star'></i> <i className='fas fa-star'></i>{' '}
              <i className='fas fa-star'></i> <i className='fas fa-star'></i>{' '}
              <i className='fas fa-star'></i>
            </div>
            <div className='testimonial-paragraph'>
              <h3>
                J'ai pu me faire une vraie petite jungle dans mon salon,
                harmonieuse et adaptée à la luminosité de la pièce. Mon chat
                adore !{' '}
              </h3>
            </div>
            <div className='testimonial-user'>- Tarah -</div>
            <div className='slider-testimonial'>
              <div className='slider-dot slider-dot--active'></div>
              <div className='slider-dot'></div>
              <div className='slider-dot'></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default TestimonialSection;
