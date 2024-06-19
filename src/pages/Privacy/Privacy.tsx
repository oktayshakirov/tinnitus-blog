import React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import Link from 'next/link';

const Privacy = ({ }: Props) => {
 return (
   <>
     <Layout>
       <Container>
         <Headline>TinnitusHelp.me Privacy Policy</Headline>
         <p>
           Welcome to TinnitusHelp.me, a blog dedicated to tinnitus education, news, and sound therapy resources. We are committed to protecting your privacy and handling your information responsibly. This policy outlines the types of information we collect, how we use it, and your rights regarding your personal data. By accessing or using our blog, you consent to the practices described in this policy.
         </p>
         <Divider style={{ margin: '20px 0' }} />

         <Headline>1. Information We Collect and How We Collect It:</Headline>
         <p>
           Automatically Collected Data: When you visit our blog, we may automatically collect certain information about your device, such as your IP address, browser type, operating system, referring URLs, pages visited, time spent on the site, and usage data. We may also collect information about your location, language preferences, and other anonymous or pseudonymous data. This information is collected through cookies, web beacons, and other tracking technologies.
         </p>
         <p>
           Personal Data: We may collect personal information, such as your name, email address, and contact details, if you choose to subscribe to our newsletter, participate in surveys or contests, or contact us directly. We may also collect additional information you voluntarily provide, such as comments or feedback.
         </p>

         <Headline>2. How We Use Your Information:</Headline>
         <p>
           The information we collect is used for the following purposes:
           <ul>
             <li>To provide, maintain, and improve our blog content and services.</li>
             <li>To personalize your experience and display relevant content, including tailored advertisements.</li>
             <li>To communicate with you about our blog, services, promotions, and updates.</li>
             <li>To display advertisements from Google AdSense, other third-party advertisers, and affiliate partners.</li>
             <li>To analyze website traffic, user behavior, and engagement patterns.</li>
             <li>To prevent fraudulent activities and protect our rights and interests.</li>
             <li>To comply with legal obligations and respond to lawful requests from authorities.</li>
           </ul>
         </p>

         <Headline>3. Disclosure of Your Information:</Headline>
         <p>
           We do not sell, trade, or rent your personal information to third parties for their direct marketing purposes. However, we may share anonymous, aggregated data with our service providers, advertising partners, and other trusted third parties for analytics, advertising, and other business purposes. We may also disclose your information if required by law or to protect our rights and interests.
         </p>

         <Headline>4. Cookies and Tracking Technologies:</Headline>
         <p>
           We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze website traffic, and display targeted advertisements. These technologies may collect information about your browsing activities and interactions with our blog and other websites.
         </p>
         <p>
           You can manage your cookie preferences through your browser settings. However, please note that disabling or blocking cookies may affect the functionality and performance of our blog.
         </p>

         <Headline>5. Third-party Links and Content:</Headline>
         <p>
           Our blog may contain links to third-party websites, streaming platforms, and services like Spotify, Apple Music, Amazon, Deezer, YouTube, etc., for sound therapy and white noise streaming. These third-party services have their own privacy policies, and we are not responsible for their practices. We encourage you to review the privacy policies of these third parties before using their services.
         </p>

         <Headline>6. Google AdSense:</Headline>
         <p>
           We use Google AdSense to display advertisements on our blog. Google may use cookies and other tracking technologies to serve personalized ads based on your interests and browsing activities across different websites and online services. You can opt out of personalized advertising by visiting the Google Ads Settings or the Network Advertising Initiative opt-out page.
         </p>

         <Headline>7. Children&apos;s Privacy:</Headline>
         <p>
           Our blog is not intended for children under the age of 13. We do not knowingly collect personal information from children without parental consent. If we become aware that we have collected personal information from a child without proper consent, we will take steps to remove that information from our systems.
         </p>

         <Headline>8. Data Security:</Headline>
         <p>
           We implement reasonable technical, administrative, and physical security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or storage is 100% secure. We cannot guarantee the absolute security of your information.
         </p>

         <Headline>9. Your Rights and Choices:</Headline>
         <p>
           Depending on your location and applicable laws, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict the processing of your data. You may also have the right to object to or withdraw consent for certain types of processing.
         </p>
         <p>
           To exercise these rights or for any other privacy-related inquiries, please contact us using the information provided on our website. We will respond to your requests in accordance with applicable laws and within a reasonable timeframe.
         </p>

         <Headline>10. Data Retention:</Headline>
         <p>
           We will retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. We will periodically review and delete or anonymize data that is no longer necessary for our operations.
         </p>

         <Headline>11. Modifications to Our Privacy Policy:</Headline>
         <p>
           We may update our privacy policy from time to time to reflect changes in our practices, legal requirements, or for other operational, legal, or regulatory reasons. Any changes will be posted on this page, and we encourage you to review the policy regularly for updates. The updated policy will be effective immediately upon posting, unless otherwise stated.
         </p>

         <Headline>12. Contact Us:</Headline>
         <p>
           If you have any questions, concerns, or requests regarding this privacy policy or our data practices, please contact us using the information provided on our <Link href="/privacy" style={{ color: '#FFFF9B', textDecoration: 'none' }}>about</Link> page. We will make every effort to address your inquiries promptly and effectively.
         </p>

         <Headline>13. Third-Party Services and Integrations:</Headline>
         <p>
           We may use third-party services and integrations on our blog, such as analytics tools, social media plugins, and content delivery networks (CDNs). These third parties may collect information about your interactions with our blog and their services. We encourage you to review the privacy policies of these third-party services to understand how they handle your information.
         </p>

         <Headline>14. User-Generated Content:</Headline>
         <p>
           Our blog may allow users to submit comments, reviews, or other user-generated content. Any personal information included in such content may be visible to other users and the public. We recommend that you exercise caution when sharing personal information in public areas of our blog.
         </p>

         <Headline>15. International Data Transfers:</Headline>
         <p>
           As our blog is hosted and operated from within the European Union, your personal information may be transferred to and processed in countries outside the European Economic Area (EEA). In such cases, we will ensure that appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.
         </p>

         <Headline>16. Do Not Track Signals:</Headline>
         <p>
           Our blog currently does not respond to &quot;Do Not Track&quot; signals sent from web browsers. However, we respect your privacy and provide you with the ability to manage your cookie preferences and opt out of certain tracking mechanisms as described in this policy.
         </p>
       </Container>
     </Layout>
   </>
 );
};

export default Privacy;