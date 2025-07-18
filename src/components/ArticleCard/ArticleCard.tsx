import { AllHTMLAttributes } from 'react';
import { ArticleMeta } from '@types';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import { ArticleType } from '@enums/articles';
import Link from '@components/Link';
import Image from '@components/Image';
import {
  StyledCard,
  StyledContent,
  StyledTime,
  StyledFooter,
  StyledLink,
  StyledTags,
  StyledTag,
} from './ArticleCard.styled';
import { getTagsPath } from '@lib/paths';
import { Divider } from '@mui/material';
import StreamingIcons from '@components/StreamingIcons';
import { FaHashtag, FaClock } from 'react-icons/fa';

type Props = {
  article: ArticleMeta;
  index?: number;
} & AllHTMLAttributes<HTMLDivElement>;

const ArticleCard = ({ className, article, index }: Props) => {
  const { title, description, slug, image, tags, type, readingTime } = article;
  const path = type === ArticleType.POST ? '/blog' : '/zen';

  return (
    <Grow in timeout={(index || 0) * 150}>
      <StyledCard className={className}>
        <StyledLink href={`${path}/${slug}`}>
          <Image
            src={image}
            alt={title}
            priority={index === 0}
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
          />
          {type === ArticleType.POST && (
            <StyledTime
              icon={
                <FaClock
                  style={{ color: 'inherit', transform: 'translateY(-2px)' }}
                />
              }
              label={readingTime.text}
            />
          )}
          <StyledContent>
            <Typography component="h2" variant="h6" mb={1}>
              {title}
            </Typography>
            <Typography component="p">{description}</Typography>
            {type !== ArticleType.POST && (
              <>
                <Divider sx={{ margin: '16px 0' }} />
                <StreamingIcons />
              </>
            )}
          </StyledContent>
        </StyledLink>
        {type === ArticleType.POST && (
          <>
            <Divider sx={{ mx: 2 }} />
            <StyledFooter>
              <StyledTags>
                {tags.slice(0, 2).map((tag) => (
                  <StyledTag key={tag}>
                    <Link href={getTagsPath(tag)}>
                      <FaHashtag
                        style={{
                          color: 'inherit',
                          marginRight: '0.3rem',
                          transform: 'translateY(2px)',
                        }}
                      />
                      {tag}
                    </Link>
                  </StyledTag>
                ))}
                {tags.length > 2 && (
                  <StyledTag key="extra">
                    <span>+{tags.length - 2}</span>
                  </StyledTag>
                )}
              </StyledTags>
            </StyledFooter>
          </>
        )}
      </StyledCard>
    </Grow>
  );
};

export default ArticleCard;
