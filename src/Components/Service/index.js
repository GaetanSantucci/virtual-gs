'use client';
import { Layout, LayoutMobile, ServiceDot, ServiceHexagone, ServiceLayout, ServiceTitle } from '../SvgComponent/serviceSvg';
import './service.scss';
import Image from 'next/image';

import { isMobile } from 'react-device-detect';




export const ServicePage = () => {

  // const [isMobileDevice, setIsMobileDevice] = useState(false);

  // useEffect(() => {
  //   if(isMobile) {
  //     setIsMobileDevice(true)
  //   }
  // }, [])

  return (
    <section className="service-container">
      <ServiceHexagone />
      <div className='service-container-title'>
        <ServiceTitle />
      </div>
      <div className="service-container-main">
        <LayoutMobile />
        {/* <Layout /> */}
        <ServiceLayout />
      </div>
      <div className="service-container-main-picture">
        <Image src='/images/gaetan_santucci_green.png' width={400} height={400} priority alt='Photo de Gaetan Santucci' />
      </div>
      <ServiceDot />

    </section>
  )
}