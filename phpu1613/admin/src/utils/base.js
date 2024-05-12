const base = {
    get() {
        return {
            url : "http://localhost:8080/phpu1613/",
            name: "phpu1613",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/phpu1613/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于校园作业反馈的家校联系微信小程序"
        } 
    }
}
export default base
