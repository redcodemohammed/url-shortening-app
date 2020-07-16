<template>
	<div>
		<nav>
			<Header />
		</nav>
		<div class="container">
			<div class="box">
				<Form />
			</div>
		</div>
		<div class="container">
			<div class="box">
				<UrlList />
			</div>
		</div>
	</div>
</template>
<script>
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import UrlList from "./components/UrlList.vue";
export default {
	components: {
		Header,
		Form,
		UrlList
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
