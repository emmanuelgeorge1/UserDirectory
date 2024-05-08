import React from 'react';
import DrawerNavigator from './navigation/DrawerNavigatior';
import { makeServer } from '../mocks/server';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: "development" });
}

export default function App() {
  return (
    <DrawerNavigator/>
  );
}

