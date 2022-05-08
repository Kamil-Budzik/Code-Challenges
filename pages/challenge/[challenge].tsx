import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

const Challenge = () => {
  const router = useRouter();
  const { challenge } = router.query;

  return (
    <Layout>
      <h2>Page {challenge}</h2>
    </Layout>
  );
};

export default Challenge;