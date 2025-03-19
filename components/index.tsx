'use client'
import { Button } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function HomePage() {
  const router = useRouter()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="text-center">
        <Link href={'/'}>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            <span className="text-[#ff528f]">Photo</span>booth
          </h1>
        </Link>
        <p className="text-gray-600 mt-2 text-lg">
          Create your own{' '}
          <span className="font-semibold">4x1 vertical photo strip</span>
        </p>
      </div>
      <div className="mt-6">
        <Button
          variant="contained"
          size="large"
          sx={{
            borderRadius: 8,
            bgcolor: '#ff528f',
            fontWeight: 'bold',
            paddingX: 3,
            paddingY: 1.5,
            textTransform: 'none',
            fontSize: '1.1rem',
          }}
          onClick={() => router.push('/capture', { scroll: false })}
          startIcon={<CameraAltIcon sx={{ fontSize: 28 }} />}
        >
          Start Capturing
        </Button>
      </div>
    </div>
  )
}
