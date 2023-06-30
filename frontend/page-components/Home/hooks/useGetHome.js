import useRequest from '@/helper/useRequest';
import { useEffect, useCallback } from 'react';

function useGetHome({
	filters = {},
	defaultFilters = {},
	defaultParams = {},
}) {
	const [{ loading, data }, trigger] = useRequest({
		url    : '/home',
		method : 'GET',
		params : {
			filters: {
				...defaultFilters,
				...filters,
			},
			...defaultParams,
		},
	}, { manual: true });

	const refetch = useCallback(() => {
		(async () => {
			try {
				await trigger();
			} catch (err) {
				console.log(err);
			}
		})();
	}, [trigger]);

	useEffect(() => {
		refetch();
	}, [refetch]);

	return {
		loading,
		refetch,
		data,
	};
}

export default useGetHome;
