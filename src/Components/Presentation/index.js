import { BackgroundMarketing, Dot, IconPerformance, IconSeo, IconUX } from '../SvgComponent';
import './presentation.scss';

export const PresentationPage = () => {
  return (
    <section className='presentation-container'>
      <div className='presentation-container-main'>
        <div className='presentation-container-main-presentation'>
          <h2 className='presentation-container-main-presentation-title'>Stratégie</h2>
          <h3 className='presentation-container-main-presentation-subtitle'>E-commerce, site vitrine, blog</h3>
          <p className='presentation-container-main-presentation-text'>Je suis à votre écoute pour comprendre votre besoin et concrétiser votre projet</p>
        </div>
        <div className='presentation-container-main-benefit'>
          <div className='presentation-container-main-benefit-card'>
            <div className='presentation-container-main-benefit-card-content'>
              <div className='presentation-container-main-benefit-card-content-icon'><IconSeo /></div>
              <div className='presentation-container-main-benefit-card-content-figure'>75%</div>
              <h3 className='presentation-container-main-benefit-card-title'>Référencement</h3>
              <p>Des internautes ne vont pas plus loin que la 1ère page de recherche Google</p>
              <p>C&apos;est pourquoi il est important d&apos;adapter une bonne stratégie  afin d&apos;optimiser son référencement naturel.</p>
              <p>VIRTUAL GS utilise des outils adaptés et mets en place les bonnes pratiques.</p>
            </div>
          </div>
          <div className='presentation-container-main-benefit-card'>
            <div className='presentation-container-main-benefit-card-content'>
              <div className='presentation-container-main-benefit-card-content-icon'><IconPerformance /></div>
              <div className='presentation-container-main-benefit-card-content-figure'>83%</div>
              <h3 className='presentation-container-main-benefit-card-title'>Performances</h3>
              <p>Des consommateurs pensent qu&apos;une expèrience fluide est importante pour leur décision d&apos;achat</p>
              <p>Ma connaissance des clients me permet de comprendre leurs attentes, je développe des sites en prenant un maximum d&apos;
                éléments. </p>
              <p>Un site fluide et performant permet de fidéliser sa clientèle et d&apos;augmenter son chiffre d&apos;affaires.</p>
            </div>
          </div>
          <div className='presentation-container-main-benefit-card'>
            <div className='presentation-container-main-benefit-card-content'>
              <div className='presentation-container-main-benefit-card-content-icon'><IconUX /></div>
              <div className='presentation-container-main-benefit-card-content-figure'>74%</div>
              <h3 className='presentation-container-main-benefit-card-title'>Expérience client</h3>
              <p>Des visiteurs sont succeptibls de revenir sur un site s&apos;il est optimisé pour leur mobile</p>
              <p>Ici, nous pensons mobile dès l&apos;élaboration de votre projet car 64% des recherches se font désormais sur smartphone et qu&apos;il est impératif d&apos;avoir un site adaptatif.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='presentation-container-background'>
      </div>
      <div className='presentation-container-background-dot'>
        <Dot />
      </div>
    </section >
  )
}