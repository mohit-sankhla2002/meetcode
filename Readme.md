# Meetcode

Meetcode is a full stack MERN (MongoDB, Express.js, React.js, Node.js) project for running your code on a online code-editor. It allows users to write and run their codes.

## Getting Started

To get started with Meetcode, please follow the instructions below.

### Prerequisites

Before running the application, ensure that you have the following software installed on your machine:

- Node.js (version 12 or higher)
- MongoDB

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/meetcode.git
```

2. Install the dependencies for both the client and server:

```bash
cd meetcode/client
npm install

cd ../server
npm install
```

### Starting the Application

To start the Meetcode application, follow the steps below:

1. Start the server:

```bash
cd meetcode/server
npm start
```

The server will start running on port 8080.

2. Open a new terminal and start the client:

```bash
cd meetcode/client
npm start
```

The client will start running on port 3000.

3. Open your web browser and navigate to `http://localhost:3000` to access the Meetcode application.

### Configuration

If you need to change the default configuration, such as the MongoDB connection string or port numbers, you can modify the corresponding configuration files:

- Client configuration: `meetcode/client/.env`
- Server configuration: `meetcode/server/.env`

Make sure to restart the server and client after making any configuration changes.

## Contributing

We welcome contributions to the Meetcode project. If you would like to contribute, please follow these guidelines:

1. Fork the repository and clone it to your local machine.
2. Create a new branch for your feature or bug fix: `git checkout -b my-feature`.
3. Make your changes and test them thoroughly.
4. Commit your changes: `git commit -am 'Add new feature'`.
5. Push to the branch: `git push origin my-feature`.
6. Submit a pull request detailing your changes.