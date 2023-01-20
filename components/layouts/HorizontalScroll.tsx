import { FC, PropsWithChildren } from 'react'

const HorizontalScroll: FC <PropsWithChildren> = ({ children }) => {
  return (
    <section className='relative w-full min-h-screen gap-6 p-4 overflow-x-visible border-2 border-red-600 flexbox justify-evenly'>
      {children}
    </section>
  )
}

export default HorizontalScroll;