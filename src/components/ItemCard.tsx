import React from 'react'
import BannerTest from "../assets/banner.svg";

type TPropsItemCard = {
    title: string;
    genre: string;
    description: string;
    platform: string;
    releaseDate: string;
    image: string
}

export default function ItemCard({
    description,
    genre,
    platform,
    releaseDate,
    title,
    image
}: TPropsItemCard) {
  return (
    <>
        <div className='shadow p-3 bg-white w-[378px] rounded-lg cursor-pointer hover:shadow-md'>
            <div className='relative'>
                <img src={image ||  BannerTest} alt="Item Image" className='w-full rounded'/>
                <div className='bg-[#C1E1FF] rounded-[34px] py-1 px-3 flex items-center justify-center font-semibold absolute bottom-[6px] left-[8px]'>{genre}</div>
            </div>
            <h2 className='text-[20px] mt-3'>{title}</h2>
            <p className='mt-3 line-clamp-3'>{description}</p>

            <div className='mt-3 border-t border-solid border-t-[#ECF0F8] pt-4 flex'>
                <div className='w-[171px] mr-3'>
                    <p className='text-[#A0A7B9] text-sm'>Platform</p>
                    <p>{platform}</p>
                </div>
                <div>
                    <p className='text-[#A0A7B9] text-sm'>Release Date</p>
                    <p>{releaseDate}</p>
                </div>
            </div>
        </div>
    </>
  )
}
