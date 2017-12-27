import React from 'react';
import Aux from '../../hoc/Auxx';
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
import classes from './Layout.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
      <BurgerBuilder />
    </main>
  </Aux>
);

export default layout;
