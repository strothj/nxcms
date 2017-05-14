import Radium from 'radium';
import React from 'react';
import { Link } from 'react-router-dom';
import muiThemeable from 'material-ui/styles/muiThemeable';
import { breakpoints } from 'styles';

const styles = {
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
  header: {
    margin: 0,
    fontWeight: 100,
    lineHeight: '64px',
    [`@media ${breakpoints.tablet}`]: { fontSize: '2.6rem' },
    [`@media ${breakpoints.phoneOnly}`]: {
      display: 'block',
      position: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      textAlign: 'center',
      fontSize: '1.8rem',
    },
  },
  bracket: {
    fontSize: '.5em',
    fontFamily: 'Roboto, sans-serif',
  },
};

let Bracket = props => (
  <span
    style={[styles.bracket, { color: props.muiTheme.palette.primary1Color }]}
  >
    {props.after ? '/>' : '<'}
  </span>
);
Bracket = muiThemeable()(Radium(Bracket));

const AppBarTitle = () => (
  <Link style={styles.link} to="/">
    <h1 style={styles.header}>
      <Bracket />javascript blog<Bracket after />
    </h1>
  </Link>
);

export default Radium(AppBarTitle);
