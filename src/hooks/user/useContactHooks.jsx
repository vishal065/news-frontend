import { createContact } from "../../actions/user/publicActions";
import { useMutationData } from "../useMutation";



function useCreateContact() {
    const { mutate, isPending } = useMutationData(["create-mutation"], (data) => {
        if (data) {
            return createContact(data);
        }
    }, ["contact-query"]);
    return { mutate, isPending };
}

export { useCreateContact };