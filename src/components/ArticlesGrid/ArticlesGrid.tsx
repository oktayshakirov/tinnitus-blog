import Grid, { GridProps } from '@mui/material/Grid';
import ArticleCard from '@components/ArticleCard';
import { ArticleMeta } from '@types';

type Props = {
  articles: ArticleMeta[];
  containerProps?: GridProps;
  itemProps?: GridProps;
};
const ArticlesGrid = ({
  articles,
  itemProps = { xs: 12, sm: 6, md: 4 },
}: Props) => {
  return (
    <Grid container spacing={4}>
      {articles.map((article, index) => (
        <Grid key={article.slug} item {...itemProps} sx={{ display: 'flex' }}>
          <ArticleCard article={article} index={index} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticlesGrid;
