import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import Search from './components/Search'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search'
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY
const SEARCH_TYPE = 'video'

function App() {
  const [queryTerm, setQueryTerm] = useState('')
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [videos, setVideos] = useState([])

  const getSearchedVideos = async () => {
    axios.get(`${BASE_URL}?part=snippet&type=${SEARCH_TYPE}&q=${queryTerm}&key=${YOUTUBE_API_KEY}`)
      .then((response: any) => setVideos(response.data.items))
      .catch((error: any) => console.log("Error: ", error))
  }

  useEffect(() => {
    if (queryTerm !== '') getSearchedVideos()
  }, [queryTerm])

  return (
    <>
      <Search setQueryTerm={setQueryTerm} setCurrentVideoIndex={setCurrentVideoIndex} />
      {
        queryTerm !== ''
        &&
        <div className='flex flex-col mt-2 gap-2 lg:flex-row'>
          <VideoPlayer currentVideoIndex={currentVideoIndex} videos={videos} />
          <VideoList setCurrentVideoIndex={setCurrentVideoIndex} videos={videos} />
        </div>
      }
    </>
  )
}

export default App
