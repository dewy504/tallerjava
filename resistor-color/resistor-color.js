//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
  color = color.toLowerCase();
  if(color =='black')return 0;
  if(color =='white')return 9;
  if(color =='orange')return 3;
  return -1
};

export const COLORS = ([
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
]);
