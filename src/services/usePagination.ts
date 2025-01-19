import ApiClient from "@/middleware/ApiClient";
import type { PaginationResponse } from "@/models";

export async function getPaginatedData<T>(
    endpoint: string,
    params: any
): Promise<PaginationResponse<T>> {
    const response = await ApiClient.get(endpoint, params);
    return response;
}
