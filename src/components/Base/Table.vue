<script setup lang="ts">
// IMPORTS
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

// COMPOSABLES
const { t } = useI18n()

// PROPS
const props = defineProps({
  columns: {
    type: Array as () => any[],
    required: true,
  },
  data: {
    type: Array as () => any[],
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  pageSize: {
    type: Number,
    default: 10,
  },
})

// EMIT
const emits = defineEmits(['update:page'])

// DATA
const currentPage = ref(1)
const totalPages = computed(() => Math.ceil(props.total / props.pageSize))

// METHODS
const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    emits('update:page', page)
  }
}
</script>

<template>
  <div class="table-container">
    <!-- Filters Slot -->
    <slot name="filters" />

    <!-- Table -->
    <div class="table-wrapper">
      <table class="data-table">
        <thead>
          <tr>
            <th v-for="col in columns" :key="col.key">
              {{ col.label }}
            </th>
          </tr>
        </thead>
        <tbody v-if="data.length > 0">
          <tr v-for="row in data" :key="row.id">
            <td v-for="col in columns" :key="col.key">
              {{ row[col.key] }}
            </td>
          </tr>
        </tbody>
        <div v-else class="noData">
          {{ t('common.noData') }}
        </div>
      </table>
    </div>

    <!-- Pagination -->
    <div class="pagination">
      <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1">Previous</button>
      <div>{{ currentPage }} / {{ totalPages }}</div>
      <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages">
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
/* Container */
.table-container {
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 1rem;
}

/* Table */
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
}
.table-wrapper {
  overflow-x: auto; /* Enable horizontal scrolling */
  -webkit-overflow-scrolling: touch; /* Smooth scrolling for touch devices */
}

.data-table th,
.data-table td {
  padding: 10px;
  text-align: left;
  border-top: 1px solid #ccc;
}

.data-table tr:nth-child(odd) {
  background-color: #f7f7f7;
}

/* Pagination */
.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
}

.pagination button {
  padding: 10px 15px;
  margin-right: 10px;
  background-color: #4b2e83;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.pagination button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.pagination span {
  font-size: 16px;
  font-weight: bold;
}
.noData {
  padding: 1rem;
}
</style>
