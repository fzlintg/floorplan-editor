<template>
  <div>
    <el-select v-model="selected" placeholder="选择模板" style="width:180px;">
      <el-option v-for="tpl in templates" :key="tpl.name" :label="tpl.name" :value="tpl.name"/>
    </el-select>
    <el-button type="primary" @click="importTpl" :disabled="!selected" style="margin-left:10px;">
      导入模板
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
const emits = defineEmits(['import'])
const selected = ref('')
const templates = [
  { name: '标准两室一厅', rooms: [{ id: 1, x: 40, y: 60, width: 120, height: 100, fill: 'rgba(0,0,255,0.2)', stroke: 'blue' }] },
  { name: '标准三室', rooms: [{ id: 2, x: 200, y: 80, width: 100, height: 120, fill: 'rgba(0,255,0,0.2)', stroke: 'green' }] }
]

function importTpl() {
  const tpl = templates.find(t => t.name === selected.value)
  if (tpl) emits('import', tpl.rooms)
}
</script>
