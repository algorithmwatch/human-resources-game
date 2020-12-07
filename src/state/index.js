import { createStore } from 'easy-peasy';

import SimulationModel from './models/SimulationModel';

export default createStore({
  simulation: SimulationModel,
});
