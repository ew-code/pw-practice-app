# Test Cases

This document provides an overview of the test cases implemented in the project. The tests are categorized into **Smoke**, **Functional**, **Integration**, **End-to-End**, and **Regression** tests.

In total, 20 test cases have been implemented.

---

## Smoke Tests

### 1. Dashboard Smoke Tests
- **Test Name**: All core widgets should be visible on the dashboard
  - **Description**: Verifies that all core widgets are visible on the dashboard after navigating to it.
  - **Widgets Checked**:
    - Light
    - Roller Shades
    - Wireless Audio
    - Coffee Maker
    - Room Management

---

## Functional Tests

### 1. Dashboard Functional Tests
- **Test Name**: User can toggle the light off and on
  - **Description**: Verifies that the user can toggle the light widget on and off.
  
- **Test Name**: User can toggle roller shades off and on
  - **Description**: Verifies that the user can toggle the roller shades widget on and off.
  
- **Test Name**: User can toggle the audio off and on
  - **Description**: Verifies that the user can toggle the audio widget on and off.
  
- **Test Name**: User can toggle the coffee maker off and on
  - **Description**: Verifies that the user can toggle the coffee maker widget on and off.

---

## Integration Tests

### 1. Login Tests
- **Test Name**: User can log in with valid credentials
  - **Description**: Verifies that a user can log in successfully using valid credentials.

### 2. Registration Tests
- **Test Name**: User can register a new account
  - **Description**: Verifies that a new user can register successfully.

---

## End-to-End Tests

### 1. Security Cameras Test
- **Test Name**: User can log in and check security cameras
  - **Description**: Verifies that a user can log in and all security cameras are visible on the dashboard.

### 2. Electricity Consumption Test
- **Test Name**: User can view Electricity Consumption for January in different years
  - **Description**: Verifies that a user can view electricity consumption for January for the past 10, 9, and 8 years.
  - **Steps**:
    1. Log in with valid credentials.
    2. Check electricity consumption for January 10 years ago.
    3. Check electricity consumption for January 9 years ago.
    4. Check electricity consumption for January 8 years ago.

### 3. Widget Interaction Test
- **Test Name**: User can register, log in, and interact with widgets
  - **Description**: Verifies that a user can register, log in, and interact with IoT dashboard widgets.
  - **Widgets Interacted With**:
    - Light
    - Roller Shades
    - Wireless Audio
    - Coffee Maker

---

## Regression Tests

- **Test Name**: Regression test suite
  - **Description**: Placeholder for regression tests to ensure that new changes do not break existing functionality.

---

## Additional Information

### Factories
- **Purpose**: Factories are used to generate dynamic test data for various scenarios.(src/factories)
- **Example**: Creating user profiles, generating random credentials, or populating forms with dynamic data.

### Models
- **Purpose**: Models represent the structure of data (src/models)

# Test Cases

This document provides an overview of the test cases implemented in the project. The tests are categorized into **Smoke**, **Functional**, **Integration**, **End-to-End**, and **Regression** tests.

---

## Smoke Tests

### 1. Dashboard Smoke Tests
- **Test Name**: All core widgets should be visible on the dashboard
  - **Description**: Verifies that all core widgets are visible on the dashboard after navigating to it.
  - **Widgets Checked**:
    - Light
    - Roller Shades
    - Wireless Audio
    - Coffee Maker
    - Room Management

---

## Functional Tests

### 1. Dashboard Functional Tests
- **Test Name**: User can toggle the light off and on
  - **Description**: Verifies that the user can toggle the light widget on and off.
  
- **Test Name**: User can toggle roller shades off and on
  - **Description**: Verifies that the user can toggle the roller shades widget on and off.
  
- **Test Name**: User can toggle the audio off and on
  - **Description**: Verifies that the user can toggle the audio widget on and off.
  
- **Test Name**: User can toggle the coffee maker off and on
  - **Description**: Verifies that the user can toggle the coffee maker widget on and off.

---

## Integration Tests

### 1. Login Tests
- **Test Name**: User can log in with valid credentials
  - **Description**: Verifies that a user can log in successfully using valid credentials.

### 2. Registration Tests
- **Test Name**: User can register a new account
  - **Description**: Verifies that a new user can register successfully.

---

## End-to-End Tests

### 1. Security Cameras Test
- **Test Name**: User can log in and check security cameras
  - **Description**: Verifies that a user can log in and all security cameras are visible on the dashboard.

### 2. Electricity Consumption Test
- **Test Name**: User can view Electricity Consumption for January in different years
  - **Description**: Verifies that a user can view electricity consumption for January for the past 10, 9, and 8 years.
  - **Steps**:
    1. Log in with valid credentials.
    2. Check electricity consumption for January 10 years ago.
    3. Check electricity consumption for January 9 years ago.
    4. Check electricity consumption for January 8 years ago.

### 3. Widget Interaction Test
- **Test Name**: User can register, log in, and interact with widgets
  - **Description**: Verifies that a user can register, log in, and interact with IoT dashboard widgets.
  - **Widgets Interacted With**:
    - Light
    - Roller Shades
    - Wireless Audio
    - Coffee Maker

---

## Regression Tests (TODO)

- **Test Name**: Regression test suite
  - **Description**: Placeholder for regression tests to ensure that new changes do not break existing functionality.

---

