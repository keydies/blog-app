import React from 'react';

import Link from 'next/link';

import { HeaderNavigation } from '@entities/Header/ui/HeaderNavigation';

import { RouteNames } from '@shared/enums/RouteNames';

import styles from './style.module.css';

export const HeaderWrapper = () => {
  return (
    <header className={styles['header']}>
      <div className="general-layout-container">
        <div className={styles['header-wrapper']}>
          <Link className={styles['header-logo']} href={RouteNames.HOME}>
            Simple Blog
          </Link>
          <div className={styles['header-navagation']}>
            <HeaderNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};
