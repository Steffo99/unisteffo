# [`uni.steffo.eu`](https://uni.steffo.eu)

A [Preact](https://preactjs.com/) website with all things I'm using to prepare for university exams!

![maintenance: actively-developed](https://img.shields.io/badge/maintenance-actively--developed-brightgreen)

## Contributing

All contributions are welcome!

Please help me making this an useful resource to all students everywhere, and correct mistakes if you find them! :D

## Developing

### Running a local copy

If you want to run a local copy of the website, ensure [the latest `nodejs`](https://nodejs.org/it/) and `npm` are installed on your machine then run:

```bash
git clone https://github.com/Steffo99/uni.steffo.eu.git
cd "uni.steffo.eu"
npm install
npm run start
```

### Updating the website

To update the published website, run in the previously cloned folder:

```bash
npm run build
git add docs
git commit -m "Update website"
git push
```

[GitHub Pages](https://pages.github.com/) will do the rest.
