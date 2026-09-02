import { ReactNode } from 'react';
import Link from 'next/link';

export type SiteFaqEntry = {
  question: string;
  /** Plain-text answer used for the FAQPage JSON-LD. */
  answer: string;
  /** Optional richer rendering (links etc). Falls back to `answer`. */
  render?: ReactNode;
};

const linkStyle = { color: '#FFFF9B', textDecoration: 'none' };

/**
 * Questions are phrased to match the wording people actually search for
 * (see Search Console query data) rather than internal site language.
 */
export const SITE_FAQ: SiteFaqEntry[] = [
  {
    question: 'What is tinnitus?',
    answer:
      'Tinnitus is the perception of sound - ringing, buzzing, hissing or humming - when no external sound is present. It is not a disease in itself but a symptom, most often of hearing loss, noise exposure, ear injury or a circulatory issue. Around 10-15% of adults experience it.',
    render: (
      <>
        Tinnitus is the perception of sound - ringing, buzzing, hissing or
        humming - when no external sound is present. It is not a disease in
        itself but a symptom, most often of{' '}
        <Link href="/blog/what-is-tinnitus" style={linkStyle}>
          hearing loss, noise exposure, ear injury or a circulatory issue
        </Link>
        . Around 10-15% of adults experience it.
      </>
    ),
  },
  {
    question: 'Can tinnitus be cured?',
    answer:
      'There is currently no proven cure that eliminates tinnitus for everyone. However, most people habituate over time, and treatments such as sound therapy, cognitive behavioral therapy (CBT), hearing aids and stress management can substantially reduce how intrusive it feels. Be sceptical of any product promising a guaranteed cure.',
  },
  {
    question: 'Does white noise help tinnitus?',
    answer:
      'For many people, yes. White noise and other broadband sounds work by partially masking the tinnitus and giving the brain something else to attend to, which is why they help most at night and in quiet rooms. It does not cure tinnitus, but it can make it far less noticeable. Use it at a level just below your tinnitus, not louder.',
    render: (
      <>
        For many people, yes.{' '}
        <Link href="/blog/the-power-of-white-noise" style={linkStyle}>
          White noise and other broadband sounds
        </Link>{' '}
        work by partially masking the tinnitus and giving the brain something
        else to attend to, which is why they help most at night and in quiet
        rooms. It does not cure tinnitus, but it can make it far less
        noticeable. Use it at a level just below your tinnitus, not louder.
      </>
    ),
  },
  {
    question: 'Is tinnitus hereditary?',
    answer:
      'Genetics play a modest role. Twin and population studies suggest heritability of roughly 20-40% for chronic tinnitus, and it appears stronger for bilateral (both-ear) tinnitus in men. That means family history can raise your susceptibility, but noise exposure, age and ear health matter more.',
    render: (
      <>
        Genetics play a modest role.{' '}
        <Link href="/blog/is-tinnitus-hereditary" style={linkStyle}>
          Twin and population studies
        </Link>{' '}
        suggest heritability of roughly 20-40% for chronic tinnitus, and it
        appears stronger for bilateral (both-ear) tinnitus in men. Family
        history can raise your susceptibility, but noise exposure, age and ear
        health matter more.
      </>
    ),
  },
  {
    question: 'When should I see a doctor about tinnitus?',
    answer:
      'See a doctor promptly if your tinnitus is new and only in one ear, pulses in time with your heartbeat, appears alongside sudden hearing loss, dizziness or facial weakness, or follows a head injury. These patterns can point to a treatable underlying cause and should be investigated rather than managed at home.',
    render: (
      <>
        See a doctor promptly if your tinnitus is new and only in one ear,{' '}
        <Link
          href="/blog/pulsatile-tinnitus-why-you-hear-your-heartbeat"
          style={linkStyle}
        >
          pulses in time with your heartbeat
        </Link>
        , appears alongside sudden hearing loss, dizziness or facial weakness,
        or follows a head injury. These patterns can point to a treatable
        underlying cause and should be investigated rather than managed at home.
      </>
    ),
  },
  {
    question: 'What is the best app for tinnitus relief?',
    answer:
      'There is no single best app - the right one depends on whether you mainly need sound masking, sleep support, or a structured therapy program. Masking apps give you customisable soundscapes, CBT-based apps target the distress response, and notched or sound-therapy apps aim at habituation over months. We compare the main options, including our own, in our tinnitus apps guide.',
    render: (
      <>
        There is no single best app - the right one depends on whether you
        mainly need sound masking, sleep support, or a structured therapy
        program. We compare the main options side by side, including our own, in
        our{' '}
        <Link href="/blog/best-tinnitus-apps" style={linkStyle}>
          guide to the best tinnitus apps
        </Link>
        .
      </>
    ),
  },
  {
    question: 'What types of sound therapy do you offer?',
    answer:
      'Our Zen Collection is free to listen to and includes white noise, water sounds, bird and nature sounds, fire sounds, morning and evening soundscapes, notched sounds and more. Every collection streams on Spotify, Apple Music, YouTube Music, Amazon Music, Deezer and 30+ other platforms, and is also built into our app.',
    render: (
      <>
        Our{' '}
        <Link href="/zen" style={linkStyle}>
          Zen Collection
        </Link>{' '}
        is free to listen to and includes white noise, water sounds, bird and nature sounds, fire sounds,
        morning and evening soundscapes, notched sounds and more. Every
        collection streams on Spotify, Apple Music, YouTube Music, Amazon Music,
        Deezer and 30+ other platforms, and is also built into our{' '}
        <Link href="/app" style={linkStyle}>
          app
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Is the Tinnitus Help app free?',
    answer:
      'The Tinnitus Help app is free to download on iOS and Android, and you can read the full article library and listen to the Zen relief sound collection without paying anything. Some extras are available as in-app purchases, and you never need an account to use the app.',
    render: (
      <>
        The{' '}
        <Link href="/app" style={linkStyle}>
          Tinnitus Help app
        </Link>{' '}
        is free to download on iOS and Android, and you can read the full
        article library and listen to the Zen relief sound collection without
        paying anything. Some extras are available as in-app purchases, and you
        never need an account to use the app.
      </>
    ),
  },
  {
    question: 'Who writes the content on this site?',
    answer:
      'Articles are written by Oktay Shakirov, the founder of TinnitusHelp.me, who lives with tinnitus himself. He is not a doctor or audiologist. Health articles cite primary sources such as the NIDCD, the American Tinnitus Association and peer-reviewed research, and nothing on the site is a substitute for professional medical advice.',
    render: (
      <>
        Articles are written by{' '}
        <Link href="/authors/oktay-shakirov" style={linkStyle}>
          Oktay Shakirov
        </Link>
        , the founder of TinnitusHelp.me, who lives with tinnitus himself. He is
        not a doctor or audiologist. Health articles cite primary sources such
        as the NIDCD, the American Tinnitus Association and peer-reviewed
        research, and nothing on the site is a substitute for professional
        medical advice.
      </>
    ),
  },
  {
    question: 'How can I contact you?',
    answer:
      'Email contact@tinnitushelp.me or use the contact page. We read every message, and corrections to our articles are especially welcome.',
    render: (
      <>
        Email{' '}
        <a href="mailto:contact@tinnitushelp.me" style={linkStyle}>
          contact@tinnitushelp.me
        </a>{' '}
        or use the{' '}
        <Link href="/contact" style={linkStyle}>
          contact page
        </Link>
        . We read every message, and corrections to our articles are especially
        welcome.
      </>
    ),
  },
];
