import React from "react";
import { connect } from "react-redux";
import TodoCard from "../ToDoCard/todoCard";
import "./Home.css";
import { completeTodo, setStalledTodo, SetOngoingTodo } from "../../redux/actions";
import { darkSyle, lightStyle } from "../../style";
function Home(props) {
  console.log(props.Todos);
  return (
    <div className="home" style={props.mode ? darkSyle : lightStyle}>
      <div class="ms-Grid" dir="ltr">
        <div class="ms-Grid-row">
          <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg3 ">
            <div className="Card-Container">
              <h3>To Do</h3>
              <hr />
              {props.Todos.map((todo, index) => todo.status === "TODO" ? (
                <TodoCard
                  key={index}
                  title={todo.title}
                  description={todo.description}
                  date={todo.date}
                  onclick={() => props.SetOngoingTodo(index)}
                />
              ) : (<div></div>))}
            </div>
          </div>
          <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg3">
            <div className="Card-Container">
              <h3>Ongoing</h3>
              <hr />
              {props.Todos.map((todo, index) => todo.status === "ONGOING" ? (
                <TodoCard
                  key={index}
                  title={todo.title}
                  description={todo.description}
                  date={todo.date}
                  onclick={() => props.setStalledTodo(index)}
                />
              ) : (<div></div>))}
            </div>
          </div>
          <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg3">
            <div className="Card-Container">
              <h3>Stalled</h3>
              <hr />
              {props.Todos.map((todo, index) => todo.status === "STALLED" ? (
                <TodoCard
                  key={index}
                  title={todo.title}
                  description={todo.description}
                  date={todo.date}
                  onclick={() => props.completeTodo(index)}
                />
              ) : (<div></div>))}
            </div>
          </div>
          <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg3">
            <div className="Card-Container">
              <h3>Done</h3>
              <hr />
              {props.Todos.map((todo, index) => todo.status === "COMPLETED" ? (
                <TodoCard
                  key={index}
                  title={todo.title}
                  description={todo.description}
                  date={todo.date}
                  onclick={() => console.log('Done')}
                />
              ) : (<div></div>))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    Todos: state.Todos,
    mode: state.darkMode
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeTodo: (index) => {dispatch(completeTodo(index))},
    SetOngoingTodo: (index) => {dispatch(SetOngoingTodo(index))},
    setStalledTodo: (index) => {dispatch(setStalledTodo(index))},
  }
}


export default connect(mapStatetoProps,mapDispatchToProps)(Home);
