import React from 'react';
import { StyledContainer } from './Disclaimerstyled';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import DisclaimerSEO from './Disclaimer.SEO';

const Disclaimer = ({}: Props) => {
  return (
    <>
      <DisclaimerSEO />
      <Layout>
        <StyledContainer>
          <Headline>Medical Disclaimer</Headline>
          <p>
            The information provided on TinnitusHelp.me, including all text,
            graphics, images, and other material contained on or available
            through this website, is for informational and educational purposes
            only.
          </p>
          <p>
            This website&apos;s content is not intended to be a substitute for
            professional medical advice, diagnosis, or treatment. Always seek
            the advice of your physician, audiologist, qualified hearing
            specialist, or other qualified health care provider with any
            questions you may have regarding a medical condition, including
            tinnitus.
          </p>
          <p>
            Never disregard professional medical advice or delay in seeking it
            because of something you have read on this website.
          </p>
          <p>
            TinnitusHelp.me does not recommend or endorse any specific tests,
            physicians, products (including apps, devices, or supplements
            mentioned), procedures, opinions, or other information that may be
            mentioned on the site. While we strive to provide accurate and
            up-to-date information, medical knowledge is constantly evolving,
            and the site may not cover all possible aspects of tinnitus or its
            management.
          </p>
          <p>
            Reliance on any information provided by TinnitusHelp.me, its
            employees, contributors, or other visitors to the site is solely at
            your own risk. Tinnitus is a complex condition, and individual
            experiences and responses to management strategies can vary
            significantly. What works for one person may not work for another.
          </p>
          <p>
            Discussion of dietary supplements or specific technologies is for
            informational purposes and does not constitute an endorsement or
            recommendation for use; always consult with your healthcare provider
            before starting any new supplement or treatment regimen, especially
            regarding potential interactions or safety.
          </p>
          <p>
            This website does not establish a doctor-patient or
            therapist-patient relationship.
          </p>
          <p>
            If you think you may have a medical emergency, call your doctor, go
            to the emergency department, or call emergency services (like 911 in
            the US, 112 in Europe, or your local equivalent) immediately.
          </p>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default Disclaimer;
