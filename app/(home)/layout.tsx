

import { DarkMode } from '@/components/Darkmode'
import Logo from '@/components/Logo'
import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
        <div className='border-b'>
          {/* navbar */}
            <nav className='flex items-center justify-between max-w-7xl mx-auto py-2'>
                <Logo/>
                <div>
                  <Button  variant={'link'}>Dashboard</Button>
                  <UserButton/>
                  <DarkMode/>
                </div>
            </nav>
        </div>
        {children}
    </div>
  )
}

export default layout