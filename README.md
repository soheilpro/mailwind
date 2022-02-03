# Mailwind
Use Tailwind CSS to design HTML emails.

Tailwind makes it very easy to design websites, why not use it to design HTML emails? I've been using this for [volt.fm](https://volt.fm) and [pikaso.me](https://pikaso.me) and it has made my life a lot easier.

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

`--input-css`

The path to your base CSS file. Use this if you need to write custom CSS. Defaults to [style.css](./src/style.css).

`--input-html`

The path to your HTML email file.

`--output-css`

The path to the CSS file that will be generated.

`--output-html`

The path to the inlined HTML file that will be generated.

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
  --input-html email.html \
  --output-css style.css \
  --output-html email-inlined.html
```

will generate the following CSS and inlined HTML files:

```css
.text-lg {
  font-size: 18px
}

.font-bold {
  font-weight: 700
}
```

```html
<html>
  <body>
    <p class="font-bold text-lg" style="font-size: 18px; font-weight: 700;">Welcome</p>
  </body>
</html>
```

## Version History
+ **2.0**
	+ New design
	+ Upgrade to Tailwind CSS v3
+ **1.0**
	+ Initial release

## Author
**Soheil Rashidi**

+ http://soheilrashidi.com
+ http://twitter.com/soheilpro
+ http://github.com/soheilpro

## Copyright and License
Copyright 2022 Soheil Rashidi.

Licensed under the The MIT License (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

http://www.opensource.org/licenses/mit-license.php

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
