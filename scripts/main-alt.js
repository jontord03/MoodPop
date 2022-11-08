let fullStream = JSON.parse(songDatabase);

let spinner = document.querySelector('.spinner');
const select = document.querySelectorAll("select");

const finalHead = document.querySelector("#song-parent");
const finalPara = document.querySelector("#final-message");
finalHead.style.opacity = 0; 
finalPara.style.opacity = 0; 

const paraResult = document.createElement("p"); 
paraResult.style.fontSize = "calc(2rem + 2vw)";            
finalHead.appendChild(paraResult); 
paraResult.style.opacity = 0; 
// initially hide spinner on load
const hideLoader = () => {
    spinner.style.opacity = 0; 
}

let user = {
    "mood": 0, 
    "age": 0, 
    "gender": "", 
}
let songObjects = []; 
let songIndices = []; 
let songTypes = []; 

// let finalIndex; 

// PROCESS DATA 
const processData = () => {
    // create song array (0...39)
    let songIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 
                27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];

    // PSEUDOCODE
    // for every select element
    // get option
    // if option great, add 10 to user mood scale --> etc.  
    for (option in select) {
        switch(select[option].value) {
            case "great": 
                user.mood += 20; 
                break; 
            case "good": 
                user.mood += 10; 
                break; 
            case "poor": 
                user.mood -= 10; 
                break; 
            case "horrible": 
                user.mood -= 20; 
                break; 
            default: 
                break; 
        }
    }
    
    // PSEUDOCODE
        // go to option with age, add age to user object
        // go to object with gender, add gender to user object
        // delete inspiration-woman songs if male
        // delete inspiration-man songs if female
    for (index in select) {
        switch(select[index].id) {
            case "age": 
                user.age = Number(select[index].value); 
                break; 
            case "gender": 
                user.gender = select[index].value; 
                switch(select[index].id) {
                    case "male": 
                        for (fullIndex in fullStream) {
                            if (fullStream[fullIndex].type == "inspiration-woman") {
                                songIndices.splice(fullIndex, 1); 
                            }
                        }
                        break; 
                    case "female": 
                        for (fullIndex in fullStream) {
                            if (fullStream[fullIndex].type == "inspiration-man") {
                                songIndices.splice(fullIndex, 1); 
                            }
                        }
                        break; 
                    default: 
                        break; 
                }
                break; 
            default: 
                break; 
        }
    }
}
    
