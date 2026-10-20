# Retrofitting

The project page for **Retrofitting**: apps for Mac OS X "Aqua" (10.3 to 10.5, PowerPC) and Mac OS 9 "Classic".
Live at https://viksn0w.github.io/retrofitting/

First project: [LocalSend Retro](https://github.com/VikSn0w/localsend-retro).

## About this site

One static page (`index.html`, `style.css`, `app.js`), no build step and no dependencies. A switch re-skins the
whole page between the Aqua and Platinum looks. The two typefaces in `fonts/` are self-hosted:
Source Sans 3 (Adobe) and Pixelify Sans, both under the SIL Open Font License.

To preview locally: `python3 -m http.server` in this folder, then open http://localhost:8000/.
Add `?era=classic` to the address to start in the Classic look.

## License

MIT, see [LICENSE](LICENSE). Not affiliated with LocalSend or Apple.
