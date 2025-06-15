#!/bin/bash
set -e # Exit on error
cd client
npm ci --silent
npm run build