// RANK SONG: 
const rankSong = () => {
    let finalIndex; 
    processData();  
// essentially: get data from processData and rank songs based on data

// PSEUDOCODE
// songIndices = []
// if user mood == 0: 
    // for each song in fullStream: 
        // get song current index
        // make a list of songs to delete based on mood
        // if value is (see mood key), delete from songIndices
// if user mood < 0: 
    // for each song in fullStream: 
        // get song current index
        // make a list of songs to delete based on mood
        // if value is (see mood key), delete from songIndices
// ... 
// songNames = []
// songObjects = []
// for i in songIndices: 
    // get ith elem from fullStream
    // create songObj with name and score (0)
    // add songObj to songObjects

    let userMoodValue = user.mood; 
    for (song in fullStream) {
        songIndices.push(song); 
    }
    for (index in songIndices) {
        let songType = fullStream[index].type; 
        songTypes.push(songType); 
    }
    switch (userMoodValue) {
        case 0: 
            for (typeIndex in songTypes) {
                let currentType = songTypes[typeIndex]; 
                switch (currentType) {
                    case "inlove-happy": 
                        // removes element at typeIndex from songIndices
                        songIndices.splice(typeIndex, 1); 
                        break; 
                    case "breakup-sad": 
                        songIndices.splice(typeIndex, 1); 
                        break; 
                    case "depression": 
                        songIndices.splice(typeIndex, 1); 
                        break; 
                    default: 
                        break; 
                }
            }
            break; 
        case (userMoodValue < 0): 
            for (typeIndex in songTypes) {
                let currentType = songTypes[typeIndex]; 
                switch (currentType) {
                    case "inlove-happy": 
                        // removes element at typeIndex from songIndices
                        songIndices.splice(typeIndex, 1); 
                        break; 
                    case "inspiration": 
                        songIndices.splice(typeIndex, 1); 
                        break; 
                    case "inspiration-man": 
                        songIndices.splice(typeIndex, 1); 
                        break; 
                    case "inspiration-woman": 
                        songIndices.splice(typeIndex, 1); 
                        break; 
                    default: 
                        break; 
                }
            }
            break; 
        case (userMoodValue > 0): 
            for (typeIndex in songTypes) {
                let currentType = songTypes[typeIndex]; 
                switch (currentType) {
                    case "breakup-sad": 
                        // removes element at typeIndex from songIndices
                        songIndices.splice(typeIndex, 1); 
                        break; 
                    case "breakup-mad": 
                        songIndices.splice(typeIndex, 1); 
                        break; 
                    case "depression": 
                        songIndices.splice(typeIndex, 1); 
                        break; 
                    default: 
                        break; 
                }
            }
            break; 
        default: 
            break; 
    }

    for (streamNameIndex in songIndices) {
        let currentStreamName = fullStream[streamNameIndex].title; 
        let songObj = {"name": currentStreamName, "score": 0}; 
        songObjects.push(songObj); 
    }

    // PSEUDOCODE
    // access specifically personality question (5)
    // loving --> document...option_one ID 
    // ... 
    // create list of different options
    // for each item of songObjects list: 
        // get index of song --> currentSongIndex
        // get type from fullStream[currentSongIndex]
        // if id of option == loving: 
            // add 10 points to song in songObj in songObjects 
        // etc. 

    let personalityQuestion = document.getElementById("answer-5"); 
    let personalityType = personalityQuestion.value;
    switch (personalityType) {

        case "great":
            // add 10 points to loving-type songs
            // loop through fullStream object 
            for (fullIndex in fullStream) {
                // get type of each fullStream object 
                let currentStreamType = fullStream[fullIndex].type; 
                // get name of each fullStream object
                let streamSongName = fullStream[fullIndex].title; 
                // if the type of fullStream object is inlove-happy: 
                if (currentStreamType == "inlove-happy") {
                    // Created a workaround due to the fact that certain indices already deleted from songObjects
                    // PSEUDOCODE: 
                    // loop through the songObjects
                    // check if the songObject name is streamSongName: 
                        // add 10 points to songObject
                    for (objectIndex in songObjects) {
                        let songObjectName = songObjects[objectIndex].name; 
                        if (songObjectName == streamSongName) {
                            songObjects[objectIndex].score += 20; 
                        }
                    }
                }
            } 
            break; 
        case "good":
            for (fullIndex in fullStream) {
                let currentStreamType = fullStream[fullIndex].type; 
                let streamSongName = fullStream[fullIndex].title; 
                if (currentStreamType == "inspiration" || 
                    currentStreamType == "inspiration-man" || 
                    currentStreamType == "inspiration-woman") {
                    for (objectIndex in songObjects) {
                        let songObjectName = songObjects[objectIndex].name;  
                        if (songObjectName == streamSongName) {
                            songObjects[objectIndex].score += 10; 
                        }
                    }
                }
            } 
            break;
        case "fair": 
            for (fullIndex in fullStream) {
                let currentStreamType = fullStream[fullIndex].type; 
                let streamSongName = fullStream[fullIndex].title; 
                if (currentStreamType == "crush" || 
                    currentStreamType == "queer") {
                    for (objectIndex in songObjects) {
                        let songObjectName = songObjects[objectIndex].name; 
                        if (songObjectName == streamSongName) {
                            songObjects[objectIndex].score += 10; 
                        }
                    }
                }
            }
            break; 
        case "poor":
            for (fullIndex in fullStream) {
                let currentStreamType = fullStream[fullIndex].type; 
                let streamSongName = fullStream[fullIndex].title; 
                if (currentStreamType == "inlove-sad" || 
                    currentStreamType == "struggle" || 
                    currentStreamType == "depression") {
                    for (objectIndex in songObjects) {
                        let songObjectName = songObjects[objectIndex].name;  
                        if (songObjectName == streamSongName) {
                            songObjects[objectIndex].score += 10; 
                        }
                    }
                }
            } 
            break; 
        case "horrible":
            for (fullIndex in fullStream) {
                let currentStreamType = fullStream[fullIndex].type; 
                let streamSongName = fullStream[fullIndex].title; 
                if (currentStreamType == "breakup-sad" || 
                    currentStreamType == "breakup-mad") {
                    for (objectIndex in songObjects) {
                        let songObjectName = songObjects[objectIndex].name;  
                        if (songObjectName == streamSongName) {
                            songObjects[objectIndex].score += 20; 
                        }
                    }
                }
            } 
            break; 
        default: 
            break; 
    }

    // PSEUDOCODE
    // access specifically age question 
    // for each item in songObjects list: 
        // get index of song --> currentSongIndex
        // get retro value from fullStream[currentSongIndex]
        // let isRetro = true/false
        // if middle aged: 
            // add 10 points to song in songObj in songObjects
        // if old: 
            // add 20 points to song in songObj in songObjects

    let ageQuestion = document.getElementById("age"); 
    let ageSelection = ageQuestion.value; 
    switch (ageSelection) {
        case "37": 
            for (item in songObjects) {
                let songName = songObjects[item].name; 
                let objectIndex; 
                // get index of songName in the fullStream object
                for (song in fullStream) {
                    let streamName = fullStream[song].title; 
                    if (streamName == songName) {
                        objectIndex = song; 
                        if (fullStream[objectIndex].retro == "yes") {
                            songObjects[item].score += 10; 
                        }
                    }
                }
            }
            break; 
        case "49": 
            for (item in songObjects) {
                let songName = songObjects[item].name; 
                let objectIndex; 
                // get index of songName in the fullStream object
                for (song in fullStream) {
                    let streamName = fullStream[song].title; 
                    if (streamName == songName) {
                        objectIndex = song; 
                        if (fullStream[objectIndex].retro == "yes") {
                            songObjects[item].score += 20; 
                        }
                    }
                }
            }
            break; 
        case "65": 
            for (item in songObjects) {
                let songName = songObjects[item].name; 
                let objectIndex; 
                // get index of songName in the fullStream object
                for (song in fullStream) {
                    let streamName = fullStream[song].title; 
                    if (streamName == songName) {
                        objectIndex = song; 
                        if (fullStream[objectIndex].retro == "yes") {
                            songObjects[item].score += 30; 
                        }
                    }
                }
            }
            break; 
    }

    // PSEUDOCODE: generate finalIndex
    // what we have: 
    // songObjects = [song object --> {name:title, score:value},...]
    // OBJECTIVE: get the highest song score. If multiple song scores, pick randomly
    // songScores = [] 
    // for i in songObjects: 
        // get score and push to songScores
    // get index of max of songScores
    // return songObjects.name with that index 
    // completeSongList = []
    // for i in fullStream: 
        // get name of each song
        // push name to completeSongList
    // get index of songObjects.name in fullStream --> finalIndex

    let songScores = []; 
    console.log(songScores); 
    for (song in songObjects) {
        let objectScore = songObjects[song].score; 
        songScores.push(objectScore); 
    }
    // chooses the first instance with the highest scores --> therefore highest as possible on charts
    // FUTURE: could randomly choose between the highest scores by splicing the array
    
    // let indexOfMax = songScores.indexOf(Math.max(...songScores)); 

    const getHighestScores = (scoreList) => {
        let highestScoresList = []; 
        for (elemIndex in scoreList) {
            let highestScore = Math.max(...scoreList); 
            if (scoreList[elemIndex] == highestScore) {
                highestScoresList.push(elemIndex); 
            }
        }
        let randSongInd = highestScoresList[Math.floor(Math.random() * highestScoresList.length)]; 
        return randSongInd; 
    }
    console.log(getHighestScores); 

    let bestSongName = songObjects[getHighestScores(songScores)].name;
    for (streamIndex in fullStream) { 
        if (fullStream[streamIndex].title == bestSongName) {
            finalIndex = Number(streamIndex); 
        }
    } 
    return finalIndex; 
}

