import React from "react";
import "office-ui-fabric-react/dist/css/fabric.css";
import "./header.css";
import { PrimaryButton } from "@fluentui/react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { darkMode } from "../../redux/actions";
import { darkSyle, lightStyle } from "../../style";
function Header(props) {
  console.log(props.mode)
  return (
    <div className="header ms-depth-16" style={props.mode ? darkSyle : lightStyle}>
      <div class="ms-Grid" dir="ltr">
        <div class="ms-Grid-row">
          <div class="ms-Grid-col ms-sm6">
            <div class="ms-fontSize-32">ToDoList</div>
          </div>

          <div class="ms-Grid-col ms-sm6">
            <Link to="/add">
              <PrimaryButton text="Add task" style={{marginRight:20}} />
            </Link>
            <PrimaryButton onClick={props.darkMode} text={props.mode ? "Dark" : "Light"} style={{marginRight:20}} />
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {  
  return {      
     mode: state.darkMode  
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    darkMode() {dispatch(darkMode())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
