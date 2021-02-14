import { usePlantQuery } from '../../generated/graphql';
import { useGetIntId } from '../index';

/**
 * returns plant entity query based on url variable
 */
export const useGetPlantFromUrl = () => {
  const id = useGetIntId();
  return usePlantQuery({
    pause: id === -1,
    variables: {
      id,
    },
  });
};
