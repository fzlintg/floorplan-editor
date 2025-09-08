<template>
  <div>
    <h3>现有组网</h3>
    <el-alert type="info" show-icon :closable="false">
      请自行选择路由器、AP并生成信号热力图。
    </el-alert>
    <!-- 路由器、AP配置UI略，开发时可补充 -->
    <el-button type="primary" style="margin-top:16px;" @click="genHeatmap">生成信号热力图</el-button>
    <div v-if="heatmap" style="margin-top:16px;">
      <img :src="heatmap" style="max-width:100%;border:1px solid #eee;"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useFloorplanStore } from '../stores/floorplan'
import { fetchHeatmap } from '../api/network'
const rooms = useFloorplanStore().rooms
const routers = ref([])
const aps = ref([])
const heatmap = ref('')
async function genHeatmap() {
  heatmap.value = await fetchHeatmap({ rooms, routers: routers.value, aps: aps.value })
}
</script>
