const baseUrl = process.env.NEXT_PUBLIC_MANGADEX_BASEURL;

const get = async (url: string) => {
	const response = await fetch(url);
	const data = await response.json();
	return data;
};

const manga = {
	getMangaByTitle: async (title: string) => get(`${baseUrl}/manga?title=${title}`),
};

export { manga };
