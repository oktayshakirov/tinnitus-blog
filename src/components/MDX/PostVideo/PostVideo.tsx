import { useState } from 'react';
import NextImage from 'next/image';
import { FaPlay, FaYoutube } from 'react-icons/fa';
import Icon from '@components/Icon';
import { getVideoById, formatDuration, SiteVideo } from '@lib/videos';
import { usePageVideo } from './PostVideo.context';
import {
  StyledFacade,
  StyledPoster,
  StyledPlayBadge,
  StyledText,
  StyledPlayer,
} from './PostVideo.styled';

type Props = {
  /** Explicit video, for a page that is not this video's own. */
  id?: string;
  video?: SiteVideo | null;
  /** Sound-therapy sessions open with the player already loaded. */
  autoExpand?: boolean;
};

/**
 * Facade embed. Nothing is requested from Google until the visitor clicks:
 * a stock YouTube iframe is ~500KB-1.5MB across several third-party origins,
 * which on 70 pages would cost more in Core Web Vitals than the video gains.
 * It also sets cookies and hands Google the visitor's IP on page load, before
 * any consent - not something to ship under a German Impressum.
 *
 *   <PostVideo />                     this page's video, at this exact spot
 *   <PostVideo id="RR_qU3FA0OY" />    another page's video, explicitly
 */
const PostVideo = ({ id, video: videoProp, autoExpand = false }: Props) => {
  const [playing, setPlaying] = useState(autoExpand);
  const pageVideo = usePageVideo();
  const video = videoProp ?? (id ? getVideoById(id) : pageVideo);

  if (!video) return null;

  const length = formatDuration(video.seconds);

  if (playing) {
    return (
      <StyledPlayer>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${video.id}?rel=0${
            autoExpand ? '' : '&autoplay=1'
          }`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </StyledPlayer>
    );
  }

  return (
    <StyledFacade
      onClick={() => setPlaying(true)}
      aria-label={`Play video: ${video.title}${length ? ` (${length})` : ''}`}
    >
      <StyledPoster>
        <NextImage src={video.poster} alt="" width={160} height={90} />
        <StyledPlayBadge>
          <Icon icon={FaPlay} />
        </StyledPlayBadge>
      </StyledPoster>
      <StyledText>
        <span className="video-eyebrow">Watch instead</span>
        <span className="video-title">{video.title}</span>
        <span className="video-meta">
          <Icon icon={FaYoutube} />
          {length && <span>{length}</span>}
        </span>
      </StyledText>
    </StyledFacade>
  );
};

export default PostVideo;
