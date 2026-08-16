import NextImage from 'next/image';
import { FaPlay } from 'react-icons/fa';
import Icon from '@components/Icon';
import { SiteVideo, formatDuration } from '@lib/videos';
import { StyledButtonCard, StyledLinkCard } from './VideoCard.styled';

type Props = {
  video: SiteVideo;
  /** The /videos hub plays the video in place; pass this and omit `href`. */
  onPlay?: (video: SiteVideo) => void;
  /** Whether this card's video is the one currently playing. */
  active?: boolean;
  /** The home row sends the click to /videos rather than loading a player. */
  href?: string;
};

/**
 * Poster card for a video feed. Still a facade - the poster is our own WebP and
 * nothing reaches Google until somebody asks for the player.
 */
const VideoCard = ({ video, onPlay, active = false, href }: Props) => {
  const length = formatDuration(video.seconds);

  const inner = (
    <>
      <span className="video-poster">
        <NextImage
          src={video.poster}
          alt=""
          width={640}
          height={360}
          sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
        />
        <span className="video-badge">
          <Icon icon={FaPlay} />
        </span>
        {length && <span className="video-length">{length}</span>}
      </span>
      <span className="video-title">{video.title}</span>
    </>
  );

  if (href) {
    return <StyledLinkCard href={href}>{inner}</StyledLinkCard>;
  }

  return (
    <StyledButtonCard
      active={active}
      onClick={() => onPlay?.(video)}
      aria-label={`Play video: ${video.title}${length ? ` (${length})` : ''}`}
    >
      {inner}
    </StyledButtonCard>
  );
};

export default VideoCard;
