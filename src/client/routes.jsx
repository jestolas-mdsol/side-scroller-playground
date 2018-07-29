import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '@containers/app';
import Hub from '@containers/hub';
import Sandbox from '@containers/sandbox';
import MapBuilder from '@containers/map_builder';
import OverworldMovement from '@containers/overworld_movement';

export default (
  <App>
    <Switch>
      <Route exact path="/" component={Hub} />
      <Route exact path="/sandbox" component={Sandbox} />
      <Route exact path="/map-builder" component={MapBuilder} />
      <Route exact path="/overworld-movement" component={OverworldMovement} />
    </Switch>
  </App>
);
