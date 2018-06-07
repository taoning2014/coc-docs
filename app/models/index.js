import defence from './defence';
import army from './army';
import heros from './heros';
import spells from './spells';

export default [
  {
    type: 'army',
    typeName: '兵种',
    data: army,
  },
  {
    type: 'defence',
    typeName: '防御设施',
    data: defence,
  },
  {
    type: 'heros',
    typeName: '英雄',
    data: heros,
  },
  {
    type: 'spells',
    typeName: '法术',
    data: spells,
  },
];
