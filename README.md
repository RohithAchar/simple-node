Below is a README file providing an overview of the provided Node.js script:

---

# Simple HTTP Server with Node.js

This is a simple HTTP server implemented using Node.js. It serves static HTML files based on the requested URL.

## Features

- Serves static HTML files for different routes.
- Supports routes for the home page, about page, and contact page.
- Returns a custom 404 page for undefined routes.

## Prerequisites

- Node.js installed on your machine.

## Usage

1. Clone this repository to your local machine:

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```bash
    cd simple-http-server-nodejs
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the server:

    ```bash
    npm start
    ```

5. Open your web browser and visit [http://localhost:8080](http://localhost:8080) to view the home page.

## Customization

You can customize the server behavior by modifying the following:

- **Port**: You can change the port number by modifying the `PORT` constant in the script (`server.js`).

- **HTML Files**: Place your HTML files in the root directory of the project. Update the file paths in the script (`server.js`) if you change the directory structure or file names.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to modify the README according to your specific needs or add more sections as required.
