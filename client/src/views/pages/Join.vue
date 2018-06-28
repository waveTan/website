<template>
	<div>
		<HeaderMeta title="page.join.pageTitle" />
		<HeaderLayout :whiteBackground="true" />
		<div class="section grey">
			<div class="container">
				<h1><I18N id="page.join.header.title" /></h1>
				<p class="centered"><I18N id="page.join.header.meta" /></p>
			</div>
		</div>
		<div class="section container">
			<p>Job offer board here...</p>
		</div>
	</div>
</template>

<style scoped>
	h1 {
		color: #0a2140;
	}

	.section.grey {
		margin-top: -70px;
	}

	.section.grey .centered {
		padding: 0;
	}
</style>
