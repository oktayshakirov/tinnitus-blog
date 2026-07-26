import Head from 'next/head';

type Props = {
  id: string;
  data: unknown;
};

/**
 * Renders a JSON-LD graph into <head>. Kept separate from next-seo's built-in
 * JsonLd helpers because those cannot express @graph or cross-referenced @ids.
 */
const JsonLd = ({ id, data }: Props) => (
  <Head>
    <script
      key={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  </Head>
);

export default JsonLd;
