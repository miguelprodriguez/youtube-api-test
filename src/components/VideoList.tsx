import { Dispatch, SetStateAction } from "react"
import VideoItem from "./VideoItem"

const VideoList = (
    { 
        videos, 
        setCurrentVideoIndex
    }: { videos: any[], setCurrentVideoIndex: Dispatch<SetStateAction<number>>}
) => {
    return (
        <div>
            {videos.map((video: any, index: number) => {
                return (
                    <VideoItem
                        key={index}
                        videoIndex={index}
                        setCurrentVideoIndex={setCurrentVideoIndex}
                        thumbnail={video.snippet.thumbnails.medium.url}
                        title={video.snippet.title}
                    />
                )
            })}
        </div>
    )
}

export default VideoList