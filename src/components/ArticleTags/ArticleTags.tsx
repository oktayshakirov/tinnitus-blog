import { AllHTMLAttributes } from 'react';
import Grow from '@mui/material/Grow';
import Link from '@components/Link';
import { getTagsPath } from '@lib/paths';
import { StyledTag, StyledTags } from './ArticleTags.styled';

type Props = {
  tags: string[];
} & AllHTMLAttributes<HTMLDivElement>;
const ArticleTags = ({ className, tags }: Props) => (
  <StyledTags className={className}>
    {tags.map((tag, index) => (
      <Grow key={tag} in timeout={index * 150}>
        <StyledTag>
          <Link href={getTagsPath(tag)}>{tag}</Link>
        </StyledTag>
      </Grow>
    ))}
  </StyledTags>
);

export default ArticleTags;
