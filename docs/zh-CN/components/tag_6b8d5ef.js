amis.define('docs/zh-CN/components/tag.md', function(require, exports, module, define) {

  module.exports = {
    "title": "Tag 标签",
    "description": null,
    "type": 0,
    "group": "⚙ 组件",
    "menuName": "Tabs",
    "icon": null,
    "html": "<div class=\"markdown-body\"><p>用于标记和选择的标签</p>\n<h2><a class=\"anchor\" name=\"%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" href=\"#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>基本用法</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    type: \"page\",\n    body: [\n        {\n            \"type\": \"tag\",\n            \"label\": \"普通的标签\",\n            \"displayMode\": \"rounded\",\n            \"color\": \"inactive\"\n        },\n        {\n            \"type\": \"tag\",\n            \"label\": \"普通标签\",\n            \"color\": \"processing\"\n        },\n        {\n            \"type\": \"tag\",\n            \"label\": \"这是一个很长长长长长长长长长长长长长的标签\",\n            \"color\": \"success\"\n        },\n        {\n            \"type\": \"tag\",\n            \"label\": \"这是一个很长长长长长长长长长长长长长的标签\",\n            \"closable\": true\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E4%B8%8D%E5%90%8C%E7%9A%84%E6%A8%A1%E5%BC%8F\" href=\"#%E4%B8%8D%E5%90%8C%E7%9A%84%E6%A8%A1%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>不同的模式</h2></div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": [\n        {\n            \"type\": \"tag\",\n            \"label\": \"面性标签\",\n            \"displayMode\": \"normal\",\n            \"color\": \"active\"\n        },\n        {\n            \"type\": \"tag\",\n            \"label\": \"线性标签\",\n            \"displayMode\": \"rounded\",\n            \"color\": \"inactive\"\n        },\n        {\n            \"type\": \"tag\",\n            \"label\": \"状态标签\",\n            \"displayMode\": \"status\",\n            \"color\": \"active\",\n            \"closable\": true\n        },\n        {\n            \"type\": \"tag\",\n            \"label\": \"#4096ff\",\n            \"displayMode\": \"rounded\",\n            \"color\": \"#4096ff\"\n        },\n        {\n            \"type\": \"tag\",\n            \"label\": \"#f70e47\",\n            \"displayMode\": \"rounded\",\n            \"color\": \"#f70e47\"\n        }\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F\" href=\"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>自定义样式</h2><p>可以通过 style 来控制背景、边框及文字颜色。如下</p>\n</div><div class=\"amis-preview\" style=\"min-height: undefinedpx\"><script type=\"text/schema\" undefined>{\n    \"type\": \"page\",\n    \"body\": [\n        {\n            \"type\": \"tag\",\n            \"label\": \"面性标签\",\n            \"displayMode\": \"normal\",\n            \"color\": \"active\"\n        },\n        {\n            \"type\": \"tag\",\n            \"label\": \"线性标签\",\n            \"displayMode\": \"rounded\",\n            \"color\": \"inactive\"\n        },\n        {\n            \"type\": \"tag\",\n            \"label\": \"自定义样式1\",\n            \"displayMode\": \"normal\",\n            \"style\": {\n                \"backgroundColor\": \"#fff\",\n                \"border\": \"1px solid #ccc\",\n                \"color\": \"#666\",\n            }\n        },\n        {\n            \"type\": \"tag\",\n            \"label\": \"自定义样式2\",\n            \"displayMode\": \"rounded\",\n            \"style\": {\n                \"backgroundColor\": \"#2468f2\",\n                \"borderColor\": \"#2468f2\",\n                \"color\": \"#fff\",\n            }\n        },\n    ]\n}\n</script></div><div class=\"markdown-body\">\n<h2><a class=\"anchor\" name=\"%E5%B1%9E%E6%80%A7%E8%A1%A8\" href=\"#%E5%B1%9E%E6%80%A7%E8%A1%A8\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>属性表</h2><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>displayMode</td>\n<td><code>&#39;normal&#39; | &#39;rounded&#39; | &#39;status&#39;</code></td>\n<td><code>normal</code></td>\n<td>展现模式</td>\n</tr>\n<tr>\n<td>color</td>\n<td><code>&#39;active&#39; | &#39;inactive&#39; | &#39;error&#39; | &#39;success&#39; | &#39;processing&#39; | &#39;warning&#39; | 具体色值 </code></td>\n<td></td>\n<td>颜色主题，提供默认主题，并支持自定义颜色值</td>\n</tr>\n<tr>\n<td>label</td>\n<td><code>string</code></td>\n<td><code>-</code></td>\n<td>标签内容</td>\n</tr>\n<tr>\n<td>icon</td>\n<td><code>SchemaIcon</code></td>\n<td><code>dot 图标</code></td>\n<td>status 模式下的前置图标</td>\n</tr>\n<tr>\n<td>className</td>\n<td><code>string</code></td>\n<td></td>\n<td>自定义 CSS 样式类名</td>\n</tr>\n<tr>\n<td>style</td>\n<td><code>object</code></td>\n<td>{}</td>\n<td>自定义样式（行内样式），优先级最高</td>\n</tr>\n</tbody></table>\n</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "基本用法",
          "fragment": "%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "fullPath": "#%E5%9F%BA%E6%9C%AC%E7%94%A8%E6%B3%95",
          "level": 2
        },
        {
          "label": "不同的模式",
          "fragment": "%E4%B8%8D%E5%90%8C%E7%9A%84%E6%A8%A1%E5%BC%8F",
          "fullPath": "#%E4%B8%8D%E5%90%8C%E7%9A%84%E6%A8%A1%E5%BC%8F",
          "level": 2
        },
        {
          "label": "自定义样式",
          "fragment": "%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F",
          "fullPath": "#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%B7%E5%BC%8F",
          "level": 2
        },
        {
          "label": "属性表",
          "fragment": "%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "fullPath": "#%E5%B1%9E%E6%80%A7%E8%A1%A8",
          "level": 2
        }
      ],
      "level": 0
    }
  };

});
