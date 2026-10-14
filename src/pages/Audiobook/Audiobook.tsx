import React from 'react';
import Image from 'next/image';
import { Typography, Box } from '@mui/material';
import Layout from '@components/Layout';
import Link from '@components/Link';
import AudiobookSEO from './Audiobook.SEO';
import {
  AUDIOBOOK,
  AUDIOBOOK_BADGES,
  AUDIOBOOK_CHAPTERS,
} from '@const/audiobook';
import {
  StyledContainer,
  HeaderSection,
  Section,
  BadgeRow,
  FactsGrid,
  Fact,
  ChapterRow,
  Excerpt,
} from './Audiobook.styled';

const FACTS: [string, string][] = [
  ['58', 'minutes'],
  ['13', 'chapters'],
  ['0', 'cure promises'],
  ['100%', 'sourced'],
];

const StoreBadges = () => (
  <BadgeRow>
    {AUDIOBOOK_BADGES.map(({ href, src, alt, width, height }) => (
      <Link key={href} href={href} target="_blank">
        <Image src={src} alt={alt} width={width} height={height} unoptimized />
      </Link>
    ))}
  </BadgeRow>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
    {children}
  </Typography>
);

const Audiobook = () => {
  return (
    <>
      <AudiobookSEO />
      <Layout>
        <StyledContainer>
          <HeaderSection>
            <Typography
              variant="h1"
              sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 800 }}
            >
              {AUDIOBOOK.title}
            </Typography>
            <Typography
              variant="h6"
              sx={{
                maxWidth: 'md',
                mx: 'auto',
                color: 'text.secondary',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
              }}
            >
              {AUDIOBOOK.subtitle}
            </Typography>

            <Box
              sx={{
                mt: 4,
                mx: 'auto',
                width: { xs: 240, md: 320 },
                maxWidth: '100%',
              }}
            >
              <Image
                src={AUDIOBOOK.cover}
                alt={`${AUDIOBOOK.title} audiobook cover`}
                width={320}
                height={320}
                priority
                style={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 12,
                  display: 'block',
                }}
              />
            </Box>

            <StoreBadges />
          </HeaderSection>

          <Section>
            <SectionTitle>What this is</SectionTitle>
            <Typography sx={{ mb: 2 }}>
              You have probably been told that tinnitus is permanent, that there
              is no cure, and that you should learn to live with it. Somebody
              said that to you in under ninety seconds and then showed you to
              the door. That advice is not wrong. It is just so incomplete that
              it functions as a lie.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              There is no cure for tinnitus, and this audiobook does not pretend
              otherwise. What it does is explain why that matters far less than
              you think. The volume of your tinnitus and the suffering it causes
              are two different measurements, and they are barely related to
              each other. Some people with objectively loud tinnitus go weeks
              without noticing it. Some people with a faint hiss cannot work,
              cannot sleep, and cannot think about anything else.
            </Typography>
            <Typography>
              The difference between those two people is not in their ears. In
              just under an hour, this is the argument for why, and what to do
              about it.
            </Typography>

            <Box sx={{ mt: 4 }}>
              <FactsGrid>
                {FACTS.map(([value, label]) => (
                  <Fact key={label}>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>
                      {value}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.7 }}>
                      {label}
                    </Typography>
                  </Fact>
                ))}
              </FactsGrid>
            </Box>
          </Section>

          {/* TODO: the sample video goes here once it is on YouTube, above the
              excerpt. Hearing the narrator is worth more than reading about
              them, so it should sit as high on the page as the cover allows. */}

          <Section>
            <SectionTitle>How it opens</SectionTitle>
            <Typography sx={{ mb: 2, opacity: 0.7 }}>
              The first words of the introduction, so you know what you are
              getting before you pay for it.
            </Typography>
            <Excerpt>
              <Typography component="p">
                You hear it right now. You started hearing it the moment I said
                the word, and some part of you is already angry at me for that.
              </Typography>
              <Typography component="p">
                That is the first thing worth understanding. Your tinnitus did
                not get louder in the last two seconds. Your attention moved.
              </Typography>
              <Typography component="p">
                Your brain has classified this noise as a threat. Threats get
                monitored. Monitored signals get amplified. Amplified signals
                feel more threatening. And around it goes, tighter every week,
                until you are a person who checks.
              </Typography>
            </Excerpt>
          </Section>

          <Section>
            <SectionTitle>Chapters</SectionTitle>
            <Box>
              {AUDIOBOOK_CHAPTERS.map(([label, title, length]) => (
                <ChapterRow key={label}>
                  <Typography className="label" component="span">
                    {label}
                  </Typography>
                  <Typography className="title" component="span">
                    {title}
                  </Typography>
                  <Typography className="length" component="span">
                    {length}
                  </Typography>
                </ChapterRow>
              ))}
            </Box>
          </Section>

          <Section>
            <SectionTitle>What it does not do</SectionTitle>
            <Typography sx={{ mb: 2 }}>
              It does not promise a cure, because there is not one. It does not
              recommend a supplement to buy. It does not invent an expert or a
              quote. Every number in it traces to a named, published source,
              including the ones that make the argument weaker, and the
              introduction names the symptoms that mean you should stop
              listening and see a doctor instead.
            </Typography>
            <Typography sx={{ opacity: 0.7 }}>
              Narrated by {AUDIOBOOK.narrator}. This audiobook uses a synthetic
              voice, which both stores disclose on the listing.
            </Typography>
          </Section>

          <HeaderSection>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
              Listen now
            </Typography>
            <Typography sx={{ maxWidth: 'sm', mx: 'auto' }}>
              {AUDIOBOOK.runtime}, {AUDIOBOOK.chapters} chapters. Both stores
              let you hear a free sample first.
            </Typography>
            <StoreBadges />
          </HeaderSection>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default Audiobook;
