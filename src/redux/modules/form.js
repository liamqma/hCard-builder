const initialState = {
  givenName: 'Text'
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        [action.name]: action.value
      };
    default:
      return state;
  }
}

export function update(name, value) {
  return {
    type: 'UPDATE',
    name,
    value
  };
}
