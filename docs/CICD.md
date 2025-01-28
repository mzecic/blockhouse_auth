# CI/CD Pipeline Documentation

## Overview

This document explains the Continuous Integration and Continuous Deployment (CI/CD) pipeline for the Blockhouse Auth mobile application.

## Workflow Configuration

### Continuous Integration (CI)

File: `.github/workflows/ci.yml`

#### Workflow Triggers

- Triggered on push and pull requests to `main` and `develop` branches

#### Jobs

1. **Lint and Test**
   - Runs on Ubuntu latest
   - Steps:
     - Checkout code
     - Setup Node.js (version 18)
     - Install dependencies
     - Run code formatting check (Prettier)
     - Run ESLint
     - Run TypeScript type checking
     - Execute Jest tests

### Continuous Deployment (CD)

File: `.github/workflows/cd.yml`

#### Workflow Triggers

- Triggered on push to `main` and `release` branches
- Triggered on pull requests to `main` and `release` branches

#### Jobs

1. **iOS Build**

   - Runs on macOS latest
   - Steps:
     - Checkout code
     - Setup Node.js (version 18)
     - Setup Ruby (version 3.1.4)
     - Install Ruby dependencies
     - Install project dependencies
     - Run iOS build for simulator

2. **Android Build**
   - Runs on Ubuntu latest
   - Steps:
     - Checkout code
     - Setup Node.js (version 18)
     - Setup Java (version 17)
     - Setup Android SDK
     - Install dependencies
     - Build Android release APK
     - Upload APK as artifact

## Local Development Workflow

### Prerequisites

- Node.js 18+
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Running Tests Locally

```bash
# Run all tests
npm test

# Run linter
npm run lint

# Type checking
npx tsc --noEmit
```
