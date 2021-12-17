import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api"

export const get: RequestHandler = (request) => {
    return api(request)
}

export const post: RequestHandler<{}, FormData> = (request) => {
    return api(request, {
        uid: `${Date.now()}`, // TODO: Replace with the UID from database 
        created_at: new Date(),
        text: request.body.get("text"), // "text" refers to the text name form input in index.svelte
        done: false
    });
}