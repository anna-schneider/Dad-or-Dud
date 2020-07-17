# Dad or Dud Overview

## Project Name

Dad or Dud

## Project Description

Rate a series of Dad jokes, and receive your overall "Dad score".

## API and Data Sample
    
Site: icanhazdadjoke	  Url:https://icanhazdadjoke.com/

```json
{"id":"DIeFtkVvHlb","joke":"Why do valley girls hang out in odd numbered groups? Because they can't even.","status":200}
{"id":"rcxk3TSKusc","joke":"What did the grape do when he got stepped on? He let out a little wine.","status":200}
{"id":"SvXDImbMe","joke":"Don't tell secrets in corn fields. Too many ears around.","status":200}
{"id":"3E6MuHtH6h","joke":"What did one wall say to the other wall? I'll meet you at the corner!","status":200}
```

## Wireframes

https://res.cloudinary.com/dqlrz1dko/image/upload/v1594661963/DoD%20States/Dad_or_Dud_WF_qazvua.png

#### MVP 
- Source/use external API; render to screen
- Create buttons for voting, and to return from the results (view 2), back to the home page (view 1)
- Increment counter of positive responses
- Hide page elements in view 2; render results of user choices
- CSS responsive breakpoint for 2 sizes

#### PostMVP  
- Create local results storage
- CSS animation
- Error handling

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|July 13| Project Pitch & Project Approval | Complete
|July 13| Core Application Structure (HTML, CSS, etc.) | Complete
|July 14| Pseudocode / actual code | Complete
|July 15| Initial Clickable Model  | Complete
|July 16| MVP | Complete
|July 17| Presentations | Incomplete

## Priority Matrix

https://res.cloudinary.com/dqlrz1dko/image/upload/v1594660718/Dad_or_Dud_Priority_jgz0sm.jpg

## Timeframes


| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| CSS General Styling | H | 3hrs| 8hrs | 8hrs |
| View Management| H | 3hrs| 4hrs | 4hrs |
| CSS Button Styling | H | 2.5hrs| 3.25hrs | 3.25hrs |
| HTML | H | .5hrs| 1hrs | 1hrs |
| Working with API | H | 1.25hrs| 1.5hrs | 1.5hrs |
| Pseudocode | H | 1.5hrs| 2.75hrs | 2.75hrs |
| Write Copy| H | 1hrs| .25hrs | .25hrs |
| Event Listeners | H | 1.50hrs| 1.5hrs | 1.5hrs |
| CSS Breakpoint | H | 2hrs| 2.1hrs | 2.1hrs |
| Testing | H | 2.5hrs| 2hrs | 2hrs |
| Sound Effects | H | 3hrs| 0hrs | 0hrs |
| CSS Animation| H | 3hrs| 2.75hrs | 2.75hrs |
| Error Handling | H | 3hrs| 2.75hrs | 2.75hrs |
| Total | H | 30.25hrs| 31.40hrs | 31.40hrs |

## Code Snippet
Create a collection of requests, store them in "Promise.all" so that when they are all returned, I can retrieve the jokes from them.

try {
    const arrOfRequests = [];
    for (let i = 0; i < 10; i++) {
      arrOfRequests[i] = axios.get(url, {
        headers: { "Accept": "application/json" }
      });
    } 

    return await Promise.all(arrOfRequests)



## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
