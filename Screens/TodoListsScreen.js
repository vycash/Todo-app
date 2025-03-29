import React from "react";
import TodoLists from "../components/TodoLists.js";

export default function TodoListsScreen(props) {
    return (
        <TodoLists {...props} />  // Spread props to pass them down correctly
    );
}
