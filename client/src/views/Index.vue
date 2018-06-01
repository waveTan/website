<template>
  <div class="page">
    <counter />
    <p>To get started, edit files in <code>./client</code> and save.</p>
    <SwitchLanguage />
  </div>
</template>

<script>
	import Counter from '@/components/Counter';
	import SwitchLanguage from '@/components/SwitchLanguage';

	export default {
		components: {
			Counter,
			SwitchLanguage
		}
	}
</script>
