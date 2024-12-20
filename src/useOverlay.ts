import { useState, useEffect } from 'react';

export interface OverlayState {
	title: string;
	description: string;
	amount: string;
	style: number;
	fullscreen: boolean;
	bottomtitle?: string;
	contact?: {
		name: string;
		email: string;
		phone: string;
	};
	callToAction?: {
		text: string;
		link: string;
	};
}

let overlayState: OverlayState | null = null;
let subscribers: Function[] = [];

const setOverlayState = (state: OverlayState) => {
	overlayState = state;
	subscribers.forEach((callback) =>
		callback(state)
	);
};

export const useOverlay = (
	data: OverlayState
) => {
	useEffect(() => {
		setOverlayState(data);
	}, [data]);
};

export const getOverlayState = () => overlayState;

export const subscribeToOverlayState = (
	callback: Function
) => {
	subscribers.push(callback);
	return () => {
		subscribers = subscribers.filter(
			(sub) => sub !== callback
		);
	};
};
