# 📄 Breach App - QA Test Plan

## 1️⃣ Overview  
This test plan outlines the strategy, scope, objectives, resources, schedule, and deliverables for testing the Breach application. It aims to validate application functionality, performance, usability, stability, and compliance.

## 2️⃣ Objective  
- Verify that all core functionalities work as intended.  
- Detect and document functional, UI/UX, performance, and integration issues.  
- Ensure a stable, responsive, and consistent user experience across devices and browsers.

## 3️⃣ Scope 
- Frontend UI and UX testing on Web.
- Backend API testing (User registration, login, posts, categories, interests).
- WebSocket live event stream testing.
- Load and performance testing.
- Responsiveness testing across multiple screen sizes.

## 4️⃣ Tools & Environment  

| Tool               | Purpose                             |
|:-------------------|:------------------------------------|
| Postman            | API and WebSocket testing           |
| Sniping tool       | Screen recording                    |
| Google Sheets      | Bug tracking and reporting          |
| Chrome DevTools    | Responsive and frontend debugging   |
| Artilery           | Load and stress testing             |
| VS Code            | Test documentation (Markdown)       |
| GitHub             | Final deliverable repository        |

**Test Environment:**
- Frontend: [https://breach-fe.qa.mvm-tech.xyz/](https://breach-fe.qa.mvm-tech.xyz/)
- Backend API: [https://breach-api.qa.mvm-tech.xyz/swagger/](https://breach-api.qa.mvm-tech.xyz/swagger/)
- WebSocket: `wss://breach-api-ws.qa.mvm-tech.xyz`

## 5️⃣ Test Scenarios  

| ID    | Test Scenario                                                  | Priority |
|:------|:---------------------------------------------------------------|:----------|
| TS01  | User registration with valid/invalid inputs                    | High |
| TS02  | User login with valid/invalid credentials                      | High |
| TS03  | Fetch and display list of posts                                | High |
| TS04  | Filter posts by category                                       | Medium |
| TS05  | User selects topics of interest during onboarding              | Medium |
| TS06  | Stream and display recent 5 events via WebSocket               | High |
| TS07  | Responsive design test on various screen sizes                 | Medium |
| TS08  | API error handling validation                                  | High |
| TS09  | Load and stress test for concurrent API calls                  | Medium |
| TS10  | Password reset & forgot password flow                          | High |
| TS11  | User profile update (username, bio, profile picture)           | Medium |
| TS12  | Invalid API token / unauthorized request handling              | High |
| TS13  | API response time monitoring under normal & heavy load         | Medium |
| TS14  | WebSocket reconnect logic (simulate network disconnects)       | Medium |
| TS15  | Cross-browser compatibility test (Chrome, Edge, Safari)        | Medium |
| TS16  | Error messaging clarity & consistency across app               | Medium |
| TS17  | Search functionality within posts                              | Medium |
| TS18  | Pagination or infinite scroll behavior in post listing         | Medium |
| TS19  | Session management — auto logout on token expiry               | Medium |
| TS20  | User logout flow                                               | High |

## 6️⃣ Entry & Exit Criteria

### ✅ Entry Criteria
- Test environments (frontend, backend, WebSocket) are accessible and stable.
- Design files (Figma) are available and aligned with current implementation.
- All required endpoints are documented and accessible via Swagger.
- Authentication mechanism (login/registration) is operational.
- Test data (e.g., user credentials, post categories) is prepared or mock data is seeded.
- Tools for test execution (Postman, JMeter, browser tools) are installed and configured.

### 📌 Exit Criteria
- All planned test cases (Frontend, Backend, WebSocket) executed.
- All identified bugs and issues documented in the Bug Tracker.
- Test Plan, Test Results, and Bug Reports completed and shared.
- No fixes applied yet; defects pending resolution.
- Test environments remain stable for retesting.
- All documentation delivered to the development team.

## 7️⃣ Test Deliverables  
- Test Plan 
- Test Execution Report  
- Bug Report
- Screen recordings of test sessions
- Screenshots of test sessions
- Final summary in README

## 8️⃣ Expected Outcome  
- No unresolved critical bugs in production.  
- Smooth, intuitive, and responsive UI/UX.  
- Accurate data exchange via APIs.  
- Stable, real-time WebSocket events under concurrent loads.
