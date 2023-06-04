import React, { Fragment, useState } from 'react';

import { UserProfileData } from '@features/UserProfile/types/UserProfileData';
import { UserProfileInputLabels } from '@features/UserProfile/types/UserProfileInputLabels';

import styles from './style.module.css';

export const UserProfile = () => {
  const [isEditModeActive, setIsEditModeActive] = useState(false);
  const [userProfileData, setUserProfileData] = useState<UserProfileData>({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    address: '',
    website: '',
  });

  const onProfileDataInputChangeHandler = (label: string, value: string) => {
    setUserProfileData((prevState: UserProfileData) => ({
      ...prevState,
      [label]: value,
    }));
  };

  const onToggleEditModeHandler = () => {
    setIsEditModeActive(!isEditModeActive);
  };

  return (
    <section className={styles['user-profile']}>
      <h2 className={styles['user-profile-title']}>Your profile</h2>
      <section className={styles['user-profile-readonly-info']}>
        <p className={styles['user-profile-readonly-info-item']}>
          <span>Username:</span>
          <span>keydies</span>
        </p>
        <p className={styles['user-profile-readonly-info-item']}>
          <span>Email:</span>
          <span>serkeydies@gmail.com</span>
        </p>
      </section>
      <section className={styles['user-profile-editable-info']}>
        <fieldset className={styles['user-profile-input-wrapper']}>
          <label htmlFor="first-name">First Name:</label>
          {isEditModeActive ? (
            <Fragment>
              <input
                className={styles['user-profile-input']}
                type="text"
                id="first-name"
                name="first-name"
                placeholder="Your first name..."
                value={userProfileData.firstName}
                onChange={(e) => onProfileDataInputChangeHandler(UserProfileInputLabels.FIRST_NAME, e.target.value)}
              />
            </Fragment>
          ) : (
            <Fragment>
              <p className={styles['user-profile-value']}>{userProfileData.firstName}</p>
            </Fragment>
          )}
        </fieldset>
        <fieldset className={styles['user-profile-input-wrapper']}>
          <label htmlFor="last-name">Last Name:</label>
          {isEditModeActive ? (
            <Fragment>
              <input
                className={styles['user-profile-input']}
                type="text"
                id="last-name"
                name="last-name"
                placeholder="Your last name..."
                value={userProfileData.lastName}
                onChange={(e) => onProfileDataInputChangeHandler(UserProfileInputLabels.LAST_NAME, e.target.value)}
              />
            </Fragment>
          ) : (
            <Fragment>
              <p className={styles['user-profile-value']}>{userProfileData.lastName}</p>
            </Fragment>
          )}
        </fieldset>
        <fieldset className={styles['user-profile-input-wrapper']}>
          <label htmlFor="age">Age:</label>
          {isEditModeActive ? (
            <Fragment>
              <input
                className={styles['user-profile-input']}
                type="text"
                id="age"
                name="age"
                placeholder="Your age..."
                value={userProfileData.age}
                onChange={(e) => onProfileDataInputChangeHandler(UserProfileInputLabels.AGE, e.target.value)}
              />
            </Fragment>
          ) : (
            <Fragment>
              <p className={styles['user-profile-value']}>{userProfileData.age}</p>
            </Fragment>
          )}
        </fieldset>
        <fieldset className={styles['user-profile-input-wrapper']}>
          <label htmlFor="gender">Gender:</label>
          {isEditModeActive ? (
            <Fragment>
              <input
                className={styles['user-profile-input']}
                type="text"
                id="gender"
                name="gender"
                placeholder="Your gender..."
                value={userProfileData.gender}
                onChange={(e) => onProfileDataInputChangeHandler(UserProfileInputLabels.GENDER, e.target.value)}
              />
            </Fragment>
          ) : (
            <Fragment>
              <p className={styles['user-profile-value']}>{userProfileData.gender}</p>
            </Fragment>
          )}
        </fieldset>
        <fieldset className={styles['user-profile-input-wrapper']}>
          <label htmlFor="address">Address:</label>
          {isEditModeActive ? (
            <Fragment>
              <input
                className={styles['user-profile-input']}
                type="text"
                id="address"
                name="address"
                placeholder="Your address..."
                value={userProfileData.address}
                onChange={(e) => onProfileDataInputChangeHandler(UserProfileInputLabels.ADDRESS, e.target.value)}
              />
            </Fragment>
          ) : (
            <Fragment>
              <p className={styles['user-profile-value']}>{userProfileData.address}</p>
            </Fragment>
          )}
        </fieldset>
        <fieldset className={styles['user-profile-input-wrapper']}>
          <label htmlFor="website">Website:</label>
          {isEditModeActive ? (
            <Fragment>
              <input
                className={styles['user-profile-input']}
                type="url"
                id="website"
                name="website"
                placeholder="Your website..."
                value={userProfileData.website}
                onChange={(e) => onProfileDataInputChangeHandler(UserProfileInputLabels.WEBSITE, e.target.value)}
              />
            </Fragment>
          ) : (
            <Fragment>
              <p className={styles['user-profile-value']}>{userProfileData.website}</p>
            </Fragment>
          )}
        </fieldset>
      </section>
      <section className={styles['user-profile-edit-wrapper']}>
        <button className={styles['user-profile-edit']} onClick={onToggleEditModeHandler}>
          {isEditModeActive ? 'Update profile data' : 'Edit profile data'}
        </button>
      </section>
    </section>
  );
};
