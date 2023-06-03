# Use an official Node runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install all dependencies including development dependencies
RUN npm install

# Copy the entire application code to the container
COPY . .

# Expose the port on which the application will run
EXPOSE 3000

# Set the command to run your application
CMD ["npm", "start"]
