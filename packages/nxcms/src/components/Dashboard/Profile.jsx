import React from 'react';
import { connect } from 'react-redux';
import Avatar from 'material-ui/Avatar';
import md5 from 'blueimp-md5';
import { Headline } from 'components/Typography';

const styles = {
  container: { display: 'flex' },
  avatarContainer: { paddingRight: 40 },
  textContainer: { fontSize: '1rem' },
};

const emptyEmailHash = '00000000000000000000000000000000';

const Profile = ({ profile }) => {
  const emailHash = profile.email ? md5(profile.email) : emptyEmailHash;
  const gravatarUrl = `https://www.gravatar.com/avatar/${emailHash}?d=mm&s=100`;

  return (
    <div style={styles.container}>
      <div style={styles.avatarContainer}>
        <Avatar src={gravatarUrl} size={100} />
      </div>
      <div style={styles.textContainer}>
        {profile.firstName &&
          <Headline>{profile.firstName} {profile.lastName}</Headline>}
        <p>{profile.username}</p>
        {profile.email && <p>{profile.email}</p>}
        <p>Using {profile.displayNameUse} as display name.</p>
      </div>
    </div>
  );
};

const mapStateToProps = ({ profile }) => ({ profile });

export default connect(mapStateToProps)(Profile);
