import React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';

const Privacy = ({ }: Props) => {
  return (
    <>
      <Layout>
        <Container>
          <Headline>Beyond the Buzz Privacy Policy</Headline>
          <p>
            Welcome to Beyond the Buzz, a blog crafted by an individual based in Germany, Europe. We deeply respect the privacy of our users and are committed to protecting it in line with this policy. This policy elaborates on the types of information we might collect from you or that you might provide when you visit our blog. It also describes our practices for handling, using, safeguarding, and disclosing such information.
          </p>
          <Divider style={{ margin: '20px 0' }} />

          <Headline>1. Information We Collect and How We Collect It:</Headline>
          <p>
            Automatically Collected Data: When you explore our blog, we might automatically gather specific details about your device, such as information related to your web browser, IP address, time zone, and some cookies installed on your device. Moreover, as you navigate through the site, we gather details about the individual web pages you view and your interactions with the site.
          </p>
          <p>
            Personal Data: While engaging with our blog, we may prompt you to furnish us with certain personally identifiable information that can be employed to get in touch or identify you. This encompasses, but isn&apos;t limited to, your email address.
          </p>

          <Headline>2. How We Use Your Information:</Headline>
          <p>
            The information we accumulate is used for the following purposes:
            <ul>
              <li>To showcase our blog and its content to you.</li>
              <li>To offer services accessible through our blog, such as sound therapy and white noise streams.</li>
              <li>To serve any other purpose for which you provide it.</li>
              <li>For any other purpose with your consent.</li>
            </ul>
          </p>

          <Headline>3. Disclosure of Your Information:</Headline>
          <p>
            We don&apos;t sell, trade, or rent your personal identification information to third parties. However, we might share generic aggregated demographic data, not linked to any personal identification details regarding visitors and users, with our business associates, trusted affiliates, and advertisers for the purposes highlighted above.
          </p>

          <Headline>4. Cookies:</Headline>
          <p>
            We deploy cookies to refine the user experience. A cookie is a minuscule file positioned on your computer&apos;s hard drive. If desired, you can decline browser cookies by tweaking the appropriate setting on your browser.
          </p>

          <Headline>5. Third-party links and content:</Headline>
          <p>
            Our blog features links to third-party platforms such as Spotify, Apple Music, Amazon, etc., intended for sound therapy and white noise streaming. These sites come with their distinct privacy policies. We don&apos;t bear responsibility or liability for their content or actions.
          </p>

          <Headline>6. Google AdSense:</Headline>
          <p>
            Google AdSense is used to exhibit ads on our blog. Google deploys cookies to show ads based on a user&apos;s past visits to our website or other sites. Users can opt-out of personalized advertising by visiting Google&apos;s Ads Settings.
          </p>

          <Headline>7. Children’s Privacy:</Headline>
          <p>
            Our blog isn&apos;t designed for children under the age of 13. We don&apos;t intentionally gather personal information from children below this age.
          </p>

          <Headline>8. Modifications to Our Privacy Policy:</Headline>
          <p>
            We might make updates to our privacy policy in the future. These will be publicized on this page. We encourage users to frequently check this page for any alterations to stay informed.
          </p>
        </Container>
      </Layout>
    </>
  );
};

export default Privacy;
