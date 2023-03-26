import React from 'react';
import slide1 from '../slide/slide1.png'
import slide2 from '../slide/slide2.png'
const Banner = () => {
    return (
        <div className='container banner'>
            <div id='carouselExample' className='carousel slide'>
                <div className='carousel-inner'>
                    <div className='carousel-item active'>
                        <img src={slide1} alt='...' />
                    </div>
                    <div className='carousel-item'>
                        <img src={slide2} alt='...' />

                    </div>
                    <div className='carousel-item'>
                        <img src='...' alt='...' />
                    </div>
                </div>
                <button className='carousel-control-prev' type='button' data-bs-target='#carouselExample' data-bs-slide='prev'>
                    <span className='carousel-control-prev-icon' aria-hidden='true' />
                    <span className='visually-hidden'>Trước đó</span>
                </button>
                <button className='carousel-control-next' type='button' data-bs-target='#carouselExample' data-bs-slide='next'>
                    <span className='carousel-control-next-icon' aria-hidden='true' />
                    <span className='visually-hidden'>Tiếp theo</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;
