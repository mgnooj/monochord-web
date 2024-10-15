import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Euclidean Instruments',
  tagline: 'Microtonal Analog Modeling Synthesis',
  favicon: 'img/littlelogo.png',

  // Set the production url of your site here
  url: 'https://euclidean-instruments.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/monochord-web/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mgnooj', // Usually your GitHub org/user name.
  projectName: 'monochord-web', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    //image: '',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
    },
    navbar: {
      title: 'Euclidean Instruments',
      logo: {
        alt: 'Euclidean Instruments',
        src: 'img/littlelogo.png',
      },
      items: [
        {to: '/microton', label: 'Microton', position: 'left'},
        //{to: '/deltaz', label: 'Delta-Z', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {to: '/blog', label: 'Blog', position: 'left'}
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: ' ',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Docs',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: ' ',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Contact',
              to: '/contact',
            },
          ],
        },
        //{
        //  title: ' ',
        //  items: [
        //    {
        //      label: 'Instagram',
        //      href: 'https://instagram.com',
        //    },
        //    {
        //      label: 'YouTube',
        //      href: 'https://youtube.com',
        //    },
        //    {
        //      label: 'Soundcloud',
        //      href: 'https://soundcloud.com',
        //    },
        //  ],
        //},
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Euclidean Instruments, LLC`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
