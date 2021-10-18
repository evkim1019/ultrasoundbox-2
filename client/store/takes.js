import axios from 'axios';

// ACTION TYPES
const GET_TAKES = 'GET_TAKES';
const CREATE_TAKE = 'CREATE_TAKE';
// const UPDATE_TAKE = 'UPDATE_TAKE';

// ACTION CREATORS
const _getTakes = (takes) => {
  return {
    type: GET_TAKES,
    takes
  }
}
const _createTake = (take) => {
  return {
    type: CREATE_TAKE,
    take
  }
}
// const _updateTake = (take) => {
//   return {
//     type: UPDATE_TAKE,
//     take
//   }
// }

// THUNK CREATORS
export const getTakes = () => {
  return async (dispatch) => {
    const { data: takes } = await axios.get('/api/takes');
    dispatch(_getTakes(takes));
  }
}

export const createTake = (newTake) => {
  return async (dispatch) => {
    const { data: take } = await axios.post('/api/takes/create', { newTake });
    dispatch(_createTake(take));
    history.push("/");
  }
}

// export const createTake = (currentTake = {
//   userId: -1,
//   cardioBlock: '',
//   renalblcokId: '',
//   wrong: [],
//   score: 0,
//   count: 0
// }) => {
//   return (dispatch) => {
//     const take = {
//       userId: currentTake.userId,
//       cardioblockId: currentTake.cardioblockId,
//       renalblcokId: currentTake.renalblcokId,
//       wrong: currentTake.wrong,
//       score: currentTake.score,
//       count: currentTake.count
//     };
//     return axios.post('/api/takes', take)
//       .then(result => {
//         dispatch(_createTake(result.data));
//       })
//   }
// }

// export const fetchCurrentUserTakes = (userId) => {
//   return async (dispatch) => {
//     const { data: take } = await axios.get(`/api/takes/`, { params: { userId } })
//     dispatch(getTakes(take));
//   }
// }





// REDUCER
export const takesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TAKES:
      return action.takes;
    // case UPDATE_TAKE:
    //   return state.map((take) =>
    //     take.id === action.take.id ? action.take : take
    //   )
    case CREATE_TAKE:
      return [...state, action.take]
    default:
      return state
  }
}