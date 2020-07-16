<template>
	<div>
		<div class="card">
			<h3>Recently shortened</h3>
			<div class="container">
				<ul>
					<li v-for="(url, i) in urls" :key="i">
						<Url :originalUrl="url.originalUrl" :shortUrl="url.shortUrl" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
import Url from "./Url";
export default {
	components: {
		Url
	},
	data: () => ({
		urls: [
			{
				originalUrl: "https://google.com",
				shortUrl: "https://google.com"
			},
			{
				originalUrl: "https://google.com",
				shortUrl: "https://google.com"
			},
			{
				originalUrl: "https://google.com",
				shortUrl: "https://google.com"
			},
			{
				originalUrl: "https://google.com",
				shortUrl: "https://google.com"
			},
			{
				originalUrl: "https://google.com",
				shortUrl: "https://google.com"
			},
			{
				originalUrl: "https://google.com",
				shortUrl: "https://google.com"
			},
			{
				originalUrl: "https://google.com",
				shortUrl: "https://google.com"
			},
			{
				originalUrl: "https://google.com",
				shortUrl: "https://google.com"
			},
			{
				originalUrl: "https://google.com",
				shortUrl: "https://google.com"
			},
			{
				originalUrl: "https://google.com",
				shortUrl: "https://google.com"
			},
			{
				originalUrl: "https://google.com",
				shortUrl: "https://google.com"
			},
			{
				originalUrl: "https://google.com",
				shortUrl: "https://google.com"
			}
		]
	})
};
</script>
<style scoped>
li {
	display: block;
}
.card {
	/* Add shadows to create the "card" effect */
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	border-radius: 5px; /* 5px rounded corners */
}

/* On mouse-over, add a deeper shadow */
.card:hover {
	box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
