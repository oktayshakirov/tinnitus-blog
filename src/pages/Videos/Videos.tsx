import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Layout from '@components/Layout';
import Link from '@components/Link';
import VideoCard from '@components/VideoCard';
import ZenSessions from '@components/ZenSessions';
import Headline from '@ui/pages/shared/Headline';
import AdComponent from '@components/AdComponent';
import MedicalDisclaimer from '@components/MedicalDisclaimer';
import VideosSEO from './Videos.SEO';
import { StyledContainer, StyledTabContainer } from '@ui/pages/Zen/Zen.styled';
import { StyledGrid, StyledTabs, StyledAlbum, StyledNote } from './Videos.styled';
import { SiteVideo } from '@lib/videos';

export type SessionAlbum = {
  slug: string;
  title: string;
  sessions: SiteVideo[];
};

export type Props = {
  videos: SiteVideo[];
  albums: SessionAlbum[];
};

export type VideosTab = 'explainers' | 'sessions';

/**
 * Every video the site publishes, in one place.
 *
 * The two kinds do not behave alike and are not pretending to: an explainer has
 * a page of its own, carrying chapters and a transcript, so it is a card that
 * links away. A session is the sound itself in a given length - many of them
 * cut from one album - so it plays in place and has no page. That is why they
 * are tabs rather than one grid.
 *
 * This replaced /zen/videos, which listed the sessions alone.
 */
const Videos = ({ videos, albums }: Props) => {
  const [tab, setTab] = useState<VideosTab>('explainers');
  const hasSessions = albums.length > 0;


  return (
    <>
      <VideosSEO videos={videos} albums={albums} />
      <Layout>
        <Container>
          <AdComponent />
        </Container>
        <StyledContainer>
          <StyledTabContainer>
            <Headline>
              <i
                className="fi fi-play"
                style={{ fontSize: '0.8em', marginRight: '0.5em' }}
              />
              VIDEOS
            </Headline>

            {hasSessions && (
              <StyledTabs aria-label="Video type">
                <button
                  type="button"
                  aria-current={tab === 'explainers' ? 'page' : undefined}
                  onClick={() => setTab('explainers')}
                >
                  Explainers
                </button>
                <button
                  type="button"
                  aria-current={tab === 'sessions' ? 'page' : undefined}
                  onClick={() => setTab('sessions')}
                >
                  Sound sessions
                </button>
              </StyledTabs>
            )}

            {tab === 'explainers' &&
              (videos.length === 0 ? (
                <Typography>No videos published yet.</Typography>
              ) : (
                <StyledGrid>
                  {videos.map((video) => (
                    <VideoCard key={video.id} video={video} />
                  ))}
                </StyledGrid>
              ))}

            {tab === 'sessions' && (
              <>
                {/* The one instruction that matters, and the one most people
                    get backwards - shown once here rather than per album. */}
                <StyledNote>
                  Use headphones, and set the volume so the sound sits{' '}
                  <em>just below</em> your tinnitus - you should still hear the
                  ringing faintly underneath. Burying it completely is what most
                  people do, and it is not what this is for.
                </StyledNote>
                {albums.map((album) => (
                  <StyledAlbum key={album.slug}>
                    <ZenSessions
                      sessions={album.sessions}
                      showNote={false}
                      heading={
                        <Link href={`/zen/${album.slug}`}>{album.title}</Link>
                      }
                    />
                  </StyledAlbum>
                ))}
              </>
            )}

            <Box pt={4}>
              <MedicalDisclaimer />
            </Box>
          </StyledTabContainer>
          <Container>
            <Box pt={3}>
              <AdComponent />
            </Box>
          </Container>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default Videos;
