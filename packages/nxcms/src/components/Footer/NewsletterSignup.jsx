import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

import Container from 'components/Container';
import { Caption, Headline } from 'components/Typography';
import NewsletterSignupForm from './NewsletterSignupForm';
import backgroundImage from './backgroundImage.jpg';

const styles = {
  headline: { paddingBottom: 16 },
  caption: { paddingBottom: 32 },
};

const NewsletterSignup = props => (
  <section
    style={{
      backgroundImage: `url(${backgroundImage})`,
      color: props.muiTheme.palette.alternateTextColor,
    }}
  >
    <Container>
      <header>
        <Headline style={styles.headline}>{props.primaryText}</Headline>
        <Caption style={styles.caption}>{props.secondaryText}</Caption>
      </header>

      <main>
        <NewsletterSignupForm />
      </main>
    </Container>

    <style jsx>{`
      section {
        position: relative;
        padding: 40px 0;
        text-align: center;
        background-size: cover;
        background-position: center bottom;
        z-index: 1;
      }

      /* Gradient overlay */
      section::after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, transparent 25%, #000 100%);
        z-index: 1;
      }

      /* Position above overlay */
      header, main {
        position: relative;
        z-index: 2;
      }
    `}</style>
  </section>
);

NewsletterSignup.defaultProps = {
  primaryText: 'Over 2,000 people subscribe to our newsletter.',
  secondaryText: 'See stories about JavaScript in your inbox.',
};

export default muiThemeable()(NewsletterSignup);
