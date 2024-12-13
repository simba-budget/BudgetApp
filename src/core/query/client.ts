import { QueryClient } from '@tanstack/react-query';

import { defaultStaleTime } from './constants';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: defaultStaleTime,
    },
  },
});

export default queryClient;
