import { getRandomPrompt } from "../utils/prompts";

export function getPrompt(): string {
  return getRandomPrompt();
}

export function validatePrompt(prompt: string): boolean {
  return prompt && prompt.trim().length > 0;
}
