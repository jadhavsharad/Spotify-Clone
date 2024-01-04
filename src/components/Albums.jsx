import React from 'react'
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

export default function Albums() {
  const list = [
    {
      title: "Daily Mix 1",
      img: "https://i.pravatar.cc/300?u=a042581f4e29026709d",
    },
    {
      title: "Daily Mix 2",
      img: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
      title: "Daily Mix 3",
      img: "https://i.pravatar.cc/150?u=a04258a2462d826712d",
    },
    {
      title: "Daily Mix 4",
      img: "https://i.pravatar.cc/300?u=a042581f4e290267072",
    },
    {
      title: "Daily Mix 5",
      img: "https://i.pravatar.cc/300?u=a042581f4e29026709d",
    },
    {
      title: "Daily Mix 6",
      img: "https://i.pravatar.cc/300?u=a042581f4e29026704f",
    }
  ]
  return (
    <div className='px-2 lg:px-10'>
      <h1 className='text-white text-xl font-bold'>Your Daily Mix</h1>
      <div>
        <div className='flex gap-4 my-6 overflow-auto scrollbar-hide text-white'>
          {list.map((list, index) => (
            <Card className='min-w-40 max-w-40 rounded-lg bg-[#212121] bg-opacity-40 border-opacity-45 border-[1px] border-[#505050] text-white'>
              <CardBody className='my-0 p-2'>
                <Image src={list.img} className='rounded-lg' />
              </CardBody>
              <CardFooter className='my-0 pb-4 pt-0'>
                <p className='text-sm font-semibold'>{list.title}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <h1 className='text-white text-xl font-bold'>Today's Top Hits</h1>
      <div>
        <div className='flex gap-4 my-6 overflow-auto scrollbar-hide text-white'>
          {list.map((list, index) => (
            <Card className='min-w-40 max-w-40 rounded-lg bg-[#212121] bg-opacity-40 border-opacity-45 border-[1px] border-[#505050] text-white'>
              <CardBody className='my-0 p-2'>
                <Image src={list.img} className='rounded-lg' />
              </CardBody>
              <CardFooter className='my-0 pb-4 pt-0'>
                <p className='text-sm font-semibold'>{list.title}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <h1 className='text-white text-xl font-bold'>Top 100</h1>
      <div>
        <div className='flex gap-4 my-6 overflow-auto scrollbar-hide text-white'>
          {list.map((list, index) => (
            <Card className='min-w-40 max-w-40 rounded-lg bg-[#212121] bg-opacity-40 border-opacity-45 border-[1px] border-[#505050] text-white'>
              <CardBody className='my-0 p-2'>
                <Image src={list.img} className='rounded-lg' />
              </CardBody>
              <CardFooter className='my-0 pb-4 pt-0'>
                <p className='text-sm font-semibold'>{list.title}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
