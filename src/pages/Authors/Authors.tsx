import React from 'react';
import Image from 'next/image';
import Layout from '@components/Layout';
import Headline from '@ui/pages/shared/Headline';
import { AUTHORS } from '@const/authors';
import AuthorsSEO from './Authors.SEO';
import {
  StyledContainer,
  StyledIntro,
  StyledGrid,
  StyledCard,
  StyledAvatar,
  StyledName,
  StyledRole,
  StyledDescription,
} from './Authors.styled';

const Authors = () => {
  return (
    <>
      <AuthorsSEO />
      <Layout>
        <StyledContainer>
          <Headline>Authors</Headline>
          <StyledIntro>
            Everything on TinnitusHelp.me is written and curated by people who
            care about getting tinnitus information right. Get to know them
            below.
          </StyledIntro>
          <StyledGrid>
            {AUTHORS.map((author) => (
              <StyledCard key={author.slug} href={`/authors/${author.slug}`}>
                <StyledAvatar>
                  <Image
                    src={author.image}
                    alt={author.name}
                    fill
                    sizes="110px"
                  />
                </StyledAvatar>
                <StyledName className="card-name">{author.name}</StyledName>
                <StyledRole>{author.role}</StyledRole>
                <StyledDescription>{author.description}</StyledDescription>
              </StyledCard>
            ))}
          </StyledGrid>
        </StyledContainer>
      </Layout>
    </>
  );
};

export default Authors;
