import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";


export const useMutationData = (mutationKey, mutationFn, queryKey, onSuccess) => {
    const client = useQueryClient();

    const { mutate, isPending } = useMutation({
        mutationKey,
        mutationFn,
        onSuccess: async (data) => {
            if (onSuccess) onSuccess()
            toast.dismiss()
            data?.status === 200 ? toast.success(data?.data.message) : toast.error(data?.response.data.message ?? "Something is wrong")
        },
        onSettled: async () => {
            return await client.invalidateQueries({ queryKey })
        }
    })

    return { mutate, isPending }
} 