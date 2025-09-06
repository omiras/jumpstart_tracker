
import type { Deck } from "./types";

const rawDecks = [
    {
        "deck_title": "Prideful",
        "set": "FDN,J25",
        "cards": [
            "Brimaz, King of Oreskos",
            "Dawnwing Marshal",
            "Leonin Scimitar",
            "Basri's Acolyte",
            "Impeccable Timing",
            "Ingenious Leonin",
            "King of the Pride",
            "Leonin of the Lost Pride",
            "Leonin Vanguard",
            "Pacifism",
            "Savannah Lions",
            "Take Up the Shield",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Giddyap",
        "set": "FDN,J25",
        "cards": [
            "Thurid, Mare of Destiny",
            "Banishing Light",
            "Celestial Unicorn",
            "Steadfast Unicorn",
            "Tenacity",
            "Brightmare",
            "Moment of Triumph",
            "Outflank",
            "Ronom Unicorn",
            "Shield Mare",
            "Sungrace Pegasus",
            "Sunmane Pegasus",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Angels (1)",
        "set": "FDN,J25",
        "cards": [
            "Giada, Font of Hope",
            "Faithful Pikemaster",
            "Starnheim Memento",
            "Celestial Enforcer",
            "Destroy Evil",
            "Herald of the Sun",
            "Inspiring Overseer",
            "Light of Hope",
            "Pacifism",
            "Serra Angel",
            "Youthful Valkyrie",
            "Secluded Steppe",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Angels (2)",
        "set": "FDN,J25",
        "cards": [
            "Giada, Font of Hope",
            "Herald of War",
            "Faithful Pikemaster",
            "Starnheim Memento",
            "Angelic Edict",
            "Herald of the Sun",
            "Inspiring Overseer",
            "Pacifism",
            "Rally of Wings",
            "Stalwart Valkyrie",
            "Youthful Valkyrie",
            "Secluded Steppe",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Heroes (1)",
        "set": "FDN,J25",
        "cards": [
            "Brigone, Soldier of Meletis",
            "Faithful Pikemaster",
            "Dauntless Onslaught",
            "Akroan Skyguard",
            "Chains of Custody",
            "Defiant Strike",
            "Favored Hoplite",
            "Fencing Ace",
            "Moment of Heroism",
            "Tethmos High Priest",
            "Valorous Stance",
            "Wingsteed Rider",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Heroes (2)",
        "set": "FDN,J25",
        "cards": [
            "Brigone, Soldier of Meletis",
            "Ojutai Exemplars",
            "Faithful Pikemaster",
            "Chains of Custody",
            "Defiant Strike",
            "Elite Skirmisher",
            "Favored Hoplite",
            "Fencing Ace",
            "Gird for Battle",
            "Repel the Darkness",
            "Valorous Stance",
            "Wingsteed Rider",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Legion (1)",
        "set": "FDN,J25",
        "cards": [
            "Adeline, Resplendent Cathar",
            "Dawnwing Marshal",
            "Hinterland Sanctifier",
            "Mentor of the Meek",
            "Raise the Alarm",
            "Ancestral Blade",
            "Argivian Phalanx",
            "Dauntless Unity",
            "Make a Stand",
            "Pacifism",
            "Recruitment Officer",
            "Search Party Captain",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Legion (2)",
        "set": "FDN,J25",
        "cards": [
            "Adeline, Resplendent Cathar",
            "Venerated Loxodon",
            "Dawnwing Marshal",
            "Hinterland Sanctifier",
            "Mentor of the Meek",
            "Raise the Alarm",
            "Ancestral Blade",
            "Conclave Tribunal",
            "Dauntless Unity",
            "Defend the Campus",
            "Recruitment Officer",
            "Triplicate Spirits",
            "Memorial to Glory",
            "Thriving Heath",
            "6 Plains"
        ]
    },
    {
        "deck_title": "Healers (1)",
        "set": "FDN,J25",
        "cards": [
            "Speaker of the Heavens",
            "Hinterland Sanctifier",
            "Qala, Ajani's Pridemate",
            "Ajani's Pridemate",
            "Angel of Mercy",
            "Angel of Vitality",
            "Brightmare",
            "Desperate Lunge",
            "Divine Arrow",
            "Faith's Fetters",
            "Mesa Unicorn",
            "Revitalize",
            "Kabira Crossroads",
            "Thriving Heath",
            "6 Plains"
        ]
    },
    {
        "deck_title": "Healers (2)",
        "set": "FDN,J25",
        "cards": [
            "Valkyrie Harbinger",
            "Hinterland Sanctifier",
            "Qala, Ajani's Pridemate",
            "Ajani's Pridemate",
            "Angel of Vitality",
            "Bishop's Soldier",
            "Brightmare",
            "Divine Arrow",
            "Recumbent Bliss",
            "Revitalize",
            "Speakeasy Server",
            "Take Up the Shield",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Healers (3)",
        "set": "FDN,J25",
        "cards": [
            "Righteous Valkyrie",
            "Hinterland Sanctifier",
            "Qala, Ajani's Pridemate",
            "Ajani's Pridemate",
            "Angel of Mercy",
            "Angel of Vitality",
            "Banisher Priest",
            "Daybreak Chaplain",
            "Deadly Riposte",
            "Moment of Heroism",
            "Recumbent Bliss",
            "Revitalize",
            "Kabira Crossroads",
            "Thriving Heath",
            "6 Plains"
        ]
    },
    {
        "deck_title": "Healers (4)",
        "set": "FDN,J25",
        "cards": [
            "Felidar Sovereign",
            "Rhox Faithmender",
            "Hinterland Sanctifier",
            "Qala, Ajani's Pridemate",
            "Ajani's Pridemate",
            "Angel of Vitality",
            "Battlefield Promotion",
            "Brightmare",
            "Divine Arrow",
            "Faith's Fetters",
            "Mesa Unicorn",
            "Revitalize",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Stalwart (1)",
        "set": "FDN,J25",
        "cards": [
            "Generous Pup",
            "Ajani, Adversary of Tyrants",
            "Urdnan, Dromoka Warrior",
            "Banishing Light",
            "Angelic Cub",
            "Gavony Silversmith",
            "Patron of the Valiant",
            "Sandsteppe Outcast",
            "Squad Captain",
            "Steadfast Sentry",
            "Swift Response",
            "Take Up the Shield",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Stalwart (2)",
        "set": "FDN,J25",
        "cards": [
            "Basri's Lieutenant",
            "Urdnan, Dromoka Warrior",
            "Banishing Light",
            "Basri's Acolyte",
            "Basri's Solidarity",
            "Battlefield Promotion",
            "Lightwalker",
            "Patron of the Valiant",
            "Sandsteppe Outcast",
            "Star Pupil",
            "Steadfast Sentry",
            "Swift Response",
            "Cave of Temptation",
            "Thriving Heath",
            "6 Plains"
        ]
    },
    {
        "deck_title": "Stalwart (3)",
        "set": "FDN,J25",
        "cards": [
            "Generous Pup",
            "Urdnan, Dromoka Warrior",
            "Banishing Light",
            "Steadfast Unicorn",
            "Expedition Raptor",
            "Jubilant Mascot",
            "Paladin of the Bloodstained",
            "Relief Captain",
            "Sandsteppe Outcast",
            "Shoulder to Shoulder",
            "Swift Response",
            "Take Up the Shield",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Stalwart (4)",
        "set": "FDN,J25",
        "cards": [
            "Light of the Legion",
            "Mikaeus, the Lunarch",
            "Urdnan, Dromoka Warrior",
            "Banishing Light",
            "Battlefield Promotion",
            "Gavony Silversmith",
            "Gird for Battle",
            "Parhelion Patrol",
            "Sandsteppe Outcast",
            "Steadfast Sentry",
            "Sunhome Stalwart",
            "Swift Response",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Armed (1)",
        "set": "FDN,J25",
        "cards": [
            "Mace of the Valiant",
            "Faithful Pikemaster",
            "Starnheim Memento",
            "Danitha Capashen, Paragon",
            "Ancestral Blade",
            "Divine Arrow",
            "Fencing Ace",
            "Mirran Bardiche",
            "Pacifism",
            "Starnheim Courser",
            "Sunspear Shikari",
            "Valkyrie's Sword",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Armed (2)",
        "set": "FDN,J25",
        "cards": [
            "Stone Haven Outfitter",
            "Faithful Pikemaster",
            "Danitha Capashen, Paragon",
            "Plate Armor",
            "Ancestral Blade",
            "Divine Arrow",
            "Fencing Ace",
            "Hexgold Hoverwings",
            "Light the Way",
            "Militant Inquisitor",
            "Mirran Bardiche",
            "Pacifism",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Armed (3)",
        "set": "FDN,J25",
        "cards": [
            "Maul of the Skyclaves",
            "Faithful Pikemaster",
            "Danitha Capashen, Paragon",
            "Ancestral Blade",
            "Fencing Ace",
            "Flutterfox",
            "Militant Inquisitor",
            "Mirran Bardiche",
            "Pacifism",
            "Resistance Reunited",
            "Trusty Retriever",
            "Valkyrie's Sword",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Armed (4)",
        "set": "FDN,J25",
        "cards": [
            "Godsend",
            "Faithful Pikemaster",
            "Danitha Capashen, Paragon",
            "Plate Armor",
            "Ancestral Blade",
            "Deadly Riposte",
            "Fencing Ace",
            "Militant Inquisitor",
            "Mirran Bardiche",
            "Pacifism",
            "Sunspear Shikari",
            "Thopter Architect",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Enchanted (1)",
        "set": "FDN,J25",
        "cards": [
            "Eidolon of Astral Winds",
            "Psemilla, Meletian Poet",
            "Banishing Light",
            "Archon of Falling Stars",
            "Captivating Unicorn",
            "Chosen by Heliod",
            "Dreadful Apathy",
            "Favored of Iroas",
            "Flutterfox",
            "Glory Bearers",
            "Indomitable Will",
            "Spirited Companion",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Enchanted (2)",
        "set": "FDN,J25",
        "cards": [
            "Eidolon of Astral Winds",
            "Psemilla, Meletian Poet",
            "Banishing Light",
            "Archon of Falling Stars",
            "Cage of Hands",
            "Cartouche of Solidarity",
            "Flutterfox",
            "Glory Bearers",
            "Golden-Tail Disciple",
            "Indomitable Will",
            "Nyx-Fleece Ram",
            "Sunblade Samurai",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Enchanted (3)",
        "set": "FDN,J25",
        "cards": [
            "Nykthos Paragon",
            "Starfield Mystic",
            "Psemilla, Meletian Poet",
            "Banishing Light",
            "Divine Favor",
            "Flutterfox",
            "Glory Bearers",
            "Golden-Tail Disciple",
            "Indomitable Will",
            "Nyx-Fleece Ram",
            "Serra's Embrace",
            "Sunblade Samurai",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Enchanted (4)",
        "set": "FDN,J25",
        "cards": [
            "Archon of Sun's Grace",
            "Psemilla, Meletian Poet",
            "Banishing Light",
            "Angelic Gift",
            "Archon of Falling Stars",
            "Dreadful Apathy",
            "Favored of Iroas",
            "Flutterfox",
            "Golden-Tail Disciple",
            "Indomitable Will",
            "Spirited Companion",
            "Sunblade Samurai",
            "Thriving Heath",
            "7 Plains"
        ]
    },
    {
        "deck_title": "Illusions",
        "set": "FDN,J25",
        "cards": [
            "Pol Jamaar, Illusionist",
            "Lord of the Unreal",
            "Phantasmal Shieldback",
            "Starlight Snare",
            "Murmuring Mystic",
            "Haunting Figment",
            "Krovikan Mist",
            "Oneirophage",
            "Opt",
            "Phantasmal Form",
            "Phantom Ninja",
            "Supreme Will",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Ninjas",
        "set": "FDN,J25",
        "cards": [
            "Taeko, the Patient Avalanche",
            "Starlight Snare",
            "Ninja of the Deep Hours",
            "Fading Hope",
            "Moon-Circuit Hacker",
            "Moonsnare Specialist",
            "Network Disruptor",
            "Nightveil Sprite",
            "Phantom Ninja",
            "Prosperous Thief",
            "Smoke Shroud",
            "Whirlwind Denial",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Of the Coast (1)",
        "set": "FDN,J25",
        "cards": [
            "Plagon, Lord of the Beach",
            "Delightful Discovery",
            "Gilded Scuttler",
            "Starlight Snare",
            "Run Ashore",
            "Kapsho Kitefins",
            "Omen of the Sea",
            "Purple-Crystal Crab",
            "Shorecomber Crab",
            "Sigiled Starfish",
            "Tidepool Turtle",
            "Yarok's Wavecrasher",
            "Lonely Sandbar",
            "Thriving Isle",
            "6 Island"
        ]
    },
    {
        "deck_title": "Of the Coast (2)",
        "set": "FDN,J25",
        "cards": [
            "Plagon, Lord of the Beach",
            "Delightful Discovery",
            "Gilded Scuttler",
            "Starlight Snare",
            "Run Ashore",
            "Azure Drake",
            "Glimmerbell",
            "Opt",
            "Shipwreck Dowser",
            "Shorecomber Crab",
            "Sigiled Starfish",
            "Tidepool Turtle",
            "Lonely Sandbar",
            "Thriving Isle",
            "6 Island"
        ]
    },
    {
        "deck_title": "Drowned (1)",
        "set": "FDN,J25",
        "cards": [
            "Neerdiv, Devious Diver",
            "Sudden Insight",
            "Deep Analysis",
            "Expendable Lackey",
            "Locked in the Cemetery",
            "Merfolk Pupil",
            "Organ Hoarder",
            "Screaming Swarm",
            "Shipwreck Dowser",
            "Silent Departure",
            "Stitched Drake",
            "Wall of Lost Thoughts",
            "Ipnu Rivulet",
            "Thriving Isle",
            "6 Island"
        ]
    },
    {
        "deck_title": "Drowned (2)",
        "set": "FDN,J25",
        "cards": [
            "Neerdiv, Devious Diver",
            "Cackling Counterpart",
            "Sudden Insight",
            "Cruel Witness",
            "Deep Analysis",
            "Draugr Thought-Thief",
            "Expendable Lackey",
            "Locked in the Cemetery",
            "Screaming Swarm",
            "Towering-Wave Mystic",
            "Waker of Waves",
            "Wall of Lost Thoughts",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Wizards (1)",
        "set": "FDN,J25",
        "cards": [
            "Naban, Dean of Iteration",
            "Starlight Snare",
            "Faerie Seer",
            "Academy Journeymage",
            "Archaeomancer",
            "Augur of Bolas",
            "Choking Tethers",
            "Cloudkin Seer",
            "Concentrate",
            "Exclusion Mage",
            "Remand",
            "Windcaller Aven",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Wizards (2)",
        "set": "FDN,J25",
        "cards": [
            "Naban, Dean of Iteration",
            "Aether Channeler",
            "Starlight Snare",
            "Faerie Seer",
            "Academy Journeymage",
            "Augur of Bolas",
            "Chilling Trap",
            "Expedition Diviner",
            "Frost Trickster",
            "Opportunity",
            "Remand",
            "Shipwreck Dowser",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Soaring (1)",
        "set": "FDN,J25",
        "cards": [
            "Windreader Sphinx",
            "Starlight Snare",
            "Cynette, Jelly Drover",
            "Uncomfortable Chill",
            "Aerial Guide",
            "Gust of Wind",
            "Nightveil Sprite",
            "Serpentine Ambush",
            "Tide Skimmer",
            "Warden of Evos Isle",
            "Waterkin Shaman",
            "Winged Words",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Soaring (2)",
        "set": "FDN,J25",
        "cards": [
            "Cavalier of Gales",
            "Starlight Snare",
            "Cynette, Jelly Drover",
            "Aerial Guide",
            "Cartouche of Knowledge",
            "Gust of Wind",
            "Majestic Metamorphosis",
            "Owl Familiar",
            "Shorecomber Crab",
            "Tide Skimmer",
            "Trial of Knowledge",
            "Warden of Evos Isle",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Soaring (3)",
        "set": "FDN,J25",
        "cards": [
            "Mu Yanling, Sky Dancer",
            "Starlight Snare",
            "Cynette, Jelly Drover",
            "Aerial Guide",
            "Cloudkin Seer",
            "Gust of Wind",
            "Malcator's Watcher",
            "Serpentine Ambush",
            "Thopter Mechanic",
            "Tide Skimmer",
            "Windstorm Drake",
            "Winged Words",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Soaring (4)",
        "set": "FDN,J25",
        "cards": [
            "Sprite Noble",
            "Stolen by the Fae",
            "Starlight Snare",
            "Cynette, Jelly Drover",
            "Faerie Seer",
            "Aerial Guide",
            "Air Elemental",
            "Majestic Metamorphosis",
            "Nightveil Sprite",
            "Opt",
            "Tide Skimmer",
            "Winged Words",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Surprise! (1)",
        "set": "FDN,J25",
        "cards": [
            "Thryx, the Sudden Storm",
            "Delightful Discovery",
            "Brineborn Cutthroat",
            "Capture Sphere",
            "Chrome Prowler",
            "Crystacean",
            "Opt",
            "Slimebind",
            "Spectral Sailor",
            "Stinging Lionfish",
            "Undersea Invader",
            "Wind Strider",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Surprise! (2)",
        "set": "FDN,J25",
        "cards": [
            "Thryx, the Sudden Storm",
            "Voracious Greatshark",
            "Delightful Discovery",
            "Brineborn Cutthroat",
            "Capture Sphere",
            "Naiad of Hidden Coves",
            "Opt",
            "Pestermite",
            "Spectral Sailor",
            "Starlit Mantle",
            "Stinging Lionfish",
            "Undersea Invader",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Surprise! (3)",
        "set": "FDN,J25",
        "cards": [
            "Venser, Shaper Savant",
            "Starlight Snare",
            "Breaching Hippocamp",
            "Brineborn Cutthroat",
            "Naiad of Hidden Coves",
            "Opt",
            "Pestermite",
            "Spectral Sailor",
            "Starlit Mantle",
            "Stinging Lionfish",
            "Supreme Will",
            "Wind Strider",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Surprise! (4)",
        "set": "FDN,J25",
        "cards": [
            "Venser, Shaper Savant",
            "Wavebreak Hippocamp",
            "Starlight Snare",
            "Uncomfortable Chill",
            "Aven Reedstalker",
            "Brineborn Cutthroat",
            "Fading Hope",
            "Soul Read",
            "Spectral Sailor",
            "Stinging Lionfish",
            "Vexing Gull",
            "Wind Strider",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Bookworms (1)",
        "set": "FDN,J25",
        "cards": [
            "Overflowing Insight",
            "Starlight Snare",
            "Syr Elenora, the Discerning",
            "Blink of an Eye",
            "Cartouche of Knowledge",
            "Faerie Vandal",
            "Lat-Nam Adept",
            "Mystic Skyfish",
            "Reckless Scholar",
            "Shore Keeper",
            "Sky-Eel School",
            "Trial of Knowledge",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Bookworms (2)",
        "set": "FDN,J25",
        "cards": [
            "Teferi's Ageless Insight",
            "Phantasmal Shieldback",
            "Starlight Snare",
            "Syr Elenora, the Discerning",
            "Drag Under",
            "Uncomfortable Chill",
            "Faerie Vandal",
            "Muse Drake",
            "Mystic Skyfish",
            "Reckless Scholar",
            "Sky-Eel School",
            "Witching Well",
            "Memorial to Genius",
            "Thriving Isle",
            "6 Island"
        ]
    },
    {
        "deck_title": "Bookworms (3)",
        "set": "FDN,J25",
        "cards": [
            "Sphinx of Enlightenment",
            "Starlight Snare",
            "Syr Elenora, the Discerning",
            "Drag Under",
            "Cartouche of Knowledge",
            "Lat-Nam Adept",
            "Mystic Skyfish",
            "Omen of the Sea",
            "Reckless Scholar",
            "Shore Keeper",
            "Thopter Mechanic",
            "Trial of Knowledge",
            "Thriving Isle",
            "7 Island"
        ]
    },
    {
        "deck_title": "Bookworms (4)",
        "set": "FDN,J25",
        "cards": [
            "Nadir Kraken",
            "Phantasmal Shieldback",
            "Starlight Snare",
            "Syr Elenora, the Discerning",
            "Drag Under",
            "Faerie Vandal",
            "Lat-Nam Adept",
            "Opt",
            "Reckless Scholar",
            "Sky-Eel School",
            "Soul Read",
            "Tolarian Kraken",
            "Memorial to Genius",
            "Thriving Isle",
            "6 Island"
        ]
    },
    {
        "deck_title": "Inventive (1)",
        "set": "FDN,J25",
        "cards": [
            "Sai, Master Thopterist",
            "Gilded Scuttler",
            "Ornithopter of Paradise",
            "Blink of an Eye",
            "Bury in Books",
            "Experimental Aviator",
            "Filigree Attendant",
            "Gearseeker Serpent",
            "Chief of the Foundry",
            "Eager Construct",
            "Prophetic Prism",
            "Whirlermaker",
            "Seat of the Synod",
            "Thriving Isle",
            "6 Island"
        ]
    },
    {
        "deck_title": "Inventive (2)",
        "set": "FDN,J25",
        "cards": [
            "Sai, Master Thopterist",
            "Shimmer Dragon",
            "Gilded Scuttler",
            "Ornithopter of Paradise",
            "Experimental Aviator",
            "Malfunction",
            "Chief of the Foundry",
            "Eager Construct",
            "Fireshrieker",
            "Prophetic Prism",
            "Treasure Keeper",
            "Universal Solvent",
            "Seat of the Synod",
            "Thriving Isle",
            "6 Island"
        ]
    },
    {
        "deck_title": "Inventive (3)",
        "set": "FDN,J25",
        "cards": [
            "Padeem, Consul of Innovation",
            "Thought Monitor",
            "Gilded Scuttler",
            "Ornithopter of Paradise",
            "Experimental Aviator",
            "Fading Hope",
            "Malfunction",
            "Thoughtcast",
            "Chief of the Foundry",
            "Myr Enforcer",
            "Patchwork Automaton",
            "Prophetic Prism",
            "Seat of the Synod",
            "Thriving Isle",
            "6 Island"
        ]
    },
    {
        "deck_title": "Inventive (4)",
        "set": "FDN,J25",
        "cards": [
            "Padeem, Consul of Innovation",
            "Gilded Scuttler",
            "Shardless Outlander",
            "Ornithopter of Paradise",
            "Blink of an Eye",
            "Bury in Books",
            "Experimental Aviator",
            "Chief of the Foundry",
            "Eager Construct",
            "Guardian Idol",
            "Prophetic Prism",
            "Treasure Keeper",
            "Seat of the Synod",
            "Thriving Isle",
            "6 Island"
        ]
    },
    {
        "deck_title": "Snakes",
        "set": "FDN,J25",
        "cards": [
            "Aphelia, Viper Whisperer",
            "Hooded Blightfang",
            "Scourge of the Undercity",
            "Killing Glare",
            "Serpent Assassin",
            "Coat with Venom",
            "Night's Whisper",
            "Pharika's Chosen",
            "Ukud Cobra",
            "Venomous Hierophant",
            "Vraska's Finisher",
            "Gorgon Flail",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Nefarious",
        "set": "FDN,J25",
        "cards": [
            "Vilis, Broker of Blood",
            "Dark Confidant",
            "Scourge of the Undercity",
            "Howling Banshee",
            "Alchemist's Gift",
            "Arrogant Outlaw",
            "Audacious Thief",
            "Infernal Grasp",
            "Read the Bones",
            "Ulcerate",
            "Vampire Scrivener",
            "Metalspinner's Puzzleknot",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Treasures (1)",
        "set": "FDN,J25",
        "cards": [
            "Evereth, Viceroy of Plunder",
            "Ruthless Technomancer",
            "Deadly Dispute",
            "Grim Bounty",
            "Shambling Ghast",
            "Bastion of Remembrance",
            "Dire Fleet Hoarder",
            "Fake Your Own Death",
            "Pitiless Plunderer",
            "Reassembling Skeleton",
            "Ruthless Knave",
            "Undercity Scrounger",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Treasures (2)",
        "set": "FDN,J25",
        "cards": [
            "Evereth, Viceroy of Plunder",
            "Deadly Dispute",
            "Shambling Ghast",
            "Contract Killing",
            "Dire Fleet Hoarder",
            "Dusk Mangler",
            "Fake Your Own Death",
            "Pitiless Plunderer",
            "Powerstone Fracture",
            "Reassembling Skeleton",
            "Ruthless Knave",
            "Undercity Scrounger",
            "Thriving Moor",
            "Vault of Whispers",
            "6 Swamp"
        ]
    },
    {
        "deck_title": "Clerics (1)",
        "set": "FDN,J25",
        "cards": [
            "Taborax, Hope's Demise",
            "Nullpriest of Oblivion",
            "Revoke Demise",
            "Bonecaller Cleric",
            "Dark Bargain",
            "Agonizing Syphon",
            "Archfiend's Vessel",
            "Disfigure",
            "Eerie Soultender",
            "Koma's Faithful",
            "Scion of the Swarm",
            "Skemfar Shadowsage",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Clerics (2)",
        "set": "FDN,J25",
        "cards": [
            "Taborax, Hope's Demise",
            "Revoke Demise",
            "Bonecaller Cleric",
            "Dark Bargain",
            "Priest of Gix",
            "Archfiend's Vessel",
            "Disfigure",
            "Elderfang Disciple",
            "Entomber Exarch",
            "Koma's Faithful",
            "Scion of the Swarm",
            "Severed Strands",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Clerics (3)",
        "set": "FDN,J25",
        "cards": [
            "Vito, Thorn of the Dusk Rose",
            "Revoke Demise",
            "Bonecaller Cleric",
            "Dark Bargain",
            "Agonizing Syphon",
            "Dark Supplicant",
            "Eerie Soultender",
            "Elderfang Disciple",
            "Koma's Faithful",
            "Moment of Craving",
            "Scion of Darkness",
            "Skemfar Shadowsage",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Clerics (4)",
        "set": "FDN,J25",
        "cards": [
            "Vito, Thorn of the Dusk Rose",
            "Priest of Forgotten Gods",
            "Revoke Demise",
            "Bonecaller Cleric",
            "Dark Bargain",
            "Priest of Gix",
            "Alchemist's Gift",
            "Archfiend's Vessel",
            "Extinguish the Light",
            "Scion of the Swarm",
            "Skemfar Shadowsage",
            "Stronghold Confessor",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "N'er-do-wells (1)",
        "set": "FDN,J25",
        "cards": [
            "Rev, Tithe Extractor",
            "Serpent Assassin",
            "Thieves' Tools",
            "Audacious Thief",
            "Crooked Custodian",
            "Fake Your Own Death",
            "Foul Play",
            "Masked Blackguard",
            "Midnight Assassin",
            "Morbid Opportunist",
            "Murder",
            "Pilfering Imp",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "N'er-do-wells (2)",
        "set": "FDN,J25",
        "cards": [
            "Rev, Tithe Extractor",
            "Thieves' Guild Enforcer",
            "Grim Bounty",
            "Thieves' Tools",
            "Audacious Thief",
            "Balustrade Spy",
            "Bloodtithe Collector",
            "Expedition Skulker",
            "Fake Your Own Death",
            "Foul Play",
            "Masked Blackguard",
            "Morbid Opportunist",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Icky (1)",
        "set": "FDN,J25",
        "cards": [
            "Fumulus, the Infestation",
            "Wriggling Grub",
            "Eaten Alive",
            "Devouring Swarm",
            "Durable Coilbug",
            "Fretwork Colony",
            "Go for the Throat",
            "Heartstabber Mosquito",
            "Nantuko Husk",
            "Subtle Strike",
            "Swarm of Bloodflies",
            "Village Rites",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Icky (2)",
        "set": "FDN,J25",
        "cards": [
            "Fumulus, the Infestation",
            "Endless Cockroaches",
            "Wriggling Grub",
            "Eaten Alive",
            "Devouring Swarm",
            "Go for the Throat",
            "Heartstabber Mosquito",
            "Morkrut Necropod",
            "Nantuko Husk",
            "Subtle Strike",
            "Torment of Scarabs",
            "Virus Beetle",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Vampires (1)",
        "set": "FDN,J25",
        "cards": [
            "Sangromancer",
            "Scourge of the Undercity",
            "Nazar, the Velvet Fang",
            "Skymarch Bloodletter",
            "Bleed Dry",
            "Blood Burglar",
            "Blood Fountain",
            "Bloodtithe Collector",
            "Gift of Fangs",
            "Gluttonous Guest",
            "Urge to Feed",
            "Vampire of the Dire Moon",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Vampires (2)",
        "set": "FDN,J25",
        "cards": [
            "Crossway Troublemakers",
            "Sanctum Seeker",
            "Scourge of the Undercity",
            "Nazar, the Velvet Fang",
            "Alchemist's Gift",
            "Bleed Dry",
            "Blood Fountain",
            "Bloodthirsty Aerialist",
            "Creeping Bloodsucker",
            "Gluttonous Guest",
            "Urge to Feed",
            "Vampire of the Dire Moon",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Vampires (3)",
        "set": "FDN,J25",
        "cards": [
            "Necropolis Regent",
            "Scourge of the Undercity",
            "Nazar, the Velvet Fang",
            "Skymarch Bloodletter",
            "Bleed Dry",
            "Blood Fountain",
            "Creeping Bloodsucker",
            "Gift of Fangs",
            "Gluttonous Guest",
            "Go for the Throat",
            "Thirsting Bloodlord",
            "Vicious Conquistador",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Vampires (4)",
        "set": "FDN,J25",
        "cards": [
            "Rodolf Duskbringer",
            "Scourge of the Undercity",
            "Nazar, the Velvet Fang",
            "Bleed Dry",
            "Blood Burglar",
            "Blood Fountain",
            "Epicure of Blood",
            "Exsanguinate",
            "Gluttonous Guest",
            "Moment of Craving",
            "Vampire Nighthawk",
            "Vampire of the Dire Moon",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Grave Robbers (1)",
        "set": "FDN,J25",
        "cards": [
            "Gorex, the Tombshell",
            "Revoke Demise",
            "Eternal Taskmaster",
            "Deal Gone Bad",
            "Diregraf Scavenger",
            "Eye Collector",
            "Gorging Vulture",
            "Grave Strength",
            "Graveblade Marauder",
            "Gravedigger",
            "Murder",
            "Wailing Ghoul",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Grave Robbers (2)",
        "set": "FDN,J25",
        "cards": [
            "Gorex, the Tombshell",
            "Doomed Necromancer",
            "Revoke Demise",
            "Eternal Taskmaster",
            "Deal Gone Bad",
            "Dusk Mangler",
            "Eye Collector",
            "Fake Your Own Death",
            "Gorging Vulture",
            "Moodmark Painter",
            "Necrotic Wound",
            "Undead Butler",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Grave Robbers (3)",
        "set": "FDN,J25",
        "cards": [
            "Isareth the Awakener",
            "Revoke Demise",
            "Eternal Taskmaster",
            "Boneclad Necromancer",
            "Deal Gone Bad",
            "Dreadhound",
            "Gorging Vulture",
            "Grave Strength",
            "Gravedigger",
            "Murder",
            "Persistent Specimen",
            "Wailing Ghoul",
            "Memorial to Folly",
            "Thriving Moor",
            "6 Swamp"
        ]
    },
    {
        "deck_title": "Grave Robbers (4)",
        "set": "FDN,J25",
        "cards": [
            "Isareth the Awakener",
            "Liliana, Death's Majesty",
            "Revoke Demise",
            "Shardless Outlander",
            "Eternal Taskmaster",
            "Deal Gone Bad",
            "Goremand",
            "Gorging Vulture",
            "Gravedigger",
            "Murder",
            "Persistent Specimen",
            "Undead Butler",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Ghastly (1)",
        "set": "FDN,J25",
        "cards": [
            "Harvester of Souls",
            "Ozox, the Clattering King",
            "Blood Beckoning",
            "Doomed Dissenter",
            "Dross Hopper",
            "Falkenrath Noble",
            "Moan of the Unhallowed",
            "Morbid Opportunist",
            "Murder",
            "Tragic Slip",
            "Village Rites",
            "Wakedancer",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Ghastly (2)",
        "set": "FDN,J25",
        "cards": [
            "Bloodgift Demon",
            "Ozox, the Clattering King",
            "Blood Beckoning",
            "Defenestrate",
            "Doomed Dissenter",
            "Falkenrath Noble",
            "Gnawing Zombie",
            "Moan of the Unhallowed",
            "Morbid Opportunist",
            "Tragic Slip",
            "Typhoid Rats",
            "Village Rites",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Ghastly (3)",
        "set": "FDN,J25",
        "cards": [
            "Reaper from the Abyss",
            "Wriggling Grub",
            "Ozox, the Clattering King",
            "Deadly Dispute",
            "Blood Beckoning",
            "Boneclad Necromancer",
            "Dross Hopper",
            "Falkenrath Noble",
            "Morbid Opportunist",
            "Morkrut Behemoth",
            "Murder",
            "Tragic Slip",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Ghastly (4)",
        "set": "FDN,J25",
        "cards": [
            "Army of the Damned",
            "Ozox, the Clattering King",
            "Deadly Dispute",
            "Shambling Ghast",
            "Crawl from the Cellar",
            "Defenestrate",
            "Doomed Dissenter",
            "Falkenrath Noble",
            "Moan of the Unhallowed",
            "Morbid Opportunist",
            "Tragic Slip",
            "Wakedancer",
            "Thriving Moor",
            "7 Swamp"
        ]
    },
    {
        "deck_title": "Too Many",
        "set": "FDN,J25",
        "cards": [
            "Fiendish Duo",
            "Goblin Surprise",
            "2 Brothers Yamazaki",
            "Battle-Rattle Shaman",
            "Krenko's Command",
            "Furious Reprisal",
            "Mogg Flunkies",
            "Pigment Storm",
            "Reckless Impulse",
            "Twinferno",
            "Weaselback Redcap",
            "Thriving Bluff",
            "6 Mountain"
        ]
    },
    {
        "deck_title": "Burning",
        "set": "FDN,J25",
        "cards": [
            "Rionya, Fire Dancer",
            "Firespitter Whelp",
            "Hearts on Fire",
            "Fathom Fleet Firebrand",
            "Goblin Fireslinger",
            "Bloodfire Expert",
            "Chandra's Spitfire",
            "Firebrand Archer",
            "Flames of the Firebrand",
            "Jaya's Firenado",
            "Play with Fire",
            "Wildfire Elemental",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Dragons (1)",
        "set": "FDN,J25",
        "cards": [
            "Lathliss, Dragon Queen",
            "Firespitter Whelp",
            "Carnelian Orb of Dragonkind",
            "Dragon's Fire",
            "Seize the Spoils",
            "Bathe in Dragonfire",
            "Dragon Hatchling",
            "Dragon Whelp",
            "Dragonlord's Servant",
            "Rapacious Dragon",
            "Sparktongue Dragon",
            "Forgotten Cave",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Dragons (2)",
        "set": "FDN,J25",
        "cards": [
            "Lathliss, Dragon Queen",
            "Sarkhan, Fireblood",
            "Firespitter Whelp",
            "Dragon's Fire",
            "Seize the Spoils",
            "Dragon Hatchling",
            "Dragon Whelp",
            "Dragonlord's Servant",
            "Hellkite Whelp",
            "Sarkhan's Rage",
            "Sparktongue Dragon",
            "Forgotten Cave",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Copied (1)",
        "set": "FDN,J25",
        "cards": [
            "Zada, Hedron Grinder",
            "Scholar of Combustion",
            "Guttersnipe",
            "Kiln Fiend",
            "Crimson Wisps",
            "Cyclops Electromancer",
            "Fire Prophecy",
            "Fists of Flame",
            "Invigorated Rampage",
            "Renegade Tactics",
            "Spellgorger Weird",
            "Young Pyromancer",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Copied (2)",
        "set": "FDN,J25",
        "cards": [
            "Zada, Hedron Grinder",
            "Charmbreaker Devils",
            "Firespitter Whelp",
            "Hearts on Fire",
            "Scholar of Combustion",
            "Kiln Fiend",
            "Ancestral Anger",
            "Ancestral Anger",
            "Cyclops Electromancer",
            "Fire Prophecy",
            "Uncaged Fury",
            "Young Pyromancer",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Warriors (1)",
        "set": "FDN,J25",
        "cards": [
            "Gornog, the Red Reaper",
            "Ghitu Encampment",
            "Boggart Brute",
            "Boldwyr Intimidator",
            "Expedition Champion",
            "Goma Fada Vanguard",
            "Keldon Raider",
            "Kindled Fury",
            "Kruin Striker",
            "Pyrophobia",
            "Soul Sear",
            "Wrecking Crew",
            "Relic Axe",
            "Thriving Bluff",
            "6 Mountain"
        ]
    },
    {
        "deck_title": "Warriors (2)",
        "set": "FDN,J25",
        "cards": [
            "Gornog, the Red Reaper",
            "Kargan Intimidator",
            "Ghitu Encampment",
            "Boldwyr Intimidator",
            "Daybreak Combatants",
            "Goma Fada Vanguard",
            "Infuriate",
            "Keldon Raider",
            "Pyrophobia",
            "Soul Sear",
            "Unstoppable Ogre",
            "Wrecking Crew",
            "Relic Axe",
            "Thriving Bluff",
            "6 Mountain"
        ]
    },
    {
        "deck_title": "Stoked (1)",
        "set": "FDN,J25",
        "cards": [
            "Frontline Heroism",
            "Hearts on Fire",
            "Scholar of Combustion",
            "Cleon, Merry Champion",
            "Kiln Fiend",
            "Arena Athlete",
            "Resistance Skywarden",
            "Roil Eruption",
            "Satyr Hoplite",
            "Titan's Strength",
            "Twinferno",
            "Uncaged Fury",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Stoked (2)",
        "set": "FDN,J25",
        "cards": [
            "Dreadhorde Arcanist",
            "Hearts on Fire",
            "Cleon, Merry Champion",
            "Kiln Fiend",
            "Arena Athlete",
            "Coordinated Assault",
            "Hero of the Games",
            "Resistance Skywarden",
            "Roil Eruption",
            "Satyr Hoplite",
            "Titan's Strength",
            "Unleash Fury",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Stoked (3)",
        "set": "FDN,J25",
        "cards": [
            "Frontline Heroism",
            "Mirrorwing Dragon",
            "Hearts on Fire",
            "Scholar of Combustion",
            "Cleon, Merry Champion",
            "Akroan Crusader",
            "Arena Athlete",
            "Roil Eruption",
            "Titan's Strength",
            "Twinferno",
            "Unleash Fury",
            "Young Pyromancer",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Stoked (4)",
        "set": "FDN,J25",
        "cards": [
            "Goblin Dark-Dwellers",
            "Hearts on Fire",
            "Cleon, Merry Champion",
            "Akroan Crusader",
            "Arena Athlete",
            "Crimson Wisps",
            "Hero of the Games",
            "Infuriate",
            "Roil Eruption",
            "Uncaged Fury",
            "Weaver of Lightning",
            "Young Pyromancer",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Goblins (1)",
        "set": "FDN,J25",
        "cards": [
            "Dropkick Bomber",
            "Goblin Surprise",
            "General Kreat, the Boltbringer",
            "Battle Cry Goblin",
            "Krenko's Command",
            "Volley Veteran",
            "Brute Strength",
            "Fissure Wizard",
            "Goblin Researcher",
            "Open Fire",
            "Shock",
            "Weaselback Redcap",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Goblins (2)",
        "set": "FDN,J25",
        "cards": [
            "Dropkick Bomber",
            "Goblin Goliath",
            "Goblin Surprise",
            "General Kreat, the Boltbringer",
            "Battle Cry Goblin",
            "Krenko's Command",
            "Volley Veteran",
            "Goblin Arsonist",
            "Kindled Fury",
            "Mogg Flunkies",
            "Open Fire",
            "Shock",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Goblins (3)",
        "set": "FDN,J25",
        "cards": [
            "Krenko, Tin Street Kingpin",
            "Goblin Surprise",
            "General Kreat, the Boltbringer",
            "Beetleback Chief",
            "Goblin Smuggler",
            "Krenko's Command",
            "Volley Veteran",
            "Goblin Trailblazer",
            "Open Fire",
            "Scavenged Blade",
            "Shock",
            "Weaselback Redcap",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Goblins (4)",
        "set": "FDN,J25",
        "cards": [
            "Goblin Rabblemaster",
            "Goblin Surprise",
            "General Kreat, the Boltbringer",
            "Battle Cry Goblin",
            "Destructive Digger",
            "Krenko's Command",
            "Volley Veteran",
            "Brute Strength",
            "Fanatical Firebrand",
            "Fire Prophecy",
            "Fissure Wizard",
            "Shock",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Bloody (1)",
        "set": "FDN,J25",
        "cards": [
            "Anje's Ravager",
            "Ivora, Insatiable Heir",
            "Abandon Reason",
            "Belligerent Guest",
            "Blood Petal Celebrant",
            "Falkenrath Celebrants",
            "Flame-Blessed Bolt",
            "Incorrigible Youths",
            "Soul Sear",
            "Stolen Vitality",
            "Voldaren Duelist",
            "Voldaren Epicure",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Bloody (2)",
        "set": "FDN,J25",
        "cards": [
            "Markov Blademaster",
            "Markov Enforcer",
            "Ivora, Insatiable Heir",
            "Blood Hypnotist",
            "Blood Petal Celebrant",
            "Falkenrath Celebrants",
            "Flame-Blessed Bolt",
            "Insolent Neonate",
            "Markov Retribution",
            "Soul Sear",
            "Stolen Vitality",
            "Voldaren Duelist",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Bloody (3)",
        "set": "FDN,J25",
        "cards": [
            "Scion of Opulence",
            "Ivora, Insatiable Heir",
            "Blood Feud",
            "Belligerent Guest",
            "Blood Petal Celebrant",
            "Falkenrath Celebrants",
            "Flame-Blessed Bolt",
            "Insolent Neonate",
            "Markov Warlord",
            "Soul Sear",
            "Vampiric Fury",
            "Voldaren Duelist",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Bloody (4)",
        "set": "FDN,J25",
        "cards": [
            "Falkenrath Marauders",
            "Ivora, Insatiable Heir",
            "Blood Feud",
            "Belligerent Guest",
            "Blood Petal Celebrant",
            "Falkenrath Celebrants",
            "Neonate's Rush",
            "Soul Sear",
            "Stolen Vitality",
            "Voldaren Ambusher",
            "Voldaren Duelist",
            "Voldaren Epicure",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Zealots (1)",
        "set": "FDN,J25",
        "cards": [
            "Zealous Conscripts",
            "Anep, Vizier of Hazoret",
            "Ahn-Crop Crasher",
            "Battlefield Scavenger",
            "Bloodlust Inciter",
            "Brute Strength",
            "Cartouche of Zeal",
            "Emberhorn Minotaur",
            "Flame-Blessed Bolt",
            "Fling",
            "Nef-Crop Entangler",
            "Trial of Zeal",
            "Desert of the Fervent",
            "Thriving Bluff",
            "6 Mountain"
        ]
    },
    {
        "deck_title": "Zealots (2)",
        "set": "FDN,J25",
        "cards": [
            "Sandstorm Crasher",
            "Anep, Vizier of Hazoret",
            "Ahn-Crop Crasher",
            "Battlefield Scavenger",
            "Bloodlust Inciter",
            "Cartouche of Zeal",
            "Flame-Blessed Bolt",
            "Fling",
            "Kindled Fury",
            "Pathmaker Initiate",
            "Trial of Zeal",
            "Zealot of the God-Pharaoh",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Zealots (3)",
        "set": "FDN,J25",
        "cards": [
            "Combat Celebrant",
            "Hearts on Fire",
            "Anep, Vizier of Hazoret",
            "Battlefield Scavenger",
            "Bloodlust Inciter",
            "Cartouche of Zeal",
            "Emberhorn Minotaur",
            "Fling",
            "Nef-Crop Entangler",
            "Shock",
            "Trial of Zeal",
            "Trueheart Twins",
            "Desert of the Fervent",
            "Thriving Bluff",
            "6 Mountain"
        ]
    },
    {
        "deck_title": "Zealots (4)",
        "set": "FDN,J25",
        "cards": [
            "Sandstorm Crasher",
            "Zealous Conscripts",
            "Anep, Vizier of Hazoret",
            "Battlefield Scavenger",
            "Bloodlust Inciter",
            "Cartouche of Zeal",
            "Fling",
            "Kindled Fury",
            "Minotaur Sureshot",
            "Nef-Crop Entangler",
            "Trial of Zeal",
            "Trueheart Twins",
            "Thriving Bluff",
            "7 Mountain"
        ]
    },
    {
        "deck_title": "Dinner",
        "set": "FDN,J25",
        "cards": [
            "Hurska Sweet-Tooth",
            "Saurian Symbiote",
            "Bite Down",
            "Fierce Witchstalker",
            "Giant Opportunity",
            "Insatiable Appetite",
            "Maraleaf Rider",
            "Orchard Strider",
            "Tireless Provisioner",
            "Tough Cookie",
            "Trail of Crumbs",
            "Gingerbrute",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Modified",
        "set": "FDN,J25",
        "cards": [
            "Kodama of the West Tree",
            "Saurian Symbiote",
            "Shardless Outlander",
            "Audacity",
            "Defend the Celestus",
            "Gnarlid Colony",
            "Heir of the Ancient Fang",
            "Orochi Merge-Keeper",
            "Reckless Amplimancer",
            "Snakeskin Veil",
            "Warbriar Blessing",
            "Wolfrider's Saddle",
            "Cave of Temptation",
            "Thriving Grove",
            "6 Forest"
        ]
    },
    {
        "deck_title": "Fun Guys (1)",
        "set": "FDN,J25",
        "cards": [
            "Shroofus Sproutsire",
            "Saurian Symbiote",
            "Slimy Piper",
            "Band Together",
            "Fungal Plots",
            "Might of the Masses",
            "Overwhelm",
            "Saproling Migration",
            "Spore Crawler",
            "Spore Swarm",
            "Sporecrown Thallid",
            "Tukatongue Thallid",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Fun Guys (2)",
        "set": "FDN,J25",
        "cards": [
            "Shroofus Sproutsire",
            "Verdeloth the Ancient",
            "Saurian Symbiote",
            "Slimy Piper",
            "Undercellar Myconid",
            "Band Together",
            "For the Family",
            "Fungal Plots",
            "Overcome",
            "Saproling Migration",
            "Spore Swarm",
            "Sporecrown Thallid",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Beasts (1)",
        "set": "FDN,J25",
        "cards": [
            "Slinza, the Spiked Stampede",
            "Hungry Megasloth",
            "Spined Tyrranax",
            "Woodland Liege",
            "Explore",
            "Gift of the Gargantuan",
            "Advocate of the Beast",
            "Brushstrider",
            "Gnarlid Colony",
            "Obstinate Baloth",
            "Predator's Strike",
            "Time to Feed",
            "Thriving Grove",
            "6 Forest"
        ]
    },
    {
        "deck_title": "Beasts (2)",
        "set": "FDN,J25",
        "cards": [
            "Slinza, the Spiked Stampede",
            "Garruk, Caller of Beasts",
            "Hungry Megasloth",
            "Woodland Liege",
            "Advocate of the Beast",
            "Baloth Gorger",
            "Brushstrider",
            "Bushwhack",
            "Garruk's Packleader",
            "Gnarlid Colony",
            "Predator's Strike",
            "Time to Feed",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Dinosaurs (1)",
        "set": "FDN,J25",
        "cards": [
            "Ghalta, Primal Hunger",
            "Saurian Symbiote",
            "Armored Kincaller",
            "Colossal Dreadmaw",
            "Commune with Dinosaurs",
            "Drover of the Mighty",
            "Drowsing Tyrannodon",
            "Giant Growth",
            "Rampant Growth",
            "Savage Stomp",
            "Thrashing Brontodon",
            "Thundering Spineback",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Dinosaurs (2)",
        "set": "FDN,J25",
        "cards": [
            "Ghalta, Primal Hunger",
            "Topiary Stomper",
            "Saurian Symbiote",
            "Cherished Hatchling",
            "Colossal Dreadmaw",
            "Commune with Dinosaurs",
            "Drowsing Tyrannodon",
            "Predator's Strike",
            "Rampant Growth",
            "Tail Swipe",
            "Thrashing Brontodon",
            "Thundering Spineback",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Encounter (1)",
        "set": "FDN,J25",
        "cards": [
            "Forgotten Ancient",
            "Spined Tyrranax",
            "Mowu, Loyal Companion",
            "Biogenic Upgrade",
            "Aggressive Instinct",
            "Ainok Artillerist",
            "Deepwood Denizen",
            "Duskshell Crawler",
            "Greenwood Sentinel",
            "Jiang Yanggu, Wildcrafter",
            "Servant of the Scale",
            "Snakeskin Veil",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Encounter (2)",
        "set": "FDN,J25",
        "cards": [
            "Oran-Rief Ooze",
            "Saurian Symbiote",
            "Spined Tyrranax",
            "Mowu, Loyal Companion",
            "Aggressive Instinct",
            "Deepwood Denizen",
            "Duskshell Crawler",
            "Greenwood Sentinel",
            "Invigorating Surge",
            "Jiang Yanggu, Wildcrafter",
            "Jungle Delver",
            "Stony Strength",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Encounter (3)",
        "set": "FDN,J25",
        "cards": [
            "Rishkar, Peema Renegade",
            "Saurian Symbiote",
            "Spined Tyrranax",
            "Mowu, Loyal Companion",
            "Biogenic Upgrade",
            "Aggressive Instinct",
            "Deepwood Denizen",
            "Duskshell Crawler",
            "Jiang Yanggu, Wildcrafter",
            "Reckless Amplimancer",
            "Servant of the Scale",
            "Snakeskin Veil",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Encounter (4)",
        "set": "FDN,J25",
        "cards": [
            "Primeval Bounty",
            "Quirion Beastcaller",
            "Hungry Megasloth",
            "Mowu, Loyal Companion",
            "Aggressive Instinct",
            "Armorcraft Judge",
            "Big Play",
            "Deepwood Denizen",
            "Gnarlid Colony",
            "Jiang Yanggu, Wildcrafter",
            "Moldgraf Millipede",
            "Pridemalkin",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Explorers (1)",
        "set": "FDN,J25",
        "cards": [
            "Realm Seekers",
            "Go Forth",
            "Razorgrass Invoker",
            "Slimy Piper",
            "Shardless Outlander",
            "Braulios of Pheres Band",
            "Explore",
            "Adventurous Impulse",
            "Ainok Guide",
            "Clear Shot",
            "Ghirapur Guide",
            "Tireless Provisioner",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Explorers (2)",
        "set": "FDN,J25",
        "cards": [
            "Tireless Tracker",
            "Go Forth",
            "Razorgrass Invoker",
            "Slimy Piper",
            "Shardless Outlander",
            "Braulios of Pheres Band",
            "Explore",
            "Ainok Guide",
            "Byway Courier",
            "Clear Shot",
            "Primeval Herald",
            "Ulvenwald Mysteries",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Explorers (3)",
        "set": "FDN,J25",
        "cards": [
            "Briarbridge Tracker",
            "Somberwald Beastmaster",
            "Go Forth",
            "Slimy Piper",
            "Shardless Outlander",
            "Braulios of Pheres Band",
            "Explore",
            "Ambassador Oak",
            "Byway Courier",
            "Clear Shot",
            "Ulvenwald Mysteries",
            "Woodland Champion",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Explorers (4)",
        "set": "FDN,J25",
        "cards": [
            "Jadelight Ranger",
            "Go Forth",
            "Razorgrass Invoker",
            "Slimy Piper",
            "Shardless Outlander",
            "Braulios of Pheres Band",
            "Explore",
            "Adventurous Impulse",
            "Clear Shot",
            "Ixalli's Diviner",
            "Merfolk Branchwalker",
            "Primeval Herald",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Elves (1)",
        "set": "FDN,J25",
        "cards": [
            "Leaf-Crowned Visionary",
            "Razorgrass Invoker",
            "Dionus, Elvish Archdruid",
            "Elvish Visionary",
            "Llanowar Elves",
            "Arbor Armament",
            "Band Together",
            "Bounty of Skemfar",
            "Ghirapur Guide",
            "Overcome",
            "Tajuru Pathwarden",
            "Thornweald Archer",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Elves (2)",
        "set": "FDN,J25",
        "cards": [
            "Elvish Archdruid",
            "Razorgrass Invoker",
            "Dionus, Elvish Archdruid",
            "Elvish Visionary",
            "Llanowar Elves",
            "Bounty of Skemfar",
            "Dwynen's Elite",
            "High-Rise Sawjack",
            "Hunter's Edge",
            "Kujar Seedsculptor",
            "Might of the Masses",
            "Overcome",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Elves (3)",
        "set": "FDN,J25",
        "cards": [
            "Marwyn, the Nurturer",
            "Go Forth",
            "Razorgrass Invoker",
            "Dionus, Elvish Archdruid",
            "Llanowar Elves",
            "Band Together",
            "Bounty of Skemfar",
            "Dwynen's Elite",
            "Llanowar Visionary",
            "Overcome",
            "Tajuru Pathwarden",
            "Thornweald Archer",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Elves (4)",
        "set": "FDN,J25",
        "cards": [
            "Tyvar Kell",
            "Voice of the Woods",
            "Dionus, Elvish Archdruid",
            "Llanowar Elves",
            "Arbor Armament",
            "Ghirapur Guide",
            "High-Rise Sawjack",
            "Hunter's Edge",
            "Ivy Lane Denizen",
            "Overcome",
            "Paradise Druid",
            "Reckless Amplimancer",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Landfall (1)",
        "set": "FDN,J25",
        "cards": [
            "Lotus Cobra",
            "Undergrowth Champion",
            "Sutina, Speaker of the Tajuru",
            "Adventure Awaits",
            "Baloth Woodcrasher",
            "Bite Down",
            "Canopy Baloth",
            "Harrow",
            "Kazandu Stomper",
            "Skyclave Pick-Axe",
            "Snapping Gnarlid",
            "Evolving Wilds",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Landfall (2)",
        "set": "FDN,J25",
        "cards": [
            "Ancient Greenwarden",
            "Sutina, Speaker of the Tajuru",
            "Bite Down",
            "Bond of Flourishing",
            "Canopy Baloth",
            "Kazandu Nectarpot",
            "Kazandu Stomper",
            "Krosan Tusker",
            "Retreat to Kazandu",
            "Snapping Gnarlid",
            "Territorial Scythecat",
            "Evolving Wilds",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Landfall (3)",
        "set": "FDN,J25",
        "cards": [
            "Scythecat Cub",
            "Sutina, Speaker of the Tajuru",
            "Bite Down",
            "Canopy Baloth",
            "Harrow",
            "Kazandu Stomper",
            "Murasa Ranger",
            "Retreat to Kazandu",
            "Snapping Gnarlid",
            "Territorial Scythecat",
            "Cliffhaven Kitesail",
            "Evolving Wilds",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Landfall (4)",
        "set": "FDN,J25",
        "cards": [
            "Scythecat Cub",
            "Sutina, Speaker of the Tajuru",
            "Baloth Woodcrasher",
            "Bite Down",
            "Canopy Baloth",
            "Grazing Gladehart",
            "Groundswell",
            "Harrow",
            "Skyclave Pick-Axe",
            "Snapping Gnarlid",
            "Sporemound",
            "Evolving Wilds",
            "Thriving Grove",
            "7 Forest"
        ]
    },
    {
        "deck_title": "Chaos",
        "set": "FDN,J25",
        "cards": [
            "Averna, the Chaos Bloom",
            "Shardless Outlander",
            "Chromatic Lantern",
            "Ash Barrens",
            "Terramorphic Expanse",
            "Fiery Fall",
            "Druid of the Anima",
            "Bituminous Blast",
            "Bloodbraid Elf",
            "Enlisted Wurm",
            "Fusion Elemental",
            "Violent Outburst",
            "Maelstrom Colossus",
            "Plains",
            "Island",
            "Swamp",
            "2 Mountain",
            "2 Forest"
        ]
    }
];

const landToColor: Record<string, 'White' | 'Blue' | 'Black' | 'Red' | 'Green'> = {
    'Plains': 'White',
    'Island': 'Blue',
    'Swamp': 'Black',
    'Mountain': 'Red',
    'Forest': 'Green'
}

const getDeckColor = (deck: { cards: string[] }): 'White' | 'Blue' | 'Black' | 'Red' | 'Green' | 'Multicolored' => {
    const colors = new Set<string>();
    for (const card of deck.cards) {
        for (const land in landToColor) {
            if (card.includes(land)) {
                colors.add(landToColor[land]);
            }
        }
        if(card.includes('Thriving')) {
            // Thriving lands are multicolored, but we need to check the specific land
            if(card.includes('Heath')) colors.add('White');
            if(card.includes('Isle')) colors.add('Blue');
            if(card.includes('Moor')) colors.add('Black');
            if(card.includes('Bluff')) colors.add('Red');
            if(card.includes('Grove')) colors.add('Green');
        }
    }
    if (colors.size > 1) return 'Multicolored';
    if(colors.has('White')) return 'White';
    if(colors.has('Blue')) return 'Blue';
    if(colors.has('Black')) return 'Black';
    if(colors.has('Red')) return 'Red';
    if(colors.has('Green')) return 'Green';
    
    if(rawDecks.find(d => d.deck_title === 'Chaos')) return 'Multicolored';

    return 'White'; // Default fallback
}

export const allDecks: Deck[] = rawDecks.map(deck => ({
    name: deck.deck_title,
    set: deck.set,
    cards: deck.cards,
    color: getDeckColor(deck)
}));
