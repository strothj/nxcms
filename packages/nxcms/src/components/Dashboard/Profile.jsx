import Radium from 'radium';
import React from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import md5 from 'blueimp-md5';
import { Body1, Headline } from 'components/Typography';
import { breakpoints } from 'styles';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    [`@media ${breakpoints.tablet}`]: { flexDirection: 'row' },
  },
  avatarContainer: {
    paddingBottom: 40,
    textAlign: 'center',
    [`@media ${breakpoints.tablet}`]: { paddingRight: 40 },
  },
};

const emptyEmailHash = '00000000000000000000000000000000';

const Profile = ({ profile }) => {
  const emailHash = profile.email ? md5(profile.email) : emptyEmailHash;
  const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=mm&s=100`;

  return (
    <article style={styles.container}>
      <aside style={styles.avatarContainer}>
        <Avatar src={gravatarUrl} size={100} />
      </aside>
      <main>
        {profile.firstName &&
          <Headline>{profile.firstName} {profile.lastName}</Headline>}
        <Body1>{profile.username}</Body1>
        {profile.email && <Body1>{profile.email}</Body1>}
        <Body1>Using {profile.displayNameUse} as display name.</Body1>
      </main>
    </article>
  );
};

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps)(Radium(Profile));
