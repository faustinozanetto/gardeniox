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
      <meta charSet='utf-8' />
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content='Gardeniox' />
      <meta property='og:url' content={`${ogUrl}${router.asPath}`} />
      <meta property='og:type' content={'website'} />
      <link rel='manifest' href='/manifest.json' />
      <link
        href='/icons/favicon-16x16.png'
        rel='icon'
        type='image/png'
        sizes='16x16'
      />
      <link
        href='/icons/favicon-32x32.png'
        rel='icon'
        type='image/png'
        sizes='32x32'
      />
      <link rel='apple-touch-icon' href='/apple-icon.png'></link>
      <meta name='theme-color' content='#2196f3"' />
    </Head>
  );
};
