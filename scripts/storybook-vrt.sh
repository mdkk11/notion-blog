#!/bin/bash

set -e

echo "Building Storybook..."
npm run storybook:build

echo "Starting Storybook server..."
npm run storybook:start &
SERVER_PID=$!

echo "Waiting for Storybook server to be ready..."
sleep 3

echo "Running Playwright tests..."
npm run playwright test

echo "Stopping Storybook server..."
kill $SERVER_PID
wait $SERVER_PID 2>/dev/null

echo "Storybook VRT process completed."
