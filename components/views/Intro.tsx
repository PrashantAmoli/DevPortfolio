import Image from 'next/image';
import useTypewriter from '../../utils/useTyping';
import { Links } from '@/utils/types';
import Typewriter from 'typewriter-effect';
import { Options } from 'typewriter-effect';

export default function Intro({ fullname, about, images, links, roles }) {
	const languages = ['HTML', 'CSS', 'JavaScript'];

	const message = useTypewriter({
		text: [roles],
		direction: 'both',
		repeat: -1,
		speed: 100,
	});

	const engineer = ' Engineer          ';

	const options: Options = {
		strings: [...(roles.map((role: string) => role + ' Engineer')), ''],
		autoStart: true,
		loop: true,
		skipAddStyles: true,
		deleteSpeed: 50,
		wrapperClassName: 'text-head sm:text-center text-blue-500',
		cursorClassName: 'text-head text-blue-500 animate-pulse duration-75 text-2xl font-extrabold',
	};

	return (
		<>
		{/* Image */}
		<svg viewBox="0 0 200 187" className='w-56 sm:w-72' xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink">
				<mask id="mask0" mask-type="alpha">
						<path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
						130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
						97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
						0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
				</mask>
				<g mask="url(#mask0)">
						<path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
						165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
						129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
						-0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
						<image xlinkHref="/dp.jpg" className="w-full bg-transparent" />
				</g>
		</svg>
	
		
		<section className='card'>
			<span className='text-h1'>Hey there, </span> 
			<span className='inline-flex tracking-wide text-h1 sm:text-center'>
				I&apos;m&nbsp;
			<Typewriter
				options={{
					strings: [fullname, ""],
					cursor: engineer,
					autoStart: true,
					loop: true,
					skipAddStyles: true,
					delay: 100,
					deleteSpeed: 50,
					wrapperClassName: 'text-head text-3xl sm:text-4xl',
					cursorClassName: 'hidden',
				}}
				/>
			</span>
			<Typewriter
				options={{
					strings: [...roles, ""],
					cursor: engineer,
					autoStart: true,
					loop: true,
					delay: 40,
					skipAddStyles: true,
					deleteSpeed: 30,
					wrapperClassName: 'text-head sm:text-center text-blue-500',
					cursorClassName: 'text-head text-blue-500 animate-pulse duration-75 font-extrabold',
				}}
			/>
			<h2 className='text-subhead'>{about}</h2>

			<div className='flex justify-between sm:justify-evenly'>
				{links.map((item: Links, index: string | number) => (
					<a
						key={index}
						href={
							item.link.includes('https://')
								? item.link
								: `${item.link}`
						}
						target='_blank'
						rel='noreferrer'
						className='text-link'
						>
						{item.name}
					</a>
				))}
			</div>

			<div className='flex justify-evenly'>

			{/* {images.map((image: string, index: string | number) => (
				// <Image
				// 	key={index}
				// 	src={image}
				// 	alt='profile picture'
				// 	width={200}
				// 	height={200}
				// 	className='rounded-full'
				// />
				<img
				key={index}
				src={image}
				alt='profile picture'
				className='w-32 h-32 rounded-full'
				/>
				))} */}
				</div>
		</section>
		
		{/* Links */}
		
		<div className='absolute left-0 flex flex-col gap-5 select-none top-24 sm:top-1/3 transition-all'>
			{links.map((link: Links, index: string | number) => (link.name !== '') && (

			<a key={index} href={link.link} target="_blank" rel='noreferrer' className="inline-flex items-center justify-end gap-6 p-1 pl-2 transition-transform -translate-x-16 rounded-full select-none sm:-translate-x-12 hover:translate-x-2 hover:duration-700 hover:gap-1 w-28 group text-link hover:bg-gray-500/10">
				{link.name}	
				<Image
					src={`/${link.name.toLowerCase()}.svg`}
					alt='profile picture'
					width={40}
					height={40}
					className="text-white border-none rounded-full group-hover:scale-105"
					/>
			</a>
			))}

			{/* <a className='inline-flex gap-2 group text-link bg-white/20'>	
				<Image
					src="/leetcode.svg"
					alt='profile picture'
					width={44}
					height={44}
					className='p-2 rounded-full bg-white/10 hover:scale-105'
					/>
			</a>
			<a className='inline-flex gap-2 group text-link bg-white/20'>	
				<Image
					src="/github.svg"
					alt='profile picture'
					width={44}
					height={44}
					className='p-2 rounded-full bg-white/10 hover:scale-105'
					/>
			</a>
			<a className='inline-flex gap-2 group text-link bg-white/20'>	
				<Image
					src="/linkedin.svg"
					alt='profile picture'
					width={44}
					height={44}
					className='p-2 rounded-full bg-white/10 hover:scale-105'
					/>
			</a> */}

			</div>

		</>
	)
}
