# Use the official Node.js image
FROM node:14

# Set the working directory in the container
WORKDIR /app
 
# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the React app for production
RUN npm run build

# Install serve to serve the app
RUN npm install -g serve

# Expose the port that serve will run on
EXPOSE 5173

# Command to run the app
CMD ["serve", "-s", "build"]
