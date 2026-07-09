import React from 'react';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Layout from '@components/Layout';
import GoBackLink from '@components/GoBackLink';
import Icon from '@components/Icon';
import { Author } from '@const/authors';
import {
  FaTwitter,
  FaLinkedinIn,
  FaGlobe,
  FaGithub,
} from 'react-icons/fa';
import AuthorProfileSEO from './AuthorProfile.SEO';
import {
  StyledContainer,
  StyledCard,
  StyledHeader,
  StyledAvatar,
  StyledRole,
  StyledSocials,
  StyledDivider,
  StyledBio,
  StyledSectionTitle,
  StyledResources,
  StyledResourceCard,
} from './AuthorProfile.styled';

type Props = {
  author: Author;
};

const AuthorProfile = ({ author }: Props) => {
  const { social } = author;

  return (
    <>
      <AuthorProfileSEO author={author} />
      <Layout>
        <StyledContainer>
          <GoBackLink option="authors" />
          <StyledCard>
            <StyledHeader>
              <StyledAvatar>
                <Image
                  src={author.image}
                  alt={author.name}
                  fill
                  sizes="140px"
                  priority
                />
              </StyledAvatar>
              <Typography component="h1" variant="h4">
                {author.name}
              </Typography>
              <StyledRole>{author.role}</StyledRole>
              <StyledSocials>
                {social.twitter && (
                  <a
                    href={social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name} on X`}
                  >
                    <Icon icon={FaTwitter} size={20} />
                  </a>
                )}
                {social.linkedin && (
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name} on LinkedIn`}
                  >
                    <Icon icon={FaLinkedinIn} size={20} />
                  </a>
                )}
                {social.github && (
                  <a
                    href={social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name} on GitHub`}
                  >
                    <Icon icon={FaGithub} size={20} />
                  </a>
                )}
                {social.website && (
                  <a
                    href={social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name} website`}
                  >
                    <Icon icon={FaGlobe} size={20} />
                  </a>
                )}
              </StyledSocials>
            </StyledHeader>

            <StyledDivider />

            <StyledBio>
              {author.bio.map((paragraph, i) => (
                <p key={`bio-${i}`}>{paragraph}</p>
              ))}
            </StyledBio>

            {author.resources.length > 0 && (
              <>
                <StyledDivider />
                <StyledSectionTitle>Helpful Resources</StyledSectionTitle>
                <StyledResources>
                  {author.resources.map((resource) => (
                    <StyledResourceCard
                      key={resource.href}
                      href={resource.href}
                    >
                      <span className="resource-label">{resource.label}</span>
                      <span className="resource-description">
                        {resource.description}
                      </span>
                    </StyledResourceCard>
                  ))}
                </StyledResources>
              </>
            )}
          </StyledCard>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default AuthorProfile;
