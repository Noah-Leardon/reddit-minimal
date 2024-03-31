import { formatNumber, chooseDisplayMedia, loadVideo } from "./helperfunctions";

describe('loadVideo', () => {
    it('Returns the proper video tag', () => {
        const media = {
            reddit_video: {
                fallback_url: 'test'
            }
        }
        const expectedResult = <video className="post-video" controls src="test"></video>
        const actaulResult = loadVideo(media)
        expect(actaulResult).toEqual(expectedResult)
    })
    it('Returns if no video is present', () => {
        const media = null
        const expectedResult = undefined
        const actualResult = loadVideo(media)
        expect(actualResult).toEqual(expectedResult)
    })
})

describe('formatNumber', () => {
    it('Returns a formatted number with a decimal and k', () => {
        const number = 1500
        const expectedResult = '1.5k'
        const actaulResult = formatNumber(number)
        expect(actaulResult).toEqual(expectedResult)
    })
})

describe('chooseDisplayMedia', () => {
    it('Returns a video tag if media is a video', () => {
        const isVideo = true
        const media = {
            reddit_video: {
                fallback_url: 'test'
            }
        }
        const preview = null
        const expectedResult =  <video className="post-video" controls src="test"></video>
        const actualResul = chooseDisplayMedia(isVideo, media, preview)
        expect(actualResul).toEqual(expectedResult)
    })
    it('Returns an image if no video is present', () => {
        const isVideo = false
        const media = null
        const preview = {
            images: [
                {
                    source: {
                        url: "test"
                    }
                }
            ]
        }
        const expectedResult = <img alt="content" className="thumbnail" src="test" />
        const actaulResult = chooseDisplayMedia(isVideo, media, preview)
        expect(actaulResult).toEqual(expectedResult)
    })
})