import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

export type SEOProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
};

export const SEO = ({ title, description, keywords, ogUrl }: SEOProps) => {
  const router = useRouter();

  return (
    <Head>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content='Gardeniox' />
      <meta property='og:url' content={`${ogUrl}${router.asPath}`} />
      <meta property='og:type' content={'website'} />
    </Head>
  );
};
