<template>
	<div class="section white">
		<div class="container architecture">
			<h2>Architecture</h2>
			<v-layout row wrap>
				<v-flex xs6>
					<ul>
						<li :class="{ active: isActive('loginLayer') }" @mouseover="setActive('loginLayer')">
							<h3>Login layer</h3>
							<p>Smart contracts as logic containers</p>
							<p>Higher flexibility and wider application</p>
						</li>
						<li :class="{ active: isActive('moduleLayer') }" @mouseover="setActive('moduleLayer')">
							<h3>Module layer</h3>
							<p>Ongoing development of new modules by core/community developers</p>
							<p>Online management under NULS module depository</p>
						</li>
						<li :class="{ active: isActive('chainLayer') }" @mouseover="setActive('chainLayer')">
							<h3>Chain layer</h3>
							<p>Variable as needed and easily customized</p>
							<p>Various customizable modules for public, private, and enterprise blockchains</p>
						</li>
						<li :class="{ active: isActive('crossChain') }" @mouseover="setActive('crossChain')">
							<h3>Cross-chain</h3>
							<p>High scalability and rapid value transmission</p>
							<p>Connection via cross-chain consensus modules</p>
						</li>
					</ul>
				</v-flex>
				<v-flex xs6>
					<div class="graph"></div>
				</v-flex>
			</v-layout>
		</div>
	</div>
</template>


<script>
	export default {
		data()
		{
			return {
				active: 'loginLayer'
			};
		},
		methods: {
			setActive(key)
			{
				this.active = key;
			},
			isActive(key)
			{
				return this.active === key;
			}
		}
	};
</script>
