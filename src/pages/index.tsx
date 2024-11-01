import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const logo = require('@site/static/img/logo_dark.png').default;
  const banner = require('@site/static/img/banner_dark.gif').default;
  const tagline = require('@site/static/img/tagline_dark.png').default;
  const appstore = require('@site/static/img/appstore.png').default;
  const appstoreFM = require('@site/static/img/appstoreFM.png').default;
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="col">
      <img src={logo} id="titleLogo" width="80%"></img>
        <img src={banner} id="banner"></img>
        <div className="container">
          <img src={tagline} id="tagline" width="80%"></img>
        </div>
        <div className="container">
          <div>
            <a href="https://apple.co/3A1akCW"><img src={appstore} id="appstore" width="30%"></img></a>
            <a href="https://apple.co/3YKix8a"><img src={appstoreFM} id="appstore" width="30%"></img></a>
          </div>
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
