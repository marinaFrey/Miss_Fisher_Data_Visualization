import { Episode, Murder, EpisodeDate, Information } from './models/episode';
/* tslint:disable */
export const EPISODES: Episode[] = [
    {
        id: 0,
        season: 1,
        episode: 1,
        name: 'Cocaine Blues',
        murders: [
            {
                type: 'poison',
                victimSex: 'male',
                murdererSex: 'female',
                relationshipWithVictim: 'lover',
                comments: ''
            }
        ],
        date: {
            date: new Date(1928, 6),
            position: 1,
            label: 'likely mid to late July 1928'
        },
        totalNumberOfScenes: 45,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 36,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 7,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 17,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 8,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 5,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 13,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 8,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 0,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 0,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 7,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },

            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 2,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 12,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Rhombus Filled Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 8,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 2,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [
            {
                label: 'Standing very close',
                value: 0,
                character: 'Phryne & Jack'
            },
            {
                label: 'Long eye contact',
                value: 0,
                character: 'Phryne & Jack'
            },
            {
                label: 'Touching',
                value: 1,
                character: 'Phryne & Jack'
            }
        ],
        flirting: null,
        talking: [
            {
                label: 'Screen time with Phryne and Jack \'alone\'',
                value: 0,
                character: 'Phryne & Jack'
            },
            {
                label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')',
                value: 5,
                character: 'Phryne & Jack'
            }
        ],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 1,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 0,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 2,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 4,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 13,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 0,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 3,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 13,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 31,
            character: 'none'
        }

    },
    {
        id: 1,
        season: 1,
        episode: 2,
        name: 'Murder on the Ballarat Train',
        murders: [
            {
                type: 'suffocation',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'relative',
                comments: ''
            }
        ],
        date: {
            date: new Date(1928, 7),
            position: 0,
            label: 'early August 1928 (around 02-Aug)'
        },
        totalNumberOfScenes: 51,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 38,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 18,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 17,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 9,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 11,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 15,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 10,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 6,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 10,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 13,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 8,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Rhombus Filled Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 13,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 2,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 1, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 1, character: 'Phryne & Jack' }, { label: 'Touching', value: 1, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 6, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 7, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 1,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 4,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 0,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 1,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 9,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 16,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 3,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 8,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 17,
            character: 'none'
        }

    },
    {
        id: 2,
        season: 1,
        episode: 3,
        name: 'The Green Mill Murder',
        murders: [
            {
                type: 'perfuration',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'acquaintance',
                comments: 'dart thrown by device attached to music instrument'
            }
        ],
        date: {
            date: new Date(1928, 7),
            position: 1,
            label: 'Mid-August 1928 (around 11-Aug)'
        },
        totalNumberOfScenes: 47,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 37,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 16,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 9,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 15,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 4,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 4,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 0,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 5,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 7,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 10,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 12,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 2,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 2, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 1, character: 'Phryne & Jack' }, { label: 'Touching', value: 0, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 6, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 5, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 3,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 0,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 0,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 3,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 10,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 10,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 10,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 9,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 25,
            character: 'none'
        }

    },
    {
        id: 3,
        season: 1,
        episode: 4,
        name: 'Death at Victoria Dock',
        murders: [
            {
                type: 'gunshot',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'colleague',
                comments: ''
            }
        ],
        date: {
            date: new Date(1928, 7),
            position: 3,
            label: 'End of August 1928 (around 26-Aug)'
        },
        totalNumberOfScenes: 47,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 39,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 14,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 14,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 13,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 2,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 4,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 5,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 5,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 2,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 7,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 9,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 23,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 9,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 1, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 0, character: 'Phryne & Jack' }, { label: 'Touching', value: 1, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 4, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 6, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 1,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 3,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 1,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 3,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 14,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 15,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 1,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 12,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 30,
            character: 'none'
        }

    },
    {
        id: 4,
        season: 1,
        episode: 5,
        name: 'Raisins and Almonds',
        murders: [
            {
                type: 'poison',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'friend',
                comments: ''
            }
        ],
        date: {
            date: new Date(1928, 8),
            position: 0,
            label: 'early September 1928 (around 04-Sep)'
        },
        totalNumberOfScenes: 44,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 32,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 13,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 9,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 8,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 7,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 2,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 4,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 2,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 6,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 8,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 19,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 4,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 4, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 2, character: 'Phryne & Jack' }, { label: 'Touching', value: 1, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 5, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 6, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 4,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 1,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 1,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 3,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 12,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 13,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 10,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 10,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 27,
            character: 'none'
        }

    },
    {
        id: 5,
        season: 1,
        episode: 6,
        name: 'Ruddy Gore',
        murders: [
            {
                type: 'poison',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'colleague',
                comments: ''
            },
            {
                type: 'concussion',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'colleague',
                comments: ''
            }
        ],
        date: {
            date: new Date(1928, 8),
            position: 1,
            label: 'Mid-September 1928 (around 16-Sep)'
        },
        totalNumberOfScenes: 50,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 45,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 23,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 20,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 6,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 0,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 2,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 1,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 3,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 2,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 5,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 9,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Black Bowtie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 20,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 3,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 4, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 3, character: 'Phryne & Jack' }, { label: 'Touching', value: 5, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 8, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 14, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 1,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 1,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 1,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 2,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 12,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 8,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 5,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 5,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 17,
            character: 'none'
        }

    },
    {
        id: 6,
        season: 1,
        episode: 7,
        name: 'Murder in Montparnasse',
        murders: [
            {
                type: 'ran over',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'acquaintance',
                comments: ''
            },
            {
                type: 'burned',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'acquaintance',
                comments: ''
            }
        ],
        date: {
            date: new Date(1928, 9),
            position: 0,
            label: 'early October 1928 (around 06-Oct)'
        },
        totalNumberOfScenes: 47,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 33,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 18,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 6,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 13,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 19,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 10,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 1,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 5,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 2,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 7,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 3,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 14,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 7,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 1, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 2, character: 'Phryne & Jack' }, { label: 'Touching', value: 4, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 4, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 10, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 2,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 3,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 1,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 2,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 10,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 16,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 6,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 9,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 31,
            character: 'none'
        }

    }, {
        id: 7,
        season: 1,
        episode: 8,
        name: 'Away with the Fairies',
        murders: [
            {
                type: 'poison',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'colleague',
                comments: ''
            },
            {
                type: 'fall',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'colleague',
                comments: ''
            }
        ],
        date: {
            date: new Date(1928, 9),
            position: 1,
            label: 'early to Mid-October 1928'
        },
        totalNumberOfScenes: 47,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 39,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 21,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 11,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 11,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 0,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 6,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 1,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 3,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 7,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 9,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 21,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 6,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 4, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 3, character: 'Phryne & Jack' }, { label: 'Touching', value: 2, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 11, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 6, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 2,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 4,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 2,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 0,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 11,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 15,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 5,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 6,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 28,
            character: 'none'
        }

    },
    {
        id: 8,
        season: 1,
        episode: 9,
        name: 'Queen of the Flowers',
        murders: [
            {
                type: 'drowning',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'acquaintance',
                comments: ''
            }
        ],
        date: {
            date: new Date(1928, 10),
            position: 0,
            label: 'early November 1928 (around 05-Nov)'
        },
        totalNumberOfScenes: 45,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 31,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 23,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 14,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 19,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 0,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 17,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 5,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 1,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 2,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 7,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 5,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Rhombus Filled Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 17,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 8,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 1, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 1, character: 'Phryne & Jack' }, { label: 'Touching', value: 2, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 4, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 15, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 1,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 7,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 0,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 2,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 7,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 17,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 7,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 7,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 34,
            character: 'none'
        }

    },
    {
        id: 9,
        season: 1,
        episode: 10,
        name: 'Death by Miss Adventure',
        murders: [
            {
                type: 'crushed',
                victimSex: 'female',
                murdererSex: 'female',
                relationshipWithVictim: 'lover',
                comments: ''
            },
            {
                type: 'poison',
                victimSex: 'male',
                murdererSex: 'female',
                relationshipWithVictim: 'colleague',
                comments: ''
            }
        ],
        date: {
            date: new Date(1928, 10),
            position: 1,
            label: 'Mid-November 1928 (around 14-Nov)'
        },
        totalNumberOfScenes: 50,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 33,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 19,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 15,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 12,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 3,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 3,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 11,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 6,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 0,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 4,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 2,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 7,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 20,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 6,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 0, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 2, character: 'Phryne & Jack' }, { label: 'Touching', value: 0, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 6, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 10, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 4,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 1,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 1,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 2,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 7,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 12,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 8,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 6,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 25,
            character: 'none'
        }

    },
    {
        id: 10,
        season: 1,
        episode: 11,
        name: 'Blood and Circuses',
        murders: [
            {
                type: 'perfuration',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'acquaintance',
                comments: ''
            }
        ],
        date: {
            date: new Date(1928, 11),
            position: 0,
            label: 'Early December 1928 (around 04-Dec)'
        },
        totalNumberOfScenes: 51,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 35,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 19,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 5,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 14,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 0,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 3,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 4,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 1,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 4,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 7,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 2,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 4,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 1, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 1, character: 'Phryne & Jack' }, { label: 'Touching', value: 0, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 5, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 5, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 3,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 1,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 1,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 1,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 9,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 9,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 16,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 6,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 28,
            character: 'none'
        }


    },
    {
        id: 11,
        season: 1,
        episode: 12,
        name: 'Murder in the Dark',
        murders: [
            {
                type: 'suffocation',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'none',
                comments: ''
            }
        ],
        date: {
            date: new Date(1928, 11),
            position: 1,
            label: 'Mid-December 1928 (around 17-Dec)'
        },
        totalNumberOfScenes: 50,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 33,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 20,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 13,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 15,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 14,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 10,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 12,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 8,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 1,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 5,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 3,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Rhombus Filled Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 15,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 2,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 2, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 4, character: 'Phryne & Jack' }, { label: 'Touching', value: 2, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 7, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 10, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 2,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 2,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 1,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 1,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 4,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 9,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 6,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 4,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 17,
            character: 'none'
        }

    },
    {
        id: 12,
        season: 1,
        episode: 13,
        name: 'King Memses\' Curse',
        murders: [
            {
                type: 'lobotomy',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'friend',
                comments: ''
            },
            {
                type: 'suffocation',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'ex-lover',
                comments: ''
            }
        ],
        date: {
            date: new Date(1928, 11),
            position: 2,
            label: 'Mid to late December 1928 (around 19-Dec)'
        },
        totalNumberOfScenes: 47,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 33,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 22,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 20,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 16,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 1,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 8,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 9,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 1,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 4,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 1,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 4,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 3,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 8,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 14,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 0,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 3, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 3, character: 'Phryne & Jack' }, { label: 'Touching', value: 7, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 5, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 8, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 3,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 3,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 3,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 2,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 4,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 8,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 10,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 7,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 26,
            character: 'none'
        }

    },
    {
        id: 13,
        season: 2,
        episode: 1,
        name: 'Murder Most Scandalous',
        murders: [
            {
                type: 'suffocation',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'acquaintance',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 0),
            position: 1,
            label: 'Mid to late January 1929 (around 20-Jan)'
        },
        totalNumberOfScenes: 50,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 31,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 32,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 11,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 21,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 2,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 2,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 4,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 1,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 5,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 10,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 3,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 21,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 8,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 4, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 3, character: 'Phryne & Jack' }, { label: 'Touching', value: 1, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 8, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 10, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 1,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 1,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 2,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 6,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 12,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 9,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 11,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 7,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 32,
            character: 'none'
        }

    },
    {
        id: 14,
        season: 2,
        episode: 2,
        name: 'Death Comes Knocking',
        murders: [
            {
                type: 'perfuration',
                victimSex: 'male',
                murdererSex: 'female',
                relationshipWithVictim: 'none',
                comments: ''
            },
            {
                type: 'poison',
                victimSex: 'male',
                murdererSex: 'female',
                relationshipWithVictim: 'acquaintance',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 2),
            position: 0,
            label: 'March 1929!!!'
        },
        totalNumberOfScenes: 37,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 29,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 18,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 6,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 12,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 9,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 3,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 7,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 0,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 3,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 5,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 8,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 3,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Striped Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 5,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 2,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 2, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 5, character: 'Phryne & Jack' }, { label: 'Touching', value: 3, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 4, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 14, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 5,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 7,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 2,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 2,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 7,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 20,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 6,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 5,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 17,
            character: 'none'
        }

    },
    {
        id: 15,
        season: 2,
        episode: 3,
        name: 'Dead Man\'s Chest',
        murders: [
            {
                type: 'suffocation',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'colleague',
                comments: ''
            },
            {
                type: 'perfuration',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'employer',
                comments: ''
            },
            {
                type: 'suffocation',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'employer',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 0),
            position: 3,
            label: 'End of January 1929 (around 26-Jan)'
        },
        totalNumberOfScenes: 47,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 37,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 20,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 20,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 9,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 16,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 2,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 19,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 9,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 4,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 4,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 11,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 7,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 5,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 15,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 6,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 5, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 2, character: 'Phryne & Jack' }, { label: 'Touching', value: 1, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 12, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 5, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 0,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 1,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 4,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 4,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 10,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 1,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 5,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 8,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 29,
            character: 'none'
        }

    },
    {
        id: 16,
        season: 2,
        episode: 4,
        name: 'Deadweight',
        murders: [
            {
                type: 'perfuration',
                victimSex: 'male',
                murdererSex: 'female',
                relationshipWithVictim: 'acquaintance',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 1),
            position: 0,
            label: 'Early February 1929 (around 07-Feb)'
        },
        totalNumberOfScenes: 44,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 35,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 23,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 13,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 15,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 5,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 2,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 3,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 2,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 2,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 7,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 3,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Rhombus Filled Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 18,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 14,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 4, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 5, character: 'Phryne & Jack' }, { label: 'Touching', value: 4, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 9, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 11, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 6,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 2,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 3,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 1,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 7,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 7,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 9,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 6,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 24,
            character: 'none'
        }

    },
    {
        id: 17,
        season: 2,
        episode: 5,
        name: 'Murder a la Mode',
        murders: [
            {
                type: 'perfuration',
                victimSex: 'female',
                murdererSex: 'female',
                relationshipWithVictim: 'employer',
                comments: ''
            },
            {
                type: 'suffocation',
                victimSex: 'female',
                murdererSex: 'female',
                relationshipWithVictim: 'colleague',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 1),
            position: 1,
            label: 'February 1929'
        },
        totalNumberOfScenes: 45,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 33,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 26,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 19,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 12,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 3,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 3,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 0,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 11,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 5,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 15,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 5,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 3, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 4, character: 'Phryne & Jack' }, { label: 'Touching', value: 2, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 5, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 14, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 3,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 5,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 6,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 3,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 10,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 11,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 11,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 5,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 26,
            character: 'none'
        }
    },
    {
        id: 18,
        season: 2,
        episode: 6,
        name: 'Marked for Murder',
        murders: [
            {
                type: 'suffocation',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'colleague',
                comments: ''
            },
            {
                type: 'gunshot',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'colleague',
                comments: ''
            }
        ],
        date: null,
        totalNumberOfScenes: 42,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 28,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 27,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 5,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 16,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 8,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 1,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 0,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 4,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 25,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 19,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 1, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 3, character: 'Phryne & Jack' }, { label: 'Touching', value: 1, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 9, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 10, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 4,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 0,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 1,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 3,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 5,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 2,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 10,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 10,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 23,
            character: 'none'
        }

    },
    {
        id: 19,
        season: 2,
        episode: 7,
        name: 'Blood at the Wheel',
        murders: [
            {
                type: 'suffocation',
                victimSex: 'female',
                murdererSex: 'female',
                relationshipWithVictim: 'friend',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 2),
            position: 2,
            label: 'Mid to late March 1929 (around 20-Mar)'
        },
        totalNumberOfScenes: 35,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 29,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 15,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 10,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 7,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 5,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 3,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 3,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 0,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 8,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 12,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 9,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 24,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 5,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 1, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 1, character: 'Phryne & Jack' }, { label: 'Touching', value: 0, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 7, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 7, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 3,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 3,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 3,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 4,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 8,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 6,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 6,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 8,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 22,
            character: 'none'
        }

    },
    {
        id: 20,
        season: 2,
        episode: 8,
        name: 'The Blood of Juana the Mad',
        murders: [
            {
                type: 'perfuration',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'colleague',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 3),
            position: 2,
            label: 'Around 18-Apr-1929 or still March 1929 (inconsistency found)'
        },
        totalNumberOfScenes: 41,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 30,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 31,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 4,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 20,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 0,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 9,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 1,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 0,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 9,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 12,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 2,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 7,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Lined Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 22,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 5,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 4, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 4, character: 'Phryne & Jack' }, { label: 'Touching', value: 2, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 7, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 14, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 0,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 3,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 0,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 3,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 6,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 8,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 8,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 3,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 14,
            character: 'none'
        }

    },
    {
        id: 21,
        season: 2,
        episode: 9,
        name: 'Framed for Murder',
        murders: [
            {
                type: 'perfuration',
                victimSex: 'male',
                murdererSex: 'female',
                relationshipWithVictim: 'colleague',
                comments: ''
            },
            {
                type: 'perfuration',
                victimSex: 'male',
                murdererSex: 'female',
                relationshipWithVictim: 'colleague',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 3),
            position: 0,
            label: 'Likely early April 1929'
        },
        totalNumberOfScenes: 52,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 43,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 24,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 13,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 12,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 5,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 5,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 4,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 7,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 6,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Rhombus Filled Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 30,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 2,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 1, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 1, character: 'Phryne & Jack' }, { label: 'Touching', value: 0, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 4, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 16, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 3,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 2,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 2,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 4,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 7,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 10,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 7,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 4,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 16,
            character: 'none'
        }

    },
    {
        id: 22,
        season: 2,
        episode: 10,
        name: 'Death on the Vine',
        murders: [
            {
                type: 'suffocation',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'acquaintance',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 3),
            position: 1,
            label: 'Mid to late April 1929 (around 16-Apr)'
        },
        totalNumberOfScenes: 46,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 35,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 22,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 18,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 11,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 0,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 0,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 7,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 3,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 5,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 3,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 26,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 5,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 2, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 3, character: 'Phryne & Jack' }, { label: 'Touching', value: 2, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 8, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 11, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 3,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 1,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 2,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 3,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 4,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 2,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 7,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 5,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 26,
            character: 'none'
        }

    },
    {
        id: 23,
        season: 2,
        episode: 11,
        name: 'Dead Air',
        murders: [
            {
                type: 'suffocation',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'colleague',
                comments: ''
            },
            {
                type: 'suffocation',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'acquaintance',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 4),
            position: 1,
            label: 'Mid-May 1929 (around 15-May)'
        },
        totalNumberOfScenes: 50,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 33,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 23,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 20,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 22,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 6,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 6,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 1,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 6,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Gold Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 21,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 6,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 5, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 7, character: 'Phryne & Jack' }, { label: 'Touching', value: 3, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 9, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 7, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 4,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 5,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 1,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 2,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 11,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 13,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 11,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 4,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 24,
            character: 'none'
        }

    },
    {
        id: 24,
        season: 2,
        episode: 12,
        name: 'Unnatural Habits',
        murders: [
            {
                type: 'drowning',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'none',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 5),
            position: 0,
            label: 'Early June 1929 (around 04-Jun)'
        },
        totalNumberOfScenes: 43,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 35,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 23,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 11,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 12,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 6,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 12,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 5,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 0,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 11,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 15,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 7,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 3,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Rhombus Filled Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Beige Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 22,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 2,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 3, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 6, character: 'Phryne & Jack' }, { label: 'Touching', value: 3, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 5, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 14, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 3,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 6,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 6,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 1,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 8,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 13,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 10,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 6,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 20,
            character: 'none'
        }

    },
    {
        id: 25,
        season: 2,
        episode: 13,
        name: 'Murder Under the Mistletoe',
        murders: [
            {
                type: 'electrocution',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'employer',
                comments: ''
            },
            {
                type: 'concussion',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'lover',
                comments: ''
            },
            {
                type: 'gunshot',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'employer',
                comments: ''
            },
            {
                type: 'poison',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'employer',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 6),
            position: 1,
            label: 'July 1929'
        },
        totalNumberOfScenes: 48,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 31,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 24,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 16,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 12,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 16,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 3,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 3,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 16,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 3,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 1,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 5,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 11,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 6,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Cozy Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Maroon Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 7,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 0,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 4, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 3, character: 'Phryne & Jack' }, { label: 'Touching', value: 1, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 6, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 13, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 0,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 1,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 1,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 3,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 8,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 4,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 2,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 3,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 11,
            character: 'none'
        }


    },
    {
        id: 26,
        season: 3,
        episode: 1,
        name: 'Death Defying Feats',
        murders: [
            {
                type: 'decapitation',
                victimSex: 'female',
                murdererSex: 'female',
                relationshipWithVictim: 'colleague',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 6),
            position: 2,
            label: 'Late July 1929 (around 27-Jul)'
        },
        totalNumberOfScenes: 43,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 31,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 24,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 19,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 12,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 2,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 9,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 2,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 4,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 1,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 7,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 11,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 6,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Rather Nice Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 14,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 1,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 5, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 4, character: 'Phryne & Jack' }, { label: 'Touching', value: 1, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 6, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 13, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 2,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 6,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 3,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 4,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 6,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 12,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 4,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 5,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 24,
            character: 'none'
        }

    },
    {
        id: 27,
        season: 3,
        episode: 2,
        name: 'Murder & the Maiden',
        murders: [
            {
                type: 'poison',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'colleague',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 6),
            position: 2,
            label: 'Late July 1929'
        },
        totalNumberOfScenes: 44,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 31,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 22,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 12,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 13,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 10,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 3,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 0,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 5,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 9,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 6,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 3,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 20,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 6,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 3, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 2, character: 'Phryne & Jack' }, { label: 'Touching', value: 2, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 9, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 10, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 3,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 1,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 1,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 4,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 6,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 7,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 12,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 6,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 26,
            character: 'none'
        }

    },
    {
        id: 28,
        season: 3,
        episode: 3,
        name: 'Murder & Mozzarella',
        murders: [
            {
                type: 'poison',
                victimSex: 'female',
                murdererSex: 'female',
                relationshipWithVictim: 'relative',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 7),
            position: 0,
            label: 'Early August 1929 (around 01-Aug)'
        },
        totalNumberOfScenes: 44,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 36,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 27,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 12,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 9,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 3,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 1,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 1,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 2,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 4,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 9,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 5,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Flowers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Rhombus Filled Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Rather Nice Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 28,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 7,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 2, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 2, character: 'Phryne & Jack' }, { label: 'Touching', value: 1, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 10, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 14, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 5,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 3,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 2,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 4,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 7,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 3,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 7,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 8,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 25,
            character: 'none'
        }

    },
    {
        id: 29,
        season: 3,
        episode: 4,
        name: 'Blood & Money',
        murders: [
            {
                type: 'suffocation',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'acquaintance',
                comments: ''
            },
            {
                type: 'septicemia',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'acquaintance',
                comments: ''
            },
            {
                type: 'poison',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'self',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 7),
            position: 0,
            label: 'Early August 1929 (around 05-Aug)'
        },
        totalNumberOfScenes: 38,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 31,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 22,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 14,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 13,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 2,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 9,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 6,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 1,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 5,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 2,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 15,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 7,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 2, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 3, character: 'Phryne & Jack' }, { label: 'Touching', value: 2, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 5, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 13, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 5,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 3,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 3,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 3,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 4,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 10,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 10,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 5,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 24,
            character: 'none'
        }

    },
    {
        id: 30,
        season: 3,
        episode: 5,
        name: 'Death & Hysteria',
        murders: [
            {
                type: 'electrocution',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'acquaintance',
                comments: ''
            },
            {
                type: 'poison',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'relative',
                comments: ''
            }
        ],
        date: null,
        totalNumberOfScenes: 42,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 35,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 20,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 20,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 0,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 11,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 7,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 3,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 1,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 0,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 4,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 3,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Seal Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Flowers Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 28,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 4,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 4, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 5, character: 'Phryne & Jack' }, { label: 'Touching', value: 2, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 5, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 14, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 3,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 0,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 2,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 0,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 3,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 1,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 5,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 5,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 14,
            character: 'none'
        }


    },
    {
        id: 31,
        season: 3,
        episode: 6,
        name: 'Death at the Grand',
        murders: [
            {
                type: 'fall',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'none',
                comments: ''
            },
            {
                type: 'perfuration',
                victimSex: 'female',
                murdererSex: 'male',
                relationshipWithVictim: 'none',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 7),
            position: 1,
            label: 'Mid-August 1929 (around 18-Aug)'
        },
        totalNumberOfScenes: 52,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 34,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 26,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 16,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 0,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 6,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 1,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 0,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 3,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 0,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 6,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 7,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 2,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Brown Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Rather Nice Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 15,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 8,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 2, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 3, character: 'Phryne & Jack' }, { label: 'Touching', value: 3, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 12, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 13, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 4,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 2,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 1,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 1,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 2,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 4,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 8,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 8,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 5,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 15,
            character: 'none'
        }


    },
    {
        id: 32,
        season: 3,
        episode: 7,
        name: 'Game, Set & Murder',
        murders: [
            {
                type: 'poison',
                victimSex: 'female',
                murdererSex: 'female',
                relationshipWithVictim: 'colleague',
                comments: 'spider inside shoe'
            }
        ],
        date: {
            date: new Date(1929, 7),
            position: 2,
            label: 'Late August 1929 (around 31-Aug)'
        },
        totalNumberOfScenes: 47,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 40,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 29,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 16,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 10,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 2,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 1,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 3,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 0,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 8,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 10,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 8,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 5,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Flowers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Planet Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Diamond Striped Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 25,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 16,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 6, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 4, character: 'Phryne & Jack' }, { label: 'Touching', value: 3, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 11, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 16, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 3,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 2,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 1,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 2,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 2,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 9,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 10,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 9,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 6,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 23,
            character: 'none'
        }

    },
    {
        id: 33,
        season: 3,
        episode: 8,
        name: 'Death Do Us Part',
        murders: [
            {
                type: 'suffocation',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'none',
                comments: ''
            },
            {
                type: 'poison',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'acquaintance',
                comments: ''
            },
            {
                type: 'perfuration',
                victimSex: 'male',
                murdererSex: 'male',
                relationshipWithVictim: 'friend',
                comments: ''
            }
        ],
        date: {
            date: new Date(1929, 8),
            position: 0,
            label: 'Early September 1929 (around 03-Sep)'
        },
        totalNumberOfScenes: 52,

        scenesPerCharacter: [
            {
                label: 'scenes with Phryne',
                value: 31,
                character: 'Phryne'
            },
            {
                label: 'scenes with Jack',
                value: 26,
                character: 'Jack'
            },
            {
                label: 'scenes with Dot',
                value: 17,
                character: 'Dot'
            },
            {
                label: 'scenes with Hugh',
                value: 14,
                character: 'Hugh'
            },
            {
                label: 'scenes with Aunt Prudence',
                value: 0,
                character: 'Aunt Prudence'
            },
            {
                label: 'scenes with Bert/Cec',
                value: 7,
                character: 'Cec and Bert'
            },
            {
                label: 'scenes with Jane',
                value: 0,
                character: 'Jane'
            },
            {
                label: 'scenes with Mac',
                value: 3,
                character: 'Mac'
            },
            {
                label: 'scenes with Mr. Butler',
                value: 7,
                character: 'Mr Butler'
            },
            {
                label: 'scenes with the Hispano Suiza',
                value: 1,
                character: 'Hispano Suiza'
            }
        ],
        nameCalling: [
            {
                label: 'Jack says \'Miss Fisher\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Jack says \'(Miss) Phryne Fisher\'',
                value: 0,
                character: 'Jack'
            },
            {
                label: 'Jack says \'Phryne\'',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Phryne says \'Jack\'',
                value: 9,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Jack Robinson\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Inspector (Jack) (Robinson)\'',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'Phryne says \'Detective Inspector Jack Robinson\'',
                value: 0,
                character: 'Phryne'
            }
        ],
        outfits: [
            {
                label: 'number of outfits Phryne wears',
                value: 5,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with feathers Phryne wears',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'number of outfits with fur Phryne wears',
                value: 0,
                character: 'Phryne'
            },
            {
                label: 'number of outfits Jack wears',
                value: 4,
                character: 'Jack'
            }
        ],
        neckties: [
            {
                label: 'Planet Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Feathers Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Seal Striped Tie',
                value: 1,
                character: 'Jack'
            },
            {
                label: 'Rather Nice Tie',
                value: 1,
                character: 'Jack'
            }
        ],
        hats:  [
            {
                label: 'Phryne wears a hat',
                value: 16,
                character: 'Phryne'
            },
            {
                label: 'Jack wears a hat',
                value: 10,
                character: 'Jack'
            }
        ],
        guns: null,
        jealousy: null,
        proximity: [{ label: 'Standing very close', value: 3, character: 'Phryne & Jack' }, { label: 'Long eye contact', value: 4, character: 'Phryne & Jack' }, { label: 'Touching', value: 4, character: 'Phryne & Jack' }],
        flirting: null,
        talking: [{ label: 'Screen time with Phryne and Jack \'alone\'', value: 8, character: 'Phryne & Jack' }, { label: 'Screen time with Phryne and Jack on the same scene (not \'alone\')', value: 17, character: 'Phryne & Jack' }],
        phryneInPoliceStation: [
            {
                label: 'scenes with Phryne in Jack\'s table',
                value: 1,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s office',
                value: 2,
                character: 'Phryne'
            },
            {
                label: 'scenes with Phryne in Jack\'s police station',
                value: 0,
                character: 'Phryne'
            }],

        jackInPhrynesHome: {
            label: 'Screen time with Jack in Phryne\'s Home',
            value: 1,
            character: 'Jack'
        },
        stealthyScenes: {
            label: 'Screen time with Phryne being stealhy',
            value: 0,
            character: 'Phryne'
        },
        drinking: {
            label: 'Screen time with someone drinking',
            value: 0,
            character: 'all'
        },
        changesOfOutfit: {
            label: 'Number of times Phryne changes clothes',
            value: 5,
            character: 'Phryne'
        },
        phrynesHouseScenes: {
            label: 'Screen time showing Phryne\'s house',
            value: 13,
            character: 'none'
        },
        policeStationScenes: {
            label: 'Screen time showing the police station',
            value: 5,
            character: 'none'
        },
        locations: {
            label: 'Number of different locations',
            value: 7,
            character: 'none'
        },
        changesOfLocation: {
            label: 'Number of times they change locations between scenes',
            value: 28,
            character: 'none'
        }

    }

]