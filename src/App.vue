<template>
  <el-container style="height: 100vh">
    <el-header style="background: #409eff;color:white;">
      <h2>智能组网编辑系统</h2>
    </el-header>
    <el-container>
      <el-aside width="180px" style="background: #f4f4f4;">
        <el-menu :router="true" default-active="$route.path">
          <el-menu-item index="/floorplan">房间编辑</el-menu-item>
          <el-menu-item index="/network/custom">现有组网</el-menu-item>
          <el-menu-item index="/network/optimize">优化组网</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts"></script>
