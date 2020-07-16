<template>
	<div class="container">
		<div class="links">
			<a target="_blank" :href="shortUrl">Short url{{" " + shortUrl}}</a>
			<a target="_blank" :href="originalUrl">Original version {{" " + originalUrl}}</a>
		</div>
	</div>
</template>
<script>
export default {
	props: ["originalUrl", "shortUrl"]
};
</script>

<style scoped>
.links {
	margin: 1px;
}
a {
	margin: 0px 0px 10px;
	width: 100%;
	background-color: #4caf50;
	color: white;
	padding: 14px 20px;
	margin: 8px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	text-decoration: none;
	outline-style: none;
	display: block;
}
a:hover {
	background-color: #45a049;
}
.container {
	display: inline-block;
	border-left: 2px solid rgb(187, 205, 206);
	border-radius: 0px;
	margin: 3px;
}
/* @media screen and (max-width: 700px) {
	a {
		float: none;
		display: block;
		text-align: left;
	}
} */
</style>
