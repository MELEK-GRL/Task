import {post,get} from "./request"

export const getPosts=()=>get('http://hapi.fhir.org/baseR4/metadata?_pretty=true')

console.log(getPosts)