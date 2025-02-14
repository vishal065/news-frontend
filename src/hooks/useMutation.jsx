import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast";


export const useMutationData = (mutationKey, mutationFn, queryKey, onSuccess) => {
    const client = useQueryClient();
    const { mutate, isPending, data } = useMutation({
        mutationKey,
        mutationFn,
        onSuccess: (data) => {
            if (onSuccess) onSuccess()
            toast.dismiss()
            data?.status === 200 ? toast.success(data.data.message) : toast.error(data?.response.data.message ?? "Something went wrong")
        },
        onSettled: async () => {
            return await client.invalidateQueries({ queryKey: [queryKey] })
        }
    })

    return { mutate, isPending, data }
} 