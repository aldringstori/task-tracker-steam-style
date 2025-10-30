#!/bin/bash

echo "🚀 Starting Steam Task Tracker..."
docker-compose up -d --build

echo ""
echo "✅ Container started!"
echo "📍 Access the app at: http://localhost:3003"
echo ""
echo "Run './logs.sh' to view logs"
echo "Run './status.sh' to check status"
echo "Run './stop.sh' to stop the container"
