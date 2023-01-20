import { FC, PropsWithChildren } from 'react'
import { useSelector } from 'react-redux';

const ScreenLayout: FC <PropsWithChildren> = ({ children }) => {
  const username: String = useSelector((state: any) => state.portfolio.username);

  return (
    <section className='relative flexbox w-full min-h-screen border-2 border-red-600 gap-6 justify-evenly p-4'>
      {children}
    </section>
  )
}

export default ScreenLayout;