import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange} from '@mui/material/colors';
interface CardProps {
    data: string
}

function MiniCard({ data }: CardProps) {
  return (
    <div className=" flex flex-row gap-2 items-center">
        <Avatar sx={{ bgcolor: deepOrange[500],width:30,height:30}}>N</Avatar>
        <div>
          <h1 className='font-semibold'>{data}</h1>
            <h4 className='opacity-[0.5] text-sm'>{`${data}@gmail.com`}</h4>
        </div>
    </div>
  )
}

export default MiniCard