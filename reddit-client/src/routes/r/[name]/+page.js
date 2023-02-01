import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch, session, stuff }) {
    const url = `https://api.reddit.com/r/${params.name}`;
    const res = await fetch(url);


    if (res.ok) {
        return {
            props: {
                name: params.name,
                posts: (await res.json()).data.children
            }
        };
    }
    return {
        status: res.status,
        error: new Error(`Could not load ${url}`)
    }
}