import Actions from "../actions";

const getInitialState = () => ({
  name: ''
});

const setState = (previousState, property, newValue) =>
  Object.assign({}, previousState, {
    [property]: newValue
  });

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Actions.home.setName:
      return setState(state, "name", action.data);
    default:
      return state;
  }
};
