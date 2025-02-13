import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"


export const useMutationData = (mutationKey, mutationFn, queryKey, onSuccess) => {
    const client = useQueryClient()
    const { mutate, isPending} = useMutation({
        mutationKey,
        mutationFn,
        onSuccess: (data) => {
            if (onSuccess) onSuccess()
            return toast(data?.status === 200 ? "success" : "Error")
        },
        onSettled: async () => {
            return await client.invalidateQueries({ queryKey: [queryKey] })
        }
    })
    return { mutate, isPending }

} 