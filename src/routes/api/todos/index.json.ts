import type { RequestHandler } from "@sveltejs/kit";

// TODO: Persist in Database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return{
        status: 200,
        body: todos
    }
}

export const post: RequestHandler<{}, FormData> = (request) => {
    todos.push({
        created_at: new Date(),
        text: request.body.get("text"), // "text" refers to the text name form input in index.svelte
        done: false
    }); 
    return{ // Defualt return 404
        status: 303,
        headers: {
            location:'/'}
    }

}