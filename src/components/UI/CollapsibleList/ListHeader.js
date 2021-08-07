import React from 'react';
import styles from './ListHeader.module.css';
import logo from '../../../assets/icons/expand_more_black_24dp.svg';
import expandLogo from '../../../assets/icons/more_horiz_black_24dp.svg';
import expandLogoVertical from '../../../assets/icons/more_vert_black_24dp.svg';

export const ListHeader = props => {
  let classes = styles['container'];
  let logoDots = expandLogo;

  if (props.vertical) {
    classes = styles['container-vertical'];
    logoDots = expandLogoVertical;
  }

  return (
    <section className={classes}>
      <img onClick={props.onClick} className={styles.logo} src={logo} alt='' />
      <h1>{props.title}</h1>
      <img src={logoDots} className={styles.logoexpand} alt='' />
    </section>
  );
};
