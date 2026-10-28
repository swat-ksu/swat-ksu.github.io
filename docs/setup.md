# Developing

Requires [git](https://git-scm.com/install/) and [Node.js 24+](https://nodejs.org/en/download). It's recommended you use [VSCode](https://code.visualstudio.com/) or [VSCodium](https://vscodium.com/) for your code editor, or something cooler if you know what you're doing.

Clone the repository:

```bash
git clone https://github.com/swat-ksu/swat-ksu.github.io
```

Navigate to the website folder:

```bash
cd swat-ksu.github.io/web
```

> [!IMPORTANT]
> All `npm` commands should be run in the `/web` folder of the repository.

Install project dependencies:

```bash
npm install
```

Open the project folder in VS Code, when prompted in bottom right corner hit "Install Recommended Extensions" (or install Astro, ESLint, and Prettier).

You're ready to start developing! Start the development server with:

```bash
npm run dev
```

and open http://localhost:4321/ in your browser to see your changes live. To stop the development server, press `Ctrl+C`.

> [!TIP]
> If you get stuck or need help, send a message in `#swat-website` of the SwAT discord or `@squisket` on discord. This project aims to be welcoming to everyone regardless of experience!

# Useful commands

Start the Astro development server on http://localhost:4321/.

```bash
npm run dev
```

Check project for common code problems (linting):

```bash
npm run lint
```

Format the whole project:

```bash
npm run format
```
