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

      /* this section can be replaced with any Storage Function such as
       saving to filesystem, database, localStorage (frontEnd Calls), ..etc 
       for data persistance*/

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

    /* this section can be replaced with any Storage Function such as
       reading from filesystem, database, localStorage (frontEnd Calls), etc*/

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

module.exports = AssignmentClass //export AssignmentClass
