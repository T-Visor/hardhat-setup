#!/bin/sh

# Install Hardhat environment.
npm init -y 
npm install --save-dev hardhat
npx hardhat

# Remove the sample script.
rm scripts/sample-script.js

# Move provided script templates.
mv run.js scripts
mv deploy.js scripts
