import React from 'react';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { Props } from '@pages/tags';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import Link from 'next/link';

const Terms = ({ }: Props) => {
 return (
   <>
     <Layout>
       <Container>
         <Headline>Terms of Use for TinnitusHelp.me</Headline>
         <p>
           Welcome to TinnitusHelp.me, a blog dedicated to tinnitus education, news, and sound therapy resources. These terms and conditions outline the rules and regulations for the use of this blog. By accessing or using this website, you agree to be bound by these terms and conditions. If you disagree with any part of these terms, please refrain from using our website.
         </p>
         <Divider style={{ margin: '20px 0' }} />

         <Headline>1. Content Ownership and Rights:</Headline>
         <p>
           All content on this blog, including text, graphics, images, and other materials, is original and created by the owner of TinnitusHelp.me, unless otherwise stated. The images used on this blog are royalty-free or licensed for use. The content is provided for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider regarding any medical condition or concerns.
         </p>

         <Headline>2. License to Use:</Headline>
         <p>
           The intellectual property rights for all material on TinnitusHelp.me are owned by the blog&apos;s creator. Visitors are granted a limited, non-exclusive, non-transferable, and revocable license to view and print pages from this website for personal, non-commercial use only.
         </p>

         <Headline>3. Restrictions:</Headline>
         <p>
           Visitors to TinnitusHelp.me are specifically prohibited from:
           <ul>
             <li>Reproducing, modifying, distributing, or creating derivative works from the content on this website without explicit written permission.</li>
             <li>Using any content from this website for commercial purposes without prior written consent.</li>
             <li>Removing or altering any copyright notices, trademarks, or other proprietary notices from the content on this website.</li>
             <li>Engaging in any activities that may disrupt or interfere with the proper functioning of this website.</li>
           </ul>
         </p>

         <Headline>4. Third-party Links and Content:</Headline>
         <p>
           The blog may include links to third-party websites, streaming platforms, and services such as Spotify, Apple Music, Amazon, etc., for sound therapy and white noise streaming. These third-party resources are not under our control, and we are not responsible for their content, practices, or privacy policies. We encourage you to review the terms and conditions and privacy policies of these third-party services before using them.
         </p>

         <Headline>5. Limitation of Liability:</Headline>
         <p>
           TinnitusHelp.me, its owner, and its affiliates shall not be held liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use of this website or the information contained herein, including but not limited to damages for loss of profits, data, or goodwill. The use of this website is at your own risk.
         </p>

         <Headline>6. Changes to the Terms of Use:</Headline>
         <p>
           The blog&apos;s creator reserves the right to modify, update, or change these Terms of Use at any time without prior notice. It is your responsibility to review these terms periodically for any changes. Your continued use of this website after any modifications to the Terms of Use constitutes your acceptance of the revised terms.
         </p>

         <Headline>7. Governing Law and Jurisdiction:</Headline>
         <p>
           These Terms of Use shall be governed by and construed in accordance with the laws of Germany, without regard to its conflict of law provisions. Any disputes arising from or related to the use of this website shall be subject to the exclusive jurisdiction of the courts located in Germany.
         </p>

         <Headline>8. User Conduct:</Headline>
         <p>
           You agree to use this website in a lawful manner and in compliance with all applicable laws and regulations. You are prohibited from engaging in any activities that may disrupt or interfere with the proper functioning of this website or any connected systems or networks. This includes, but is not limited to, attempting to gain unauthorized access, transmitting viruses or malicious code, or using automated systems or scripts to access or interact with the website.
         </p>

         <Headline>9. Intellectual Property Rights:</Headline>
         <p>
           All content and materials on this website, including but not limited to text, graphics, logos, icons, images, audio, and video files, are protected by intellectual property laws and remain the property of TinnitusHelp.me or its respective owners. You may not use, reproduce, distribute, modify, or create derivative works from any part of this website without prior written consent.
         </p>

         <Headline>10. User-Generated Content:</Headline>
         <p>
           Our blog may allow users to submit comments, reviews, or other user-generated content. By submitting such content, you grant TinnitusHelp.me a non-exclusive, perpetual, irrevocable, royalty-free, and worldwide license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any form or medium. You are solely responsible for the content you submit and warrant that it does not infringe upon any third-party rights or violate any applicable laws.
         </p>

         <Headline>11. Termination:</Headline>
         <p>
           We reserve the right to terminate or suspend your access to this website at any time, without prior notice or liability, for any reason whatsoever, including but not limited to a breach of these Terms of Use.
         </p>

         <Headline>12. Indemnification:</Headline>
         <p>
           You agree to indemnify, defend, and hold harmless TinnitusHelp.me, its owner, affiliates, and their respective directors, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, and expenses (including reasonable attorneys&apos; fees) arising out of or in connection with your use of this website or any violation of these Terms of Use.
         </p>

         <Headline>13. Contact:</Headline>
         <p>
           If you have any questions, concerns, or inquiries regarding these Terms of Use or the content on this website, please contact the blog&apos;s creator using the information provided on the  <Link href="/about" style={{ color: '#FFFF9B', textDecoration: 'none' }}>about page</Link>.
         </p>
       </Container>
     </Layout>
   </>
 );
};

export default Terms;