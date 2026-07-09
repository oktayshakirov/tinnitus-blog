export type AuthorSocial = {
  twitter?: string;
  linkedin?: string;
  instagram?: string;
  website?: string;
  github?: string;
};

export type AuthorResource = {
  label: string;
  href: string;
  description: string;
};

export type Author = {
  slug: string;
  name: string;
  role: string;
  image: string;
  description: string;
  social: AuthorSocial;
  bio: string[];
  resources: AuthorResource[];
};

export const AUTHORS: Author[] = [
  {
    slug: 'oktay-shakirov',
    name: 'Oktay Shakirov',
    role: 'Founder & Writer, TinnitusHelp.me',
    image: '/images/authors/oktay-shakirov.png',
    description:
      'Oktay Shakirov is the founder and writer of TinnitusHelp.me. Living with tinnitus himself, he built this site to gather reliable, jargon-free information and helpful resources in one place.',
    social: {
      twitter: 'https://x.com/oktayshakirov',
      linkedin: 'https://www.linkedin.com/in/oktayshakirov/',
      website: 'https://oktayshakirov.com',
      github: 'https://github.com/oktayshakirov',
    },
    bio: [
      'I am Oktay Shakirov, the founder and writer behind TinnitusHelp.me. I am not a doctor or an audiologist. I am someone who lives with tinnitus every single day, and this site grew out of my own search for answers.',
      'I developed tinnitus in my twenties. I still remember the initial shock, the confusion, and the countless late nights spent scrolling through scattered forums, contradictory articles, and scary worst-case stories. Reliable information was hard to find, and even harder to trust. What helped me most was slowly piecing together the good sources, the ones grounded in real research and real experience, and quietly ignoring the noise.',
      'I built TinnitusHelp.me to be the place I wish I had found on day one: a single, honest home for everything that genuinely helped me and others. My goal is to take the trustworthy information scattered across the internet and present it clearly, calmly, and without hype or false promises of a magic cure.',
      'As a software engineer, I could not just collect links, so I built tools too. Alongside the articles you will find calming relief sounds and a companion app, made to help you manage the day-to-day reality of tinnitus rather than just read about it.',
      'Nothing here is medical advice, and I always encourage you to speak with a qualified health professional about your own situation. But if this site helps even one person feel less alone and a little more in control, then it has done its job. If you ever spot something that could be clearer or more accurate, please reach out through the contact page. This is a resource I keep improving.',
    ],
    resources: [
      {
        label: 'Articles & Guides',
        href: '/blog',
        description:
          'Research-backed, jargon-free articles on understanding, managing, and coping with tinnitus.',
      },
      {
        label: 'Relief Sounds',
        href: '/zen',
        description:
          'A library of calming soundscapes for masking, relaxation, and better sleep.',
      },
      {
        label: 'The App',
        href: '/app',
        description:
          'A companion app to carry tinnitus relief tools with you wherever you go.',
      },
      {
        label: 'Browse by Topic',
        href: '/tags',
        description:
          'Jump straight to the subjects that matter most to you, from sleep to sound therapy.',
      },
      {
        label: 'FAQ',
        href: '/faq',
        description:
          'Quick, honest answers to the questions people ask most about tinnitus.',
      },
    ],
  },
];

export const DEFAULT_AUTHOR_SLUG = 'oktay-shakirov';

export const getAuthorBySlug = (slug: string): Author | undefined =>
  AUTHORS.find((author) => author.slug === slug);

export const getDefaultAuthor = (): Author =>
  getAuthorBySlug(DEFAULT_AUTHOR_SLUG) ?? AUTHORS[0];
