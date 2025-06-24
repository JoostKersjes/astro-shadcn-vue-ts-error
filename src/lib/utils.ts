import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Util used by shadcn/vue ui components
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
