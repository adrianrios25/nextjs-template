'use client';
import useSWR from 'swr';
const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function Home() {
	const { data, error, isLoading } = useSWR(`/api/test`, fetcher);

	return (
		<>
			<div>Hello Test Page</div>
			Data: {JSON.stringify(data)}
		</>
	);
}
