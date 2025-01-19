import { withLoader } from '@/utils'
import { getPaginatedData } from './usePagination'
import paginateAndSearch from '@/mock/school-list'

export const useSchool = () => {
    const getSchools = (params: any) => withLoader(() => getPaginatedData('/campaign_school_list/', params))
    const getMockSchools = (params: any) => withLoader(() => paginateAndSearch(params))

    return {
        getSchools,
        getMockSchools
    }

}