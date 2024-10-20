import Image from 'next/image';

interface StreamingPlatformsProps {
  spotifyLink: string;
  appleMusicLink: string;
  youtubeMusicLink: string;
  amazonMusicLink: string;
  deezerLink: string;
}

const StreamingPlatforms: React.FC<StreamingPlatformsProps> = ({
  spotifyLink,
  appleMusicLink,
  youtubeMusicLink,
  amazonMusicLink,
  deezerLink,
}) => {
  const platforms = [
    {
      name: 'Spotify',
      link: spotifyLink,
      imgSrc: '/images/streaming-icons/spotify.png',
    },
    {
      name: 'Apple Music',
      link: appleMusicLink,
      imgSrc: '/images/streaming-icons/apple-music.png',
    },
    {
      name: 'YouTube',
      link: youtubeMusicLink,
      imgSrc: '/images/streaming-icons/youtube.png',
    },
    {
      name: 'Amazon Music',
      link: amazonMusicLink,
      imgSrc: '/images/streaming-icons/amazon.png',
    },
    {
      name: 'Deezer',
      link: deezerLink,
      imgSrc: '/images/streaming-icons/deezer.png',
    },
  ];

  const containerStyle: React.CSSProperties = {
    textAlign: 'center',
    textDecoration: 'none',
    color: 'inherit',
    flex: '1 1 100px',
    maxWidth: '150px',
  };

  return (
    <div
      style={{
        textAlign: 'center',
        backgroundColor: 'rgba(23, 23, 23, 0.4)',
        borderRadius: '20px',
        padding: '20px',
        marginTop: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        {platforms.map((platform) => (
          <a key={platform.name} href={platform.link} style={containerStyle}>
            <Image
              src={platform.imgSrc}
              alt={platform.name}
              width={60}
              height={60}
            />
            <div>{platform.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default StreamingPlatforms;
