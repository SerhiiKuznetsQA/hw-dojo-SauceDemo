What This Project Covers
This project automates a core user journey for SauceDemo, including:

🔐 Login with different user roles (standard_user, error_user, etc.)

🛒 Adding products to the cart

✅ Completing the checkout process successfully

🎭 Testing behavior with a user having a visual role

💾 Session caching via storageState to optimize speed

🧱 Page Object Model for code modularity

🧪 Custom fixtures for parameterized user login

🚀 Getting Started
Install dependencies
bash

npm install

Run all tests
bash

npx playwright test

Run specific test
bash

npx playwright test tests/SK_1_login.spec.ts
Run with HTML report
bash

npx playwright test --reporter=html
npx playwright show-report

👤 User Roles
Login is handled using the userLogin fixture.

ts

Available test users from SauceDemo:

standard_user

problem_user

performance_glitch_user

error_user

Login sessions are cached

🧱 Tech Stack
Playwright

TypeScript

Page Object Model (POM)

Custom fixtures

Reusable storageState (auth)
