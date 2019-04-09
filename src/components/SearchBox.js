import React from "react";

class SearchBox extends React.Component {
    handleEnter = (event) => {
        let toDoValue = {};
        const items = this.props.items;
        let isUniqueValue = true;
        let inputVal = (event.currentTarget.value).trim();
        
        if(inputVal !== "" && event.keyCode === 13) {
            items.forEach((item) => {
                if(inputVal.toLowerCase() === (item.value).toLowerCase()) {
                  isUniqueValue = false;
                }
            });

            if(isUniqueValue) {
                toDoValue.value = event.currentTarget.value
                toDoValue.done = false;
                event.currentTarget.value = "";
                this.props.addToDo(toDoValue);
              } else {
                alert(`'${inputVal}'  is already present in the to-do list.`);
              }
        }
        
    }
    render() {
        return (
            <>
                <input name="input_todo" type="text" className="input-box" onKeyDown={this.handleEnter} />
            </>
        )
    }
}

export default SearchBox;