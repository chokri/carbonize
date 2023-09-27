const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

describe("Carbonize Script", () => {
  let inputPath; // Declare inputPath as a variable accessible within the entire test suite

  it("should generate a DOCX file from a template and JSON data", () => {
    // Rest of your test code remains the same
    const jsonData = {
      // Replace with your JSON data
      name: "John Doe",
      age: 30,
    };
    const jsonString = JSON.stringify(jsonData);
    const outputPath = "test-output.docx";

    const command = `node ./bin/carbonize ./node_modules/carbone/examples/simple.odt '${jsonString}' ${outputPath}`;
    const output = execSync(command, { encoding: "utf-8" });

    expect(fs.existsSync(outputPath)).toBe(true);
    fs.unlinkSync(outputPath);
  });

  it("should handle missing input file gracefully", () => {
    // Rest of your test code remains the same
    const command = `node ./bin/carbonize non-existent-template.docx '{}' output.docx`;
    expect(() => execSync(command, { encoding: "utf-8" })).toThrowError(
      /Input file "non-existent-template.docx" does not exist./
    );
  });

  it("should handle JSON parsing errors gracefully", () => {
    // Rest of your test code remains the same
    const command = `node ./bin/carbonize ./node_modules/carbone/examples/simple.odt 'invalid-json' output.docx`;
    expect(() => execSync(command, { encoding: "utf-8" })).toThrowError(
      /Error parsing JSON data:/
    );
  });
});
