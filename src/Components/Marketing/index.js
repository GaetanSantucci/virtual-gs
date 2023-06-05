import { BackgroundMarketing, Dot, IconPerformance, IconSeo, IconUX } from '../SvgComponent';
import './marketing.scss';

export const MarketingPage = () => {
  return (
    <section className='marketing-container'>
      <div className='marketing-container-main'>
        <div className='marketing-container-main-presentation'>
          <h2 className='marketing-container-main-presentation-title'>Stratégie</h2>
          <h3 className='marketing-container-main-presentation-subtitle'>E-commerce, site vitrine, blog</h3>
          <p className='marketing-container-main-presentation-text'>Je suis à votre écoute pour comprendre votre besoin et concrétiser votre projet</p>
        </div>
        <div className='marketing-container-main-benefit'>
          <div className='marketing-container-main-benefit-card'>
            <h3 className='marketing-container-main-benefit-card-title'>Référencement</h3>
            <div className='marketing-container-main-benefit-card-content'>
              <div className='marketing-container-main-benefit-card-content-icon'><IconSeo /></div>
              <div className='marketing-container-main-benefit-card-content-figure'>75%</div>
              <p>Des internautes ne vont pas plus loin que la 1ère page de recherche Google</p>
              <p>C&apos;est pourquoi il est important d&apos;adapter une bonne stratégie  afin d&apos;optimiser son référencement naturel.</p>
              <p>VIRTUAL GS utilise des outils adaptés et mets en place les bonnes pratiques.</p>
            </div>
          </div>
          <div className='marketing-container-main-benefit-card'>
            <h3 className='marketing-container-main-benefit-card-title'>Performances</h3>
            <div className='marketing-container-main-benefit-card-content'>
              <div className='marketing-container-main-benefit-card-content-icon'><IconPerformance /></div>
              <div className='marketing-container-main-benefit-card-content-figure'>83%</div>
              <p>Des consommateurs pensent qu&apos;une expèrience fluide est importante pour leur décision d&apos;achat</p>
              <p>Ma connaissance des clients me permet de comprendre leurs attentes, je développe des sites en prenant un maximum d&apos;
                éléments. </p>
              <p>Un site fluide et performant permet de fidéliser sa clientèle et d&apos;augmenter son chiffre d&apos;affaires.</p>
            </div>
          </div>
          <div className='marketing-container-main-benefit-card'>
            <h3 className='marketing-container-main-benefit-card-title'>Expérience utilisateur</h3>
            <div className='marketing-container-main-benefit-card-content'>
              <div className='marketing-container-main-benefit-card-content-icon'><IconUX /></div>
              <div className='marketing-container-main-benefit-card-content-figure'>74%</div>
              <p>Des visiteurs sont succeptibls de revenir sur un site s&apos;il est optimisé pour leur mobile</p>
              <p>Ici, nous pensons mobile dès l&apos;élaboration de votre projet car 64% des recherches se font désormais sur smartphone et qu&apos;il est impératif d&apos;avoir un site adaptatif.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='marketing-container-background'>
        <BackgroundMarketing />
      </div>
      <div className='marketing-container-background-dot'>
        <Dot />
      </div>
    </section >
  )
}