# 📑 Breach App — Test Execution Report

**Project:** Breach  
**Environment:** QA  
**Tester:** Kingsley O. Ifeanyi  
**Date:** 2/5/2025 

---

## 📋 Overview

This document captures the results of executing the test plan for **Breach**. It covers test cases executed against the **Frontend (Web)**, **Backend API** and **WebSocket** tests.

---

## 📊 Summary

| Test Area       | Total Test Cases | Passed | Failed | Blocked | Not Run |
|:----------------|:----------------|:--------|:--------|:---------|:----------|
| **Frontend (Web)**  | 13               | 7      | 6      | 0       | 0        |
| **Backend (API)**   | 10               | [ ]    | [ ]    | [ ]     | [ ]      |
| **WebSocket**       | 5                | [ ]    | [ ]    | [ ]     | [ ]      |

---

## ✅ Frontend Test Results  

| ID    | Scenario                                              | Expected Result                                         | Actual Result / Observation                                                                                   | Status |
|:-------|:------------------------------------------------------|:--------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------|:---------|
| F01   | User registration with valid and invalid emails        | Should prevent invalid emails and accept valid ones      | **Invalid emails can register.** Valid emails work fine.                                                     | ❌       |
| F02   | User login with valid and invalid credentials          | Invalid credentials rejected, valid ones logged in       | **Invalid credentials flagged properly.** Valid ones log in as expected.                                      | ✅       |
| F03   | Select categories of interest during onboarding        | User can select categories and proceed                   | Categories selected fine, proceeded to homepage normally.                                                     | ✅       |
| F04   | Home page loads with posts and WebSocket streams       | Feed pre-fills with posts and displays real-time stream   | Home prefilled well. WebSocket stream works but slight initial connection delay observed.                     | ⚠️       |
| F05   | Filter posts (Featured, Popular, Recent)               | Posts should filter accordingly                          | Filter options working fine.                                                                                  | ✅       |
| F06   | Search bar presence and functionality                  | Search bar should exist and function                      | **No search bar anywhere in the app.** Cannot search posts.                                                   | ❌       |
| F07   | Start writing button behavior                          | Should lead to post creation page or open modal           | **Button not working at all.** No modal, no navigation.                                                       | ❌       |
| F08   | Publications page content                              | Should display user’s or community publications           | **Page is empty.**                                                                                             | ❌       |
| F09   | Dashboard page content                                  | Should display user dashboard data                        | **Page is empty.**                                                                                             | ❌       |
| F10 | Logout button visibility and functionality       | Should be hidden in a profile/account icon in the navbar and reveal a dropdown with the logout option | **Logout button is only visible on the landing page.** Should be hidden inside a profile/account icon in the navbar. This issue needs a fix. | ❌      |
| F11   | Responsiveness on mobile, iPad, tablet                  | Layout adjusts with hamburger icon for menu               | **No hamburger icon or side menu access on small screens.** Site not fully responsive.                        | ❌       |
| F12   | Password visibility toggle on login                     | Option to view typed password                              | **No eye icon or toggle to view password.**                                                                    | ❌       |
| F13   | Forgot password flow                                    | Should provide reset password option                      | **No provision for 'Forgot Password' option.**                                                                | ❌       |

---

## 📑 Backend API Test Results  

| ID    | Scenario                                | Expected Result                                      | Actual Result / Observation                        | Status |
|:-------|:-----------------------------------------|:------------------------------------------------------|:----------------------------------------------------|:---------|
| B01   | User registration (valid/invalid data)    | [To be filled after test]                            | [ ]                                                | [ ]       |
| B02   | User login (valid/invalid credentials)    | [ ]                                                  | [ ]                                                | [ ]       |
| B03   | Fetch posts list                           | [ ]                                                  | [ ]                                                | [ ]       |
| B04   | Filter posts by category                   | [ ]                                                  | [ ]                                                | [ ]       |
| B05   | Fetch user profile                          | [ ]                                                  | [ ]                                                | [ ]       |
| B06   | Update user profile                         | [ ]                                                  | [ ]                                                | [ ]       |
| B07   | Invalid API token handling                  | [ ]                                                  | [ ]                                                | [ ]       |
| B08   | Forgot password request                     | [ ]                                                  | [ ]                                                | [ ]       |
| B09   | Reset password confirmation                 | [ ]                                                  | [ ]                                                | [ ]       |
| B10   | API response time under load                | [ ]                                                  | [ ]                                                | [ ]       |

---

## 📡 WebSocket Test Results  

| ID    | Scenario                               | Expected Result                                      | Actual Result / Observation                        | Status |
|:-------|:----------------------------------------|:------------------------------------------------------|:----------------------------------------------------|:---------|
| W01   | Connect to WebSocket                     | Should establish connection successfully              | **Connection works, slight initial delay.**         | ⚠️       |
| W02   | Receive stream of 5 most recent events    | Should receive recent events on home page              | **Events display fine once connection stabilizes.** | ✅       |
| W03   | Reconnect after network disconnect       | Should reconnect automatically                        | [ ]                                                | [ ]       |
| W04   | Handle invalid connection attempt        | Should gracefully handle failed connections            | [ ]                                                | [ ]       |
| W05   | Performance under concurrent connections | Should remain stable under 50–100 simulated users      | [ ]                                                | [ ]       |

---

## 📝 Additional Observations  

- **No visual confirmation or toast messages for some actions (like post filtering or onboarding success).**  
- **Button hover and active states are not consistent across UI elements.**  
- **Page transitions feel a bit abrupt — no loading indicators when switching routes.**  
- **Dark mode toggle or theme control not available (if in scope).**

---

## 📦 Deliverables  

- ✅ Test Plan  
- ✅ Frontend Test Execution Report  
- ⬜ Backend API Test Report (Pending)  
- ⬜ WebSocket Test Report (Pending)  
- ✅ Screen recordings  
- ✅ Screenshots of UI issues  
- ⬜ Final QA Summary Report  

---

## 📌 Conclusion (Frontend Phase)

The frontend test execution exposed several functional and UX issues, particularly in responsiveness, incomplete features, and missing user experience elements (like search, password visibility, and proper logout access). The WebSocket stream works but exhibits an initial connection delay that requires optimization. Backend and WebSocket reconnection tests remain pending for subsequent QA cycles.

---
