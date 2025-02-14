import { useNavigate } from 'react-router-dom';
import { registerAdmin, verifyOtp } from '../actions/AuthAction';
import { useMutationData } from './useMutation';

const navigate = useNavigate();

function useAdminRegister() {

    const { mutate, isPending, data } = useMutationData(["admin-register"], (data) => registerAdmin(data, data.code)
    )
    if (data && data.status === 200) {
        navigate("/verify-account");
    }

    return { mutate, isPending }
}

// VerifyOTP 

function useVerifyOTP() {
    const { mutate, isPending } = useMutationData(["verify-otp"], (data) =>
        verifyOtp(data));

    return { mutate, isPending };
}

export { useAdminRegister, useVerifyOTP };