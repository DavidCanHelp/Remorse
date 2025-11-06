import * as readline from 'readline';
import { translate, isMorseCode } from './morse';

/**
 * Start the REPL (Read-Eval-Print Loop) mode
 * Allows interactive translation between text and morse code
 */
export function startRepl(): void {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'remorse> '
  });

  console.log('Remorse - Morse Code Translator');
  console.log('================================');
  console.log('Type text to convert to morse code, or morse code to convert to text.');
  console.log('Use Ctrl+C or Ctrl+D to exit.\n');

  rl.prompt();

  rl.on('line', (line: string) => {
    const input = line.trim();

    if (!input) {
      rl.prompt();
      return;
    }

    // Handle special commands
    if (input === 'help' || input === '?') {
      showHelp();
      rl.prompt();
      return;
    }

    if (input === 'exit' || input === 'quit') {
      console.log('Goodbye!');
      process.exit(0);
    }

    // Translate and show result
    const result = translate(input);
    const direction = isMorseCode(input) ? 'Text' : 'Morse';
    console.log(`${direction}: ${result}`);

    rl.prompt();
  });

  rl.on('close', () => {
    console.log('\nGoodbye!');
    process.exit(0);
  });

  // Handle Ctrl+C gracefully
  rl.on('SIGINT', () => {
    console.log('\nGoodbye!');
    process.exit(0);
  });
}

/**
 * Display help information in REPL mode
 */
function showHelp(): void {
  console.log('\nHelp:');
  console.log('  - Type any text to convert it to morse code');
  console.log('  - Type morse code (dots, dashes, /) to convert to text');
  console.log('  - Use "/" to separate words in morse code');
  console.log('  - Type "help" or "?" to see this message');
  console.log('  - Type "exit" or "quit" to leave REPL mode');
  console.log('  - Press Ctrl+C or Ctrl+D to exit\n');
}
