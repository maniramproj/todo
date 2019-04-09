import React from 'react';

class ToDoItem extends React.Component {
    handleClick = (event) => {
        const parentEl = event.currentTarget.parentElement;
        this.props.updateToDo(event.currentTarget.checked, parseInt(parentEl.getAttribute("index")));
    }
    handleClose = (event) => {
        const parentEl = event.currentTarget.parentElement;
        this.props.removeToDo(parseInt(parentEl.getAttribute("index")));
    }
    render() {
        const items = this.props.items;
        return (
            items.map(
                item => {
                    if(item.done) {
                        return (<li key={item.index} className="marked" index={item.index}>
                            <input type="checkbox" defaultChecked onClick={this.handleClick} />
                            <span>{item.value}</span>
                            <span className="close" onClick={this.handleClose}>x</span>
                            </li>)
                    } else {
                        return (<li key={item.index} index={item.index}>
                            <input type="checkbox" onClick={this.handleClick} />
                            <span>{item.value}</span>
                            <span className="close" onClick={this.handleClose}>x</span>
                            </li>)
                    }
                }
            )
        )
    }
};

export default ToDoItem;