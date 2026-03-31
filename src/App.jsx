import React from 'react';
import './App.scss';
import { GENDER_FEMALE_KEY, GENDER_MALE_KEY } from './constants';

import { Person } from './components/Person/Person';

export const misha = {
  name: 'Misha',
  age: 37,
  sex: GENDER_MALE_KEY,
  isMarried: true,
  partnerName: 'Natasha',
};

export const olya = {
  name: 'Olya',
  sex: GENDER_FEMALE_KEY,
  isMarried: true,
  partnerName: 'Maksym',
};

export const alex = {
  name: 'Alex',
  age: 25,
  sex: GENDER_MALE_KEY,
  isMarried: false,
};

export const App = () => (
  <div className="App">
    <Person person={misha} />
    <Person person={olya} />
    <Person person={alex} />
  </div>
);
