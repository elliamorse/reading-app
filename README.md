# My Reading List Application
instructions for running at the bottom

## Project Description  
A web application to help users manage a personal reading list. Users can add books, view their list, mark books as **"Read"** or **"Unread"**, and delete books.

## Key Features  
- **Display Books:**  
  Show a list of all books with their title, author, and read status ("Read" or "Unread").  
- **Add New Book:**  
  A form to add a new book with fields for title and author. New books default to **"Unread"**.  
- **Toggle Read Status:**  
  Change a book’s status between "Read" and "Unread" via a button or toggle switch. This updates the database via server API.  
- **Delete Book:**  
  Delete books from the list, with changes reflected in the database via server API.

## Nuxt.js & SQL Implementation Details

### Pages  
- Main page displaying the book list  
- Separate page or modal with form to add a new book  

### Layouts  
- Default layout with a common header  

### Components  
- Use reusable Vue components for UI elements  

### Server  
- Use Nuxt server routes to manage API endpoints for CRUD operations  

### Nuxt UI  
- Utilize Nuxt UI components such as lists, tables, cards, forms (inputs, buttons), toggles/switches, and modals for better UX  

### SQL Backend (SQLite recommended)  
- Single table named `books` with schema:  
  - `id` (INTEGER, PRIMARY KEY, AUTOINCREMENT)  
  - `title` (TEXT, NOT NULL)  
  - `author` (TEXT, NOT NULL)  
  - `is_read` (BOOLEAN or INTEGER (0 or 1), NOT NULL, DEFAULT 0)  



# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
## Setup

Make sure to install dependencies:
```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.


