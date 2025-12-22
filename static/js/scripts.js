// 示例：scripts.js 中加载 markdown 的代码片段
document.addEventListener('DOMContentLoaded', () => {
    // Load config.yaml (if exists)
    fetch('config.yaml')
        .then(response => response.text())
        .then(yamlText => {
            const config = jsyaml.load(yamlText);
            document.getElementById('title').innerText = config.title;
            document.getElementById('page-top-title').innerText = config.name + ' @ ' + config.institution;
            document.getElementById('top-section-bg-text').innerText = config.name;
            // ... 其他配置项
        });

    // Load home.md
    fetch('static/md/home.md') // 假设 markdown 文件放在 static/md/ 目录下
        .then(response => response.text())
        .then(markdownText => {
            document.getElementById('home-md').innerHTML = marked.parse(markdownText);
            // MathJax.typesetPromise(); // 如果需要重新渲染数学公式
        });

    // Load awards.md
    fetch('static/md/awards.md')
        .then(response => response.text())
        .then(markdownText => {
            document.getElementById('awards-md').innerHTML = marked.parse(markdownText);
        });

    // ... 以此类推加载其他 markdown 文件
});