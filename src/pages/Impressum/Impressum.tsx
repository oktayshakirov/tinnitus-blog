import React from 'react';
import Divider from '@mui/material/Divider';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import Link from '@components/Link';
import ImpressumSEO from './Impressum.SEO';
import { StyledContainer } from './Impressum.styled';

const Impressum = () => {
  return (
    <>
      <ImpressumSEO />
      <Layout>
        <StyledContainer>
          <Headline>Impressum / Legal Notice</Headline>

          <Headline>Anbieter / Site Operator</Headline>
          <p>
            <strong>Oktay Shakirov</strong>
            <br />
            Blasewitzer Ring 16
            <br />
            13593 Berlin, Germany
          </p>
          <p>No VAT identification number under Section 27a UStG exists.</p>
          <Divider style={{ margin: '20px 0' }} />

          <Headline>Kontakt / Contact</Headline>
          <p>
            <strong>E-Mail:</strong>{' '}
            <Link href="mailto:contact@tinnitushelp.me">
              contact@tinnitushelp.me
            </Link>
            <br />
            <strong>Contact form:</strong> <Link href="/contact">Contact</Link>
          </p>
          <p>
            We aim to respond to enquiries received by email or through the
            contact form promptly.
          </p>
          <Divider style={{ margin: '20px 0' }} />

          <Headline>
            Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV / Responsible
            for editorial content
          </Headline>
          <p>
            <strong>Oktay Shakirov</strong>, Anschrift wie oben / address as
            above
            <br />
            <Link href="mailto:contact@tinnitushelp.me">
              contact@tinnitushelp.me
            </Link>
          </p>
          <Divider style={{ margin: '20px 0' }} />

          <Headline>Redaktionelle Hinweise / Editorial Notes</Headline>
          <p>
            TinnitusHelp.me publishes independent editorial content about
            tinnitus, hearing health, and sound therapy.
          </p>
          <ul>
            <li>
              Content is researched from publicly available primary sources,
              including peer-reviewed research where available, and is accurate{' '}
              <strong>as of the date shown</strong> on each page.
            </li>
            <li>
              Statements describing research findings are intended as statements
              of fact. Assessments of treatments, products, or approaches are{' '}
              <strong>opinion</strong>, published for informational and
              educational purposes.
            </li>
            <li>
              Nothing on this site is medical advice, diagnosis, or treatment.
              Always consult a qualified health professional about your own
              symptoms. See our <Link href="/disclaimer">Disclaimer</Link>.
            </li>
            <li>
              If you believe something on this site is factually inaccurate,
              please <Link href="/contact">get in touch</Link>. We review such
              requests in good faith and correct confirmed factual errors
              promptly.
            </li>
          </ul>
          <Divider style={{ margin: '20px 0' }} />

          <Headline>
            Verbraucherstreitbeilegung / Consumer Dispute Resolution
          </Headline>
          <p>
            We are neither obliged nor willing to participate in dispute
            resolution proceedings before a consumer arbitration board
            (Verbraucherschlichtungsstelle) within the meaning of the German Act
            on Alternative Dispute Resolution in Consumer Matters (VSBG).
          </p>
          <Divider style={{ margin: '20px 0' }} />

          <Headline>Haftung für Inhalte / Liability for Content</Headline>
          <p>
            As a service provider, we are responsible for our own content on
            these pages in accordance with general law (§ 7 para. 1 DDG). Under
            §§ 8 to 10 DDG, however, we are not obliged to monitor transmitted
            or stored third-party information, or to investigate circumstances
            that indicate unlawful activity. Obligations to remove or block the
            use of information under general law remain unaffected. Liability in
            this respect is only possible from the point in time at which a
            specific infringement becomes known. If we become aware of any such
            infringements, we will remove the content in question promptly.
          </p>
          <Divider style={{ margin: '20px 0' }} />

          <Headline>Haftung für Links / Liability for Links</Headline>
          <p>
            Our site contains links to external third-party websites over whose
            content we have no influence. We therefore cannot accept any
            liability for that third-party content. The respective provider or
            operator of the linked pages is always responsible for their
            content. The linked pages were checked for possible legal violations
            at the time of linking, and no unlawful content was apparent.
            Permanent monitoring of the content of linked pages is not
            reasonable without concrete evidence of an infringement. If we
            become aware of any legal violations, we will remove such links
            promptly.
          </p>
          <Divider style={{ margin: '20px 0' }} />

          <Headline>Urheberrecht / Copyright</Headline>
          <p>
            The content and works created by the site operator on these pages
            are subject to German copyright law. Reproduction, editing,
            distribution, and any form of exploitation beyond the limits of
            copyright require written consent. Downloads and copies of this site
            are permitted for private, non-commercial use only. Where content on
            this site was not created by the operator, the copyright of third
            parties is respected and such content is identified as third-party
            content. Should you nevertheless become aware of a copyright
            infringement, please inform us and we will remove such content
            promptly.
          </p>
          <p>
            Some images are sourced from royalty-free platforms and remain the
            property of their respective creators. Sound recordings and certain
            data feeds are provided by third parties and are subject to their
            own rights.
          </p>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default Impressum;
