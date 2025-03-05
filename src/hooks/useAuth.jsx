import { login, logout, registerAdmin, verifyOtp } from '../actions/AuthAction';
import { useMutationData } from './useMutation';

// Register Hook
function useAdminRegister() {
    const { mutate, isPending } = useMutationData(["admin-register"], (data) => registerAdmin(data, data.code)
    )
    return { mutate, isPending }
}

// VerifyOTP Hook
function useVerifyOTP() {
    const { mutate, isPending } = useMutationData(["verify-otp"], (data) => verifyOtp(data));
    return { mutate, isPending };
}

// Login Hook
function useLogin() {
    const { mutate, isPending } = useMutationData(["login"], (data) => login(data));
    return { mutate, isPending };
}

function useLogout() {
    const { mutate, isPending } = useMutationData(["logout"], (data) => logout());
    return { mutate, isPending };
}


export { useAdminRegister, useVerifyOTP, useLogin, useLogout };