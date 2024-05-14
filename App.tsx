import React from 'react';
import { makeServer } from './mocks/server';
import DrawerNavigator from './app/navigation/DrawerNavigatior';

if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: "development" });
}

export default function App() {
  return (
    <DrawerNavigator/>
  );
}

