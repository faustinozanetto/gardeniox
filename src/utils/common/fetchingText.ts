type fetchingTextProps = {
  fetching: boolean;
};

export const fetchingText = ({ fetching }: fetchingTextProps) => {
  return fetching ? 'Loading...' : '';
};
