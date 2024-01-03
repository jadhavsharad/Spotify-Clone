import React from 'react'
import { MdArrowForwardIos, MdArrowBackIosNew, MdOutlineDownloadForOffline, MdManageAccounts } from "react-icons/md";
import { PiBellRingingLight } from "react-icons/pi";
import { Button, Tooltip } from "@nextui-org/react";

export default function Navbar() {
  return (
    <div className='p-4 flex justify-between w-full'>
      <div className='flex gap-2 font-bold'>
        
        <Tooltip content='Back' closeDelay={100} color='foreground' size='sm'>
          <Button radius="full" size='sm' isIconOnly>
            <MdArrowBackIosNew />
          </Button>
        </Tooltip>

        <Tooltip content='Next' closeDelay={100} color='foreground' size='sm'>
          <Button radius="full" size='sm' isIconOnly>
            <MdArrowForwardIos />
          </Button>
        </Tooltip>

      </div>
      <div className='flex gap-2'>
        <Button radius="full" size='sm' className='font-bold'> Explore Premuim</Button>
        <Button radius="full" size='sm' className='font-bold text-white bg-[#151515]'> <MdOutlineDownloadForOffline className='scale-125' /> Install App</Button>

        <Tooltip content="What's new" size='sm' color='secondary'>
        <Button radius="full" size='sm' isIconOnly className='bg-[#151515] text-white p-2'> <PiBellRingingLight className='text-2xl' /></Button>
        </Tooltip>

        <Tooltip content='User' size='sm' color='secondary'>
        <Button radius="full" size='sm' isIconOnly className='bg-[#151515] text-white p-2'><MdManageAccounts className='text-2xl' /></Button>
        </Tooltip>

      </div>
    </div>
  )
}
