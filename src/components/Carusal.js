import React, { useEffect, useState } from 'react';

const Carusal = () => {
    const [images] = useState([
        {
            url: "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=",
            duration: 5
        },
        {
            url: "https://media.istockphoto.com/id/519767045/photo/shah-faisal-mosque-islamabad-pakistan.jpg?s=612x612&w=0&k=20&c=YOdDSuvmaLxQUaOMlrv58-NnqWqqlNju-w3PiaT_FuY=",
            duration: 5
        },
        {
            url: "https://media-cdn.tripadvisor.com/media/photo-s/00/11/64/e6/faisal-mosque-amongst.jpg",
            duration: 5
        },
        {
            url: "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=480&h=320",
            duration: 5
        }
    ])
    const [counter, setCounter] = useState(0)
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (images.length - 1 > counter) {
                setCounter(counter + 1)
            } else {
                setCounter(0)
            }
            resetAnimation()
        }, 5000)

        return () => clearInterval(intervalId);
    }, [counter])

    const changeSlide = () => {
        if (images.length - 1 > counter) {
            setCounter(counter + 1)
        } else {
            setCounter(0)
        }
        resetAnimation()
    }

    const resetAnimation = () => {
        document.getElementsByClassName('progress')[0].style.webkitAnimationName = 'none'
        document.getElementsByClassName('progress')[0].offsetWidth
        document.getElementsByClassName('progress')[0].style.webkitAnimationName = ''
    }

    return (
        <div className="carusal">
            <div className="image">
                {/* thumbnail image */}
                <div className='carusal-controlls'>
                    <div className="thumbnail">
                        <div className="progress" id='animation' onClick={changeSlide}>
                            <div className="subbox">
                                <div className="preview">
                                    <img className="image" src={images[counter+1 < images.length ? counter+1:0].url} />
                                    <div className="overlay"></div>
                                    <span className="next-button">NEXT</span>
                                </div>
                            </div>
                        </div>
                        <div className="count">
                            <span>0{counter + 1}</span>&nbsp;<hr className="line" /> &nbsp;<span>04</span>
                        </div>
                    </div>
                </div>

                {/* changing images */}
                <img className="image bg-carusal animate" src={images[counter].url} />
            </div>
        </div>
    );
};

export default Carusal;