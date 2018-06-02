<template>
	<v-container>
		<v-layout row wrap>
			<v-flex>
				<v-expansion-panel popout>
					<slot></slot>
				</v-expansion-panel>
			</v-flex>
		</v-layout>
	</v-container>
</template>
