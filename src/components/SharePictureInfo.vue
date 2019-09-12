<template>
    <div class="share-picture-info">
        <div class="header">
            <h3>{{sharepictureinfo.title}}</h3>
            <div>
                <p>发表时间：{{sharepictureinfo.add_time | dateFromat()}}</p>
                <p>点击：{{sharepictureinfo.click}}次</p>
            </div>
        </div>
        <hr/>
        <div class="content">
            <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>
        <p>{{sharepictureinfo.content}}</p>
    </div>
</template>

<script>
    import {Toast} from 'mint-ui'

    export default {
        name: "SharePictureInfo",
        data() {
            return {
                id: this.$route.params.id,
                sharepictureinfo: {},
                slide1: [
                    {
                        src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
                        msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
                        alt: 'picture1',
                        title: 'Image Caption 1',
                        w: 600,
                        h: 400
                    }
                ]
            }
        },
        created() {
            this.getSharePictureInfoById(),
            this.getSharePictureInfoThumbnail()
        },
        methods: {
            getSharePictureInfoById() {
                this.$http.get("api/v1/sharepictureinfo/" + this.id).then(result => {
                    console.log("根据id获取分享图片详情")
                    if (result.status === 200) {
                        //成功了
                        this.sharepictureinfo = result.body;
                        Toast('网络正常');
                    } else {
                        //失败了
                        Toast('网络异常');
                    }
                });
            },
            handleClose(){
                console.log("关闭缩略图")
            },
            getSharePictureInfoThumbnail(){
                this.$http.get("api/v1/sharepictureinfo2/" + this.id).then(result => {
                    console.log("根据id获取分享缩略图片");
                    if (result.status === 200) {
                        //成功了
                        // this.slide1 = JSON.parse(result.bodyText);
                        console.log(this.slide1);
                        Toast('网络正常');
                    } else {
                        //失败了
                        Toast('网络异常');
                    }
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .share-picture-info {
        .header {
            h3 {
                text-align: center;
                color: #26a2ff;
                font-size: 18px;
                margin: 16px 0;
            }
            div {
                display: flex;
                justify-content: space-between;
                padding: 0 20px;
                p {
                    margin: 0;
                    padding: 0;
                }
            }
        }
        .content {
            padding: 10px;
            img {
                width: 10%;
                padding: 4px;
                box-shadow: 2px 2px 2px #ccc;
            }
        }
        p {
            color: black;
            text-align: left;
            line-height: 30px;
            padding: 0 10px;
        }
    }
</style>
