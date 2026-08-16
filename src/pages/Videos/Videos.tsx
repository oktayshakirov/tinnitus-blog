import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Layout from '@components/Layout';
import VideoCard from '@components/VideoCard';
import Headline from '@ui/pages/shared/Headline';
import AdComponent from '@components/AdComponent';
import MedicalDisclaimer from '@components/MedicalDisclaimer';
import VideosSEO, { VIDEOS_DESCRIPTION } from './Videos.SEO';
import { StyledContainer, StyledTabContainer } from '@ui/pages/Zen/Zen.styled';
import { StyledIntro, StyledGrid } from './Videos.styled';
import { SiteVideo } from '@lib/videos';

export type Props = {
  videos: SiteVideo[];
};

/**
 * Every article explainer, newest first. Sound-therapy sessions have their own
 * listing at /zen/videos - they are a different thing, grouped by album rather
 * than dated, and they have no transcript to carry a page of their own.
 */
const Videos = ({ videos }: Props) => (
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

          {videos.length === 0 ? (
            <Typography>No videos published yet.</Typography>
          ) : (
            <StyledGrid>
              {videos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
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

export default Videos;
