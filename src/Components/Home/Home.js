import { DefaultPalette, Stack } from "@fluentui/react";
import React from "react";
import TodoCard from "../ToDoCard/todoCard";
import "./Home.css";

function Home() {
  //   const itemAlignmentsStackStyles = {
  //     root: {
  //       background: DefaultPalette.themeTertiary,
  //       height: 200,
  //     },
  //   };
  //   const itemAlignmentsStackTokens = {
  //     childrenGap: 50,
  //     padding: 10,
  //   };
  //   const stackItemStyles = {
  //     root: {
  //       background: DefaultPalette.themePrimary,
  //       color: DefaultPalette.white,
  //       padding: 5,
  //     },
  //   };
  return (
    <div className="home">
      <div class="ms-Grid" dir="ltr">
        <div class="ms-Grid-row">
          <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg3 ">
            <div className="Card-Container">
              <h3>To Do</h3>
              <hr />
                <TodoCard />
            </div>
          </div>
          <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg3">
            <div className="Card-Container">
              <h3>Ongoing</h3>
              <hr />
            </div>
          </div>
          <div class="ms-Grid-col ms-sm6 ms-md4 ms-lg3">
            <div className="Card-Container">
              <h3>Stalled</h3>
              <hr />
            </div>
          </div>
          <div class="ms-Grid-col ms-sm6 ms-md8 ms-lg3">
            <div className="Card-Container">
              <h3>Done</h3>
              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* <Stack
        horizontal
        disableShrink
        styles={itemAlignmentsStackStyles}
        tokens={itemAlignmentsStackTokens}
      >
        <Stack.Item align="auto" styles={stackItemStyles}>
          <span>Auto-aligned item</span>
        </Stack.Item>
        <Stack.Item align="stretch" styles={stackItemStyles}>
          <span>Stretch-aligned item</span>
        </Stack.Item>
        <Stack.Item align="baseline" styles={stackItemStyles}>
          <span>Baseline-aligned item</span>
        </Stack.Item>
        <Stack.Item align="start" styles={stackItemStyles}>
          <span>Start-aligned item</span>
        </Stack.Item>
        <Stack.Item align="center" styles={stackItemStyles}>
          <span>Center-aligned item</span>
        </Stack.Item>
        <Stack.Item align="end" styles={stackItemStyles}>
          <span>End-aligned item</span>
        </Stack.Item>
      </Stack> */}
    </div>
  );
}

export default Home;
