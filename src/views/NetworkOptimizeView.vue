<template>
  <div>
    <h3>优化组网</h3>
    <el-alert type="success" show-icon :closable="false">
      系统自动为您优化路由器/AP布局并生成最佳信号覆盖热力图。
    </el-alert>
    <el-button type="primary" style="margin-top:16px;" @click="optimize">一键优化</el-button>
    <div v-if="heatmap" style="margin-top:16px;">
      <img :src="heatmap" style="max-width:100%;border:1px solid #eee;"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useFloorplanStore } from '../stores/floorplan'
import { optimizeNetwork } from '../api/network'
const rooms = useFloorplanStore().rooms
const heatmap = ref('')
async function optimize() {
  const res = await optimizeNetwork({ rooms })
  heatmap.value = res.heatmap
}
</script>
