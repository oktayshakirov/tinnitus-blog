import Image from 'next/image';
import { FaCalendarAlt } from 'react-icons/fa';
import Icon from '@components/Icon';
import { Author } from '@const/authors';
import { StyledByline, StyledAvatar, StyledMeta } from './AuthorByline.styled';

type Props = {
  author: Author;
  date?: string;
};

const AuthorByline = ({ author, date }: Props) => {
  return (
    <StyledByline href={`/authors/${author.slug}`} aria-label={`Author: ${author.name}`}>
      <StyledAvatar>
        <Image src={author.image} alt={author.name} fill sizes="48px" />
      </StyledAvatar>
      <StyledMeta>
        <span className="written-by">Written by</span>
        <span className="author-name">{author.name}</span>
        {date && (
          <span className="author-date">
            <Icon icon={FaCalendarAlt} size={12} />
            {date}
          </span>
        )}
      </StyledMeta>
    </StyledByline>
  );
};

export default AuthorByline;
