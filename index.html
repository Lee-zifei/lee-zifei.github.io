<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Zifei Lee | CDUT Geophysics</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.2.0/github-markdown.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
    
    <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
    
    <style>
        /* 1. 全局 Wiki 背景 (wiki.gg 风格) */
        body { 
            background-color: #0f0f0f; 
            background-image: linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), 
                              url('https://static.wikia.nocookie.net/bindingofisaacre_gamepedia/images/b/b2/Site-background-light/revision/latest');
            background-attachment: fixed;
            background-size: cover;
            margin: 0;
            padding: 0;
            font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        }

        /* 2. 内容主容器 */
        .markdown-body {
            box-sizing: border-box;
            min-width: 200px;
            max-width: 1000px;
            margin: 40px auto;
            padding: 45px;
            background-color: #1c1c1c; /* 维基灰色容器 */
            border: 1px solid #3a3a3a;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            color: #f0f0f0 !important;
        }

        /* 3. 标题与横线 (wiki.gg 蓝色) */
        .markdown-body h1, .markdown-body h2, .markdown-body h3 {
            border-bottom: 2px solid #3a3a3a !important;
            color: #fff !important;
            padding-bottom: 5px;
            font-weight: bold;
        }
        
        /* 4. 链接颜色 (wiki.gg 蓝色) */
        .markdown-body a { color: #59acff !important; text-decoration: none; }
        .markdown-body a:hover { text-decoration: underline; color: #80c0ff !important; }

        /* 5. 表格样式优化 - 完美适配以撒维基 */
        .markdown-body table {
            background-color: #252525 !important;
            border-collapse: collapse !important;
            margin: 15px 0;
            width: 100%;
        }
        .markdown-body table th, .markdown-body table td {
            border: 1px solid #3a3a3a !important;
            padding: 8px 12px !important;
        }
        .markdown-body table tr {
            background-color: #1c1c1c !important;
        }
        .markdown-body table tr:nth-child(2n) {
            background-color: #222222 !important;
        }

        /* 6. 图片排版与 GIF 适配 */
        .markdown-body img { 
            border-radius: 0 !important; 
            max-width: 100%;
        }
        /* 标题内的 GIF 移除边框和背景 */
        .markdown-body h1 img, .markdown-body h2 img, .markdown-body h3 img { 
            border: none !important; 
            background: transparent !important;
            vertical-align: middle;
        }
        /* 顶层表格中的照片增加边框 */
        td[align="center"] img {
            border: 3px solid #3a3a3a !important;
            background: #000;
        }

        /* 7. 引用块样式 */
        .markdown-body blockquote {
            border-left: 4px solid #59acff !important;
            background-color: #252525 !important;
            color: #bbb !important;
            padding: 10px 20px;
        }

        /* 移动端适配 */
        @media (max-width: 767px) {
            .markdown-body { padding: 15px; margin: 10px; border: none; }
        }
    </style>
</head>
<body>
    <article id="content" class="markdown-body">Loading Wiki content...</article>

    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

    <script>
        if (typeof marked === 'undefined') {
            document.getElementById('content').innerHTML = "Error: marked.js blocked.";
        } else {
            fetch('home.md')
                .then(response => {
                    if (!response.ok) throw new Error('home.md not found');
                    return response.text();
                })
                .then(text => {
                    // 渲染 Markdown
                    document.getElementById('content').innerHTML = marked.parse(text);
                    
                    // 后处理：自动给所有图片添加 onerror 保护
                    const imgs = document.querySelectorAll('img');
                    imgs.forEach(img => {
                        img.onerror = function() { this.style.display = 'none'; };
                    });

                    // 触发数学公式渲染
                    if (window.MathJax) { MathJax.typesetPromise(); }
                })
                .catch(err => {
                    document.getElementById('content').innerHTML = "Error: " + err.message;
                });
        }
    </script>
</body>
</html>