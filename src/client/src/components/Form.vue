<template>
	<div>
		<div class="card">
			<div class="container">
				<form @submit.prevent="shorten">
					<label for="fname">Url to shorten</label>
					<input v-model="url" type="url" id="url" name="url" placeholder="The url.." />
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	</div>
</template>
<script>
import axios from "../plugins/axios";
export default {
	data: () => ({
		url: ""
	}),
	props: ["urls"],
	methods: {
		async shorten() {
			let oldUrl = this.urls.find(u => u.originalUrl === this.url);
			if (oldUrl) {
				alert("The short url was copied.");
				this.url = oldUrl.shortUrl;
				this.copy(oldUrl.shortUrl);
			} else if (this.url) {
				let res = await axios.post("/shorten", { url: this.url });
				if (res.data.error) alert(res.data.reason);
				else {
					alert("The short url was copied.");
					this.url = res.data.url.shortUrl;
					this.copy(res.data.url.shortUrl);
					this.$emit("url", res.data.url);
				}
			}
		},
		copy(val) {
			let textArea = document.createElement("textarea");
			let container = this.$el.querySelector(".container");
			container.appendChild(textArea);

			textArea.innerText = val;
			textArea.select();
			document.execCommand("copy");
			container.removeChild(textArea);
		}
	}
};
</script>
<style>
input[type="url"],
select {
	width: 100%;
	padding: 12px 20px;
	margin: 8px 0;
	display: inline-block;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-sizing: border-box;
}

input[type="submit"] {
	width: 100%;
	background-color: #4caf50;
	color: white;
	padding: 14px 20px;
	margin: 8px 0;
	border: none;
	border-radius: 4px;
	cursor: pointer;
}

input[type="submit"]:hover {
	background-color: #45a049;
}

div {
	border-radius: 5px;
	background-color: #f2f2f2;
	padding: 20px;
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

/* Add some padding inside the card container */
.container {
	padding: 2px 16px;
}
</style>
