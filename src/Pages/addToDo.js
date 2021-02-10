import {
  DatePicker,
  DayOfWeek,
  Dropdown,
  mergeStyleSets,
  PrimaryButton,
  TextField,
} from "@fluentui/react";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addTodo } from "../redux/actions";
import "./todo.css";

export const AddToDo = (props) => {
  const history = useHistory()
  const textFieldStyles = { fieldGroup: { width: 300 } };
  const controlClass = mergeStyleSets({
    control: {
      margin: "0 0 15px 0",
      maxWidth: "300px",
    },
  });
  const DayPickerStrings = {
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],

    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],

    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],

    shortDays: ["S", "M", "T", "W", "T", "F", "S"],

    goToToday: "Go to today",
    prevMonthAriaLabel: "Go to previous month",
    nextMonthAriaLabel: "Go to next month",
    prevYearAriaLabel: "Go to previous year",
    nextYearAriaLabel: "Go to next year",
    closeButtonAriaLabel: "Close date picker",
    monthPickerHeaderAriaLabel: "{0}, select to change the year",
    yearPickerHeaderAriaLabel: "{0}, select to change the month",
  };
  const dropdownStyles = { dropdown: { width: 300 } };

  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [date, setDate] = useState(DayOfWeek.Sunday);
  const [state, setState] = useState('TODO');


  const handleSubmit = (e) => {
    e.preventDefault();
    if(title === null || desc === null){
      alert('Fill required fields')
    }else{
      console.log(title,desc,date,state)
      props.addTodo({
        title: title,
        description: desc,
        date: date,
        status: state
      })
      history.push('/')
    }

  }

  return (
    <div className="Todo">
      <div className="Card">
        <h2>Add a Task</h2>
        <form>
          <TextField label="Title" styles={textFieldStyles} required onChange={(e) => setTitle(e.target.value)} />
          <TextField label="Description" styles={textFieldStyles} required onChange={(e) => setDesc(e.target.value)} />
          <Dropdown
            label="Select state of task"
            ariaLabel="Required dropdown example"
            options={[
              { key: "A", text: "TODO" },
              { key: "B", text: "STALLED" },
              { key: "D", text: "ONGOING" },
              { key: "E", text: "COMPLETED" },
            ]}
            styles={dropdownStyles}
            onChange={(e,option) => setState(option.text)}
          />
          <DatePicker
            label="Due Date"
            className={controlClass.control}
            firstDayOfWeek={date}
            strings={DayPickerStrings}
            showWeekNumbers={true}
            firstWeekOfYear={1}
            showMonthPickerAsOverlay={true}
            placeholder="Select a date..."
            ariaLabel="Select a date"
            onSelectDate={(date) => setDate(date.toDateString())}
          />
          
          <PrimaryButton onClick={handleSubmit}  type="submit" style={{ marginTop: 20 }} text="Submit" />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo) => {dispatch(addTodo(todo))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
