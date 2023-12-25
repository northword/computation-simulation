const e=JSON.parse('{"key":"v-39b473fe","path":"/code/citation-style-language/specification/style-behavior.html","title":"样式的行为","lang":"zh-CN","frontmatter":{"title":"样式的行为","date":"2022-08-01T16:55:26.000Z","updated":"2022-08-05T18:06:47.000Z","description":"样式的行为 [!warning] WORK IN&nbsp;PROGRESS 此页面正在施工中。 选项 样式可以使用不同的元素来进行特定的配置。在 cs:citation 元素中设置元素可以配置特定的 引文选项；在 cs:bibliography 元素和 全局选项（同时影响引文和参考文献条目）中，可以配置特定的参考文献条目。继承的名字选项可以在 cs:style,cs:style 和 cs:bibliography 中设置。最后，本地化选项 可以在 cs:locale 元素中设置。","head":[["script",{"type":"text/javascript"},"var _hmt = _hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?5574297d56b065f5137cf3654e3de360"}],["script",{"src":"https://hm.baidu.com/hm.js?92a8f6d9fbb75efa90964afcd42be758"}],["meta",{"property":"og:url","content":"https://northword.cn/code/citation-style-language/specification/style-behavior.html"}],["meta",{"property":"og:site_name","content":"北辞"}],["meta",{"property":"og:title","content":"样式的行为"}],["meta",{"property":"og:description","content":"样式的行为 [!warning] WORK IN&nbsp;PROGRESS 此页面正在施工中。 选项 样式可以使用不同的元素来进行特定的配置。在 cs:citation 元素中设置元素可以配置特定的 引文选项；在 cs:bibliography 元素和 全局选项（同时影响引文和参考文献条目）中，可以配置特定的参考文献条目。继承的名字选项可以在 cs:style,cs:style 和 cs:bibliography 中设置。最后，本地化选项 可以在 cs:locale 元素中设置。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2022-09-16T13:52:48.000Z"}],["meta",{"property":"article:author","content":"Northword"}],["meta",{"property":"article:published_time","content":"2022-08-01T16:55:26.000Z"}],["meta",{"property":"article:modified_time","content":"2022-09-16T13:52:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"样式的行为\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-08-01T16:55:26.000Z\\",\\"dateModified\\":\\"2022-09-16T13:52:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Northword\\",\\"url\\":\\"https://northword.cn\\"}]}"]]},"headers":[{"level":2,"title":"选项","slug":"选项","link":"#选项","children":[{"level":3,"title":"引文选项","slug":"引文选项","link":"#引文选项","children":[]},{"level":3,"title":"参考文献目录选项","slug":"参考文献目录选项","link":"#参考文献目录选项","children":[]},{"level":3,"title":"全局选项","slug":"全局选项","link":"#全局选项","children":[]},{"level":3,"title":"可继承的名称选项","slug":"可继承的名称选项","link":"#可继承的名称选项","children":[]},{"level":3,"title":"局部选项","slug":"局部选项","link":"#局部选项","children":[]}]},{"level":2,"title":"排序 ***","slug":"排序","link":"#排序","children":[{"level":3,"title":"排序变量","slug":"排序变量","link":"#排序变量","children":[]},{"level":3,"title":"排序宏","slug":"排序宏","link":"#排序宏","children":[]}]},{"level":2,"title":"范围分隔符","slug":"范围分隔符","link":"#范围分隔符","children":[]},{"level":2,"title":"格式化","slug":"格式化","link":"#格式化","children":[]},{"level":2,"title":"词缀","slug":"词缀","link":"#词缀","children":[]},{"level":2,"title":"分隔符\\\\delimiter","slug":"分隔符-delimiter","link":"#分隔符-delimiter","children":[]},{"level":2,"title":"显示\\\\display","slug":"显示-display","link":"#显示-display","children":[]},{"level":2,"title":"引用\\\\quotes","slug":"引用-quotes","link":"#引用-quotes","children":[]},{"level":2,"title":"Strip-periods","slug":"strip-periods","link":"#strip-periods","children":[]},{"level":2,"title":"文字大小写","slug":"文字大小写","link":"#文字大小写","children":[{"level":3,"title":"句子大小写转换","slug":"句子大小写转换","link":"#句子大小写转换","children":[]},{"level":3,"title":"标题大小写转换","slug":"标题大小写转换","link":"#标题大小写转换","children":[]}]}],"git":{"createdTime":1663336368000,"updatedTime":1663336368000,"contributors":[{"name":"Northword","email":"northword@outlook.com","commits":1}]},"readingTime":{"minutes":22.38,"words":6713},"filePathRelative":"code/citation-style-language/specification/style-behavior.md","localizedDate":"2022年8月2日","excerpt":"<h1> 样式的行为</h1>\\n<blockquote>\\n<p>[!warning] WORK IN&nbsp;PROGRESS\\n此页面正在施工中。</p>\\n</blockquote>\\n<h2> 选项</h2>\\n<p>样式可以使用不同的元素来进行特定的配置。在 <code>cs:citation</code> 元素中设置元素可以配置特定的 <a href=\\"#%E5%BC%95%E6%96%87%E9%80%89%E9%A1%B9\\">引文选项</a>；在 <code>cs:bibliography</code> 元素和 <a href=\\"#%E5%85%A8%E5%B1%80%E9%80%89%E9%A1%B9\\">全局选项</a>（同时影响引文和参考文献条目）中，可以配置特定的参考文献条目。继承的名字选项可以在 <code>cs:style</code>,<code>cs:style</code> 和 <code>cs:bibliography</code> 中设置。最后，<a href=\\"#%E6%9C%AC%E5%9C%B0%E5%8C%96%E9%80%89%E9%A1%B9\\">本地化选项</a> 可以在 <code>cs:locale</code> 元素中设置。</p>","autoDesc":true}');export{e as data};
