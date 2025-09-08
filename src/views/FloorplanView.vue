<template>
  <div>
    <h3>房间编辑</h3>
    <RoomEditor :image="background" :rooms="rooms" @update:rooms="updateRooms" @export="openExport"/>
    <RoomList :rooms="rooms" @remove="removeRoom"/>
    <RoomTemplateSelector @import="importTpl"/>
    <ExportModal ref="exportModal"/>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useFloorplanStore } from '../stores/floorplan'
import RoomEditor from '../components/RoomEditor.vue'
import RoomList from '../components/RoomList.vue'
import RoomTemplateSelector from '../components/RoomTemplateSelector.vue'
import ExportModal from '../components/ExportModal.vue'

const store = useFloorplanStore()
const rooms = ref([...store.rooms])
const background = ref(store.backgroundImage)
const exportModal = ref()

function updateRooms(newRooms:any[]) {
  rooms.value = [...newRooms]
  store.setRooms(rooms.value)
}
function removeRoom(id: number) {
  rooms.value = rooms.value.filter(r => r.id !== id)
  store.setRooms(rooms.value)
}
function importTpl(tplRooms: any[]) {
  rooms.value = [...tplRooms]
  store.setRooms(rooms.value)
}
function openExport(data: any) {
  exportModal.value.open(data)
}
</script>
