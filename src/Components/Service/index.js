import { BackgroundProject } from '../SvgComponent';
import './service.scss';
import Image from 'next/image';

export const ServicePage = () => {
  return (
    <section className="service-container">
      <div className="service-container-main">
        <h2 className='service-container-main-title'>Service</h2>
      </div>
      <div className='service-container-background'>
        {/* <BackgroundProject /> */}
      </div>
    </section>
  )
}