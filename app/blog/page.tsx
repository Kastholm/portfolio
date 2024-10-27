'use client'
import React from 'react'
import FadeBlurAnimation from '../components/animation/fadeblur'
import Dock from '../components/ui/dock'

function BlogPage() {
  return (
    <div>
      <FadeBlurAnimation>
        <div>
          <h1 className='text-xl font-semibold'>Blog</h1>
          <p className='mt-2 text-neutral-600 dark:text-neutral-400'>This is my blog page.</p>
        </div>
      </FadeBlurAnimation>
      <Dock/>
    </div>
    
  )
}

export default BlogPage;
