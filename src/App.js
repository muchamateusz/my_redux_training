import React, { Component } from "react";
import { connect } from "react-redux";
import converter from "number-to-words";

import Workspace from "./common/components/Workspace/Workspace";
import Tile from "./common/components/Tile/Tile";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGhost } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

library.add(faGhost);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">REDUX WORKSPACE</header>
        <Workspace>
          {this.props.boxes.map(box => (
            <Tile
              key={box.id}
              onClick={() => {
                const newBoxes = { boxes: this.props.boxes };
                const boxId = newBoxes.boxes.length + 1;
                const idConvertedToWord = converter.toWordsOrdinal(boxId);
                const capitalizedWord =
                  idConvertedToWord.charAt(0).toUpperCase() +
                  idConvertedToWord.slice(1);
                newBoxes.boxes.push({
                  id: newBoxes.boxes.length + 1,
                  title: `${capitalizedWord} Box`
                });
                return this.props.onAddBox(newBoxes);
              }}
            >
              <FontAwesomeIcon icon="ghost" />
              <p>{box.title}</p>
            </Tile>
          ))}
        </Workspace>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boxes: state.boxes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddBox: payload => {
      dispatch({ type: "ADD_BOX", payload });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
