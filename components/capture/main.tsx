'use client'
import { Button, IconButton } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { useRef, useState } from 'react'
import Webcam from 'react-webcam'
import Image from 'next/image'
// @ts-expect-error: dom-to-image-more has no TypeScript definitions
// eslint-disable-next-line import/no-unresolved
import domtoimage from 'dom-to-image-more'
import SelectOption from './select-option'

export default function CaptureMain() {
  const webcamRef = useRef<Webcam>(null)
  const [images, setImages] = useState<string[]>([])
  const [delay, setDelay] = useState<number>(3000)
  const [countdown, setCountdown] = useState<number | null>(null)
  const [isBg, setIsBg] = useState<string>('#ffa1c5')
  const [isFilter, setIsFilter] = useState<string>('none')

  const capturePhotos = () => {
    if (!webcamRef.current || images.length >= 4) return

    setCountdown(delay / 1000)
    const newImages: string[] = []
    let count = 0

    const countdownInterval = setInterval(() => {
      setCountdown((prev) => (prev !== null ? prev - 1 : null))
    }, 1000)

    const captureInterval = setInterval(() => {
      if (count < 4) {
        setCountdown(delay / 1000)
        const imageSrc = webcamRef.current?.getScreenshot()
        if (imageSrc) {
          newImages.push(imageSrc)
          setImages([...newImages])
        }
        count++
      } else {
        clearInterval(captureInterval)
        clearInterval(countdownInterval)
        setCountdown(null)
      }
    }, delay)
  }
  const resetPhotos = () => {
    setImages([])
    setCountdown(null)
  }

  const downloadImage = () => {
    const node = document.getElementById('photoCollage')
    if (!node) return

    domtoimage
      .toPng(node, { backgroundColor: 'white', width: 'auto' })
      .then((dataUrl: string) => {
        const timestamp = Math.floor(Date.now() / 1000)
        const link = document.createElement('a')
        link.href = dataUrl
        link.download = `photobooth_${timestamp}.png`
        link.click()
      })
  }

  return (
    <>
      <div className="flex flex-col items-center gap-6 mt-10">
        <div className="relative w-[320px] aspect-[4/3] rounded-lg overflow-hidden shadow-md">
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/png"
            className="w-full h-full object-cover"
            mirrored={true}
            style={{
              filter: isFilter,
            }}
          />
          {countdown !== null && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-4xl font-bold">
              {countdown}
            </div>
          )}
        </div>
        <div>
          <Button
            variant="contained"
            sx={{
              borderRadius: 8,
              bgcolor: '#ff528f',
              fontWeight: 'bold',
              paddingX: 3,
              paddingY: 1.2,
              textTransform: 'none',
              fontSize: '1rem',
            }}
            startIcon={<CameraAltIcon sx={{ fontSize: 28 }} />}
            onClick={capturePhotos}
            disabled={images.length >= 4}
          >
            Start Capturing
          </Button>
          <IconButton
            sx={{
              fontSize: 28,
              color: images.length > 0 ? '#ff528f' : 'gray',
              marginLeft: 1,
            }}
            disabled={images.length === 0}
            onClick={resetPhotos}
          >
            <RestartAltIcon />
          </IconButton>
        </div>
        <SelectOption
          delay={delay}
          setDelay={setDelay}
          isBg={isBg}
          setIsBg={setIsBg}
          isFilter={isFilter}
          setIsFilter={setIsFilter}
        />
      </div>
      <div className="flex flex-col items-center gap-6">
        <div
          className="p-4 shadow-lg border rounded-lg w-[320px] mx-auto relative"
          id="photoCollage"
          style={{ backgroundColor: isBg }}
        >
          <div className="flex flex-col gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="aspect-[4/3] rounded-md text-gray-400 relative"
              >
                {images[num - 1] ? (
                  <Image
                    priority
                    width={320}
                    height={240}
                    src={images[num - 1]}
                    alt={`Photo ${num}`}
                    style={{ filter: isFilter }}
                    className="w-full h-full rounded-md object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center rounded-md bg-gray-50">
                    <span>No photo</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outlined"
          sx={{
            borderRadius: 8,
            fontWeight: 'bold',
            paddingX: 3,
            paddingY: 1,
            textTransform: 'none',
            fontSize: '1rem',
            borderColor: '#ff528f',
            color: '#ff528f',
            width: '275px',
          }}
          onClick={downloadImage}
          disabled={images.length < 4}
        >
          Download
        </Button>
      </div>
    </>
  )
}
