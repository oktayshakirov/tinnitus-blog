import { ReactNode } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ArticleCard from '@components/ArticleCard';
import ArticleTags from '@components/ArticleTags';
import { Article } from '@types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type TitleProps = {
  children: ReactNode;
};
const Title = ({ children }: TitleProps) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  if (isDesktop) {
    return (
      <Typography component="p" variant="h6" mb={2}>
        {children}
      </Typography>
    );
  }

  return (
    <Typography component="p" variant="h4" mb={2}>
      {children}
    </Typography>
  );
};

type Props = {
  prev: Article | null;
  next: Article | null;
  tags: string[];
};
const ArticleNavigation = ({ prev, next, tags = [] }: Props) => (
  <aside>
    <Grid container spacing={{ xs: 4, md: 4 }}>
      <Grid item xs={12}>
        <Title>Tags:</Title>
        <ArticleTags tags={tags} />
      </Grid>
      {prev && (
        <Grid item xs={12} sm={6} md={12}>
          <Title><ArrowBackIosIcon/>Previous article</Title>
          <ArticleCard article={prev.meta} index={0} />
        </Grid>
      )}
      {next && (
        <Grid item xs={12} sm={6} md={12}>
          <Title>Next article <ArrowForwardIosIcon/></Title>
          <ArticleCard article={next.meta} index={1} />
        </Grid>
      )}
    </Grid>
  </aside>
);

export default ArticleNavigation;
