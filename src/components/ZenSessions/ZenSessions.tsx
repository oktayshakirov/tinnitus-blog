import { useState, ReactNode } from 'react';
import NextImage from 'next/image';
import Typography from '@mui/material/Typography';
import { FaPlay } from 'react-icons/fa';
import Icon from '@components/Icon';
import { SiteVideo, formatDuration } from '@lib/videos';
import {
  StyledSection,
  StyledPlayer,
  StyledGrid,
  StyledCard,
  StyledNote,
} from './ZenSessions.styled';

type Props = {
  sessions: SiteVideo[];
  /** Defaults to "Video sessions"; the /videos listing passes album names. */
  heading?: ReactNode;
  /** The listing shows the usage note once at the top, not per album. */
  showNote?: boolean;
};

/**
 * Sound-therapy sessions cut from one /zen album.
 *
 * Unlike an article explainer this is a list, not a single video: one album of
 * white noise can carry a 1-minute, a 5-minute and a 30-minute session, and
 * they all belong on the album's page. Cards are labelled by what makes them
 * different, not by the album name the page title already carries.
 *
 * Still a facade - nothing reaches Google until a card is clicked - but these
 * pages are the one place on the site where the video genuinely is the main
 * content, which is also why they are the strongest video rich-result
 * candidate we have.
 */
const ZenSessions = ({
  sessions,
  heading = 'Video sessions',
  showNote = true,
}: Props) => {
  const [openId, setOpenId] = useState<string | null>(null);

  if (!sessions.length) return null;

  const open = sessions.find((session) => session.id === openId) ?? null;

  return (
    <StyledSection>
      <Typography component="h2" variant="h5" gutterBottom>
        {heading}
      </Typography>

      {open && (
        <StyledPlayer>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${open.id}?autoplay=1&rel=0`}
            title={open.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </StyledPlayer>
      )}

      <StyledGrid>
        {sessions.map((session) => {
          const length = formatDuration(session.seconds);
          const label = session.label ?? session.title;
          return (
            <StyledCard
              key={session.id}
              active={session.id === openId}
              onClick={() => setOpenId(session.id)}
              aria-label={`Play session: ${session.title}`}
            >
              <span className="session-poster">
                <NextImage
                  src={session.poster}
                  alt=""
                  width={640}
                  height={360}
                  sizes="(max-width: 600px) 100vw, 320px"
                />
                <span className="session-badge">
                  <Icon icon={FaPlay} />
                </span>
              </span>
              <span className="session-body">
                <span className="session-label">{label}</span>
                <span className="session-length">{length}</span>
              </span>
            </StyledCard>
          );
        })}
      </StyledGrid>

      {/* The one instruction that matters, and the one most people get
          backwards: burying the ringing completely is not what masking is for. */}
      {showNote && (
        <StyledNote>
          Use headphones, and set the volume so the sound sits{' '}
          <em>just below</em> your tinnitus - you should still hear the ringing
          faintly underneath.
        </StyledNote>
      )}
    </StyledSection>
  );
};

export default ZenSessions;
