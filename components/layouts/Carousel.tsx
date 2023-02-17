import { FC, Key, PropsWithChildren } from 'react'
import React, { useEffect, useState, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import { DotButton, PrevButton, NextButton } from './CarouselButtons'
import { ProjectCard} from "@/components"
import Autoplay from 'embla-carousel-autoplay'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import Image from "next/legacy/image"

type CarouselProps = {
  children?: React.ReactNode
  slides: unknown
  options?: EmblaOptionsType
} 

const options: EmblaOptionsType = { loop: true, speed: 10, dragFree: true, containScroll: 'keepSnaps' }

const Carousel: FC <CarouselProps> = (props) => {
const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay(), WheelGesturesPlugin()])
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  )
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  )
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnEnabled(emblaApi.canScrollPrev())
    setNextBtnEnabled(emblaApi.canScrollNext())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, setScrollSnaps, onSelect])


  useEffect(() => {
    if (!emblaRef) return
    // const embla = emblaRef.current
    // const autoplay = new Autoplay(embla, { speed: 10, delay: 2000 })
    // autoplay.play()
  }, [emblaRef])

  return (
    <>
      <div className="p-1 sm:p-6 ">
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex gap-6 h-auto min-h-[60vh] ml-36">

            {slides.map((project, index: number) => (
              <div className="embla__slide flex flex-col bg-black/10 backdrop-blur-sm" key={index}>

                <div className="embla__slide__number text-h4 absolute">
                  <span className='text-white'>{index + 1}</span>
                </div>


                <Image
                  src={`${project.images[0]}`}
                  // src={project.images[0].split('/').reverse()[0]}
                  width={500}
                  height={250}
                  alt={project.title}
                  className="w-full min-w-[300px] h-full min-h-[500px] object-contain hover:z-10"
                />

                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
          
      </div>

      <div className="z-1 bottom-20 absolute left-0 right-0 flex justify-center items-center h-max">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </>
  )
}

export default Carousel;