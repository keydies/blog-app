import { NextPage } from 'next/types';

import { UserProfile } from '@features/UserProfile/ui';

import styles from './style.module.css';

const Profile: NextPage = (): JSX.Element => {
  return (
    <section className={styles['profile-wrapper']}>
      <UserProfile />
    </section>
  );
};

export default Profile;
