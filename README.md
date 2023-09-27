# Carbonize - Generate DOCX Documents from Templates

Carbonize is a command-line tool that simplifies the process of generating DOCX documents from templates using the [Carbone](https://carbone.io) library.

## Installation

To install Carbonize globally, use npm:

```bash
npm install -g carbonize
```

## Usage

You can use Carbonize to create DOCX documents by providing it with a template, JSON data, and specifying the output file. Here's the basic usage:

```bash
carbonize [input-path] [json-data] [output-path]
```

- `[input-path]` is the path to your DOCX template file.
- `[json-data]` is the JSON data that will be used to fill in the template.
- `[output-path]` is the path where the generated DOCX document will be saved.

## Tests

```bash
npm run test
```

### Example

Let's say you have a template file called `template.docx` and JSON data like this:

```json
{
  "name": "John Doe",
  "age": 30,
  "city": "New York"
}
```

You can generate a DOCX document with the following command:

```bash
carbonize template.docx '{"name": "John Doe", "age": 30, "city": "New York"}' output.pdf
```

This will produce `output.pdf` based on the `template.docx` file, filling in the placeholders with the provided JSON data.

## Features

- Easy generation of DOCX documents from templates.
- Customizable templates using Carbone's syntax.
- Supports automation and integration into your workflows.

## Contributing

If you'd like to contribute to Carbonize, please check out our [contribution guidelines](CONTRIBUTING.md).

## License

Carbonize is licensed under the [MIT License](LICENSE).
