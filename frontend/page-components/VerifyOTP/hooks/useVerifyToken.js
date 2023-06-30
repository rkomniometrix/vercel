import useRequest from "@/helper/useRequest";
import { useContext, useEffect } from "react";
import { TokenConsumer } from '@/context/VerifyToken'

const useVerifyToken = ({setShow = () => {}}) => {
	const { updateContextValue } = useContext(TokenConsumer)

	const [{ loading }, trigger] = useRequest({
		url    : '/verify_token',
		method : 'POST',
	}, { manual: true });

	const apiTrigger = async (val) => {
		try {
			const res = await trigger({ data: {token: val} });
			if(res?.data){
				alert('Authetication Successful!');
				setShow(false);
				updateContextValue(true);
			}
			else{
				alert("Authetication Failed!")
			}
			
		} catch (err) {
			console.log(err);
			alert(err)
		}
	};

	return {
		apiTrigger,
		loading,
	};
};
export default useVerifyToken;
