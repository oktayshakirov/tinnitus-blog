import { ChangeEvent, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PaginationItem from '@mui/material/PaginationItem';
import Typography from '@mui/material/Typography';
import Layout from '@components/Layout';
import Link from '@components/Link';
import NextLink from '@components/Link/NextLink';
import VideoCard from '@components/VideoCard';
import Headline from '@ui/pages/shared/Headline';
import AdComponent from '@components/AdComponent';
import VideosSEO from './Videos.SEO';
import {
  StyledContainer,
  StyledTabContainer,
  StyledPagination,
} from '@ui/pages/Zen/Zen.styled';
import { StyledTabs, StyledPlayer } from './Videos.styled';
import { SiteVideo } from '@lib/videos';

export type VideosTab = 'explainers' | 'sessions';

export type Props = {
  tab: VideosTab;
  videos: SiteVideo[];
  hasSessions: boolean;
  page: number;
  pageCount: number;
};

export const VIDEOS_TAB_PATH: Record<VideosTab, string> = {
  explainers: '/videos',
  sessions: '/videos/sessions',
};

/**
 * Every video the site publishes, one route per kind: /videos for the
 * explainers and /videos/sessions for the sound sessions. Both lay out on the
 * same three-column grid and paginate the same way.
 *
 * The one difference is the click. An explainer has a page of its own, carrying
 * chapters and a transcript, so its card links away. A session is the sound
 * itself and has no page, so it plays in place above the grid.
 *
 * This replaced /zen/videos, which listed the sessions alone.
 */
const Videos = ({
  tab,
  videos,
  hasSessions,
  page: pageFromUrl,
  pageCount,
}: Props) => {
  const [page, setPage] = useState(pageFromUrl);
  const [playing, setPlaying] = useState<SiteVideo | null>(null);
  const basePath = VIDEOS_TAB_PATH[tab];

  // A client-side move to another page or tab reuses this component, so the
  // open player and the page number have to follow the URL.
  useEffect(() => {
    setPage(pageFromUrl);
    setPlaying(null);
  }, [tab, pageFromUrl]);

  const handlePageChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const play = (video: SiteVideo) => {
    setPlaying(video);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <VideosSEO tab={tab} videos={videos} page={pageFromUrl} />
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
                <NextLink
                  href={VIDEOS_TAB_PATH.explainers}
                  aria-current={tab === 'explainers' ? 'page' : undefined}
                >
                  Explainers
                </NextLink>
                <NextLink
                  href={VIDEOS_TAB_PATH.sessions}
                  aria-current={tab === 'sessions' ? 'page' : undefined}
                >
                  Sound sessions
                </NextLink>
              </StyledTabs>
            )}

            {playing && (
              <StyledPlayer>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${playing.id}?autoplay=1&rel=0`}
                  title={playing.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </StyledPlayer>
            )}

            {videos.length === 0 ? (
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
                      <VideoCard
                        video={video}
                        onPlay={
                          tab === 'sessions' ? () => play(video) : undefined
                        }
                      />
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
                            ? basePath
                            : `${basePath}/page/${item.page}`
                        }
                        {...item}
                      />
                    )}
                  />
                )}
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
