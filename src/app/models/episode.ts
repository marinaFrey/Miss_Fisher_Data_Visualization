
export interface Episode {
    id: number;                             // number of episode if there were only one season
    season: number;                         // season the episode was aired
    episode: number;                         // number of the episode in the season
    name: string;                           // episode name as seen on the show
    murders: Murder[];                      // the murders that happened during the episode
    date: EpisodeDate;                      // estimated date of the episode
    totalNumberOfScenes: number;            // total number of scenes in the episode, excluding 'blue scenes'

    scenesPerCharacter?: Information[];      // number of scenes each main character appears
    nameCalling?: Information[];             // number of times jack and phryne call each other and the names they used
    outfits?: Information[];                 // number and types of outfits Phryne and Jack wear
    neckties?: Information[];                // neckties Jack wears, in order
    hats?: Information[];                    // number of scenes Phryne and Jack use hats
    guns?: Information[];                    // number of scenes Phryne and Jack's guns appear on screen
    jealousy?: Information[];                // number of times Jack or Phryne are jealous of each
    proximity?: Information[];               // number of times they were very close, touching or had long eye contact
    flirting?: Information[];                // number of times flirting and boudoir scenes occur
    talking?: Information[];                 // number of scenes where they are talking alone or sharing the same scene with other characters
    phryneInPoliceStation?: Information[];   // number of scenes where Phryne is in the police station

    jackInPhrynesHome?: Information;        // number of scenes where jack is in Phryne's home
    stealthyScenes?: Information;            // number of scenes Phryne is trying to be stealthy
    drinking?: Information;                  // number of scenes where some kind of drink (usually alcohol) is being consumed
    changesOfOutfit?: Information;           // number of times Phryne changed her outfit during the episode.
                                            // Still counts even if she repeats the same outfit
    phrynesHouseScenes?: Information;        // number of scenes outside or inside Phryne's house
    policeStationScenes?: Information;       // number of scenes outside or inside the police station
    locations?: Information;                 // number of distinct locations in the episode (not sets)
    changesOfLocation?: Information;         // number of times they change locations between scenes
}

export interface Murder {
    type: string;                   // how the victim was killed (broad category)
    victimSex: string;              // if the victim was male or female
    murdererSex: string;            // if the murderer was male or female
    relationshipWithVictim: string; // how close murderer and victim were
    comments: string;               // comments on how the murder was done
}

export interface EpisodeDate {
    date: Date;                     // month and year
    position: number;               // position in the month (early (0), mid (1), late (2), end (3))
    label: string;                  // clarifications on the date
}

export interface Information {
    label: string;                  // definition of the information
    value: number;                  // number of times the information occurs per episode
    character: string;              // character the information is about
}
