# Mailwind

Use Tailwind CSS to design HTML emails.

Tailwind makes it very easy to design websites, why not use it to design HTML emails?

## Install

```
npm install -g mailwind
```

## Usage

Design your HTML email using the Tailwind utility classes like you normally would for the web.

Then run the following command to generate the corresponding CSS file:

```
mailwind --input-html email.html --output-css style.css
```

Or run this command to generate an inlined HTML file:

```
mailwind --input-html email.html --output-html email-inlined.html
```

## Options

`--input-html`, `-i`

The path to your HTML email file.

`--output-html`, `-o`

The path to the inlined HTML file that will be generated.

`--input-css`

The path to your base CSS file. Use this if you need to write custom CSS. Defaults to [style.css](./src/style.css).

`--output-css`

The path to the CSS file that will be generated.

`--tailwind-config`

The path to your custom Tailwind configuration file. Defaults to [tailwind.config.js](./src/tailwind.config.js).

## Note

In the provided default config file, all the units are changed to pixel which is probably what you want for HTML emails.

## Example

Given an `email.html` file with this content:

```html
<html>
    <body>
        <p class="font-bold text-lg">Welcome</p>
    </body>
</html>
```

running this command:

```
mailwind \
    email.html \
  --output-css style.css \
  --output-html email-inlined.html
```

will generate the following CSS and inlined HTML files:

```css
.text-lg {
    font-size: 18px;
}

.font-bold {
    font-weight: 700;
}
```

```html
<html>
    <body>
        <p class="font-bold text-lg" style="font-size: 18px; font-weight: 700;">
            Welcome
        </p>
    </body>
</html>
```

## Version History

-   **3.0**
    -   Significant TypeScript rewrite; supports Tailwind pseudo classes and responsive variants
    -   Upgrade to Tailwind CSS v3.3
    -   Switched to Vite for development
-   **2.2**
    -   Tailwind CSS is now a peer dependency so you can `npm install` newer versions if you need to (Thanks [Songkeys](https://github.com/Songkeys))
-   **2.1**
    -   Colors are now generated without using CSS variables
    -   Upgrade to Tailwind CSS v3.2
-   **2.0**
    -   New design
    -   Upgrade to Tailwind CSS v3
-   **1.0**
    -   Initial release
