import React from 'react'
import { Avatar, Badge, Card, CardBody } from "@nextui-org/react";


export default function Body() {

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
    <div className=' p-4 text-white'>
      <h1 className='text-3xl font-bold'>Good Evening</h1>
      
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 my-6'>
        {list.map((list, index) => (
          <Card className='rounded-lg bg-black bg-opacity-25 border-none outline-none text-white hover:text-black cursor-pointer' allowTextSelectionOnPress='false' isHoverable='true'>
            <CardBody className='flex flex-row items-center gap-4 py-1.5 pl-2'>
                <Avatar
                 className='rounded-md'
                  src={list.img}/>
              <h1 className='font-bold'>{list.title}</h1>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}