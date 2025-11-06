#!/usr/bin/env node

import { translate, isMorseCode } from './morse';
import { startRepl } from './repl';

/**
 * Display usage information
 */
function showUsage(): void {
  console.log('Remorse - Morse Code Translator\n');
  console.log('Usage:');
  console.log('  remorse                    Start interactive REPL mode');
  console.log('  remorse <text>             Translate text to morse code');
  console.log('  remorse <morse>            Translate morse code to text');
  console.log('  remorse --help, -h         Show this help message\n');
  console.log('Examples:');
  console.log('  remorse "Hello World"');
  console.log('  remorse ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."');
  console.log('  remorse SOS');
  console.log('  remorse "... --- ..."\n');
}

/**
 * Main CLI entry point
 */
function main(): void {
  const args = process.argv.slice(2);

  // No arguments - start REPL
  if (args.length === 0) {
    startRepl();
    return;
  }

  // Help flag
  if (args[0] === '--help' || args[0] === '-h') {
    showUsage();
    return;
  }

  // Translate mode - join all arguments as input
  const input = args.join(' ');
  const result = translate(input);

  // Show the result with appropriate label
  if (isMorseCode(input)) {
    console.log(`Text: ${result}`);
  } else {
    console.log(`Morse: ${result}`);
  }
}

main();
