<template>
	<div>
		<nav>
			<Header />
		</nav>
		<div class="container">
			<div class="box">
				<Form @url="urlShortened" :urls="urls" />
			</div>
		</div>
		<div class="container">
			<div class="box">
				<UrlList :urls="urls" />
			</div>
		</div>
	</div>
</template>
<script>
import axios from "./plugins/axios";

import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import UrlList from "./components/UrlList.vue";
export default {
	components: {
		Header,
		Form,
		UrlList
	},
	data: () => ({
		urls: []
	}),
	methods: {
		async urlShortened(url) {
			this.urls = [url, ...this.urls];
		}
	},
	async created() {
		let res = await axios.get("/all");
		if (res.data.error) alert(res.data.reason);
		else this.urls = res.data.urls;
	}
};
</script>
<style >
.container {
	min-height: 10vh;
	display: flex;
	justify-content: center;
	align-items: center;
}

body {
	background-color: #f1f1f1;
}
</style>
