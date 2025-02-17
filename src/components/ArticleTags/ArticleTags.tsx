import { AllHTMLAttributes } from 'react';
import Grow from '@mui/material/Grow';
import Link from '@components/Link';
import { getTagsPath } from '@lib/paths';
import { StyledTag, StyledTags } from './ArticleTags.styled';
import { FaHashtag } from 'react-icons/fa';

type Props = {
  tags: string[];
} & AllHTMLAttributes<HTMLDivElement>;

const ArticleTags = ({ className, tags }: Props) => (
  <StyledTags className={className}>
    {tags.map((tag, index) => (
      <Grow key={tag} in timeout={index * 150}>
        <StyledTag>
          <Link href={getTagsPath(tag)}>
            <FaHashtag
              style={{
                marginRight: '0.3rem',
                transform: 'translateY(2px)',
              }}
            />
            {tag}
          </Link>
        </StyledTag>
      </Grow>
    ))}
  </StyledTags>
);

export default ArticleTags;
