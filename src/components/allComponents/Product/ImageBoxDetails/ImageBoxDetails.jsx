import React , {memo, useState} from 'react'
import ImageBoxModal from './ImageBoxModal/ImageBoxModal';

const ImageBoxDetails = memo(() => {

    const [IsOpenimageModal,setIsOpenImageModal] = useState(false);

    const closeModal = () => {
        setIsOpenImageModal(false);
    }

    const sources = [{id:1,src:"/images/products/1.jpg"},{id:2,src:"/images/products/1.jpg"},{id:3,src:"/images/products/1.jpg"},{id:4,src:"/images/products/1.jpg"},{id:5,src:"/images/products/1.jpg"}]

    return (
        <div className='w-[100%] lg:w-[40%] flex flex-col items-center'>
            <div className='w-[55%] h-[55%] cursor-pointer'>
              <img src="/images/products/1.jpg" className='w-full h-full' alt="" />
            </div>
            <div className='flex items-center justify-center w-[95%] lg:w-full *:cursor-pointer gap-8 mt-10'>
                {
                   sources.map(src => (
                    <div key={src.id} onClick={() => setIsOpenImageModal(true)} className='w-20 h-[3.5rem] xs:h-[20]'><img src={src.src} className='w-full h-full' alt="" /></div>
                   ))
                }
            </div>
            <ImageBoxModal closeModal={closeModal} status={IsOpenimageModal}/>
        </div>
    )
});

export default ImageBoxDetails;
