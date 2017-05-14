import Radium, { Style } from 'radium';
import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Container from 'components/Container';
import { Caption, Headline } from 'components/Typography';
import NewsletterSignupForm from './NewsletterSignupForm';
import backgroundImage from './backgroundImage.jpg';

const styles = {
  section: {
    position: 'relative',
    padding: '40px 0',
    textAlign: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center bottom',
    zIndex: 1,
    backgroundImage: `url(${backgroundImage})`,
  },
  sectionAfter: {
    // Gradient overlay
    'section::after': {
      position: 'absolute',
      content: '""',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(to bottom, transparent 25%, #000 100%)',
      zIndex: 1,
    },
  },
  headline: { paddingBottom: 16 },
  caption: { paddingBottom: 32 },
  header: { position: 'relative', zIndex: 2 },
  main: { position: 'relative', zIndex: 2 },
};

const NewsletterSignup = props => (
  <section
    className="newsletter-signup"
    style={[
      styles.section,
      { color: props.muiTheme.palette.alternateTextColor },
    ]}
  >
    <Container>
      <header style={styles.header}>
        <Headline style={styles.headline}>{props.primaryText}</Headline>
        <Caption style={styles.caption}>{props.secondaryText}</Caption>
      </header>

      <main style={styles.main}>
        <NewsletterSignupForm />
      </main>
    </Container>

    <Style scopeSelector=".newsletter-signup" rules={styles.sectionAfter} />
  </section>
);

NewsletterSignup.defaultProps = {
  primaryText: 'Over 2,000 people subscribe to our newsletter.',
  secondaryText: 'See stories about JavaScript in your inbox.',
};

export default muiThemeable()(Radium(NewsletterSignup));
