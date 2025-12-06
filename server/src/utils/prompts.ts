const PROMPTS = [
  "Worst thing to say on a first date",
  "Fastest way to get fired in 10 seconds",
  "What not to say at a funeral",
  "Worst lie to tell your parents",
  "Most awkward wedding toast",
  "Terrible advice for a job interview",
  "What not to say to a police officer",
  "Worst excuse for being late",
  "Things you shouldn't say to your doctor",
  "Bad pickup line at a library",
  "Worst thing to yell in a movie theater",
  "Terrible baby name suggestion",
  "What not to say during a breakup",
  "Worst conversation starter at a party",
  "Bad thing to say when meeting your partner's parents",
];

export function getRandomPrompt(): string {
  const idx = Math.floor(Math.random() * PROMPTS.length);
  return PROMPTS[idx];
}
