import { atom } from 'jotai';

export const durationAtom = atom(1);

export const objectsAtom = atom([
  { option: '1', style: { backgroundColor: 'red', textColor: 'white' }, percentage : 30, optionSize : 30 },
  { option: '2', style: { backgroundColor: 'orange', textColor: 'white'  }, percentage : 10, optionSize : 10 },
  { option: '3', style: { backgroundColor: 'green', textColor: 'white'  }, percentage : 10, optionSize : 10 },
  { option: '4' , style: { backgroundColor: 'blue', textColor: 'white'  }, percentage : 50, optionSize : 50 },
]);