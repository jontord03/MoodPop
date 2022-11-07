// let fullStream = JSON.parse(songDatabase); 
// console.log(fullStream); 

// async test
// arbitrary first song
// runs onload 
// let isFirstElement = true; 
// const onClickSubmit = (isFirstElement) => {
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             if (isFirstElement) {
//                 let result = "<first song>"
//                 resolve(result); 
//             } else {
//                 reject(new Error("NULL")); 
//             }
//         }, 500); 
//     }); 
// }; 

// onClickSubmit(isFirstElement)
//     .then((result) => {
//         console.log(`Here is first song: ${result}`); 
//     })
//     .catch((error) => {
//         console.log(error); 
//     })
//     .finally(() => {
//         console.log("Happy Listening!"); 
//     })

let spinner = document.querySelector('.spinner');
const select = document.querySelectorAll("select");
// initially hide spinner on load
const hideLoader = () => {
    spinner.style.opacity = 0; 
}
// refresh function called on click of submit button
const refreshOnClick = () => {
    // add additional class to the spinner object 
    spinner.classList.add('spin');
    spinner.style.opacity = 1; 

    // promise function --> get song
    const retrieveData = (songIndex) => {
        // retrieve all song data 
        let fullStream = JSON.parse(songDatabase); // comment for algo test
        // uncomment for algo test: 
        rankSong(); 
        return new Promise((resolve, reject) => {
            setTimeout(() => { 
                if (songIndex >= 0 && songIndex < 40) {
                    let songName = fullStream[songIndex]['title']; 
                    resolve(songName);
                    spinner.style.opacity = 0; 
                } else {
                    reject(new Error("song DNE")); 
                }
            }, 3000);
        }); 
    }; 

    // write algorithm here (final output finalIndex):

    // create user object: 
        // mood (low -> high int scale)
        // personalityRank (int, int, int) --> 1 to 7
        // age (int) 
        // gender (if male, no female inspo, if female, no male inspo)
        // genre (with final options, select one of fav genre)
    // user fills out form and selects options
    let user = {
        "mood": 0, 
        "personalityRank": [], 
        "age": 0, 
        "gender": "", 
        "genre": [],
    }
    
    // PROCESS DATA 
    const processData = () => {
    // create song array (0...39)
        let songIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 
                    27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
        let fullStream = JSON.parse(songDatabase); 
    // for mood question: 
        // if great option --> add 10 to mood scale
        // if good option --> add 5 to mood scale
        // if fair option --> add 0 to mood scale
        // if poor option --> subtract 5 from mood scale
        // if horrible option --> subtract 10 from mood scale

    // PSEUDOCODE
    // for every select element
    // get option
    // if option great, add 10 to user mood scale --> etc.  
    for (option in select) 
        switch(select[option].value) {
            case "great": 
                user.mood += 10; 
                break; 
            case "good": 
                user.mood += 5; 
                break; 
            case "poor": 
                user.mood -= 5; 
                break; 
            case "horrible": 
                user.mood -= 10; 
                break; 
            default: 
                break; 
        }
    }
    // for age: 
        // add age to user object 
    // for gender: 
        // add gender to user object 
        // eliminate male songs if female
        // elimate female songs if male
    
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
                        for (songIndex in fullStream) {
                            if (fullStream[songIndex].type == "inspiration-woman") {
                                songIndices.splice(songIndex, 1); 
                            }
                        }
                        break; 
                    case "female": 
                        for (songIndex in fullStream) {
                            if (fullStream[songIndex].type == "inspiration-man") {
                                songIndices.splice(songIndex, 1); 
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
    
    // RANK SONG: 
    const rankSong = () => {
       processData();  
       let finalIndex = 0; 
    // essentially: get data from processData and rank songs based on data
    
    // make songIndices list 
    // create song object with proper indices {name:title, score:value, index:value}
    // for mood: 
        // = 0: 
            // leave only fair songs
        // < 0: 
            // eliminate all positive songs
            // add 5 points to fair songs
            // add 10 points to poor songs
            // add 20 points to horrible songs
        // > 0: 
            // eliminate all negative songs
            // add 5 points to fair songs
            // add 10 points to good songs
            // add 20 points to great songs

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
    
    let songIndices = []; 
    let songTypes = []; 
    let userMoodValue = user.mood; 
    for (song in fullStream) {
        let currentIndex = indexOf(fullStream[song]); 
        songIndices.push(currentIndex); 
    }
    for (songIndex in songIndices) {
        let songType = fullStream[songIndex].type; 
        songTypes.push(songType); 
    }
    switch (userMoodValue) {
        case 0: 
            for (typeIndex in songTypes) {
                let currentType = songTypes[typeIndex].type; 
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
                let currentType = songTypes[typeIndex].type; 
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
                let currentType = songTypes[typeIndex].type; 
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

    let songObjects = []; 
    for (index in songIndices) {
        currentStream = fullStream[i]; 
        let songObj = {"name": currentStream.name, "score": 0}; 
        songObjects.push(songObj); 
    }

    // for personality: 
        // add 10 points to respective songs

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

        // MOOD REFERENCE 
        // 1. great --> (inlove-happy)
        // 2. good --> (inspiration, inspiration-man, inspiration-woman)
        // 3. fair --> (crush, queer)
        // 5. poor --> (inlove-sad, struggle, depression)
        // 6. horrible --> (breakup-sad, breakup-mad)

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
                        let songObjectName = songObjects[objectIndex].name 
                        if (songObjectName == streamSongName) {
                            songObjects[objectIndex].score += 10; 
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
                        let songObjectName = songObjects[objectIndex].name 
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
                        let songObjectName = songObjects[objectIndex].name 
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
                        let songObjectName = songObjects[objectIndex].name 
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
                        let songObjectName = songObjects[objectIndex].name 
                        if (songObjectName == streamSongName) {
                            songObjects[objectIndex].score += 10; 
                        }
                    }
                }
            } 
            break; 
        default: 
            break; 
    }
    
    // for age: 
        // if middle aged: 
            // add 10 points to retro songs
        // if old: 
            // add 20 points to retro songs
    // for genre: 
        // add 10 points to songs with respective genres

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
                let songIndex; 
                let isRetro; 
                // get index of songName in the fullStream object
                for (song in fullStream) {
                    streamName = fullStream[song].title; 
                    if (streamName == songName) {
                        songIndex = song; 
                    }
                }
                if (fullStream[songIndex].retro == "yes") {
                    isRetro = true; 
                } else {
                    isRetro = false; 
                }
                if (isRetro) {
                    songObjects[item].score += 10; 
                }
            }
            break; 
        case "49": 
            for (item in songObjects) {
                let songName = songObjects[item].name; 
                let songIndex; 
                let isRetro; 
                // get index of songName in the fullStream object
                for (song in fullStream) {
                    streamName = fullStream[song].title; 
                    if (streamName == songName) {
                        songIndex = song; 
                    }
                }
                if (fullStream[songIndex].retro == "yes") {
                    isRetro = true; 
                } else {
                    isRetro = false; 
                }
                if (isRetro) {
                    songObjects[item].score += 15; 
                }
            }
            break; 
        case "65": 
            for (item in songObjects) {
                let songName = songObjects[item].name; 
                let songIndex; 
                let isRetro; 
                // get index of songName in the fullStream object
                for (song in fullStream) {
                    streamName = fullStream[song].title; 
                    if (streamName == songName) {
                        songIndex = song; 
                    }
                }
                if (fullStream[songIndex].retro == "yes") {
                    isRetro = true; 
                } else {
                    isRetro = false; 
                }
                if (isRetro) {
                    songObjects[item].score += 20; 
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
    for (song in songObjects) {
        let objectScore = songObjects[songObjectIndex].score; 
        songScores.push(objectScore); 
    }
    // chooses the first instance with the highest scores --> therefore highest as possible on charts
    // FUTURE: could randomly choose between the highest scores by splicing the array
    let indexOfMax = songScores.indexOf(Math.max(...songScores)); 
    let bestSongName = songObjects[indexOfMax].name; 
    for (streamSongIndex in fullStream) {
        let streamSongName = fullStream[streamSongIndex].title; 
        if (streamSongName == bestSongName) {
            finalIndex = streamSongIndex; 
        }
    }

    // SONG CLASSIFICATION REFERENCE

    // Classified by mood: 
    // 1. great --> (inlove-happy)
    // 2. good --> (inspiration, inspiration-man, inspiration-woman)
    // 3. fair --> (crush, queer)
    // 5. poor --> (inlove-sad, struggle, depression)
    // 6. horrible --> (breakup-sad, breakup-mad)

    // Classified by personality: 
    // 1. Loving --> (inlove-happy)
    // 2. Creative --> (inspiration, inspiration-man, inspiration-woman)
    // 3. Chill --> (crush, inlove-happy, inlove-sad)
    // 4. Conflicted --> (queer, struggle)
    // 5. Depressed --> (despression)
    // 6. Struggling --> (struggle)
    // 7. Social --> (crush, inlove-happy, inspiration, inspiration-man, inspiration-woman)

    // Classified by age: 
    // 1. not retro
    // 2. retro

    // Classified by gender: 
    // 1. male (elim female songs)
    // 2. female (elim male songs)
    // 3. other (add points to queer songs) 

    // Classified by genre: 
    // 1. hiphop
    // 2. r&b
    // 3. indie
    // 4. altrock
    // 5. funk
    // 6. poprock
    // 7. country
    // 8. dance pop

    // Classified by explicit: 
    // 1. great
    // 2. good
    // 3. neutral
    // 4. poor
    // 5. horrible
    return finalIndex; 
    }
    // promise resolve --> display song
    retrieveData(finalIndex)
        .then((songName) => {
            spinner.classList.remove('spin');
            console.log(`Listen to: ${songName}`); 
        })
        .catch((error) => {
            console.log(`Error: ${error}`); 
        }) 
        .finally(() => {
            console.log("Happy listening!"); 
        })
}


// option reference test 
// let option = document.querySelector("option")

// if (option.value == "one") {
//     console.log("test"); 
// }


























