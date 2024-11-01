import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '235'),
    exact: true
  },
  {
    path: '/blog/an-introduction-to-the-microton-tuning-system',
    component: ComponentCreator('/blog/an-introduction-to-the-microton-tuning-system', '163'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/hello-world',
    component: ComponentCreator('/blog/hello-world', '582'),
    exact: true
  },
  {
    path: '/blog/release-day',
    component: ComponentCreator('/blog/release-day', '667'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', 'b68'),
    exact: true
  },
  {
    path: '/deltaz',
    component: ComponentCreator('/deltaz', '7f0'),
    exact: true
  },
  {
    path: '/microton',
    component: ComponentCreator('/microton', '6c5'),
    exact: true
  },
  {
    path: '/privacy',
    component: ComponentCreator('/privacy', '476'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '84f'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'ff4'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '66f'),
            routes: [
              {
                path: '/docs/category/microton',
                component: ComponentCreator('/docs/category/microton', 'e3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/microton-fm',
                component: ComponentCreator('/docs/category/microton-fm', '773'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/au',
                component: ComponentCreator('/docs/tutorial-basics/au', 'b94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/interface',
                component: ComponentCreator('/docs/tutorial-basics/interface', 'b3f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/synth',
                component: ComponentCreator('/docs/tutorial-basics/synth', 'a3d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/tuning',
                component: ComponentCreator('/docs/tutorial-basics/tuning', '7b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/au',
                component: ComponentCreator('/docs/tutorial-extras/au', '3a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/interface',
                component: ComponentCreator('/docs/tutorial-extras/interface', '99b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/synth',
                component: ComponentCreator('/docs/tutorial-extras/synth', '3cf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-extras/tuning',
                component: ComponentCreator('/docs/tutorial-extras/tuning', 'e82'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
