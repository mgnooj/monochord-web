import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/monochord-web/blog',
    component: ComponentCreator('/monochord-web/blog', '2ea'),
    exact: true
  },
  {
    path: '/monochord-web/blog/archive',
    component: ComponentCreator('/monochord-web/blog/archive', '977'),
    exact: true
  },
  {
    path: '/monochord-web/blog/hello-world',
    component: ComponentCreator('/monochord-web/blog/hello-world', '44d'),
    exact: true
  },
  {
    path: '/monochord-web/contact',
    component: ComponentCreator('/monochord-web/contact', '8b9'),
    exact: true
  },
  {
    path: '/monochord-web/deltaz',
    component: ComponentCreator('/monochord-web/deltaz', 'e27'),
    exact: true
  },
  {
    path: '/monochord-web/microton',
    component: ComponentCreator('/monochord-web/microton', '620'),
    exact: true
  },
  {
    path: '/monochord-web/docs',
    component: ComponentCreator('/monochord-web/docs', '7e9'),
    routes: [
      {
        path: '/monochord-web/docs',
        component: ComponentCreator('/monochord-web/docs', 'e6e'),
        routes: [
          {
            path: '/monochord-web/docs',
            component: ComponentCreator('/monochord-web/docs', '42a'),
            routes: [
              {
                path: '/monochord-web/docs/category/microton',
                component: ComponentCreator('/monochord-web/docs/category/microton', '97f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/monochord-web/docs/category/microton-fm',
                component: ComponentCreator('/monochord-web/docs/category/microton-fm', '83d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/monochord-web/docs/intro',
                component: ComponentCreator('/monochord-web/docs/intro', 'd30'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/monochord-web/docs/tutorial-basics/au',
                component: ComponentCreator('/monochord-web/docs/tutorial-basics/au', 'a17'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/monochord-web/docs/tutorial-basics/interface',
                component: ComponentCreator('/monochord-web/docs/tutorial-basics/interface', 'cd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/monochord-web/docs/tutorial-basics/synth',
                component: ComponentCreator('/monochord-web/docs/tutorial-basics/synth', '18f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/monochord-web/docs/tutorial-basics/tuning',
                component: ComponentCreator('/monochord-web/docs/tutorial-basics/tuning', 'f59'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/monochord-web/docs/tutorial-extras/au',
                component: ComponentCreator('/monochord-web/docs/tutorial-extras/au', '181'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/monochord-web/docs/tutorial-extras/interface',
                component: ComponentCreator('/monochord-web/docs/tutorial-extras/interface', 'ef7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/monochord-web/docs/tutorial-extras/synth',
                component: ComponentCreator('/monochord-web/docs/tutorial-extras/synth', '7d9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/monochord-web/docs/tutorial-extras/tuning',
                component: ComponentCreator('/monochord-web/docs/tutorial-extras/tuning', 'b50'),
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
    path: '/monochord-web/',
    component: ComponentCreator('/monochord-web/', '238'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
