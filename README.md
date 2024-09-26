# SSE Project - Real-Time Server-Sent Events

This project demonstrates how to implement **Server-Sent Events (SSE)** to send real-time updates from a server to a client. In this example, the server sends the current time to the client every second without the need for the client to request updates.

## Features

- Real-time updates from the server to the client using SSE.
- The server sends the current time to the client every second.
- SSE allows for unidirectional communication where the server pushes updates to the client without needing a request each time.

## How it Works

- The **server** uses Express.js to serve an HTML file and sends time updates every second through an SSE connection.
- The **client** listens to the SSE stream and updates the webpage with the current time whenever the server sends new data.

## Technologies Used

- **Node.js** with **Express.js** for the server-side logic.
- **SSE (Server-Sent Events)** for real-time communication.
- **HTML** and **JavaScript** for the client-side rendering.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have Node.js installed on your machine. You can download it from [Node.js official website](https://nodejs.org/).

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/sse-project.git
