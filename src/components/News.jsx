import newsImage from '../assets/newsImage.png'

// TO-DO: make this a component
const articles = [
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
        time: '01.01.2025',

    },
    {
        title: 'News3',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolore.',
        img: newsImage,
        time: '01.01.2025',
    },
    {
        title: 'News4',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dolore.',
        img: newsImage,
        time: '01.01.2025',
    },
]

// TO-DO: Make scrolling on sm devices
const News = () => {
    return(
        <div className='p-20 pb-36'>
            <h1 className='text-center pb-20 text-3xl font-bold'>
                News
            </h1>
            <div className='relative top-0 flex'>
                <div className="m-auto flex flex-row">
                    {articles.map((a) => (
                        <div className='w-1/4 px-20 flex-col '>
                            <div className='w-52'>
                                <img src={a.img} alt="News Image" height={360} width={360}/>
                                <h1 className='text-2xl font-bold'>
                                    {a.title}
                                </h1>
                                <p>
                                    {a.desc}
                                </p>
                                <p className='italic text-sm' >
                                    Published: {a.time}
                                </p> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    )
}

export default News;
