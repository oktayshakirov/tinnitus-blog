import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Layout from '@components/Layout';
import Link from '@components/Link';
import GoBackLink from '@components/GoBackLink';
import PostVideo from '@components/MDX/PostVideo';
import VideoCard from '@components/VideoCard';
import AdComponent from '@components/AdComponent';
import MedicalDisclaimer from '@components/MedicalDisclaimer';
import VideoSingleSEO from './VideoSingle.SEO';
import { StyledContainer } from '@ui/pages/BlogPost/BlogPost.styled';
import {
  StyledMeta,
  StyledChapters,
  StyledTimestamp,
  StyledTranscript,
  StyledRelated,
} from './VideoSingle.styled';
import { SiteVideo, formatDuration, videoSourceHref } from '@lib/videos';

export type Props = {
  video: SiteVideo;
  related: SiteVideo[];
};

/**
 * One page per long-form video.
 *
 * This is the only surface here where video is unambiguously the page's main
 * content, which is the condition Google's August 2023 change put on the video
 * rich result - an article with a supplementary embed does not qualify. The
 * transcript is what keeps it from being a thin page: it is the script, which
 * is written narration rather than the article's prose, so it is 450-700 words
 * that exist nowhere else on the site.
 */
const VideoSingle = ({ video, related }: Props) => {
  const sourceHref = videoSourceHref(video);
  const chapters = video.chapters ?? [];

  return (
    <>
      <VideoSingleSEO video={video} />
      <Layout>
        <StyledContainer maxWidth="md">
          <GoBackLink option="videos" />
          <Typography component="h1" variant="h4" mt={2} mb={2}>
            {video.title}
          </Typography>
          <StyledMeta>
            {formatDuration(video.seconds)}
            {sourceHref && (
              <>
                {' · '}
                <Link href={sourceHref}>Read the full article</Link>
              </>
            )}
          </StyledMeta>

          {/* Open, but not playing. On this page the video is what the visitor
              came for, so the facade would be a pointless second click - and
              autoplaying at someone whose complaint is an ear symptom is the
              last thing this site should do. */}
          <PostVideo video={video} autoExpand />

          {chapters.length > 0 && (
            <>
              <Typography component="h2" variant="h6" mt={5} mb={2}>
                Chapters
              </Typography>
              <StyledChapters>
                {chapters.map((chapter) => (
                  <li key={chapter.start}>
                    <a href={`#t-${chapter.start}`}>
                      <StyledTimestamp>
                        {formatDuration(chapter.start)}
                      </StyledTimestamp>
                      {chapter.title}
                    </a>
                  </li>
                ))}
              </StyledChapters>

              <Typography component="h2" variant="h6" mb={1}>
                Transcript
              </Typography>
              <StyledTranscript>
                {chapters.map((chapter) => (
                  <div key={chapter.start} id={`t-${chapter.start}`}>
                    <h3>
                      <StyledTimestamp>
                        {formatDuration(chapter.start)}
                      </StyledTimestamp>
                      {chapter.title}
                    </h3>
                    <p>{chapter.text}</p>
                  </div>
                ))}
              </StyledTranscript>
            </>
          )}

          {sourceHref && (
            <Typography mb={4}>
              <Link href={sourceHref}>
                Read the full article, with sources &rarr;
              </Link>
            </Typography>
          )}

          <MedicalDisclaimer />

          {related.length > 0 && (
            <Box mt={5}>
              <Typography component="h2" variant="h6">
                More videos
              </Typography>
              <StyledRelated>
                {related.map((item) => (
                  <VideoCard key={item.id} video={item} />
                ))}
              </StyledRelated>
            </Box>
          )}

          <Container disableGutters>
            <Box pt={4}>
              <AdComponent />
            </Box>
          </Container>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default VideoSingle;
