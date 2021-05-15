'use strict'
class AssignmentClass {
  constructor(userInput, ...items) {
    // accept userInput, initialize array of items
    this.userInput = userInput
    this.items = items
  }

  addAction = (userInput) => {
    try {
      // check entry validity as JSON String
      JSON.parse(userInput)
    } catch (err) {
      console.error('Entry Type Error')
    }
    let entry = JSON.parse(userInput)

    if (entry.action && entry.time) {
      // check entry fields validity
      this.items.push(entry)
      console.log(entry, 'Added Successfully!') // log success
    } else {
      console.log('Missing Data')
    }
  }

  getStats = () => {
    //check for stored data
    if (this.items.length === 0) return 'Stats Not Available'

    let result = []

    // get unique actions from addAction stored data
    const uniqueActions = [
      ...new Set(this.items.map((theAction) => theAction.action)),
    ]

    //loop through stored data, and apply average to time entry for each action
    uniqueActions.forEach((action) => {
      let oneAction = this.items.filter((item) => item.action === action)
      let times = Object.entries(oneAction).map((item) => item[1].time)
      let averageTime = times.reduce((a, c) => a + c) / times.length

      //  prepare json array of results
      result = [...result, { action: action, avg: averageTime }]
    })

    //return serialized json array
    return JSON.stringify(result)
  }
}

const myApp = new AssignmentClass() // instantiate the Class

myApp.addAction('{ "action": "jump", "time": 100 }') //call method addAction with json serialized string as augment
myApp.addAction('{ "action": "run", "time": 75 }')
myApp.addAction('{ "action": "jump", "time": 200 }')
console.log('Statistics:', myApp.getStats()) // log getStatus results to console
