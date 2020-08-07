// 下载附件
export function downloadFiles(name, res) {
    if (window.navigator.msSaveBlob) {
        // for ie 10 and later
        try {
            var blobObject = new Blob([res.data]);
            window.navigator.msSaveBlob(blobObject, name);
        } catch (e) {
            console.log(e);
        }
    } else {
        // 其他浏览器 下载方式
        var reader = new FileReader();
        reader.readAsDataURL(new Blob([res.data]));
        reader.onload = function (e) {
            // 转换完成，创建一个a标签用于下载
            var a = document.createElement('a');
            a.download = name;
            a.href = e.target.result;
            console.log(e.target.result, '编码结果');
            // 兼容触发click
            var evt = document.createEvent("MouseEvents");
            evt.initEvent("click", true, true);
            a.dispatchEvent(evt);
        }
    }
}