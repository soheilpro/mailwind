#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const os = require('os');
const { spawn } = require('child_process');
const yargs = require('yargs/yargs');
const juice = require('juice');

const argv = yargs(process.argv)
  .string('input-css')
  .string('input-html')
  .string('output-css')
  .string('output-html')
  .string('tailwind-config')
  .describe('input-css', 'The path to your custom CSS file')
  .describe('input-html', 'The path to your input HTML file')
  .describe('output-css', 'The path to the CSS file that will be generated')
  .describe('output-html', 'The path to the inlined HTML file that will be generated')
  .describe('tailwind-config', 'The path to your custom Tailwind config file')
  .example('$0 --input-html email.html --output-css style.css')
  .example('$0 --input-html email.html --output-html email-inlined.html')
  .argv;

function exec(name, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(name, args);
    let stdout = Buffer.alloc(0);
    let stderr = Buffer.alloc(0);

    child.stdout.on('data', data => {
      stdout = Buffer.concat([ stdout, data ]);
    });

    child.stderr.on('data', data => {
      stderr = Buffer.concat([ stderr, data ]);
    });

    child.on('error', error => {
      reject({
        error: error,
        stdout: stdout.toString(),
        stderr: stderr.toString(),
      });
    });

    child.on('close', code => {
      resolve({
        exit_code: code,
        stdout: stdout.toString(),
        stderr: stderr.toString(),
      });
    });
  });
}

function inlineCSS(html, css) {
  return juice.inlineContent(html, css);
};

async function main() {
  if (!argv['input-html']) {
    console.log('The --input-html option is required.');
    process.exit(1);
    return;
  }

  if (!argv['output-css'] && !argv['output-html']) {
    console.log('Either --output-css or --output-html options must be specified.');
    process.exit(1);
    return;
  }

  if (argv['input-css'] && argv['output-css'] && path.resolve(argv['input-css']) === path.resolve(argv['output-css'])) {
    console.log('The --input-css and --output-css options cannot refer to the same file.');
    process.exit(1);
    return;
  }

  if (argv['input-html'] && argv['output-html'] && path.resolve(argv['input-html']) === path.resolve(argv['output-html'])) {
    console.log('The --input-html and --output-html options cannot refer to the same file.');
    process.exit(1);
    return;
  }

  const tailwindcss_path = path.resolve(__dirname, '../node_modules/tailwindcss/lib/cli.js');
  const tailwind_config_path = argv['tailwind-config'] || path.resolve(__dirname, './tailwind.config.js');
  const input_css_path = argv['input-css'] || path.resolve(__dirname, './style.css');
  const output_css_path = argv['output-css'] || path.resolve(os.tmpdir(), 'mailwind.css');
  const input_html_path = argv['input-html'];
  const output_html_path = argv['output-html'];

  const result = await exec(process.argv0, [
    tailwindcss_path,
    '--config', tailwind_config_path,
    '--input', input_css_path,
    '--output', output_css_path,
    '--content', input_html_path,
  ]);

  if (result.exit_code !== 0) {
    console.error('Failed to run Tailwind.');
    console.error(result.stderr);
    process.exit(1);
    return;
  }

  if (output_html_path) {
    const input_html = fs.readFileSync(input_html_path).toString();
    const output_css = fs.readFileSync(output_css_path).toString();

    const inlined_html = inlineCSS(input_html, output_css);

    fs.writeFileSync(output_html_path, inlined_html);
  }
}

main().catch(error => {
  console.error(error);
  process.exit(1);
});
