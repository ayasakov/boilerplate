import AppServer from './server';

// Start the server or run tests
if (process.argv[2] !== 'test') {
    let server = new AppServer();
    server.start(3000);
} else {
}