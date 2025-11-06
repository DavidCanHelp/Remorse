# Remorse

A CLI tool for learning and translating morse code. Remorse automatically detects whether you're entering text or morse code and translates accordingly.

## Features

- Bidirectional translation between text and morse code
- Interactive REPL mode for practice
- Command-line translation mode
- Supports letters, numbers, and common punctuation
- Automatic detection of input type

## Installation

```bash
npm install
npm run build
```

To use globally:

```bash
npm link
```

## Usage

### Interactive REPL Mode

Start the interactive mode by running without arguments:

```bash
remorse
```

In REPL mode, simply type text or morse code and press Enter to see the translation:

```
remorse> Hello World
Morse: .... . .-.. .-.. --- / .-- --- .-. .-.. -..

remorse> ... --- ...
Text: SOS

remorse> help
[Shows help information]

remorse> exit
```

### Command-Line Mode

Translate directly from the command line:

```bash
# Text to morse
remorse "Hello World"
# Output: Morse: .... . .-.. .-.. --- / .-- --- .-. .-.. -..

# Morse to text
remorse "... --- ..."
# Output: Text: SOS

# Single word
remorse SOS
# Output: Morse: ... --- ...
```

### Help

```bash
remorse --help
```

## Morse Code Notation

- Dots are represented by `.`
- Dashes are represented by `-`
- Letters/characters are separated by spaces
- Words are separated by `/`

Examples:
- `SOS` → `... --- ...`
- `Hello World` → `.... . .-.. .-.. --- / .-- --- .-. .-.. -..`
- `A` → `.-`
- `1` → `.----`

## Development

```bash
# Build the project
npm run build

# Run in development mode
npm run dev

# Watch mode
npm run watch
```

## License

MIT
