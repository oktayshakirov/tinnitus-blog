import NextImage from 'next/image';
import { FaPlay } from 'react-icons/fa';
import Icon from '@components/Icon';
import { SiteVideo, formatDuration } from '@lib/videos';
import { StyledCard } from './VideoCard.styled';

type Props = {
  video: SiteVideo;
};

/**
 * Feed card. Links to /videos/<slug> rather than out to YouTube: that page has
 * the player anyway, plus the transcript and the link back to the article, so
 * sending the click to YouTube only gives the view away.
 *
 * The poster is our own WebP and nothing is requested from Google here, which
 * is what keeps a page of twelve of these cheap.
 */
const VideoCard = ({ video }: Props) => {
  const length = formatDuration(video.seconds);

  return (
    <StyledCard href={`/videos/${video.slug}`}>
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
    </StyledCard>
  );
};

export default VideoCard;
