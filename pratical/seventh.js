const events = require('events');
const eventEmitter = new events.EventEmitter();

eventEmitter.on('greet', function() {
    console.log('Hello There! from Srujal');
});
eventEmitter.emit('greet');