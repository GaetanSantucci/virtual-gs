import { BackgroundMarketing, Dot } from '../SvgComponent';
import './services.scss';

export const MarketingPage = () => {
  return (
    <section className='service-container'>
      <div className='service-container-main'>
        <div className='service-container-main-presentation'>
          <h2 className='service-container-main-presentation-title'>Notre stratégie</h2>
          <h3 className='service-container-main-presentation-subtitle'>E-commerce, site vitrine, blog</h3>
          <p className='service-container-main-presentation-text'>Nous sommes à votre écoute pour comprendre votre besoin et concrétiser votre projet</p>
        </div>
        <div className='service-container-main-benefit'>
          <div className='service-container-main-benefit-card'>
            <h3 className='service-container-main-benefit-card-title'>Référencement</h3>
            <div className='service-container-main-benefit-card-content'>
              <div className='service-container-main-benefit-card-content-icon'>Icon</div>
              <div className='service-container-main-benefit-card-content-figure'>75%</div>
              <p>Des internautes ne vont pas plus loin que la 1ère page de recherche Google</p>
              <p>C&apos;est pourquoi il est important d&apos;adapter une bonne stratégie  afin d&apos;optimiser son référencement naturel. Chez VirtualGS, nous utilisons des outils adaptés et mettons en place les bonnes pratiques.</p>
            </div>
          </div>
          <div className='service-container-main-benefit-card'>
            <h3 className='service-container-main-benefit-card-title'>Performances</h3>
            <div className='service-container-main-benefit-card-content'>
              <div className='service-container-main-benefit-card-content-icon'>Icon</div>
              <div className='service-container-main-benefit-card-content-figure'>83%</div>
              <p>Des consommateurs pensent qu&apos;une expèrience fluide est importante pour leur décision d&apos;achat</p>
              <p>Notre savoir des clients nous permets de comprendre leurs attentes, nous développons des sites en prenant en compte vos attentes. </p>
              <p>Un site fluide et performant permets de fidéliser sa clientèle et d&apos;augmenter son chiffre d&apos;affaire</p>
            </div>
          </div>
          <div className='service-container-main-benefit-card'>
            <h3 className='service-container-main-benefit-card-title'>Expérience utilisateur</h3>
            <div className='service-container-main-benefit-card-content'>
              <div className='service-container-main-benefit-card-content-icon'>Icon</div>
              <div className='service-container-main-benefit-card-content-figure'>74%</div>
              <p>Des visiteurs sont succeptible de revenir sur un site s&apos;il est optimiser pour leur mobile</p>
              <p>Ici, nous pensons mobile dès l&apos;élaboration de votre projet car 64% des recherches se font désormais sur mobile et qu&apos;il est impératif d&apos;avoir un site adaptatif</p>
            </div>
          </div>
        </div>
      </div>
      <div className='service-container-background'>
        <BackgroundMarketing />
      </div>
      <div className='service-container-background-dot'>
        <Dot />
      </div>
    </section>
  )
}