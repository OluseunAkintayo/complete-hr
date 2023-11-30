import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// function retrieveToken(name: string) {
//   const regex = new RegExp(`(^| )${name}=([^;]+)`);
//   const match = document.cookie.match(regex);
//   if (match) {
//     return match[2];
//   }
// }

export const token = sessionStorage.getItem('auth_token') as string;