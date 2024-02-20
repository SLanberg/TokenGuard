# TokenGuard Front-End Web App using Svelte

## Description

Front-End Web Application using the Svelte framework that implements user registration, token generation,
and login functionality. The application include a Sign-Up form, a secure token display mechanism,
and a profile page with login authentication.

## Features

### 1. Sign-Up Form:

- The application provides a Sign-Up form where users can input their Telegram ID which is arbitrary
  in this version of the app and Password.
- Upon submitting the form, an automatically generated token hashed by sha256 is displayed in a box.
- Users are prompted to copy and paste this token to a secure location inside their notes.
- Validation of the fields.

### 2. Copy Icon Functionality:

- Implemented an icon functionality that allows users to copy the following data:
  - Telegram ID (number)
  - Password (string)
  - Token (string) - automatically generated
  - Creation Timestamp (Date)
- After this action user will see Snackbar at the bottom that will inform user that the copy is made.

### 3. Profile Page and Login:

- Accessing the /casino page requires users to log in.
- Users must enter their Telegram ID and password to log in.
- Validation of the fields.

### 4. Token Validation:

- On the /secure-access page, users are prompted to input the token.
- If the token is incorrect, users are redirected to the Sign-In page. Pop-up message shown to the user indicating the token is incorrect with the offer to sign in again and try again.
- If the token is correct, the application displays the number ”94592942990.”
