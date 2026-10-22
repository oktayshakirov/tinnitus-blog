import NextImage from 'next/image';
import { SiteVideo, formatDuration } from '@lib/videos';
import { StyledCard, StyledPlayCard } from './VideoCard.styled';

type Props = {
  video: SiteVideo;
  /**
   * Plays the video in place instead of linking to /videos/<slug>. For sound
   * sessions, which have no page of their own.
   */
  onPlay?: () => void;
};

/**
 * Feed card. Links to /videos/<slug> rather than out to YouTube: that page has
 * the player anyway, plus the transcript and the link back to the article, so
 * sending the click to YouTube only gives the view away.
 *
 * The poster is our own WebP and nothing is requested from Google here, which
 * is what keeps a page of twelve of these cheap.
 */
const VideoCard = ({ video, onPlay }: Props) => {
  const length = formatDuration(video.seconds);

  const body = (
    <>
      <span className="video-poster">
        <NextImage
          src={video.poster}
          alt=""
          width={640}
          height={360}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
        {length && <span className="video-length">{length}</span>}
      </span>
      <span className="video-title">{video.title}</span>
    </>
  );

  if (onPlay) {
    return (
      <StyledPlayCard onClick={onPlay} aria-label={`Play: ${video.title}`}>
        {body}
      </StyledPlayCard>
    );
  }

  return <StyledCard href={`/videos/${video.slug}`}>{body}</StyledCard>;
};

export default VideoCard;
