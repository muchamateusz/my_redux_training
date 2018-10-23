const initialState = {
  boxes: [
    {
      id: 1,
      title: "First Box"
    }
  ]
};

const reducer = (state = initialState, action) => {
  console.log(action.payload);
  if (action.type === "ADD_BOX") {
    return { boxes: [...action.payload.boxes] };
  }
  return { ...state };
};

export default reducer;
