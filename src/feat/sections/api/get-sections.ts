import { $api } from "@/shared/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Section } from "../model/types";

export const useGetSections = () => {
    return useQuery({
        queryKey: ['sections'],
        queryFn: async () => {
            const response = await $api.get<Section[]>('/sections');
            return response.data;
        }
    })
}