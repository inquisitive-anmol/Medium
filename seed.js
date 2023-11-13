const mongoose = require('mongoose');
const Blog = require('./Models/Blog');
const Trend = require('./Models/Trending');

let blogs = [
    {
        name : "Anne Bonfert",
        headline : "Mastering the Art of Rain Photography",
        text : "Making the best of a rainy day out in nature",
        org : "Full Frame",
        date : "Aug 27",
        img : "https://miro.medium.com/v2/resize:fill:300:201/1*eRZvwXIdOZRUwS_f14fuDA.jpeg",
        comment : "Today, it rains on and off. More or less. The weather is moving in from the southwest bringing saturated clouds for the next three days. Knowing it will be rainy makes my life easier. I can prepare myself. I know what the weather is going to be like. I can now decide to sulk and be sad about the last days of summer being flooded, or I can make the best of it.",
        author : "6544d7624f00cad6dad7b2c8",
        reviews : [],
        likes : []
    },
    {
        name : "Microsoft Design",
        headline : "Living Color: Designing through synesthesia",
        text : "How a design director’s experience",
        org : '',
        date : "Oct 3",
        img : "https://miro.medium.com/v2/resize:fill:300:201/1*aDcuhrWX6Gqksa9TXmAHjw.png",
        comment : "I look at him like, what? Can you believe this guy? I take it upon myself to be the one to correct him. And then it happens. In just a few words, I forever change my life. “That’s not right,” I blurt out. “You need yellow in there and blue at the end.”",
        author : "6544d7624f00cad6dad7b2c8",
        reviews : [],
        likes : []
    },
    {
        name : "Amanda Melheim",
        headline : "‘I Hear It Likes the Girls’",
        text : "The Ghostbusters music video, sexual predators, and race history in America",
        org : "Counter Arts",
        date : "Oct 2",
        img : "https://miro.medium.com/v2/resize:fill:300:201/1*fZHJ5StaYulyQCGZC1uZjA.jpeg",
        comment : "When I was little, I loved when the Ghostbusters theme came on the radio. I used to yell, “I ain’t afraid of no ghost!” along with it. Of course, as I got older, I understood the irony of that statement. Ray Parker, Jr. is mocking that sentiment, not supporting it. By implication, he is asking, “Are you sure?”",
        author : "6544d7624f00cad6dad7b2c8",
        reviews : [],
        likes : []
    },
    {
        name : "Amy J. Ko",
        headline : "Programming is sculpting",
        text : "Logic as art",
        org : "Bits and Behavior",
        date : "Oct 2",
        img : "https://miro.medium.com/v2/resize:fill:300:201/0*mZkHvzaL945Oqwgb",
        comment : "Throughout, though, mathematics emerged as my ultimate medium. I was fascinated by the way that a small number of ideas, just like a constrained palette, or the simple combinatorial possibilities of a lego brick, could be responsible for so much complexity. Primary math showed me these tools, but middle school math revealed to me how symbols could represent shapes, images, or entire theories of the universe and its matter. If I arranged the symbols in just the right order, I might create the illusion of life.",
        author : "6544d7624f00cad6dad7b2c8",
        reviews : [],
        likes : []
    },
    {
        name : "Bryn Bodayle",
        headline : "Unlocking SwiftUI at Airbnb",
        text : "How Airbnb adopted SwiftUI in our iOS app",
        org : "The Airbnb Tech Blog",
        date : "Sep21",
        img : "https://miro.medium.com/v2/resize:fill:300:201/1*vPOnFshuzNBfYTNpuDbvug.jpeg",
        comment : "In this post, we share why and how we ultimately replaced Epoxy and UIKit with SwiftUI at Airbnb. We’ll detail how we integrated SwiftUI into Airbnb’s design system, explain the results of this effort, and enumerate a few challenges we’re still working through. After reading this post you’ll understand why SwiftUI has met our high bar for both user and developer experience.",
        author : "6544d7624f00cad6dad7b2c8",
        reviews : [],
        likes : []
    },
    {
        name : "Ema Dumitru",
        headline : "Goodbye Is Your Eyes Closing Over My Life",
        text : "Poem",
        org : "Scribe",
        date : "Sep 21",
        img : "https://miro.medium.com/v2/resize:fill:300:201/1*ihKctoobU2Gf8ABlG5THOA.jpeg",
        comment : "The grief is a planet. A dust ring. A small moon that’s been hiding under my pillow, that’s been changing the way my body moves this whole time.",
        author : "6544d7624f00cad6dad7b2c8",
        reviews : [],
        likes : []
    },
    {
        name : "M.G. Siegler",
        headline : "The Too-Slick Apple Event",
        text : "Some thoughts on the latest iPhone",
        org : "500ish",
        date : "Sep 14",
        img : "https://miro.medium.com/v2/resize:fill:300:201/1*zgmBceYqKKU9HPzQmsgwgQ.png",
        comment : "Look, the world doesn’t need yet another post piling on to the new iPhone 15 leather-replacement cases. But here I am anyway. I just can’t help myself. My initial gut reaction upon receiving the case a couple weeks ago still stands. The “FineWoven” cases are bad. Well, that’s not fair. They’re not bad bad, but they are bad relative to expectations for Apple products. And they’re worse than both the leather cases that preceded them and the silicone variety which not only still exist, but are cheaper. What was Apple thinking here?",
        author : "6544d7624f00cad6dad7b2c8",
        reviews : [],
        likes : []
    },
    {
        name : "Heather Lengyel",
        headline : "Four Stringed Furniture",
        text : "The magic of music",
        org : "The Lark",
        date : "Sep 9",
        img : "https://miro.medium.com/v2/resize:fill:300:201/1*y55EGq2t4hThYGlcCzJsBw@2x.jpeg",
        comment : "She swims in well-worn band tees high waisted acid washed jeans unlaced chucks sharpied by names she used to love; autographs of a foreign past —she wears her memories well.",
        author : "6544d7624f00cad6dad7b2c8",
        reviews : [],
        likes : []
    }

];

