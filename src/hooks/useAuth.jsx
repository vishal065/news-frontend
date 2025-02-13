import { registerAdmin } from '../actions/AuthAction';
import { useMutationData } from './useMutation';


function useAdminRegister(data, code) {

    const { mutate, isPending } = useMutationData(["admin-register"], () => registerAdmin(data, code), "register-query")

    return { mutate, isPending }
}

export { useAdminRegister };