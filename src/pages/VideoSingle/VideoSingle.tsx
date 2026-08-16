import { MouseEvent, useEffect, useState } from 'react';
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
  StyledToggle,
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
  const words = chapters.reduce(
    (total, chapter) => total + chapter.text.split(/\s+/).length,
    0
  );

  const transcriptId = `transcript-${video.slug}`;
  const [transcriptOpen, setTranscriptOpen] = useState(false);
  const [pendingJump, setPendingJump] = useState<number | null>(null);

  // A chapter link points into the transcript, so it has to open it first, and
  // the jump has to wait for that: while collapsed the target has no box to
  // scroll to. Hence the effect rather than the browser's own anchor handling.
  useEffect(() => {
    if (pendingJump === null) return;
    document
      .getElementById(`t-${pendingJump}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setPendingJump(null);
  }, [pendingJump]);

  const jumpToChapter =
    (start: number) => (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      setTranscriptOpen(true);
      setPendingJump(start);
    };

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
                    <a
                      href={`#t-${chapter.start}`}
                      onClick={jumpToChapter(chapter.start)}
                    >
                      <StyledTimestamp>
                        {formatDuration(chapter.start)}
                      </StyledTimestamp>
                      {chapter.title}
                    </a>
                  </li>
                ))}
              </StyledChapters>

              {/* Folded away by default. Nobody opens a video page to read
                  four hundred words, and a wall of narration under the player
                  buries the article link and the other videos.

                  Hidden with CSS rather than unmounted: the text has to stay
                  in the served HTML, because being indexable is the entire
                  point of having a transcript. Google reads collapsed content
                  the same either way, but it cannot read what was never
                  rendered. */}
              <Typography component="h2" variant="h6" mb={1}>
                Transcript
              </Typography>
              <StyledToggle
                type="button"
                aria-expanded={transcriptOpen}
                aria-controls={transcriptId}
                onClick={() => setTranscriptOpen((open) => !open)}
              >
                {transcriptOpen
                  ? 'Hide the transcript'
                  : `Read the transcript (${words} words)`}
              </StyledToggle>
              <StyledTranscript id={transcriptId} shown={transcriptOpen}>
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
