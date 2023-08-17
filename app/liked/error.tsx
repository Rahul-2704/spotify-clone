"use client"
import React from 'react'
import Box from '@/components/Box'
const error = () => {
  return (
    <Box className='h-full flex justify-center items-center'>
        <div className='text-neutral-400'>
            Something went wrong.
        </div>
    </Box>
  )
}

export default error