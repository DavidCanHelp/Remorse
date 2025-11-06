// Morse code mappings
export const CHAR_TO_MORSE: Record<string, string> = {
  'A': '.-',
  'B': '-...',
  'C': '-.-.',
  'D': '-..',
  'E': '.',
  'F': '..-.',
  'G': '--.',
  'H': '....',
  'I': '..',
  'J': '.---',
  'K': '-.-',
  'L': '.-..',
  'M': '--',
  'N': '-.',
  'O': '---',
  'P': '.--.',
  'Q': '--.-',
  'R': '.-.',
  'S': '...',
  'T': '-',
  'U': '..-',
  'V': '...-',
  'W': '.--',
  'X': '-..-',
  'Y': '-.--',
  'Z': '--..',
  '0': '-----',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
  '.': '.-.-.-',
  ',': '--..--',
  '?': '..--..',
  "'": '.----.',
  '!': '-.-.--',
  '/': '-..-.',
  '(': '-.--.',
  ')': '-.--.-',
  '&': '.-...',
  ':': '---...',
  ';': '-.-.-.',
  '=': '-...-',
  '+': '.-.-.',
  '-': '-....-',
  '_': '..--.-',
  '"': '.-..-.',
  '$': '...-..-',
  '@': '.--.-.',
  ' ': '/'
};

// Reverse mapping: morse to character
export const MORSE_TO_CHAR: Record<string, string> = Object.fromEntries(
  Object.entries(CHAR_TO_MORSE).map(([char, morse]) => [morse, char])
);

/**
 * Convert text to morse code
 * @param text - Input text to convert
 * @returns Morse code representation with spaces between characters and / between words
 */
export function textToMorse(text: string): string {
  return text
    .toUpperCase()
    .split('')
    .map(char => CHAR_TO_MORSE[char] || char)
    .join(' ')
    .replace(/\s+\/\s+/g, ' / '); // Normalize word separators
}

/**
 * Convert morse code to text
 * @param morse - Input morse code (dots and dashes)
 * @returns Decoded text
 */
export function morseToText(morse: string): string {
  // Split by word separator (/)
  const words = morse.split('/').map(word => word.trim());

  return words
    .map(word => {
      // Split each word into morse characters (by spaces)
      const chars = word.split(' ').filter(c => c.length > 0);
      return chars
        .map(morseChar => MORSE_TO_CHAR[morseChar] || morseChar)
        .join('');
    })
    .join(' ');
}

/**
 * Detect if input is morse code (contains dots, dashes, or slashes)
 * @param input - Input string to check
 * @returns true if input appears to be morse code
 */
export function isMorseCode(input: string): boolean {
  const trimmed = input.trim();
  // Check if the string contains mostly morse characters
  const morseChars = trimmed.match(/[.\-\/\s]/g);
  return morseChars !== null && morseChars.length / trimmed.length > 0.5;
}

/**
 * Translate input - automatically detects direction
 * @param input - Input text or morse code
 * @returns Translated output
 */
export function translate(input: string): string {
  if (!input.trim()) {
    return '';
  }

  if (isMorseCode(input)) {
    return morseToText(input);
  } else {
    return textToMorse(input);
  }
}
