import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputName: "", inputAuthor: "" };
  }

  updateInputName = (inputName) => {
    this.setState({ inputName });
  };

  updateInputAuthor = (inputAuthor) => {
    this.setState({ inputAuthor });
  };

  handleAddTodo = () => {
    const { inputName, inputAuthor } = this.state;

    this.props.addTodo({
      inputName,
      inputAuthor
    });

    this.setState({ inputName: "", inputAuthor: "" });
  };

  render() {
    return (
      <div>
        <p>Author</p>
        <input
          onChange={(e) => this.updateInputAuthor(e.target.value)}
          value={this.state.inputAuthor}
        />
        <p>Todo</p>
        <input
          onChange={(e) => this.updateInputName(e.target.value)}
          value={this.state.inputName}
        />
        <br />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
// export default AddTodo;
