<template>
  <el-table :data="rooms" style="width: 100%;" size="small">
    <el-table-column prop="id" label="ID" width="80"/>
    <el-table-column prop="x" label="X"/>
    <el-table-column prop="y" label="Y"/>
    <el-table-column prop="width" label="宽"/>
    <el-table-column prop="height" label="高"/>
    <el-table-column label="颜色">
      <template #default="{row}">
        <div :style="{background: row.fill, width:'40px', height:'18px'}"></div>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template #default="{row}">
        <el-button size="small" type="danger" @click="remove(row.id)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
const props = defineProps<{ rooms: any[] }>()
const emits = defineEmits(['remove'])
function remove(id: number) {
  emits('remove', id)
}
</script>
