import { writable } from "svelte/store";

const TodoStore = writable([
    {
        is:1,
        detail:"Finish JS course",
        completed:false,
        render:false
    }
])

export default TodoStore