import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const logo = require('@site/static/img/logo_dark.png').default;
  const banner = require('@site/static/img/banner_dark.gif').default;
  const tagline = require('@site/static/img/tagline_dark.png').default;
  const appstore = require('@site/static/img/app.png').default;
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="col">
      <img src={logo} id="titleLogo" width="80%"></img>
        <img src={banner} id="banner"></img>
        <div className="container">
          <img src={tagline} id="tagline" width="80%"></img>
        </div>
        <div>
          <img src={appstore} id="appstore" width="10%"></img>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Euclidean Instruments website">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
