import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  img: string;
  description: JSX.Element;
};
const Main: FeatureItem = {
  title: 'A new way to sculpt sound',
  img: require('@site/static/img/interface_with_keyboard.png').default,
  description: (
    <>
      The Euclidean Instruments Monochord gives you unparalleled control over
      the frequencies your synth produces. All in a simple, musician-friendly package.
    </>
  )
}
const FeatureList: FeatureItem[] = [
  {
    title: 'Infinite possibilities',
    img: require('@site/static/img/infinite.png').default,
    description: (
      <>
        Microtonal music for the masses. An entire continuum of sounds, previously hidden behind menus and knobs,
        now easy to explore.
      </>
    ),
  },
  {
    title: 'Analog warmth, simplified',
    img: require('@site/static/img/analog.png').default,
    description: (
      <>
        From extra-fat basses to razor-sharp leads to cosmic pads and beyond,
        the Monochord is a workhorse for tones that harken back to the classic analog synths of the 70s and 80s.
      </>
    ),
  },
  {
    title: 'Create your own system...',
    img: require('@site/static/img/tuning.png').default,
    description: (
      <>
        Choose from dozens of preset tunings. Unearth ancient melodies.
        Access harmonies from around the world. Or design otherworldly sounds of your own.
      </>
    ),
  },
  {
    title: '...or reinvent the status-quo',
    img: require('@site/static/img/au.png').default,
    description: (
      <>
        Seamless Audio Unit integration with your favorite DAW. Take your sounds
        anywhere. Go start a revolution.
      </>
    ),
  },

];

function Feature({title, img, description}: FeatureItem) {
  return (
    <div className={clsx('col')}>
      <div className="text--center">
        <img src={img} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

function SoundSamples() {
  return (
    <iframe
      width="100%"
      height="450"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1860220470&color=%23ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=false" />
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <center>
        <div className="col">
          <Feature {...Main} />
          <hr></hr>
          <div className="row">
            <Feature {...FeatureList[0]} />
            <Feature {...FeatureList[1]} />
          </div>
          <hr></hr>
          <div className="row">
            <Feature {...FeatureList[2]} />
            <Feature {...FeatureList[3]} />
          </div> 
          <hr></hr>
          <div className="row">
            <SoundSamples />
          </div>
        </div>
        </center>
      </div>
    </section>
  );
}
