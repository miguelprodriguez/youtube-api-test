import axios from "axios"
import { useEffect, useState } from "react"

const BASE_URL = 'https://www.googleapis.com/youtube/v3/videos'
const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY

const VideoPlayer = ({
    currentVideoIndex,
    videos
}: {
    currentVideoIndex: number,
    videos: any
}) => {

    const [videoData, setVideoData] = useState({ title: '', description: '' })

    const currentVideoId = videos[currentVideoIndex]?.id.videoId
    
    const getVideoDetails = async () => {
        axios.get(`${BASE_URL}?part=snippet&key=${YOUTUBE_API_KEY}&id=${currentVideoId}`)
            .then((response: any) => {
                const videoTitle = response.data.items[0].snippet.title
                const videoDescription = response.data.items[0].snippet.description

                setVideoData({title: videoTitle, description: videoDescription})
            })
            .catch((error: any) => console.log("Error: ", error))
    }

    useEffect(() => {
        getVideoDetails()
    }, [currentVideoId])

    return (
        <div className="w-full">
            <iframe
                width="853"
                height="480"
                src={`https://www.youtube.com/embed/${videos[currentVideoIndex]?.id.videoId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
            />
            <h2 className="my-4 font-bold text-left text-2xl">{videoData.title}</h2>
            <p className="text-left" dangerouslySetInnerHTML={{ __html: videoData.description }} />
        </div>
    )
}

export default VideoPlayer