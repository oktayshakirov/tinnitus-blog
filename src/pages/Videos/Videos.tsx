import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Layout from '@components/Layout';
import Link from '@components/Link';
import VideoCard from '@components/VideoCard';
import Headline from '@ui/pages/shared/Headline';
import AdComponent from '@components/AdComponent';
import MedicalDisclaimer from '@components/MedicalDisclaimer';
import VideosSEO, { VIDEOS_DESCRIPTION } from './Videos.SEO';
import { StyledContainer, StyledTabContainer } from '@ui/pages/Zen/Zen.styled';
import {
  StyledIntro,
  StyledPlayer,
  StyledGrid,
  StyledItem,
} from './Videos.styled';
import { SiteVideo, videoSourceHref } from '@lib/videos';

export type Props = {
  videos: SiteVideo[];
};

// A session's source page is a sound album, an explainer's is the article it
// was cut from, and "read the article" under a white-noise track reads as a
// mistake.
const sourceLabel = (video: SiteVideo) =>
  video.kind === 'session' ? 'Open the sound album' : 'Read the article';

/**
 * Every video the site publishes, newest first.
 *
 * The player opens in place rather than on a page of its own. A page per video
 * only earns its keep when it carries something the feed does not - chapters
 * and a transcript - and these videos have neither in the registry yet; without
 * that it is a thumbnail and one sentence, which is the thin page this hub is
 * meant to replace. /zen/videos still groups the sessions by album; this page
 * is the one that shows explainers and sessions side by side.
 */
const Videos = ({ videos }: Props) => {
  const [openId, setOpenId] = useState<string | null>(null);
  const open = videos.find((video) => video.id === openId) ?? null;

  return (
    <>
      <VideosSEO videos={videos} />
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

            <StyledIntro>{VIDEOS_DESCRIPTION}</StyledIntro>

            {open && (
              <StyledPlayer>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${open.id}?autoplay=1&rel=0`}
                  title={open.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </StyledPlayer>
            )}

            {videos.length === 0 ? (
              <Typography>No videos published yet.</Typography>
            ) : (
              <StyledGrid>
                {videos.map((video) => {
                  const href = videoSourceHref(video);
                  return (
                    <StyledItem key={video.id}>
                      <VideoCard
                        video={video}
                        active={video.id === openId}
                        onPlay={() => setOpenId(video.id)}
                      />
                      {href && (
                        <Link href={href} className="video-source">
                          {sourceLabel(video)} &rarr;
                        </Link>
                      )}
                    </StyledItem>
                  );
                })}
              </StyledGrid>
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
