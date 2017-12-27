import React from 'react';
import classes from './Backdrop';

const backdrop = (props) => (
  props.show ? <div className={classes.Backdrop} onClick={props.clicks}></div> : null
);

export default backdrop;
