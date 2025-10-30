# Docker Deployment Guide

## ✅ Application Running

Your Steam Task Tracker is now running in Docker!

**Access the app**: http://localhost:3003

## Quick Commands

```bash
# Start the container (rebuilds if needed)
./start.sh

# Stop the container
./stop.sh

# View logs
./logs.sh

# Check status
./status.sh
```

## Manual Docker Commands

```bash
# Start container (detached mode)
docker-compose up -d --build

# Stop container
docker-compose down

# View logs (follow mode)
docker-compose logs -f

# Check container status
docker ps --filter "name=steam-task-tracker-next"

# Check health status
docker inspect --format='{{.State.Health.Status}}' steam-task-tracker-next
```

## Container Details

- **Container Name**: steam-task-tracker-next
- **Port**: 3003 (host) → 3003 (container)
- **Restart Policy**: unless-stopped (auto-restart on system reboot)
- **Base Image**: node:18-alpine (lightweight ~40MB)
- **Build Type**: Multi-stage production build

## Configuration

### Port Configuration
Edit `docker-compose.yml` to change the port:
```yaml
ports:
  - "3003:3003"  # Change first number to desired host port
```

### Environment Variables
Edit `docker-compose.yml` to add environment variables:
```yaml
environment:
  - NODE_ENV=production
  - PORT=3003
  - CUSTOM_VAR=value
```

## Build Process

The Docker build uses a 3-stage process for optimization:

1. **deps**: Installs dependencies
2. **builder**: Builds the Next.js application (standalone output)
3. **runner**: Creates minimal production image

## Troubleshooting

### Container won't start
```bash
# Check logs for errors
docker logs steam-task-tracker-next

# Rebuild from scratch
docker-compose build --no-cache
docker-compose up -d
```

### Port already in use
```bash
# Check what's using port 3003
sudo lsof -i :3003

# Either kill the process or change the port in docker-compose.yml
```

### CSS not loading
The app now has Tailwind CSS v3 properly configured. If you experience CSS issues:
1. Rebuild the container: `docker-compose up -d --build`
2. Clear browser cache
3. Check browser console for errors

## Production Deployment

For production deployment:
1. Use a reverse proxy (nginx, Traefik, Caddy)
2. Enable HTTPS with SSL/TLS certificates
3. Set up proper domain/subdomain
4. Configure monitoring and logging
5. Set up regular backups

## Features

- ✅ Fixed port 3003
- ✅ Hot reload in production (Next.js Fast Refresh)
- ✅ Auto-restart on crashes
- ✅ Health checks every 30 seconds
- ✅ Optimized multi-stage build
- ✅ Non-root user for security
- ✅ Tailwind CSS v3 configured
- ✅ Material Icons integrated
