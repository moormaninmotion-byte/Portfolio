# Stage 1: Build the React application
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or npm-shrinkwrap.json)
COPY package*.json ./

# Use 'npm ci' for clean, reproducible installs in CI/CD environments.
# This requires a package-lock.json file to be present.
RUN npm ci

# Copy the rest of the application source code
COPY . .

# Run the build script (tsc && vite build)
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:stable-alpine
# Copy the custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copy the built assets from the 'build' stage
COPY --from=build /app/docs /usr/share/nginx/html
EXPOSE 8080