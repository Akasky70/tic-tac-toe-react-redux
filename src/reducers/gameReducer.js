import { GAME_OVER, SET_TURN, RESET_GAME } from "../actions/gameActions";
import { checkWinner } from "../gameLogic/gameLogic";

const INITIAL_STATE = {
  panel: ["", "", "", "", "", "", "", "", ""],
  turn: "X",
  gameOver: false,
  message: ""
};

// GAME REDUCER FUNCTION
function gameReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GAME_OVER:
      return {
        ...state,
        gameOver: action.payload.status
      };

    case SET_TURN:
      const index = action.payload.index;

      if (state.panel[index] === "" && !state.gameOver) {
        return {
          ...state,
          panel: setPlayerSymbol(state.panel, index, state.turn),
          turn: state.turn === "X" ? "O" : "X",
          message: ""
        };
      } else {
        return {
          ...state,
          message: " This field is not empty."
        };
      }

    case RESET_GAME:
      return INITIAL_STATE;

    default:
      return state;
  }
}

function setPlayerSymbol(panel, index, symbol) {
  // alert(panel.slice(index, index + 1));

  // return (panel.slice(index, index + 1));

  return panel.map((value, i) => {
    if (i === index) {
      return (value = symbol);
    }
    return value;
  });
}
export default gameReducer;
