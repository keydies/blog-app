import React, { Fragment } from 'react';

import Link from 'next/link';

import { UserSlice } from '@app/store/reducers/UserSlice';

import { RouteNames } from '@shared/enums/RouteNames';
import { useTypedDispatch } from '@shared/hooks/useTypedDispatch';
import { useTypedSelector } from '@shared/hooks/useTypedSelector';

import styles from './style.module.css';

export const HeaderNavigation = () => {
  const dispatch = useTypedDispatch();
  const { isAuth } = useTypedSelector((state) => state.userReducer);
  const { setUserAuthStatus } = UserSlice.actions;

  const onLogoutHandler = () => {
    dispatch(setUserAuthStatus(false));
  };

  return (
    <ul className={styles['header-navigaion-list']}>
      {isAuth ? (
        <Fragment>
          <li className={styles['header-navigatioin-item']}>
            <Link className={styles['header-navigatioin-link']} href={RouteNames.ADD_NEW_POST}>
              Add new post
            </Link>
          </li>
          <li className={styles['header-navigatioin-item']}>
            <Link className={styles['header-navigatioin-link']} href={RouteNames.PROFILE}>
              Profile
            </Link>
          </li>
          <li className={styles['header-navigatioin-item']}>
            <Link className={styles['header-navigatioin-link']} href={RouteNames.HOME} onClick={onLogoutHandler}>
              Log out
            </Link>
          </li>
        </Fragment>
      ) : (
        <Fragment>
          <li className={styles['header-navigatioin-item']}>
            <Link className={styles['header-navigatioin-link']} href={RouteNames.LOGIN}>
              Log In
            </Link>
          </li>
          <li className={styles['header-navigatioin-item']}>
            <Link className={styles['header-navigatioin-link']} href={RouteNames.SIGNIN}>
              Sign In
            </Link>
          </li>
        </Fragment>
      )}
    </ul>
  );
};
