import { CorsOptions } from "cors";
import { CORS_ORIGIN_LIST, ORIGIN } from "./env";

const allowedOrigins = [
  "https://kag-karatina.vercel.app",
  "http://kag-karatina.localhost:5173",
  ...CORS_ORIGIN_LIST
];

export const checkOrigin: CorsOptions['origin'] = (origin, cb) => {
    if(!origin){
        return cb(null, true)
    }
    if(allowedOrigins.includes(origin)){
        return cb(null, true)
    }
    return cb(new Error(`CORS blocked origin "${origin}"!`), false)
}