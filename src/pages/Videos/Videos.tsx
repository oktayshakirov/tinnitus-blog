import { ChangeEvent, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PaginationItem from '@mui/material/PaginationItem';
import Typography from '@mui/material/Typography';
import Layout from '@components/Layout';
import Link from '@components/Link';
import VideoCard from '@components/VideoCard';
import ZenSessions from '@components/ZenSessions';
import Headline from '@ui/pages/shared/Headline';
import AdComponent from '@components/AdComponent';
import VideosSEO from './Videos.SEO';
import {
  StyledContainer,
  StyledTabContainer,
  StyledPagination,
} from '@ui/pages/Zen/Zen.styled';
import { StyledTabs, StyledAlbum, StyledNote } from './Videos.styled';
import { SiteVideo } from '@lib/videos';

export type SessionAlbum = {
  slug: string;
  title: string;
  sessions: SiteVideo[];
};

export type Props = {
  videos: SiteVideo[];
  albums: SessionAlbum[];
  page: number;
  pageCount: number;
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
const Videos = ({ videos, albums, page: pageFromUrl, pageCount }: Props) => {
  const [tab, setTab] = useState<VideosTab>('explainers');
  const [page, setPage] = useState(pageFromUrl);
  const hasSessions = albums.length > 0;

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <VideosSEO videos={videos} albums={albums} page={pageFromUrl} />
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
                <>
                  {/* The same grid /blog lays its cards out on, so a short last
                      row stays left-aligned rather than centring itself. */}
                  <Grid container spacing={4}>
                    {videos.map((video) => (
                      <Grid
                        key={video.id}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        sx={{ display: 'flex' }}
                      >
                        <VideoCard video={video} />
                      </Grid>
                    ))}
                  </Grid>
                  {pageCount > 1 && (
                    <StyledPagination
                      count={pageCount}
                      color="primary"
                      hidePrevButton
                      hideNextButton
                      page={page}
                      onChange={handlePageChange}
                      renderItem={(item) => (
                        <PaginationItem
                          component={Link}
                          href={
                            item.page === 1
                              ? '/videos'
                              : `/videos/page/${item.page}`
                          }
                          {...item}
                        />
                      )}
                    />
                  )}
                </>
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
