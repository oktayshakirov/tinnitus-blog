import MuiNextLink from '@components/Link';
import { AllHTMLAttributes } from 'react';

type Props = AllHTMLAttributes<HTMLAnchorElement>;
const Link = ({ href = '/', ...rest }: Props) => {
  const isInternalLink = href && href.toString().startsWith('/');
  const isAnchorLink = href && href.toString().startsWith('#');

  if (isInternalLink) {
    return <MuiNextLink href={href} {...rest} />;
  }

  if (isAnchorLink) {
    return <MuiNextLink href={href} {...rest} />;
  }

  return (
    <MuiNextLink
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
    />
  );
};

export default Link;
