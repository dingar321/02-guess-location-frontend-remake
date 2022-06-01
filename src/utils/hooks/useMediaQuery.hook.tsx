import { useEffect, useState } from 'react';

function useMediaQuery(query: any, defaultMatches = window.matchMedia(query)) {
	const [matches, setMatches] = useState<any>(defaultMatches);

	useEffect(() => {
		const media = window.matchMedia(query);

		if (media.matches !== matches) {
			setMatches(media.matches);
		}

		const listener = () => setMatches(media.matches);

		media.addListener(listener);

		return () => media.removeListener(listener);
	}, [matches]);

	return matches;
}

export default useMediaQuery;