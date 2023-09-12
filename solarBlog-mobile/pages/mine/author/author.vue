<template>
	<view class="author">
		<image @click="handlePreView(wxUrl)" :src="wxUrl" mode=""></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				wxUrl: '/static/mine/image/author.png',
				qqUrl: '/static/mine/image/author.png'
			}
		},
		methods: {
			handlePreView(imgUrl) {
				wx.previewImage({
					urls: [imgUrl]
				})
			}
		}
	}
</script>

<style lang="scss">
	.author {
		width: 100%;
		height: 100vh;
		background-color: #F1F8FA;
		
		image {
			width: 700rpx;
			height: 900rpx;
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%,-50%);
		}
	}
</style>
