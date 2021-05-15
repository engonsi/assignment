const AssignmentClass = require('./AssignmentClass') // require AssignmentClass

const App = new AssignmentClass() // instantiate the Class

App.addAction('{ "action": "jump", "time": 100 }') //call method addAction with json serialized string as augment
App.addAction('{ "action": "run", "time": 75 }')
App.addAction('{ "action": "jump", "time": 200 }')
console.log('Statistics:', App.getStats()) // log getStatus results to consol
