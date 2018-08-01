// Here, you'll create the 'database' of information that will be used
// to populate the website with information for each character

// Use the main Overwatch site as your reference for hero information
// https://playoverwatch.com/en-us/heroes/

// The value for the "img" key refers to the name of the image file
// in the "assets" folder. Feel free to use the ones provided, or
// download your own!

// 1) Create 3 of the following 6 objects based on the corresponding hero:
// sombra, doomfist, mercy, lucio, orisa, dVa 
// Note: The first hero is provided for you

// The structure for each hero object is as follows:
// NOTE: the "abilities" key stores an array of objects!

// const someHero = {
//     name:"someName",
//     type:"offense, defense, tank, or support",
//     difficulty:"1/3",
//     img:"somePic.png",
//     saying:"blah blah some saying",
//     story:"blah blah some story",
//     abilities:[
//         {
//             name:"ability1",
//             description:"blah blah about ability1"
//         },
//         {
//             name:"ability2",
//             description:"blah blah about ability2"
//         }
//     ]
// }

const Sombra = {
    name:"sombra",
    type:"offense",
    difficulty:"3/3",
    img:"assets/sombra.png",
    saying:"Everything can be hacked...and everyone.",
    story:"One of the world's most notorious hackers, Sombra uses information to manipulate those in power.Long before she took up the alias 'Sombra,' ░░░░░░ was among the thousands of children who were left orphaned in the aftermath of the Omnic Crisis. With much of her country's infrastructure destroyed, she survived by utilizing her natural gifts with hacking and computers. After ░░░░░░ was taken in by Mexico's Los Muertos gang, she aided it in its self-styled revolution against the government. Los Muertos believed that the rebuilding of Mexico had primarily benefited the rich and the influential, leaving behind those who were most in need of assistance. Following her many conquests, ░░░░░░ was supremely confident in her skills, but she was caught unprepared when she stumbled into the web of a global conspiracy—one that had also noticed her. With her security irreparably compromised, ░░░░░░ was forced to delete all traces of her identity and went into hiding. She later reemerged as Sombra, upgraded and determined to find out the truth behind the conspiracy she had uncovered. Sombra launched an even more audacious string of hacks, and her exploits earned her no shortage of admirers, including Talon. She joined the organization's ranks and is believed to have contributed to its massive cyberattacks against corporations with strong ties to their governments. These efforts incited a popular revolution in Mexico against LumériCo and breached the security of Volskaya Industries, the manufacturing arm of Russia's anti-omnic defense. Now, with Talon's extensive resources to call upon, Sombra can focus on her true goal: to unravel the conspiracy and use the power behind it to her own ends.",
    abilities:[
        {
            name:"Machine Pistol",
            description:"Sombra’s fully-automatic machine pistol fires in a short-range spread."
        },
        {
            name:"Hack",
            description:"Sombra hacks enemies to temporarily stop them from using their abilities, or hacks first aid kits to make them useless to her opponents."
        },
        {
            name:"Stealth",
            description:"Sombra becomes invisible for a short period of time, during which her speed is boosted considerably. Attacking, using offensive abilities, or taking damage disables her camouflage."
        },
        {
            name:"Translocator",
            description:"Sombra tosses out a translocator beacon. She can instantly return to the beacon’s location while it is active (including when it’s in mid-flight)."
        },
        {
            name:"EMP",
            description:"Sombra discharges electromagnetic energy in a wide radius, destroying enemy barriers and shields and hacking all opponents caught in the blast."
        },
    ]
}

const Lucio = {
    name:"Lucio",
    type:"Support",
    difficulty:"2/3",
    img:"assets/lucio.png",
    saying:"Look at this team-we're gonna do great.",
    story:"Lúcio Correia dos Santos grew up in Rio de Janeiro, in a poor and crowded favela that was hit hard by the financial upheaval following the Omnic Crisis. As Brazil began the long process of recovery, he wanted to find a way to lift the spirits of those around him. He found his answer in music and its power to bring people together and even help them forget their troubles, if only for a short time. He performed on street corners, in block parties, and as he got older, at a string of legendary underground shows.",
    abilities:[
        {
            name:"Sonic Amplifier",
            description:"Lúcio can hit his enemies with sonic projectiles or knock them back with a blast of sound."
        },
        {
            name:"Crossfade",
            description:"Lúcio continuously energizes himself—and nearby teammates—with music. He can switch between two songs: one amplifies movement speed, while the other regenerates health."
        },
        {
            name:"Amp It Up",
            description:"Lúcio increases the volume on his speakers, boosting the effects of his songs."
        },
        {
            name:"Sound Barrier",
            description:"Protective waves radiate out from Lúcio’s Sonic Amplifier, briefly providing him and nearby allies with personal shields."
        }
    ]
}
const Hammond = {
    name:"Hammond",
    type:"Tank",
    difficulty:"3/3",
    img:"assets/hammond.png",
    saying:"Do not anger the hamster.",
    story:"In one of the many experiments carried out at Horizon Lunar Colony, animals were given genetic therapy to assess their adaptation to extended periods of habitation on the moon. As an unexpected side effect, several of them exhibited exceptional growth in physical size and brain function. While most of the test subjects were gorillas or other primates, there were some exceptions, including a hamster named Hammond.",
    abilities:[
        {
            name:"Quad Cannons",
            description:"Wrecking Ball’s automatic assault cannons tear apart threats at medium range."
        },
        {
            name:"Roll",
            description:"Wrecking Ball transforms into a ball, increasing his maximum movement speed."
        },
        {
            name:"Grappling Claw",
            description:"Wrecking Ball launches a grappling claw, enabling him to anchor to an area and swing from it. If he strikes an enemy with a powered-up swing, they’re damaged and knocked back."
        },
        {
            name:"Adaptive Shields",
            description:"Wrecking Ball’s temporary personal shields absorb damage, providing stronger defenses if more opponents are nearby."
        },
        {
            name:"Piledriver",
            description:"Wrecking Ball slams onto the ground below, damaging enemies and launching them upward."
        },
        {
            name: "Minefield",
            description:"Wrecking Ball deploys a field of long-lasting proximity mines which explode on contact with enemies.",
        }
    ]
}
// 2) Create an array called "heroes" and store all of the hero object in the array
const heroes = [Sombra, Lucio, Hammond];
// 3) In "index.html", create a form that allows the user to create 
// and add a new hero (add it under the "#gridDiv").
// For simplicity, the form should just include: name, type, difficulty, and saying
// The form should have a "Submit" button

// 4) At the bottom of "events.js", give the "Submit" button an on click event handler 


// BONUS: add 3 more Overwatch heroes from Overwatch (remember to add 
// them to the "heroes" array!)

// BONUS: Since the "type" only has 4 valid options, try using a
// radio button instead of the standard text input
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio

// BONUS: In "style.css", style your form to look more like the rest
// of the website
