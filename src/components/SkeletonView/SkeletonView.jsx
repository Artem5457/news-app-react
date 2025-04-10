import { Skeleton, Stack, Box } from '@mui/material';
import { styles } from './styles.jsx';

export function SkeletonView({ type, count = 1 }) {
  const listSkeleton = () => {
    return (
      <Stack spacing={4}>
        {Array.from({ length: count }).map((_, index) => (
          <Box key={index} sx={styles.item}>
            <Skeleton variant="reactangular" width={64} height={64} />
            <Box sx={styles.info}>
              <Skeleton variant="reactangular" width={'100%'} height={'50%'} />
              <Skeleton variant="reactangular" width={'100%'} height={'50%'} />
            </Box>
          </Box>
        ))}
      </Stack>
    );
  };

  return (
    <>
      {
        type === 'banner'
          ? <Skeleton
            variant="rectangular"
            width={'100%'}
            height={350}
          />
          : listSkeleton()
      }
    </>
  );
}
