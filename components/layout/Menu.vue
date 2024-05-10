<script setup lang="ts">
import { MENU_DATA } from './menu.data'
</script>

<template>
	<div>
		<NuxtLink
			class="flex items-center py-1 px-3 rounded-lg w-full hover:bg-gray-700 hover:shadow transition-all mb-2.5"
			v-for="{name, icon, url} in MENU_DATA"
			:key="name"
			:to="url"
		>
			<Icon :name="icon" class="mr-3" />
			<span>{{ name }}</span>
		</NuxtLink>
	</div>
</template>
