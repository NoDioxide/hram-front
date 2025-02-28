import { $api } from "@/shared/lib/api";
import { useQuery } from "@tanstack/react-query";
import { Section } from "../model/types";

import sectionData from "@/sections.json" // only for test

export const useGetSections = () => {
    return useQuery({
        queryKey: ['sections'],
        queryFn: async () => {
            // const response = await $api.get<Section[]>('/sections');
            // return response.data;

            return sectionData as Section[]; // only for test
        }
    })
}