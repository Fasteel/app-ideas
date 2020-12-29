// eslint-disable-next-line import/no-cycle
import AppList from '../components/app-list/AppList';
import BitMasks from '../components/bit-masks/BitMasks';

export default [
  {
    name: 'Home',
    description: '',
    path: '/',
    component: AppList,
  },
  {
    name: 'Bit Masks',
    description: 'Using Bit Masks for Conditions',
    path: '/bit-masks',
    component: BitMasks,
  },
];
