const {
    Core,
    THEME_COLOR
} = require("../core/index.ts");
const fs = require("fs");

const urlParams = new URLSearchParams(window.location.search);
const filePath = urlParams.get("path");
const theme = urlParams.get("theme");

(async function() {
    document.documentElement.style.setProperty("--theme-bg-color", THEME_COLOR[theme][0]);
    document.documentElement.style.setProperty("--theme-bd-color", THEME_COLOR[theme][1]);
    document.documentElement.style.setProperty("--theme-ct-color", THEME_COLOR[theme][2]);
    document.documentElement.style.setProperty("--theme-ft-color", THEME_COLOR[theme][3]);

    const appPackage = new Core();

    try {
        const info = await appPackage.parseFile(filePath);
        console.log(info);
        document.querySelector(".output").innerHTML = JSON.stringify(info);
    } catch (err) {
        console.error(err);
        const message = err.message || err || "未知错误";
        alert(`手机应用安装包格式扩展插件错误: ${message}`);
        /*eagle.log.error(`手机应用安装包格式扩展插件错误: ${message}`);
        eagle.notification.show({
            title: "错误",
            description: message,
        });*/
    }
})();
