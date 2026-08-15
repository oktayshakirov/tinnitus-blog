import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Layout from '@components/Layout';
import Link from '@components/Link';
import ListingTabs from '@components/ListingTabs';
import ZenSessions from '@components/ZenSessions';
import Headline from '@ui/pages/shared/Headline';
import AdComponent from '@components/AdComponent';
import MedicalDisclaimer from '@components/MedicalDisclaimer';
import ZenVideosSEO from './ZenVideos.SEO';
import { StyledContainer, StyledTabContainer } from '@ui/pages/Zen/Zen.styled';
import { StyledIntro, StyledAlbum } from './ZenVideos.styled';
import { SiteVideo } from '@lib/videos';

export type SessionAlbum = {
  slug: string;
  title: string;
  sessions: SiteVideo[];
};

export type Props = {
  albums: SessionAlbum[];
};

/**
 * Every sound-therapy session, grouped by the album its sound came from.
 *
 * This is the one page on the site where video is unambiguously the main
 * content rather than a supplement to an article - which is the condition
 * Google's August 2023 change put on the video rich result. It is also the
 * natural home for sessions that would otherwise be buried three clicks deep
 * on an album page.
 */
const ZenVideos = ({ albums }: Props) => (
  <>
    <ZenVideosSEO albums={albums} />
    <Layout>
      <Container>
        <AdComponent />
      </Container>
      <StyledContainer>
        <StyledTabContainer>
          <Headline>
            <i
              className="fi fi-music-note"
              style={{ fontSize: '0.8em', marginRight: '0.5em' }}
            />
            SOUNDS
          </Headline>
          <ListingTabs basePath="/zen" active="videos" showVideos />

          <StyledIntro>
            Masking sessions you can play straight through, each cut from one of
            our sound albums. Use headphones, and set the volume so the sound
            sits <em>just below</em> your tinnitus - you should still hear the
            ringing faintly underneath. Burying it completely is what most
            people do, and it is not what this is for.
          </StyledIntro>

          {albums.length === 0 ? (
            <Typography>No sessions published yet.</Typography>
          ) : (
            albums.map((album) => (
              <StyledAlbum key={album.slug}>
                <ZenSessions
                  sessions={album.sessions}
                  showNote={false}
                  heading={
                    <Link href={`/zen/${album.slug}`}>{album.title}</Link>
                  }
                />
              </StyledAlbum>
            ))
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

export default ZenVideos;