// refresh function called on click of submit button
const songParent = document.getElementById("song-parent"); 

const refreshOnClick = () => { 
    // add additional class to the spinner object 
    spinner.classList.add('spin');
    spinner.style.opacity = 1; 
    // promise function --> get song
    const retrieveData = (songIndex) => {
        // retrieve all song data  
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                if (songIndex >= 0 && songIndex < 40) {
                    songAttributes = []; 
                    let songName = fullStream[songIndex].title; 
                    let songArtist = fullStream[songIndex].artist; 
                    songAttributes.push(songName); 
                    songAttributes.push(songArtist); 
                    resolve(songAttributes);
                    spinner.style.opacity = 0; 
                } else {
                    reject(new Error("song DNE")); 
                }
            }, 3000);
        }); 
    }; 
    
    // promise resolve --> display song
    retrieveData(rankSong())
        .then((songAttributes) => {
            spinner.classList.remove("spin");
            paraResult.innerText = ""; 
            finalHead.style.opacity = 1; 
            finalPara.style.opacity = 1; 
            paraResult.innerText = `${songAttributes[0]} by ${songAttributes[1]}`; 
            paraResult.style.opacity = 1; 
            songIndices = []; 
        })
        .catch((error) => {
            console.log(`${error}`); 
        }) 
        .finally(() => {
            console.log("Happy listening!"); 
        })
}

























