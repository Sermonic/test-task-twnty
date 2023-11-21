### https://test-task-twnty.vercel.app

## Project Setup:

- Created using Next.js CLI, version 14.0.2.
- Utilized React for the user interface, with React version ^18.
- Incorporated ESLint and Prettier for maintaining code quality.

## Type Safety and Styling:

- Implemented TypeScript for robust type safety throughout the application.
- Styled Components were used for styling, with additional ESLint configurations. Demonstrated usage in Styled Components for:
   - Global Styles
   - Theme
   - Mixins

## Navigation:

- Developed a navigation bar utilizing Next.js client-side routing.
- Included route groups for organized navigation.
- Integrated a responsive hamburger menu for mobile views.
- Implemented a theme toggle for enhanced user experience.

## API Integration:

- Integrated The Movie Database (TMDB) API for data retrieval.

## Movies Page:

- Implemented features on the Movies page:
   - Added a button to fetch popular movies from the TMDB API.
   - Incorporated a loader to indicate data loading.
   - Enabled filtering movies by title.
   - Implemented sorting options based on different criteria (date, rating, popularity).

## Data Detail Page:

- Created a data detail page that provides in-depth information when clicking on a specific data point.

## Error Handling:

- Effectively handled API errors and displayed them to users when necessary.

## Running the App Locally

1. **Clone the repository**: First, you need to clone the repository to your local machine. You can do this by running the following command in your terminal:

    ```bash
    git clone https://github.com/Sermonic/test-task-twnty.git
    ```

2. **Navigate to the project directory**: Once the repository is cloned, navigate to the project directory using the `cd` command:

    ```bash
    cd test-task-twnty
    ```

3. **Install dependencies**: The next step is to install the project dependencies. If you're using npm, you can do this by running:

    ```bash
    npm install
    ```

   If you're using yarn, you can run:

    ```bash
    yarn install
    ```

4. **Start the application**: After the dependencies are installed, you can start the application. If you're using npm, you can do this by running:

    ```bash
    npm start
    ```

   If you're using yarn, you can run:

    ```bash
    yarn start
    ```

   This command will start the application and open it in your default web browser. If the application doesn't open automatically, you can manually open it by navigating to `http://localhost:3000` in your web browser.
