import axios from 'axios';

// ACTION TYPES
const GET_CARDIO_BLOCKS = 'GET_CARDIO_BLOCKS';
const GET_RENAL_BLOCKS = 'GET_RENAL_BLOCKS';
const GET_EFAST_BLOCKS = 'GET_EFAST_BLOCKS';
const GET_RUQ_BLOCKS = 'GET_RUQ_BLOCKS';

// ACTION CREATORS
const _getCardioBlocks = (blocks) => {
  return {
    type: GET_CARDIO_BLOCKS,
    blocks
  }
}
const _getRenalBlocks = (blocks) => {
  return {
    type: GET_RENAL_BLOCKS,
    blocks
  }
}
const _getEfastBlocks = (blocks) => {
  return {
    type: GET_EFAST_BLOCKS,
    blocks
  }
}
const _getRuqBlocks = (blocks) => {
  return {
    type: GET_RUQ_BLOCKS,
    blocks
  }
}

// THUNK CREATORS
export const getCardioBlocks = () => {
  return async (dispatch) => {
    const { data: blocks } = await axios.get('/api/cardiothoracic');
    dispatch(_getCardioBlocks(blocks));
  }
}
export const getRenalBlocks = () => {
  return async (dispatch) => {
    const { data: blocks } = await axios.get('/api/renal');
    dispatch(_getRenalBlocks(blocks));
  }
}
export const getEfastBlocks = () => {
  return async (dispatch) => {
    const { data: blocks } = await axios.get('/api/efast');
    dispatch(_getEfastBlocks(blocks));
  }
}
export const getRuqBlocks = () => {
  return async (dispatch) => {
    const { data: blocks } = await axios.get('/api/ruq');
    dispatch(_getRuqBlocks(blocks));
  }
}

// REDUCER
export const blocksCardioReducer = (state = [], action) => {
  switch (action.type) {
    case GET_CARDIO_BLOCKS:
      return action.blocks;
    default:
      return state
  }
}
export const blocksRenalReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RENAL_BLOCKS:
      return action.blocks;
    default:
      return state
  }
}
export const blocksEfastReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EFAST_BLOCKS:
      return action.blocks;
    default:
      return state
  }
}
export const blocksRuqReducer = (state = [], action) => {
  switch (action.type) {
    case GET_RUQ_BLOCKS:
      return action.blocks;
    default:
      return state
  }
}