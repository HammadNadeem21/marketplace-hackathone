import { groq } from "next-sanity";

export const allCars = groq`*[_type == "car"]`


export const slugCars = groq`*[_type == "car"]{slug}`