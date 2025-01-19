<script setup lang="ts">
// IMPORTS
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import Table from '@/components/Base/Table.vue'
import { useSchool } from '@/services/useSchool'

// COMPOSABLE
const { t } = useI18n()
const { getSchools, getMockSchools } = useSchool()

// DATA
const columns = ref([
  { key: 'id', label: 'Id', sortable: true },
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
])

const tableData = ref([])
const total = ref(0)
const pageSize = 10
const currentPage = ref(1)
const filters = ref({ search: '' })

// METHODS
const fetchData = async () => {
  const params = {
    search: filters.value.search,
  }

  const response = await getSchools(params)
  tableData.value = response || []
  total.value = response?.total
}

const fetchMockData = async () => {
  const params = {
    search: filters.value.search,
    page: currentPage.value,
    pageSize: pageSize,
  }

  const response = await getMockSchools(params)
  tableData.value = response.data || []
  total.value = response?.total
}

const onPageChange = (page: number) => {
  currentPage.value = page
}

const onSubmit = async () => {
  try {
    /** As this API is not working so I have created a mock data with pagination. Check mock/school-list.ts file for reference */
    // await fetchData()
    await fetchMockData()
  } catch (error) {
    console.log(error)
  }
}

// WATCHERS
watch(
  [currentPage],
  () => {
    // fetchData()
    fetchMockData()
  },
  { immediate: true },
)
</script>

<template>
  <div class="school-listing">
    <h1>School Listing</h1>
    <div>
      <!-- Table -->
      <Table
        :columns="columns"
        :data="tableData"
        :total="total"
        :pageSize="pageSize"
        @update:page="onPageChange"
      >
        <template #filters>
          <form @submit.prevent="onSubmit" class="searchFilter" novalidate>
            <input type="text" name="search" placeholder="Search..." v-model.trim="filters.search" />
            <button type="submit">
              {{ t('common.applyFilter') }}
            </button>
          </form>
        </template>
      </Table>
    </div>
  </div>
</template>

<style type="scss" scoped>
.school-listing {
  h1 {
    text-align: center;
  }
}
.searchFilter {
  display: flex;
  gap: 1rem;

  input {
    border: 1px solid #4b2e83;
    padding: 0.5rem;
    border-radius: 5px;
  }

  button {
    padding: 0.5rem;
    border-radius: 5px;
    background-color: #4b2e83;
    color: #fff;
  }
}
</style>
