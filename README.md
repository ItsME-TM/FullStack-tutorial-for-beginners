# React Beginners Tutorials

Welcome — a collection of small, self-contained React example pages and several Node.js utility projects used for learning and experimentation.

## Quick start

- **View HTML examples:** Open the HTML files in a browser (double-click) or serve the repository with a simple static server, e.g.:

```bash
# from repository root
npx http-server . -p 8080
# then open http://localhost:8080/1-Introduction/react-basic.html
```

- **Node.js projects:** Many helper utilities live under `Node Projects/` and require Node.js (v14+ recommended). For each Node project:

```bash
cd "Node Projects/<project-name>"
npm install
# read the project's info.md for usage examples
```

## React tutorial pages (static)

- **Introduction:** [1-Introduction/react-basic.html](1-Introduction/react-basic.html) — Basic React concepts and setup.
- **Display Multiple Elements:** [2-Display multiple html elements/react.html](2-Display multiple html elements/react.html) — Rendering multiple elements.
- **Total Cost Calculator (Task):** [3-(Task)Total Cost Calculator/task.html](3-(Task)Total Cost Calculator/task.html) — Build a simple cost calculator.
- **Chatbot (Project):** [4-(Project) Chatbot/v-1.0/chatbot.html](4-(Project) Chatbot/v-1.0/chatbot.html) — Small chatbot demo.
- **Hooks Examples:** [5-Hooks/hooks_basic_1.html](5-Hooks/hooks_basic_1.html), [5-Hooks/hooks_basic_2.html](5-Hooks/hooks_basic_2.html) — Hooks demonstrations.
- **Calculator:** [6-calculator/calculator.html](6-calculator/calculator.html) — Simple calculator project.

## Node Projects (utilities)

These are small Node.js utilities; most include an `info.md` with setup and examples.

- `Node Projects/api-key-manager` — API key generation and storage examples.
- `Node Projects/csv-tools` — CSV processing helpers.
- `Node Projects/file-validator` — File validation utilities.
- `Node Projects/jwt-validator` — JWT generator/validator examples (see `Node Projects/jwt-validator/info.md`).
- `Node Projects/password-utils` — Password hashing and checking utilities.
- `Node Projects/request-logger` — Simple request logging helpers.
- `Node Projects/url-shortener` — Tiny URL shortener examples.

## MongoDB Tasks

This repository includes a set of MongoDB practice tasks under `MongoDB Tasks/`. The tasks use a shared example dataset and include Coderbyte-style prompts, example documents, and small verification scripts.

- `MongoDB Tasks/basic_commnds.md` — quick `mongosh` command cheat sheet.
- `MongoDB Tasks/*/Task.md` — individual task prompts (distinct names, order totals, top products, inactive users, top intents).
- `MongoDB Tasks/01-Distinct-FirstNames/query.js` — example Node.js script that connects to MongoDB and runs a sample query.

Running the MongoDB tasks (quick options):

- Using `mongosh` (recommended for quick verification):

```sh
# start the shell
mongosh

# switch to the shared database used by the tasks
use mongodb_tasks_shared

# paste the `insertMany` blocks from the Task.md files (or from MongoDB Tasks/setup script if present)
```

- Using Node.js scripts (optional, for automated checks):

```sh
cd "MongoDB Tasks/01-Distinct-FirstNames"
# install the official driver if needed
npm install mongodb
node query.js
```

See each task's `Task.md` for the exact collections and expected output.

## Example: jwt-validator quick run

1. Install dependencies for the jwt-validator project:

```bash
cd "Node Projects/jwt-validator"
npm install
```

2. Generate a test token and validate it (examples live in `Node Projects/jwt-validator/info.md`). On Windows copy the token printed by the generator and use it with the validator; on macOS/Linux you can pipe or use `$()` substitution.

## Contributing

Contributions are welcome — open issues or submit PRs. If you add utilities, please include an `info.md` with basic run instructions and expected outputs.

## License

Feel free to use these examples for learning and personal projects.
