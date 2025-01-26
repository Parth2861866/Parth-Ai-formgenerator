import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

const GenerateFormInput = () => {
  return (
    <div className='flex items-center gap-4 my-8 max-w-3xl'>
       <Input type='text' placeholder='write a promt to generate form'/>
       <Button>Generate Form</Button>
    </div> 
  )
}

export default GenerateFormInput