import { action, thunk, computed } from 'easy-peasy';
import { sum } from 'd3-array';
import cloneDeep from 'lodash.clonedeep';

import config from '~/config';

import { networkDataSelector, candidatesSelector } from '../selectors';

const initialState = {
  round: 0,
  isLoading: true,
  candidates: false,
  networkData: cloneDeep(config.rounds[0].network),
  showIntroduction: true,
  showStartButton: false,
  showResultButton: false,
  showResult: false,
  isRunning: false,
};

const parseCandidates = (candidates) => {
  return candidates.map((d) => {
    d.nivo_position = Math.random();
    return d;
  });
};

const actions = {
  updateEdge: action((state, payload) => {
    state.networkData.layers[payload.layerIndex].nodes[payload.nodeIndex].edges[
      payload.edgeIndex
    ].weight = payload.value;
  }),
  loadCandidatesSuccess: action((state, payload) => {
    state.candidates = parseCandidates(payload);
    state.isLoading = false;
  }),
  loadCandidates: thunk(async (stateActions) => {
    const url = `${config.basename}/public/data/candidates.json`;

    const response = await fetch(url);
    const candidates = await response.json();

    stateActions.loadCandidatesSuccess(candidates);
  }),
  setIntroductionVisible: action((state, payload) => {
    state.showIntroduction = payload;
  }),
  setResultVisible: action((state, payload) => {
    state.showResult = payload;
  }),
  setStartButtonVisible: action((state, payload) => {
    state.showStartButton = payload;
  }),
  startSimulation: action((state) => {
    state.isRunning = true;
    state.showStartButton = false;
  }),
  finishSimulation: action((state) => {
    state.isRunning = false;
    state.showIntroduction = false;
    state.showResultButton = true;
  }),
  startNextRound: action((state) => {
    const nextRound = state.hasNextRound ? state.round + 1 : 0;
    state.round = nextRound;
    state.networkData = cloneDeep(config.rounds[state.round].network);
    state.isRunning = false;
    state.showResultButton = false;
    state.showResult = false;
    state.showIntroduction = true;
  }),
  initSandbox: action((state) => {
    state.networkData = cloneDeep(config.sandbox);
    state.isRunning = false;
    state.showResultButton = false;
    state.showResult = false;
    state.showIntroduction = true;
  }),
  setNodeActive: action((state, node) => {
    state.networkData.layers = state.networkData.layers.map((layer) => {
      layer.nodes = layer.nodes.map((n) => {
        const isActive = node.name === n.name;
        n.edges = n.edges.map((edge) => ({ ...edge, active: isActive }));

        return n;
      });

      return layer;
    });
  }),
  reset: action((state) => {
    Object.assign(state, initialState);
  }),
};

const derivedState = {
  roundConfig: computed((state) => config.rounds[state.round]),

  hasNextRound: computed((state) => config.rounds.length > state.round + 1),

  outputData: computed(
    [networkDataSelector, candidatesSelector, (state) => state.round],
    (data, candidates, round) => {
      if (!data || !candidates) {
        return [];
      }

      const booleanField = `Runde${round + 1}`;

      const outputData = candidates.map((person) => {
        data.layers.forEach((layer, iLayer, layers) => {
          layer.nodes.forEach((node, iNode) => {
            if (iLayer === 0) {
              node.value = person[node.propertyName];
            } else {
              const sumValues = layers[iLayer - 1].nodes.map(
                (n) => n.value * n.edges[iNode].weight
              );
              node.value = sum(sumValues);
            }
          });
        });

        person.weight = sum(
          data.layers[data.layers.length - 1].nodes,
          (node) => node.value * node.edges[0].weight
        );
        person.isOverThreshold = person.weight > data.threshold;
        person.isTarget = person[booleanField];

        return person;
      });

      return outputData;
    }
  ),
};

export default {
  ...initialState,
  ...actions,
  ...derivedState,
};
