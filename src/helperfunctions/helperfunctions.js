export const formatNumber = (num) => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    } else {
        return num;
    }
}

export function loadVideo(media) {
    let urlToUse;
    if (media && media.reddit_video) {
        urlToUse = media.reddit_video.fallback_url;
        return <video className="post-video" controls src={urlToUse}></video>
    } else {
        return;
    }
}

export function chooseDisplayMedia(isVideo, media, preview) {
    if (isVideo) {
        return loadVideo(media)
    } else if (preview) {
        //console.log(`PREVIEW ${author}, ${preview.images[0].source.url}`)
        return <img alt="content" className="thumbnail" src={preview.images[0].source.url} />
    } else {
        return null
    }
}