

const AccordionInformations = () => {
  return (
      <div className='accordion-wrapper'>
        <div className='accordion-item'>
          <div className='accordion-title'>
            <div>Détails</div>
            <div className='expand-accordion'>
              <div className='bold more show-content' data-js-develop-section>
                +
              </div>
              <div className='less' data-js-hide-section>
                -
              </div>
            </div>
          </div>
          <div className='accordion-content'>
            <ul role='list' className='accordion-ul'>
              <li className='accordion-li'>
                Tous nos produits sont uniques, mais nous veillons à
                sélectionner les plantes qui répondrons au mieux à vos attentes.
              </li>
              <li className='accordion-li'>
                Nos sélections varient selon nos arrivages du moment.
              </li>
              <li className='accordion-li'>Caches pot non-inclus.</li>
            </ul>
          </div>
        </div>
        <div className='accordion-item'>
          <div className='accordion-title'>
            <div>Livraison</div>
            <div className='expand-accordion'>
              <div className='bold more show-content' data-js-develop-section>
                +
              </div>
              <div className='less' data-js-hide-section>
                -
              </div>
            </div>
          </div>
          <div className='accordion-content'>
            <ul role='list' className='accordion-ul'>
              <li className='accordion-li'>Cueillette en magasin</li>
              <li className='accordion-li'>
                Livraison à domicile selon code postal
              </li>
            </ul>
          </div>
        </div>
        <div className='accordion-item'>
          <div className='accordion-title'>
            <div>Service Client</div>
            <div className='expand-accordion'>
              <div className='bold more show-content' data-js-develop-section>
                +
              </div>
              <div className='less' data-js-hide-section>
                -
              </div>
            </div>
          </div>
          <div className='accordion-content'>
            <ul role='list' className='accordion-ul'>
              <li className='accordion-li'>
                Veuillez nous contacter à l'adresse info@lamaisonjungle.com
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default AccordionInformations
