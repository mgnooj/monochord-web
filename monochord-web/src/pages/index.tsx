import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const titleLight = require('@site/static/img/logo_light.png').default;
  const titleDark = require('@site/static/img/logo_dark.png').default;
  const bannerLight = require('@site/static/img/banner_light.gif').default;
  const bannerDark = require('@site/static/img/banner_dark.gif').default;
  const taglineLight = require('@site/static/img/tagline_light.png').default;
  const taglineDark = require('@site/static/img/tagline_dark.png').default;
  const appstore = require('@site/static/img/app.png').default;
  const doc = document.documentElement;

  const lightTheme = doc.getAttribute("data-theme") === "light";  
  const banner = !lightTheme ? bannerLight : bannerDark;
  const logo = !lightTheme ? titleLight : titleDark;
  const tagline = !lightTheme ? taglineLight : taglineDark;

  doc.addEventListener("click", function() {
    const lightTheme = doc.getAttribute("data-theme") === "light";  
    const banner = document.getElementById("banner");
    const logo = document.getElementById("titleLogo");
    const tagline = document.getElementById("tagline");
    if (banner != null && logo != null) {
      banner.src = !lightTheme ? bannerLight : bannerDark;
      logo.src = !lightTheme ? titleLight : titleDark;
      tagline.src = !lightTheme ? taglineLight : taglineDark;
    }
  });
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
