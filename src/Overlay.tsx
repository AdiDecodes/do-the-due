import React, {
	useState,
	useEffect,
} from 'react';
import '../styles/tailwind.css';
import {
	OverlayState,
	subscribeToOverlayState,
} from './useOverlay';

import Img1 from '../assets/Img-1.svg';
import Img2 from '../assets/Img-2.jpg';
import Img3 from '../assets/Bg-3.gif';
import Img4 from '../assets/Img-4.svg';
import { TbAlertSquareRounded } from 'react-icons/tb';
import {
	motion,
	AnimatePresence,
} from 'motion/react';
import { IoCloseCircleSharp } from 'react-icons/io5';

const Overlay: React.FC = () => {
	const [overlayContent, setOverlayContent] =
		useState<OverlayState | null>(null);

	useEffect(() => {
		const unsubscribe = subscribeToOverlayState(
			(state: OverlayState | null) => {
				setOverlayContent(state);
			}
		);

		return () => unsubscribe();
	}, []);

	if (!overlayContent) {
		return null;
	}

	const formatAmount = (amount: string) => {
		const match = amount.match(/([^\d]*)([\d,.]+)/);
		if (!match) return amount;

		const [, symbol, numericPart] = match;
		const formattedNumber = new Intl.NumberFormat(
			'en-US'
		).format(Number(numericPart.replace(/,/g, '')));

		return `${symbol}${formattedNumber}`;
	};

	const getBgImage = (index: number) => {
		if (index === 1) {
			return Img1;
		} else if (index === 2) {
			return Img2;
		} else if (index === 3) {
			return Img3;
		} else if (index === 4) {
			return Img4;
		} else {
			return Img1;
		}
	};

	const RenderUI = () => {
		useEffect(() => {
			if (overlayContent) {
				if (!overlayContent.title) {
					throw new Error(
						'"title" is required in useOverlay hook'
					);
				}
				if (!overlayContent.description) {
					throw new Error(
						'"description" is required in useOverlay hook'
					);
				}
			}
		}, [overlayContent]);

		const [show, setShow] = useState(false);
		if (overlayContent.fullscreen) {
			return (
				<div
					style={{ zIndex: 99999998 }}
					className='fixed select-none top-0 left-0 w-full h-dvh bg-black flex justify-center items-center flex-col px-[10rem]'
				>
					<div
						style={{ zIndex: 99999999 }}
						className='w-full h-full absolute top-0 left-0'
					>
						<img
							draggable={false}
							src={getBgImage(overlayContent.style)}
							alt=''
							className='w-full h-full object-cover'
						/>
					</div>
					<div
						style={{ zIndex: 999999999999 }}
						className='absolute p-5 bg-red-200 bg-opacity-10 backdrop-blur-lg rounded-lg max-w-lg text-left'
					>
						<h2 className='text-3xl font-bold text-white'>
							{overlayContent.title}
						</h2>
						<p className='text-lg font-semibold text-white mt-3'>
							Pending Amount:{' '}
							{formatAmount(overlayContent.amount)}
						</p>
						<p
							style={{
								whiteSpace: 'pre-wrap',
								overflowWrap: 'break-word',
								msOverflowStyle: 'none',
								scrollbarWidth: 'none',
							}}
							className='text-[1rem] text-white mt-5 font-300 max-h-[10rem] overflow-y-auto'
						>
							{overlayContent.description}
						</p>
						{overlayContent.contact && (
							<div className='w-full flex flex-col items-start justify-start my-2'>
								<p className='text-lg font-semibold text-white mt-3'>
									Contact Info:
								</p>
								<p className='text-sm select-text'>
									Name: {overlayContent.contact.name}
								</p>
								<p className='text-sm select-text'>
									Email: {overlayContent.contact.email}
								</p>
								<p className='text-sm select-text'>
									Phone: {overlayContent.contact.phone}
								</p>
							</div>
						)}
						{overlayContent.callToAction && (
							<div className='w-full mt-3 flex flex-col items-end justify-center'>
								<a
									target='_blank'
									href={overlayContent.callToAction?.link}
									className='bg-blue-500 text-white border-transparent border rounded-md transition-all px-3 py-2 hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 '
								>
									{overlayContent.callToAction?.text}
								</a>
							</div>
						)}
					</div>
				</div>
			);
		} else {
			return (
				<div
					style={{
						zIndex: 99999998,
						pointerEvents: 'none',
					}}
					className='fixed top-0 left-0 w-full h-dvh bg-transparent flex justify-center items-center flex-col px-[10rem]'
				>
					<div
						style={{
							pointerEvents: 'all',
							zIndex: 99999997,
						}}
						onClick={() => setShow((prev) => !prev)}
						className='group transition-all border border-transparent p-1 px-3 bg-white cursor-pointer rounded-lg absolute bottom-3 right-3 flex items-center justify-center gap-2 hover:bg-transparent hover:border hover:border-red-400 hover:text-red-400'
					>
						<TbAlertSquareRounded
							size={18}
							className='text-red-400 transition-all'
						/>
						<p className='text-sm transition-all text-black font-medium group-hover:text-white'>
							{overlayContent.bottomtitle ||
								'Payment due for this website'}
						</p>
					</div>
					<AnimatePresence>
						{show && (
							<motion.div
								initial={{
									opacity: 0,
									y: 320,
								}}
								animate={{
									opacity: 1,
									y: 0,
								}}
								exit={{
									opacity: 0,
									y: 320,
								}}
								style={{
									pointerEvents: 'all',
									whiteSpace: 'pre-wrap',
									overflowWrap: 'break-word',
									msOverflowStyle: 'none',
									scrollbarWidth: 'none',
									zIndex: 99999996,
								}}
								className='absolute bottom-11 right-3 text-left w-[20rem] max-h-[25rem] overflow-y-auto p-3 bg-red-200 bg-opacity-10 backdrop-blur-lg rounded-lg'
							>
								<div className='flex items-start justify-between w-full mb-[1px]'>
									<h2 className='text-lg w-[90%] font-medium text-white'>
										{overlayContent.title}
									</h2>
									<IoCloseCircleSharp
										size={20}
										className='text-[#ff6e6e] hover:text-red-500 transition-all cursor-pointer'
										onClick={() => setShow(false)}
									/>
								</div>
								{overlayContent.amount && (
									<p className='text-sm font-normal text-white/80 mb-1'>
										Pending Amount:{' '}
										{formatAmount(overlayContent.amount)}
									</p>
								)}
								<p
									style={{
										whiteSpace: 'pre-wrap',
										overflowWrap: 'break-word',
									}}
									className='text-base scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-300 text-white/80 mt-3 font-300 max-h-[10rem] overflow-y-auto'
								>
									{overlayContent.description}
								</p>
								{overlayContent.contact && (
									<div className='w-full flex flex-col items-start justify-start my-3'>
										<p className='text-base font-semibold text-white'>
											Contact Info:
										</p>
										<p className='text-sm select-text'>
											Name: {overlayContent.contact.name}
										</p>
										<p className='text-sm select-text'>
											Email: {overlayContent.contact.email}
										</p>
										<p className='text-sm select-text'>
											Phone: {overlayContent.contact.phone}
										</p>
									</div>
								)}
								{overlayContent.callToAction && (
									<div className='w-full mt-2 flex items-center justify-center'>
										<a
											target='_blank'
											href={
												overlayContent.callToAction?.link
											}
											className='bg-blue-500 w-full text-center text-white border-transparent border rounded-md transition-all p-1 hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 '
										>
											{overlayContent.callToAction?.text}
										</a>
									</div>
								)}
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			);
		}
	};

	return <RenderUI />;
};

export default Overlay;
