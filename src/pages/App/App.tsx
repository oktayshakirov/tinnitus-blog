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
          <p>
            Rated <strong>5 stars</strong> on the App Store and Google Play, the
            TinnitusHelp.me App has quickly become the preferred tinnitus
            companion for thousands worldwide. With an intuitive design and a
            range of scientifically backed features, it empowers users to take
            charge of their tinnitus relief journey.
          </p>
          <h2>Why Choose TinnitusHelp.me?</h2>
          <ul>
            <li>
              <strong>Proven Success:</strong> Highly rated by users for its
              effectiveness in reducing tinnitus distress and improving overall
              well-being.
            </li>
            <li>
              <strong>Trusted by Experts:</strong> Recommended by health
              professionals as a supportive tool for managing tinnitus symptoms.
            </li>
            <li>
              <strong>Constantly Evolving:</strong> Regular updates ensure new
              features, content, and improvements based on user feedback.
            </li>
          </ul>
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
          <p>
            Whether you&apos;re newly experiencing tinnitus or have been
            managing it for years, the TinnitusHelp.me App provides the support
            you need to make a positive change in your daily life. Join
            thousands of users and start your journey to relief today!
          </p>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default App;
