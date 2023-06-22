import { Dispatch, SetStateAction } from 'react'

const VideoListItem = (
  { 
    thumbnail, 
    title, 
    videoIndex,
    setCurrentVideoIndex
  } : { 
    thumbnail: string,
    title: string,
    videoIndex: number, 
    setCurrentVideoIndex: Dispatch<SetStateAction<number>> }
) => {

  const handleVideoClick = () => setCurrentVideoIndex(videoIndex)

  return (
    <div 
      onClick={() => handleVideoClick()} 
      className='flex items-start gap-2 font-bold mb-2 cursor-pointer'
    >
      <img src={thumbnail} className='rounded-lg' width={200}/>
      <h2 className='text-left' dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  )
}

export default VideoListItem