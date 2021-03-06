import type { RequestHandler } from "@sveltejs/kit";
import { api } from "./_api";

export const del: RequestHandler = (request) => {
  return api(request);
}

export const patch: RequestHandler<{}, FormData> = (request) => {
  return api(request, {
    text: request.body.get("patch"), // directed from /lib/todo-item.svelte.
    done: request.body.has("done") ? !!request.body.get("done") : undefined
  });
};