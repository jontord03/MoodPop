const songDatabase = 
`[
    {
        "title": "Vegas",
        "artist": "Doja Cat",
        "label": "Kemosabe/RCA",
        "type": "breakup-mad",
        "genre": "hiphop",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "I Like You",
        "artist": "Post Malone",
        "label": "Mercury/RCA-Republic",
        "type": "inlove-happy",
        "genre": "r&b",
        "retro": "no",
        "sexual": "yes"
    },
    {
        "title": "Bad Habit",
        "artist": "Steve Lacy",
        "label": "L-M/RCA",
        "type": "breakup-sad",
        "genre": "r&b",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "As It Was",
        "artist": "Harry Styles",
        "label": "Columbia",
        "type": "struggle",
        "genre": "indie",
        "retro": "yes",
        "sexual": "no"
    },
    {
        "title": "I Ain't Worried",
        "artist": "OneRepublic",
        "label": "Mosley/Interscope",
        "type": "inspiration-man",
        "genre": "altrock",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Sunroof ",
        "artist": "Nicky Youre",
        "label": "Columbia",
        "type": "inlove-happy",
        "genre": "bedroom",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "About Damn Time",
        "artist": "Lizzo",
        "label": "Nice Life/Atlantic",
        "type": "inspiration-woman",
        "genre": "r&b",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Unholy",
        "artist": "Sam Smith & Kim Petras",
        "label": "Capitol",
        "type": "queer",
        "genre": "hiphop",
        "retro": "no",
        "sexual": "yes"
    },
    {
        "title": "I'm Good (Blue)",
        "artist": "David Guetta & Bebe Rexha",
        "label": "Parlophone UK",
        "type": "inspiration-woman",
        "genre": "dancepop",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Music For A Sushi Restaurant",
        "artist": "Harry Styles",
        "label": "Columbia",
        "type": "inlove-happy",
        "genre": "funk",
        "retro": "yes",
        "sexual": "no"
    },
    {
        "title": "Super Freaky Girl",
        "artist": "Nicki Minaj",
        "label": "Republic",
        "type": "inspiration-woman",
        "genre": "hiphop",
        "retro": "yes",
        "sexual": "yes"
    },
    {
        "title": "Hold Me Closer",
        "artist": "Elton John & Britney Spears",
        "label": "Mercury/Interscope",
        "type": "struggle",
        "genre": "funk",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Die For You",
        "artist": "The Weeknd",
        "label": "XO",
        "type": "inlove-sad",
        "genre": "r&b",
        "retro": "yes",
        "sexual": "no"
    },
    {
        "title": "Unstoppable",
        "artist": "SIA",
        "label": "RCA",
        "type": "inspiration-woman",
        "genre": "dancepop",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Until I Found You",
        "artist": "Stephen Sanchez",
        "label": "Mercury/Republic ",
        "type": "inlove-happy",
        "genre": "indie",
        "retro": "yes",
        "sexual": "no"
    },
    {
        "title": "Star Walkin (League of Legends Worlds Anthem) ",
        "artist": "Lil Nas X",
        "label": "Columbia",
        "type": "inspiration",
        "genre": "hiphop",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Victoria's Secret",
        "artist": "Jax",
        "label": "Atlantic",
        "type": "struggle",
        "genre": "poprock",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "2 Be Loved (Am I Ready) ",
        "artist": "Lizzo",
        "label": "Nice Life/Atlantic",
        "type": "breakup-sad",
        "genre": "r&b",
        "retro": "yes",
        "sexual": "no"
    },
    {
        "title": "Anti-Hero",
        "artist": "Taylor Swift ",
        "label": "Republic",
        "type": "depression",
        "genre": "poprock",
        "retro": "yes",
        "sexual": "no"
    },
    {
        "title": "Betty (Get Money)",
        "artist": "Yung Gravy",
        "label": "Republic",
        "type": "inspiration-man",
        "genre": "hiphop",
        "retro": "yes",
        "sexual": "yes"
    },
    {
        "title": "Wasted On You",
        "artist": "Morgan Wallen",
        "label": "Big Loud/Republic",
        "type": "breakup-sad",
        "genre": "country",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "SNAP",
        "artist": "Rosa Linn",
        "label": "Columbia",
        "type": "breakup-sad",
        "genre": "indie",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Forget Me",
        "artist": "Lewis Capaldi",
        "label": "Capitol",
        "type": "breakup-sad",
        "genre": "indie",
        "retro": "yes",
        "sexual": "no"
    },
    {
        "title": "Cuff It",
        "artist": "Beyonce",
        "label": "Parkwood/Columbia",
        "type": "inlove-happy",
        "genre": "funk",
        "retro": "yes",
        "sexual": "yes"
    },
    {
        "title": "World's Smallest Violin",
        "artist": "AJR",
        "label": "AJR Productions/BMG",
        "type": "struggle",
        "genre": "poprock",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Lift Me Up",
        "artist": "Rihanna",
        "label": "Roc Nation/Def Jam",
        "type": "struggle",
        "genre": "r&b",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Billie Eilish",
        "artist": "Armani White",
        "label": "Legendbound/Def Jam",
        "type": "inspiration-man",
        "genre": "hiphop",
        "retro": "no",
        "sexual": "yes"
    },
    {
        "title": "golden hour",
        "artist": "JVKE",
        "label": "JVKE/AWAL",
        "type": "inlove-sad",
        "genre": "indie",
        "retro": "yes",
        "sexual": "no"
    },
    {
        "title": "uh oh",
        "artist": "Tate McRae",
        "label": "RCA",
        "type": "inlove-sad",
        "genre": "poprock",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Staying Alive",
        "artist": "DJ Khaled ft. Drake/Lil Baby",
        "label": "We The Best/Capitol-Epic",
        "type": "inspiration-man",
        "genre": "hiphop",
        "retro": "yes",
        "sexual": "yes"
    },
    {
        "title": "Glimpse Of Us",
        "artist": "Joji",
        "label": "88Rising/Warner",
        "type": "inlove-sad",
        "genre": "indie",
        "retro": "yes",
        "sexual": "no"
    },
    {
        "title": "Running Up That Hill (A Deal with God)",
        "artist": "Kate Bush",
        "label": "EMI",
        "type": "inlove-sad",
        "genre": "poprock",
        "retro": "yes",
        "sexual": "no"
    },
    {
        "title": "I Remember",
        "artist": "Cheat Codes/Russell Dickerson",
        "label": "Cheat Codes LLC/further.",
        "type": "breakup-sad",
        "genre": "dancepop",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Numb",
        "artist": "Marshmella X Khalid",
        "label": "Joytime Collective/RCA",
        "type": "crush",
        "genre": "funk",
        "retro": "yes",
        "sexual": "no"
    },
    {
        "title": "MANIAC  ",
        "artist": "Macklemore",
        "label": "Bendo/Warner",
        "type": "inlove-happy",
        "genre": "hiphop",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Under The Influence",
        "artist": "Chris Brown",
        "label": "Chris Brown Ent./RCA",
        "type": "inspiration-man",
        "genre": "r&b",
        "retro": "no",
        "sexual": "yes"
    },
    {
        "title": "Jimmy Cooks ",
        "artist": "Drake",
        "label": "OVO/Republic",
        "type": "inspiration-man",
        "genre": "hiphop",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Pink Venom",
        "artist": "Blackpink",
        "label": "YG Ent./Interscope",
        "type": "inspiration-woman",
        "genre": "dancepop",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Calm Down",
        "artist": "Rema & Selena Gomez",
        "label": "Mavin/Jonzing/Interscope",
        "type": "crush",
        "genre": "poprock",
        "retro": "no",
        "sexual": "no"
    },
    {
        "title": "Evergreen",
        "artist": "Omar Apollo",
        "label": "Warner",
        "type": "queer",
        "genre": "r&b",
        "retro": "no",
        "sexual": "no"
    }
]`; 