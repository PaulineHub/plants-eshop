import React, { useState } from 'react'

const AccordionInformations = () => {

  const [showDetails, setShowDetails] = useState(false)
  const [showDelivery, setShowDelivery] = useState(false)
  const [showCustomerSupport, setShowCustomerSupport] = useState(false)

  return (
    <div className='accordion-wrapper'>
      <div className='accordion-item'>
        <div className='accordion-title'>
          <div>Détails</div>
          <div className='expand-accordion'>
            <div
              className={`bold more ${!showDetails ? 'show-content' : ''}`}
              onClick={() => {
                setShowDetails(true)
              }}
            >
              +
            </div>
            <div
              className={`less ${showDetails ? 'show-content' : ''}`}
              onClick={() => {
                setShowDetails(false)
              }}
            >
              -
            </div>
          </div>
        </div>
        <div
          className={`accordion-content ${showDetails ? 'show-content' : ''}`}
        >
          <ul role='list' className='accordion-ul'>
            <li className='accordion-li'>
              Tous nos produits sont uniques, mais nous veillons à sélectionner
              les plantes qui répondrons au mieux à vos attentes.
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
            <div
              className={`bold more ${!showDelivery ? 'show-content' : ''}`}
              onClick={() => {
                setShowDelivery(true)
              }}
            >
              +
            </div>
            <div
              className={`less ${showDelivery ? 'show-content' : ''}`}
              onClick={() => {
                setShowDelivery(false)
              }}
            >
              -
            </div>
          </div>
        </div>
        <div
          className={`accordion-content ${showDelivery ? 'show-content' : ''}`}
        >
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
            <div
              className={`bold more ${
                !showCustomerSupport ? 'show-content' : ''
              }`}
              onClick={() => {
                setShowCustomerSupport(true)
              }}
            >
              +
            </div>
            <div
              className={`less ${showCustomerSupport ? 'show-content' : ''}`}
              onClick={() => {
                setShowCustomerSupport(false)
              }}
            >
              -
            </div>
          </div>
        </div>
        <div
          className={`accordion-content ${
            showCustomerSupport ? 'show-content' : ''
          }`}
        >
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
