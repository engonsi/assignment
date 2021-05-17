# assignment

AssignmentClass is a small library class written in NodeJS/JavaScript that can perform the following operations:

**1. Add Action**

addAction (string) returning error
accepts a json serialized string of the form below and maintains an average time for each action. 3 sample inputs:

```
    1) {"action":"jump", "time":100}
    2) {"action":"run", "time":75}
    3) {"action":"jump", "time":200}
```

**2. Statistics**

getStats () returning string
A function that accepts no input and returns a serialized json array of the average time for each action that has been provided to the addAction function.

Output after the 3 sample calls above would be:

```
    [
    {"action":"jump", "avg":150},
    {"action":"run", "avg":75}
    ]
```

## Installing

1. Make sure you have these installed

- [node.js](http://nodejs.org/)
- [git](http://git-scm.com/)

2. Clone this repository into your local machine using the terminal (mac) or Gitbash (PC) `> git clone CLONEURL`
3. CD to the folder `cd FOLDERNAME`
4. Run `npm install` to install the project dependencies
5. Run `node App` to run application

## Usage

Please refer to App.js file for more details

**1. Add Action**

```
const App = new AssignmentClass()

App.addAction('{ "action": "jump", "time": 100 }')
App.addAction('{ "action": "run", "time": 75 }')
App.addAction('{ "action": "jump", "time": 200 }')
```

**2. Statistics**

```
console.log('Statistics:', App.getStats())
```
