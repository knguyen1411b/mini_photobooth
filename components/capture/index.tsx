import Link from 'next/link'
import CaptureMain from './main'

export default function CapturePage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <CaptureHeader />
      <CaptureBody>
        <CaptureMain />
      </CaptureBody>
    </div>
  )
}

const CaptureHeader = () => (
  <div className="text-center py-8">
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
)

const CaptureBody = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white shadow-md rounded-lg md:px-10 md:py-6 w-full border-t-4 border-[#ff528f] grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto pb-5">
    {children}
  </div>
)
