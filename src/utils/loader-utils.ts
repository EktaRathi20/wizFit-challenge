import { useLoaderStore } from '@/stores'

export const withLoader = async (fn: () => Promise<any>) => {
    const loader = useLoaderStore()
    loader.showLoader()

    try {
        return await fn()
    } catch (error) {
        throw error
    } finally {
        loader.hideLoader()
    }
}