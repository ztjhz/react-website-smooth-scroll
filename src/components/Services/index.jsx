import React from 'react';
import Icon1 from '../../images/1.svg';
import Icon2 from '../../images/2.svg';
import Icon3 from '../../images/3.svg';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServiceElements';

const Services = () => (
  <ServicesContainer id="services">
    <ServicesH1>Our Services</ServicesH1>
    <ServicesWrapper>
      <ServicesCard>
        <ServicesIcon src={Icon1} />
        <ServicesH2>Reduce expenses</ServicesH2>
        <ServicesP>
          We help reduce your fees and increase your overall revenue
        </ServicesP>
      </ServicesCard>
      <ServicesCard>
        <ServicesIcon src={Icon2} />
        <ServicesH2>Virtual Offices</ServicesH2>
        <ServicesP>
          You can access our platform online anywhere in the world
        </ServicesP>
      </ServicesCard>
      <ServicesCard>
        <ServicesIcon src={Icon3} />
        <ServicesH2>Premium Benefits</ServicesH2>
        <ServicesP>
          Unlock our special membership card that returns 5% cash back
        </ServicesP>
      </ServicesCard>
    </ServicesWrapper>
  </ServicesContainer>
);

export default Services;
