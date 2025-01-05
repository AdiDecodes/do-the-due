export interface AssetUrls {
	Img1: string;
	Img2: string;
	Img3: string;
	Img4: string;
}

export const ASSETS: AssetUrls = {
	Img1:
		'https://res.cloudinary.com/domebtgvk/image/upload/v1734960990/Img-1_b23a9a.svg',
	Img2:
		'https://res.cloudinary.com/domebtgvk/image/upload/v1734960991/Img-2_kkpca1.jpg',
	Img3:
		'https://res.cloudinary.com/domebtgvk/image/upload/v1734960991/Bg-3_fvng1h.gif',
	Img4:
		'https://res.cloudinary.com/domebtgvk/image/upload/v1734960991/Img-4_e4s2xs.svg',
} as const;
