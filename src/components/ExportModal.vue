<template>
  <el-dialog v-model="visible" title="导出结构数据" width="400px">
    <el-input type="textarea" :rows="10" v-model="jsonStr" readonly/>
    <template #footer>
      <el-button @click="visible = false">关闭</el-button>
      <el-button type="primary" @click="copy">复制JSON</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineExpose } from 'vue'
const props = defineProps<{ data: any }>()
const visible = ref(false)
const jsonStr = ref('')
function open(data: any) {
  jsonStr.value = JSON.stringify(data, null, 2)
  visible.value = true
}
function copy() {
  navigator.clipboard.writeText(jsonStr.value)
}
defineExpose({ open })
</script>