let trends = [
    {
        index : '01',
        name : 'The Bold Italic',
        text : 'The real crime in San Francisco: Fashion',
        details : 'Oct 9 · 7 min read',
        comment : "In San Francisco, there is a fresh crime wave that no DA can stop. Emboldened criminals are rushing around the streets wearing backpacks with suits, tan shoes with dark worsted slacks, and Patagonia fleece vests with chinos, dress shirts, and Allbird sneakers. Let’s take a look at some of the city’s most common fashion offenses today, as well as potential solutions."
    },
    {
        index : '02',
        name : 'George “Ace” Acevedo in ILLUMINATION',
        text : '5 Non-Obvious Things You Must Do Quickly When a Loved One Dies',
        details : 'Sep 28 · 3 min read',
        comment : "Despite your feelings, there are obvious things that need to be done right away. You may need to call 911. Then, the mortuary needs to be called. The family needs to be notified."
    },
    {
        index : '03',
        name : 'Sara Wachter-Boettcher in Nice Work',
        text : 'Hey designers, they’re gaslighting you.',
        details : 'Oct 5 · 14 min read',
        comment : "But pretty soon, I noticed another benefit: by talking with people in a range of different roles and organizations, I could start to see patterns. And lately, what people have been telling me has been alarming. "
    },
    {
        index : '04',
        name : 'Joey Votto',
        text : 'A Bus Ride',
        details : 'Sep 25 · 6 min read',
        comment : "I’m 19 years old and in the Cincinnati Reds minor league system, playing at their Midwest League, low minor league level. Joining professional baseball out of high school was my dream. I was a skinny, shy, passive Canadian kid. I knew almost nothing about the rigors of the professional sports world but was finding out quickly."
    },
    {
        index : '05',
        name : 'Carlos Arguelles',
        text : 'Beware of the Big Tech “Bubble”',
        details : 'Oct 7 · 10 min read',
        comment : "I’m NOT using the term “bubble” as in the dot-com-bubble” of the late nineties. I’m not predicting the doom of the tech industry. Rather, I’m using the term “bubble” as in “assuming that most people in the world live and think like you, because most people around you live and think like you.”"
    },
    {
        index : '06',
        name : 'Analytics at Meta',
        text : 'Data engineering at Meta: High-Level Overview of the internal tech stack',
        details : 'Oct 10 · 12 min read',
        comment : "This article provides an overview of the internal tech stack that we use on a daily basis as data engineers at Meta. The idea is to shed some light on the work we do, and how the tools and frameworks contribute to making our day-to-day data engineering work more efficient, and to share some of the design decisions and technical tradeoffs that we made along the way."
    }
]


async function seedDB()
{
    try {
        await Blog.insertMany(blogs);
        await Trend.insertMany(trends);
        // let newBlog = new Blog({
        //     name : "Heather Lengyel",
        // headline : "Four Stringed Furniture",
        // text : "The magic of music",
        // org : "The Lark",
        // date : "Sep 9",
        // img : "https://miro.medium.com/v2/resize:fill:300:201/1*y55EGq2t4hThYGlcCzJsBw@2x.jpeg",
        // comment : "She swims in well-worn band tees high waisted acid washed jeans unlaced chucks sharpied by names she used to love; autographs of a foreign past —she wears her memories well.",
        // author : "6544d7624f00cad6dad7b2c8",
        // reviews : [],
        // likes : []
        // });

        // await newBlog.save();
        console.log("DB SEEDED!")
    } catch (error) {
        console.log(error)
    }
    
}


module.exports = seedDB;


