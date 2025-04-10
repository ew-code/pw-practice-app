# PLaywright practice app tests

This project is based on **Playwright v1.51.1** and demonstrates the setup of end-to-end tests with Playwright and additional tools like Faker.js for dynamic test data generation.

You can find the full Playwright documentation [here](https://playwright.dev/).

## Prerequisites

- Node.js and npm

## Task Execution Steps:

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/bondar-artem/pw-practice-app.git
cd pw-practice-app
```

### 2. Prepare Environment Variables

Create the .env.example file and rename it to .env:

```bash
cp .env.example .env
```

Update any environment variables in the .env file if necessary.

Optional: If environment variable management is required, install dotenv as a development dependency:

```bash
npm install -D dotenv
```

### 3. Install Dependencies

Install the required dependencies for the project:

```bash
npm install
```

If you encounter warnings related to peer dependencies such as:

```bash
npm WARN ERESOLVE overriding peer dependency
npm WARN While resolving: @angular/cdk@12.1.0
npm WARN Found: @angular/common@14.3.0
```

You can force the installation by running:

```bash
npm install --force
```

### 4. Install Playwright Test Runner

Install the Playwright Test runner as a development dependency:

```bash
npm install --save-dev @playwright/test
```

Initialize Playwright in the project (use --force to overwrite any existing configuration if necessary):

```bash
npm init playwright@latest --force
```

Install the required browsers for Playwright:

```bash
npx playwright install
```

### 5. Install Faker.js Library

To generate fake data in tests, install the @faker-js/faker library as a development dependency:

```bash
npm install --save-dev @faker-js/faker
```

This library allows you to generate random data such as names, emails, and addresses — useful for testing input fields and dynamic scenarios.

### 6. Run the Application

If your project requires running the app locally, you can start it using:

```bash
npm run start
```

To stop the application, press:

```bash
Ctrl + C
```

### 7. Implement and Refactor Tests

- Create Page Objects using the Page Object Model (POM) pattern and write your first test.
- Refactor the tests to improve readability, modularity, and maintainability.
- Utilize environment variables and Faker.js for dynamic test data generation.

### Running Tests

After setup, you can run your tests using the Playwright test runner:

```bash
npx playwright test
```

You can also run tests in headed mode or with trace/viewer mode:

```bash
npx playwright test --headed
npx playwright show-report
```

### Test Data, Factories, and Models

This project uses the following approaches to manage test data and improve test maintainability:

1. **Factories**:
   - Factories are used to generate dynamic test data for various scenarios.
   - Example: Creating user profiles with randomized names, emails, and addresses using `@faker-js/faker`.

2. **Models**:
   - Models represent the structure of data used in the application.
   - Example: A `UserModel` defines the properties of a user, such as `name`, `email`, and `password`.

3. **Test Data**:
   - Static and dynamic test data is stored in a structured way to ensure consistency across tests.
   - Example: Login credentials are stored in a `test-data` file for reuse in multiple tests.

## Test Cases

For the purpose of the recruitment process, a separate file `TESTS.md` has been added. This file contains detailed descriptions of all implemented test cases, including their purpose, steps, and expected outcomes.

You can find the test case details in the [TESTS.md](./TESTS.md) file.


-------------------------------------------------------
#### Ngx-Admin Angular 14 application from akveo.com

This is a modified and more lightweight version of the original application to practice UI Automation with Playwright.

The original repo is here: [https://github.com/akveo/ngx-admin](https://github.com/akveo/ngx-admin)
