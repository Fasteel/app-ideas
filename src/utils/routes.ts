// eslint-disable-next-line import/no-cycle
import AppList from '../components/app-list/AppList';
import BitMasks from '../components/bit-masks/BitMasks';
import CovidTracker from '../components/covid-tracker/CovidTracker';

export default [
  {
    name: 'Home',
    description: 'App Ideas Collection',
    path: '/',
    component: AppList,
  },
  {
    name: 'Bit Masks',
    description: 'Using Bit Masks for Conditions',
    path: '/bit-masks',
    component: BitMasks,
  },
  {
    name: 'Covid tracker',
    description: 'Create a covid graph with latest data',
    path: '/covid-tracker',
    component: CovidTracker,
  },
];
