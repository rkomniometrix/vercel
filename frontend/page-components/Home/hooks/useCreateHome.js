import useRequest from "@/helper/useRequest";

const useCreateHome = ({ refetch = () => {} }) => {
	const [{ loading }, trigger] = useRequest({
		url    : '/home',
		method : 'POST',
	}, { manual: true });

	const apiTrigger = async (val) => {
		try {
			await trigger({ data: val });
			alert('Profile Updated Successfully!');
			refetch();
		} catch (err) {
			console.log(err);
		}
	};

	return {
		apiTrigger,
		create: loading,
	};
};
export default useCreateHome;
