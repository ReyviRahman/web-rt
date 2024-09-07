'use client'
import { blog_data } from '@/app/Assets/assets';
import React, { useEffect, useState } from 'react'

const Page = ({params}) => {
  const [data, setData] = useState(null);
  const fetchBlogData = () => {
    for(let i=0; i < blog_data.length; i++) {
      if (Number(params.id) === )
    }
  }

  useEffect(() => {
    fetchBlogData();
  },[])

  return (
    <div>
      {params.id}
    </div>
  )
}

export default Page