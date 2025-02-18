import {newsArticles} from "../data/mockDb.js" 

const articles = newsArticles

const News = () => {
    return(
        <div className='p-12 pb-36'>
            <h1 className='text-center pb-20 text-3xl font-bold'>
                News
            </h1>
            <div className='relative top-0 flex xl:overflow-x-hidden overflow-x-scroll'>
                <div className="m-auto flex flex-row">
                    {articles.map((a, i) => (
                        <div key={i} className='w-1/4 px-12 flex-col '>
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
