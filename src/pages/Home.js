import React from 'react'
import Footer from '../components/Footer'
import VideoGrid from '../components/grid/VideoGrid'
import Tags from '../components/tags/Tags'
import Pagination from '../components/ui/Pagination'
import Navbar from '../components/navbar/Navbar'
export default function Home() {
  return (
    <>

    <Tags/>
    <VideoGrid/>
    <Pagination/>
 
    </>
  )
}
