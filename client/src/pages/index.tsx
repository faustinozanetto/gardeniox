import { withUrqlClient } from 'next-urql';
import { Layout } from '../components';
import { createUrqlClient } from '../utils/index';

const Index = () => {
  return <Layout></Layout>;
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);
