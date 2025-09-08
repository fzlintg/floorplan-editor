<template>
  <div>
    <h3>房间结构编辑</h3>
    <vue-konva :config="stageConfig">
      <v-layer>
        <v-image :config="imageConfig" />
        <v-rect
          v-for="room in rooms"
          :key="room.id"
          :config="roomConfig(room)"
          @dragmove="e => handleDrag(e, room)"
          @transformend="e => handleTransform(e, room)"
          :draggable="true"
        />
      </v-layer>
    </vue-konva>
    <el-button type="primary" @click="addRoom" style="margin-top:16px;">
      添加房间
    </el-button>
    <el-button @click="exportData" style="margin-top:16px;">
      导出结构数据
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineProps, defineEmits } from 'vue'
import VueKonva from 'vue-konva'

const props = defineProps<{
  image: string
  rooms: any[]
}>()
const emits = defineEmits(['update:rooms', 'export'])

const stageConfig = { width: 400, height: 300 }
const imageConfig = computed(() => ({
  image: undefined, // 可扩展图片加载逻辑
  x: 0, y: 0, width: 400, height: 300
}))

function roomConfig(room: any) {
  return {
    ...room,
    draggable: true,
    strokeWidth: 2,
    cornerRadius: 4,
    opacity: 0.6,
    scaleX: room.scaleX || 1,
    scaleY: room.scaleY || 1,
  }
}

function handleDrag(e: any, room: any) {
  room.x = e.target.x()
  room.y = e.target.y()
  emits('update:rooms', props.rooms)
}

function handleTransform(e: any, room: any) {
  room.width = e.target.width() * e.target.scaleX()
  room.height = e.target.height() * e.target.scaleY()
  room.scaleX = 1
  room.scaleY = 1
  emits('update:rooms', props.rooms)
}

function addRoom() {
  props.rooms.push({
    id: Date.now(),
    x: 50, y: 50, width: 80, height: 60,
    fill: 'rgba(255,0,0,0.2)', stroke: 'red'
  })
  emits('update:rooms', props.rooms)
}

function exportData() {
  emits('export', JSON.parse(JSON.stringify(props.rooms)))
}
</script>
