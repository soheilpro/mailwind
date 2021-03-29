# Mailwind
Tailwind CSS for HTML emails.

Tailwind makes it very easy to design websites, why not use it to design HTML emails? I've been using this at [volt.fm](https://volt.fm) and it has made my life a lot easier.

## Usage

1. Copy the `dist/mailwind.css` file to your project.
2. Use the Tailwind utility classes in your HTML email like you normally would for the web.
3. Run your HTML email through a CSS inliner tool (like [Juice](https://github.com/Automattic/juice)).

## How It Works?

This project configures Tailwind to generate a CSS file that includes all the available utility classes, but tailored for use in emails:

- All the units are changed to pixel.
- All the variants (like hover: and focus:) and responsive breakpoints (like sm: and md:) are removed since they can't be inlined.

## Building

If you make any changes to the config file, run the following command to generate the CSS file again:

```
npm run build
```

## Version History
+ **1.0**
	+ Initial release.

## Author
**Soheil Rashidi**

+ http://soheilrashidi.com
+ http://twitter.com/soheilpro
+ http://github.com/soheilpro

## Copyright and License
Copyright 2021 Soheil Rashidi.

Licensed under the The MIT License (the "License");
you may not use this work except in compliance with the License.
You may obtain a copy of the License in the LICENSE file, or at:

http://www.opensource.org/licenses/mit-license.php

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
