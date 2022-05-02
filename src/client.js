import * as contentful from 'contentful';

export const client = contentful.createClient({
    // space: process.env.REACT_APP_SPACE_ID,
    // accessToken: process.env.REACT_APP_ACCESS_TOKEN
    space: "k7qfzlbxq4u0",
    accessToken: "rfi9BfbfxswACuc7wmbj8z-8ztzaDLqmyZ3Kv_Z-g0s"
})