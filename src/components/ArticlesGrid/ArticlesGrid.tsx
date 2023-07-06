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
  containerProps = { spacing: { xs: 2, md: 4 } },
  itemProps = { xs: 12, sm: 6, md: 4 },
}: Props) => {
  return (
    <Grid container {...containerProps}>
      {articles.map((article, index) => (
        <Grid key={article.slug} item {...itemProps}>
          <ArticleCard article={article} index={index} withTags />
        </Grid>
      ))}
    </Grid>
  );
};

export default ArticlesGrid;
