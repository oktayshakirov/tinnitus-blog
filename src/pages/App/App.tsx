import React from 'react';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import Image from 'next/image';
import AppSEO from './App.SEO';
import { StyledContainer } from './App.styled';

const App = ({}: Props) => {
  return (
    <>
      <AppSEO />
      <Layout>
        <StyledContainer>
          <Headline>TinnitusHelp.me App</Headline>
          <Image
            src="/app.jpg"
            alt="Download on the App Store"
            layout="responsive"
            width={815}
            height={351}
          />
          <p>
            Discover a calmer world with TinnitusHelp.me App - your personalized
            companion for managing tinnitus. Designed specifically for those who
            face the constant challenge of tinnitus, our app offers a
            personalized approach to help you regain control and find moments of
            peace.
          </p>
          <h2>Key Features:</h2>
          <ul>
            <li>
              <strong>Educational Articles:</strong> Explore in-depth articles
              about tinnitus and stay up to date with the latest insights and
              developments.
            </li>
            <li>
              <strong>Relaxing Soundscapes:</strong> Enjoy a handpicked
              selection of calming sounds to mask and soften tinnitus symptoms.
            </li>
            <li>
              <strong>Mindfulness Practices:</strong> Engage in guided
              meditations and stress-relief techniques that support relaxation
              and mental clarity.
            </li>
            <li>
              <strong>Lifestyle Tips:</strong> Discover practical advice on
              traveling, nutrition, sleep and daily habits to help you live well
              with tinnitus.
            </li>
            <li>
              <strong>Fun Facts and Articles:</strong> Discover fun, surprising
              facts about tinnitus.
            </li>
          </ul>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default App;
