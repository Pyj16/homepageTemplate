import imgArrow from '../assets/imgArrow.png'

import {useState} from 'react'
import {titleImgs} from "../data/mockDb.js"

const imgs = titleImgs

const TitleCard = () => {

    const [img, setImg] = useState(imgs[0]) // Current image on display
    const [oldImg, setOldImg] = useState(imgs[0]) // Old transition image
    const [opacity, setOpacity] = useState(100) // Opacity of transition
    const [enabled, setEnabled] = useState(true) // Whether the left and right buttons are enabled

    const changeNext = () => {
        setOldImg(img);
        const newIndex = imgs.indexOf(img) + 1;
        let newImg;
        if (newIndex > imgs.length-1) {
            setImg(imgs[0]);
            newImg = imgs[0]
        }
        else{
            setImg(imgs[newIndex])
            newImg = imgs[newIndex]
        }
        setOpacity(0)
        setEnabled(false)
        setTimeout(() => {
            setOpacity(100)
            setOldImg(newImg)
        }, 500)
        setTimeout(() => {
            setEnabled(true)
        }, 1000)
    }

    const changePrev = () => {
        setOldImg(img);
        const newIndex = imgs.indexOf(img) - 1;
        let newImg;
        if (newIndex < 0) {
            setImg(imgs[imgs.length - 1]);
            newImg = imgs[imgs.length - 1]
        }
        else{
            setImg(imgs[newIndex])
            newImg = imgs[newIndex]
        }
        setOpacity(0)
        setEnabled(false)
        setTimeout(() => {
            setOpacity(100)
            setOldImg(newImg)
        }, 500)
        setTimeout(() => {
            setEnabled(true)
        }, 1000)
    }

    return(
        <div className='relative top-0 pb-[48rem]'>
            <h1 className="absolute z-[2] md:pl-56 pl-5 pt-24 lg:pt-64 text-7xl drop-shadow-sm font-bold">
                Title
            </h1>
            <img className={"object-none w-full h-[48rem] absolute " } src={img} alt="Title Image" />
            <img className={"object-none w-full h-[48rem] absolute duration-500 " + "opacity-" + opacity} src={oldImg} alt="Transition Image" />
            <button onClick={changePrev} disabled={!enabled} className={'absolute z-4 left-20 top-72 opacity-50 max-lg:hidden'}>
                <img className='scale-x-[-1] z-[2]' src={imgArrow} alt="arrow" height={100} width={100}/>
            </button>
            <button onClick={changeNext} disabled={!enabled} className='absolute z-4 right-20 top-72 opacity-50 max-lg:hidden'>
                <img className='z-[2]' src={imgArrow} alt="arrow" height={100} width={100}/>
            </button>
        </div>
    )
}

export default TitleCard;
