#!/bin/sh

echo "Minimize javascript assets..."
node node_modules/.bin/r.js -o build.js
compass compile --css-dir=web/assets/css --sass-dir=web/assets/sass
