# TokenGuard Front-End Web App using Svelte

## Description

Front-End Web Application using the Svelte framework that implements user registration, token generation, and login functionality. The application include a Sign-Up form, a secure token display mechanism, and a profile page with login authentication.

## Features

### 1. Sign-Up Form:

- The application provides a Sign-Up form where users can input their Telegram ID which is arbitrary 
in this version of the app and Password.
- Upon submitting the form, an automatically generated token is displayed in a box.
- Users are prompted to copy and paste this token to a secure location.

### 2. Copy Icon Functionality:

- Implement an icon functionality that allows users to copy the following data:
    - Telegram ID (string)
    - Password (string)
    - Token (string) - automatically generated
    - Creation Timestamp (Date)

### 3. Profile Page and Login:

- Accessing the /profile page requires users to log in.
- The Svelte app supports only one user at a time.
- Users must enter their Telegram ID and password to log in.

### 4. Token Validation:

- On the /profile page, users are prompted to input the token.
- Implement token validation:
    - If the token is incorrect, users are redirected to the Sign-In page.
    - If the token is correct, the application displays the number ”94592942990.”

