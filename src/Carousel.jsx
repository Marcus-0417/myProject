import { useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Carousel() {
    /* 建立目前背景圖的變數 */
    const [currentSlide, setCurrentSlide] = useState(0);

    /* 建立輪播圖片的陣列物件 */
    const slides = [
        { URL: './images/IMG_8350.jpg', Text: '第一張圖片' },
        { URL: './images/IMG_8370.jpg', Text: '第二張圖片' },
        { URL: './images/1920福德正神.jpg', Text: '第三張圖片' },
        /* { URL: '', Text: '第四張圖片' },
        { URL: '', Text: '第五張圖片' },
        { URL: '', Text: '第六張圖片' },
        { URL: '', Text: '第七張圖片' },
        { URL: '', Text: '第八張圖片' }, */
    ];

    /* 當currentSlide改變時，觸發useEffect */
    useEffect(() => {
        /* 每3秒呼叫nextSlide()換下一張圖 */
        const autoplay = setInterval(() => {
            nextSlide();
        }, 3000);

        /* 每3秒後移除autoplay，這樣才能取得最新的currentSlide索引編號 */
        return () => {
            clearInterval(autoplay);
        }
    }, [currentSlide]);

    /* 下一張輪播圖片 */
    const nextSlide = () => {
        /* 取得前一張的索引編號，檢查是否為最後一個編號 */
        /* 是 => 回第一張 ， 否 => 跳下一張 */
        setCurrentSlide((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }

    return (
        <>
            <div className="wrapper" style={{
                display: 'flex',
                maxWidth: '100vw',
                height: '100vh',
                margin: 'auto',
            }}>
                {/* 輪播區 */}
                <div style={{
                    backgroundImage: `url(${slides[currentSlide].URL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100%',
                }}>

                    <div>
                        <button></button>
                    </div>
                    {/* 輪播文字區 */}
                    {/* <h2 style={{
            color: 'white',
            textAlign: 'center',
            lineHeight: '100vh',
          }}>{slides[currentSlide].Text}</h2> */}
                </div>
            </div>
        </>
    )
}