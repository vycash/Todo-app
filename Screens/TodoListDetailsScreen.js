import React, { useContext } from "react";
import TodoList from "../components/TodoList.js";

export default function TodoListDetailScreen({ route }) {
    // Destructure the parameters you need from route.params
    const listId = route.params.listId;
    console.log("listid details screen : ", listId);

    return (
        <TodoList listId={listId} />
    );
}
