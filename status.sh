#!/bin/bash

echo "📊 Steam Task Tracker Status"
echo "=============================="
echo ""

docker ps --filter "name=steam-task-tracker-next" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo ""
echo "Health status:"
docker inspect --format='{{.State.Health.Status}}' steam-task-tracker-next 2>/dev/null || echo "Health check not available yet"
