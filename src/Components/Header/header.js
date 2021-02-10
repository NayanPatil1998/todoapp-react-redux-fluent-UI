import React from "react";
import "office-ui-fabric-react/dist/css/fabric.css";
import './header.css'
import { PrimaryButton } from "@fluentui/react";
function Header() {
  return (
    <div className="header ms-bgColor-gray10 ms-depth-16">
      <div class="ms-Grid" dir="ltr">
        <div class="ms-Grid-row">
          <div class="ms-Grid-col ms-sm6">
          <div class="ms-fontSize-32">
              ToDoList
          </div>
          </div>
          <div class="ms-Grid-col ms-sm6">
              <PrimaryButton text="Add task" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
