import { useEffect, useState, useRef } from 'react';
import { FaEye } from 'react-icons/fa';
import { styled } from '@mui/material/styles';
import { css } from '@emotion/react';

interface ViewsCounterProps {
  type: string;
  slug: string;
}

const StyledViewsCounter = styled('p')`
  ${({ theme }) => css`
    color: ${theme.palette.text.secondary};
    margin: 0;
    display: flex;
    align-items: center;
    gap: ${theme.spacing(0.5)};
  `}
`;

const ViewsCounter = ({ type, slug }: ViewsCounterProps) => {
  const [views, setViews] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const hasIncrementedRef = useRef<Record<string, boolean>>({});
  const currentKeyRef = useRef<string | null>(null);

  useEffect(() => {
    const componentKey = `${type}_${slug}`;
    const viewKey = `view_${type}_${slug}`;

    if (currentKeyRef.current !== componentKey) {
      currentKeyRef.current = componentKey;
      setViews(null);
      setIsLoading(true);
    }

    const hasIncremented = hasIncrementedRef.current[componentKey] || false;

    if (typeof window !== 'undefined') {
      const sessionIncremented = sessionStorage.getItem(viewKey);
      if (sessionIncremented === 'true' || hasIncremented) {
        const getViews = async () => {
          try {
            const getResponse = await fetch(`/api/views/${type}/${slug}`);
            if (getResponse.ok) {
              const data = await getResponse.json();
              setViews(data.views);
            }
          } catch (err) {
            console.error('Error fetching views:', err);
          } finally {
            setIsLoading(false);
          }
        };
        getViews();
        return;
      }
    }

    hasIncrementedRef.current[componentKey] = true;

    const incrementViews = async () => {
      try {
        if (typeof window !== 'undefined') {
          sessionStorage.setItem(viewKey, 'true');
        }

        const incrementResponse = await fetch(`/api/views/${type}/${slug}`, {
          method: 'POST',
        });

        if (incrementResponse.ok) {
          const data = await incrementResponse.json();
          setViews(data.views);
        } else {
          const getResponse = await fetch(`/api/views/${type}/${slug}`);
          if (getResponse.ok) {
            const data = await getResponse.json();
            setViews(data.views);
          }
        }
      } catch (error) {
        console.error('Error updating views:', error);
        hasIncrementedRef.current[componentKey] = false;
        if (typeof window !== 'undefined') {
          sessionStorage.removeItem(viewKey);
        }
        try {
          const getResponse = await fetch(`/api/views/${type}/${slug}`);
          if (getResponse.ok) {
            const data = await getResponse.json();
            setViews(data.views);
          }
        } catch (err) {
          console.error('Error fetching views:', err);
        }
      } finally {
        setIsLoading(false);
      }
    };

    incrementViews();
  }, [type, slug]);

  if (isLoading || views === null) {
    return null;
  }

  return (
    <StyledViewsCounter>
      <FaEye />
      {views.toLocaleString()} {views === 1 ? 'view' : 'views'}
    </StyledViewsCounter>
  );
};

export default ViewsCounter;
