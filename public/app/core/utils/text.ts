import { TextMatch } from 'app/types/explore';

/**
 * Returns a list of substring matches.
 * @param haystack Text to search in.
 * @param needle Substring to be found.
 */
export function findMatchesInText(haystack: string, needle: string): TextMatch[] {
  // Empty search can send re.exec() into infinite loop, exit early
  if (!haystack || !needle) {
    return [];
  }
  const regexp = new RegExp(`(?:${needle})`, 'g');
  const matches = [];
  let match = regexp.exec(haystack);
  while (match) {
    matches.push({
      text: match[0],
      start: match.index,
      length: match[0].length,
    });
    match = regexp.exec(haystack);
  }
  return matches;
}
