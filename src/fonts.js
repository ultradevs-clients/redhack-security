import localFont from 'next/font/local';
export const gilroy = localFont({
    src: [
          {
      path: '../public/fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Gilroy-Heavy.ttf',
      weight: '700',
      style: 'normal',
    },
    ],
     variable: '--font-gilroy', // Optional, useful for Tailwind
  display: 'swap',
})