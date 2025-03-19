export const MetaData = (title: string) => {
  return {
    title: title || 'PhotoBooth - Capture Your Moments',
    description:
      'A modern and interactive PhotoBooth application built with Next.js',
    keywords: [
      'PhotoBooth',
      'Photography',
      'Album',
      'Photo Collection',
      'Memories',
      'Next.js',
      'Tailwind CSS',
      'MUI',
      'Webcam',
    ],
    author: 'Khanh Nguyen',
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      url: 'https://miniphotobooth.vercel.app/',
      title: title || 'PhotoBooth - Capture Your Moments',
      description:
        'PhotoBooth is an interactive web app that lets you capture and organize your memories easily. Built with Next.js, Tailwind CSS, and MUI for a seamless user experience.',
      siteName: 'PhotoBooth',
      locale: 'en_US',
    },
  }
}
