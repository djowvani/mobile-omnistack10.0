// Basic socket importing
import socketio from 'socket.io-client';

// Not allowing autoconnects, we want to manually connect when loading the devs in the radius range
const socket = socketio('http://192.168.15.32:3333', {
    autoConnect: false,
});

// Function to update upon a new dev registering
function subscribeToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction);
}

// Function to connect on the socket & send location and techs info
function connect(latitude, longitude, techs) {
    socket.io.opts.query = {
        latitude,
        longitude,
        techs,
    }

    socket.connect();
}

// Function to disconnect from the socket
function disconnect() {
    if(socket.connect) {
        socket.disconnect();
    }
}

export {
    connect,
    disconnect,
    subscribeToNewDevs,
};