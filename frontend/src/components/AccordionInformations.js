

const AccordionInformations = () => {
  return (
      <div class='accordion-wrapper'>
        <div class='accordion-item'>
          <div class='accordion-title'>
            <div>Détails</div>
            <div class='expand-accordion'>
              <div class='bold more show-content' data-js-develop-section>
                +
              </div>
              <div class='less' data-js-hide-section>
                -
              </div>
            </div>
          </div>
          <div class='accordion-content'>
            <ul role='list' class='accordion-ul'>
              <li class='accordion-li'>
                Tous nos produits sont uniques, mais nous veillons à
                sélectionner les plantes qui répondrons au mieux à vos attentes.
              </li>
              <li class='accordion-li'>
                Nos sélections varient selon nos arrivages du moment.
              </li>
              <li class='accordion-li'>Caches pot non-inclus.</li>
            </ul>
          </div>
        </div>
        <div class='accordion-item'>
          <div class='accordion-title'>
            <div>Livraison</div>
            <div class='expand-accordion'>
              <div class='bold more show-content' data-js-develop-section>
                +
              </div>
              <div class='less' data-js-hide-section>
                -
              </div>
            </div>
          </div>
          <div class='accordion-content'>
            <ul role='list' class='accordion-ul'>
              <li class='accordion-li'>Cueillette en magasin</li>
              <li class='accordion-li'>
                Livraison à domicile selon code postal
              </li>
            </ul>
          </div>
        </div>
        <div class='accordion-item'>
          <div class='accordion-title'>
            <div>Service Client</div>
            <div class='expand-accordion'>
              <div class='bold more show-content' data-js-develop-section>
                +
              </div>
              <div class='less' data-js-hide-section>
                -
              </div>
            </div>
          </div>
          <div class='accordion-content'>
            <ul role='list' class='accordion-ul'>
              <li class='accordion-li'>
                Veuillez nous contacter à l'adresse info@lamaisonjungle.com
              </li>
            </ul>
          </div>
        </div>
      </div>
  )
}

export default AccordionInformations
