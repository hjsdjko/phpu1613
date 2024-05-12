<template>
	<view class="content my-publish-pv">
		<form>
			<view class="cu-form-group">
				<!-- <view :style="userInfoForm.list.title" class="title">留言人</view> -->
				<input :style='{"padding":"0 20rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 1)","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderRadius":"20rpx 20rpx 0 0","borderWidth":"0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' disabled="true" v-model="ruleForm.username" placeholder="留言人用户名"></input>
			</view>
			<view class="cu-form-group">
				<!-- <view :style="userInfoForm.list.title" class="title">留言内容</view> -->
				<textarea :style='{"padding":"20rpx","boxShadow":"0 0 0px rgba(0,0,0,.6) inset","margin":"0","borderColor":"rgba(0,0,0,.6)","backgroundColor":"rgba(255, 255, 255, 1)","color":"rgba(0, 0, 0, 1)","borderRadius":"20rpx 20rpx 0 0","borderWidth":"0","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"300rpx"}' v-model="ruleForm.content" placeholder="留言内容"></textarea>
			</view>
			<view class="cu-form-group" @tap="uploadTap" :class='left == "left"?"":"active"'>
				<!--<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(0, 204, 0, 1)","textAlign":"left"}' class="title">图片</view> -->
				<view class="right-input" :style='{textAlign:"left"}' style="padding:0">
					<image :style='{"width":"88rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"88rpx"}' class="avator" v-if="ruleForm.cpicture" :src="baseUrl+ruleForm.cpicture" mode="aspectFill"></image>
					<image :style='{"width":"88rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"88rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
				</view>
			</view>
			<view class="cu-form-group" style="text-align:center">
				<button :style='{"padding":"0 20rpx","boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","margin":"20rpx 0","borderColor":"rgba(37, 147, 230, 1)","backgroundColor":"rgba(37, 147, 230, 1)","color":"#fff","borderRadius":"80rpx","borderWidth":"1","width":"60%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' @tap="onSubmitTap" class="bg-red margin-tb-sm">提交</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ruleForm: {
					userid: '',
					username: '',
					content: '',
					reply: '',
					cpicture: '',
				},
				user: {}
			}
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad(options) {
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
            						                                    if(table == `yonghu`){
                this.ruleForm.username = this.user.zhanghao
            }
                                                                                                                                                                                                						            						                                    if(table == `jiaoshi`){
                this.ruleForm.username = this.user.jiaoshibianhao
            }
                                                                                                                                                                                                						            			            			            			            			            			            			            			            			            			            			            			            			            			            			this.styleChange()
		},
		methods: {
			uploadTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.cpicture = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.my-publish-pv .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.myPublishForm.content.input.backgroundColor
					// })
				})
			},
			async onSubmitTap() {
				if(this.ruleForm.content){
                    var sensitiveWords = "";
                    var sensitiveWordsArr = [];
                    if(sensitiveWords) {
                        sensitiveWordsArr = sensitiveWords.split(",");
                    }
                    for(var i=0; i<sensitiveWordsArr.length; i++){
                        //全局替换
                        var reg = new RegExp(sensitiveWordsArr[i],"g");
                        //判断内容中是否包括敏感词
                        if (this.ruleForm.content.indexOf(sensitiveWordsArr[i]) > -1) {
                            // 将敏感词替换为 **
                            this.ruleForm.content = this.ruleForm.content.replace(reg,"**");
                        }
                    }
					await this.$api.add(`messages`, this.ruleForm);
					this.$utils.msgBack('提交成功');
				}else{
					this.$utils.msg("请填写留言内容")
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #fff;
	}
	
	.content {
		padding: 20upx 24upx;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
				background-image: url(http://codegen.caihongy.cn/20220213/9ee67e80266a46eb92e20b8ca0de61e7.png);
				background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
	}
	
	.cu-form-group {
		padding: 0;
		background-color: transparent;
		min-height: inherit;
		margin-bottom: 20upx;
	}
	
	.cu-form-group+.cu-form-group {
		border: 0;
	}
	
	.cu-form-group uni-input {
		padding: 0 30upx;
	}
	
	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}
	
	.bg-red {
		line-height: 80rpx;
	}
</style>
