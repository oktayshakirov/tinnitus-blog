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
  StyledDate,
  StyledDivider,
  StyledFooter,
  StyledLink,
  StyledReadingTime,
  StyledTag,
  StyledTags,
} from './ArticleCard.styled';
import { getTagsPath } from '@lib/paths';

type Props = {
  article: ArticleMeta;
  index?: number;
  withTags?: boolean;
} & AllHTMLAttributes<HTMLDivElement>;
const ArticleCard = ({ className, article, index, withTags }: Props) => {
  const { title, description, slug, image, date, tags, type, readingTime } =
    article;
  const path = type === ArticleType.POST ? '/blog' : '/zen';

  return (
    <Grow in timeout={(index || 0) * 150}>
      <StyledCard className={className}>
        <StyledLink href={`${path}/${slug}`}>
          <Image src={image} alt={title} />
          <StyledDate label={date} />
          <StyledContent>
            <Typography component="h2" variant="h6" mb={1}>
              {title}
            </Typography>
            <Typography component="p">{description}</Typography>
          </StyledContent>
        </StyledLink>
        {withTags && (
          <>
            <StyledDivider />
            <StyledFooter>
              <StyledReadingTime label={readingTime.text} />
              <StyledTags>
                {tags.map((tag) => (
                  <StyledTag key={tag}>
                    <Link href={getTagsPath(tag)}>{tag}</Link>
                  </StyledTag>
                ))}
              </StyledTags>
            </StyledFooter>
          </>
        )}
      </StyledCard>
    </Grow>
  );
};

export default ArticleCard;
