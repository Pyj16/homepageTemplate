import titleImage from '../assets/titleImage.png'
import titleImage2 from '../assets/titleImage2.png'
import titleImage3 from '../assets/titleImage3.png'
import newsImage from '../assets/newsImage.png'
import cardImg from "../assets/cardImg.png"

// Options for the Header and Sidebar menus 
export const menuOptions = [
    {
        link: '/',
        text: 'Home'
    },
    {
        link: '/',
        text: 'About us'
    },
    {
        link: '/',
        text: 'Store'
    },
    {
        link: '/',
        text: 'Contact us'
    },
    
];

// Images on the title card
export const titleImgs = [
    titleImage,
    titleImage2,
    titleImage3
]

// Articles for the News section
export const newsArticles = [
    {
        title: 'News1',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolore.',
        img: newsImage,
        time: '01.01.2025',
    },
    {
        title: 'News2',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolore.',
        img: newsImage,
        time: '02.02.2025',

    },
    {
        title: 'News3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolore.',
        img: newsImage,
        time: '03.03.2025',
    },
    {
        title: 'News4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolore.',
        img: newsImage,
        time: '04.04.2025',
    },
]

// Cards that appear below the Subtitle
export const cards = [
    {
        title: "card1",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel expedita debitis delectus neque, perferendis fugiat aperiam at tempora excepturi? Veniam dolor consequatur id, vitae perspiciatis enim dicta. Nisi, soluta est.",
        img: cardImg
    },
    {
        title: "card2",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel expedita debitis delectus neque, perferendis fugiat aperiam at tempora excepturi? Veniam dolor consequatur id, vitae perspiciatis enim dicta. Nisi, soluta est.",
        img: cardImg
    },
    {
        title: "card3",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel expedita debitis delectus neque, perferendis fugiat aperiam at tempora excepturi? Veniam dolor consequatur id, vitae perspiciatis enim dicta. Nisi, soluta est.",
        img: cardImg
    },
]
