//This is a simplified version of eventHandlers to help us better understand
// the events module

//Order of code matters in the eventsEmitter
//First, listen and then emit
// Events module has two main methods

// .on - Listen to the event
// .emit - Release the event

const eventEmitter = require('events')

const customEmitter = new eventEmitter

customEmitter.on('response', (name, id) => {
    console.log(`Data received for ${name} with id: ${id}`)
})
customEmitter.on('response', () => {
    console.log('An alternate logic to feed one event operation multiple events')
})

//We can also pass in arguments in our event handlers
customEmitter.emit('response', 'john', 34)