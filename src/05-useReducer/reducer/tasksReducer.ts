import { useReducer } from "react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
} 
interface TaskState{
    todo:Todo[];
    length: number;
    completed: number;
    pending: number;
}

export type TaskAction =
  | { type: "ADD_TODO" , payload: string}
  | { type: "TOGGLE_TODO", payload: number }
  | { type: "DELETE_TODO", payload: number }

export const taskReduce = (state:TaskState,action:TaskAction):TaskState => {

    return state
}