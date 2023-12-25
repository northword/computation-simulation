const t=JSON.parse('{"key":"v-8a8094b0","path":"/dft-learning/pages/904969/","title":"自旋电荷密度","lang":"zh-CN","frontmatter":{"title":"自旋电荷密度","date":"2021-01-13T14:21:10.000Z","category":["VASP","电子结构"],"permalink":"/dft-learning/pages/904969/","updated":"2022-09-12T17:46:53.000Z","description":"自旋电荷密度 本页以 O2 的自选电荷密度为例。 步骤 本页操作在完成 O2 结构优化、自洽、非自洽 中结构优化、静电自洽后进行。 在 2-scf/ 文件夹中进行。 有两种方法获得其自旋电荷密度： 方法 1：通过 VTST 脚本 # Usage $ chgsplit.pl &lt;CHGCAR&gt; # This example [zjb@op 2-scf]$ chgsplit.pl CHGCAR Atoms in file: 2 Points in total charge density: 1200000 Points in magnetization density: 1200000","head":[["script",{"type":"text/javascript"},"var _hmt = _hmt || []"],["script",{"src":"https://hm.baidu.com/hm.js?5574297d56b065f5137cf3654e3de360"}],["script",{"src":"https://hm.baidu.com/hm.js?92a8f6d9fbb75efa90964afcd42be758"}],["meta",{"property":"og:url","content":"https://northword.cn/dft-learning/pages/904969/"}],["meta",{"property":"og:site_name","content":"北辞"}],["meta",{"property":"og:title","content":"自旋电荷密度"}],["meta",{"property":"og:description","content":"自旋电荷密度 本页以 O2 的自选电荷密度为例。 步骤 本页操作在完成 O2 结构优化、自洽、非自洽 中结构优化、静电自洽后进行。 在 2-scf/ 文件夹中进行。 有两种方法获得其自旋电荷密度： 方法 1：通过 VTST 脚本 # Usage $ chgsplit.pl &lt;CHGCAR&gt; # This example [zjb@op 2-scf]$ chgsplit.pl CHGCAR Atoms in file: 2 Points in total charge density: 1200000 Points in magnetization density: 1200000"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://northword.cn/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-01-14T09:26:57.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"自旋电荷密度"}],["meta",{"property":"article:author","content":"Northword"}],["meta",{"property":"article:published_time","content":"2021-01-13T14:21:10.000Z"}],["meta",{"property":"article:modified_time","content":"2023-01-14T09:26:57.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"自旋电荷密度\\",\\"image\\":[\\"https://northword.cn/\\"],\\"datePublished\\":\\"2021-01-13T14:21:10.000Z\\",\\"dateModified\\":\\"2023-01-14T09:26:57.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Northword\\",\\"url\\":\\"https://northword.cn\\"}]}"]]},"headers":[{"level":2,"title":"步骤","slug":"步骤","link":"#步骤","children":[{"level":3,"title":"方法 1：通过 VTST 脚本","slug":"方法-1-通过-vtst-脚本","link":"#方法-1-通过-vtst-脚本","children":[]},{"level":3,"title":"方法 2：通过 VASPKIT","slug":"方法-2-通过-vaspkit","link":"#方法-2-通过-vaspkit","children":[]}]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1662963508000,"updatedTime":1673688417000,"contributors":[{"name":"Northword","email":"northword@outlook.com","commits":5}]},"readingTime":{"minutes":0.83,"words":250},"filePathRelative":"dft-learning/05.VASP/03.电子结构/03.vasp-chg-split.md","localizedDate":"2021年1月13日","excerpt":"<h1> 自旋电荷密度</h1>\\n<p>本页以 O2 的自选电荷密度为例。</p>\\n<h2> 步骤</h2>\\n<p>本页操作在完成 <a href=\\"/dft-learning/05.VASP/02.%E4%BC%98%E5%8C%96/02.vasp-opt.html\\" target=\\"blank\\">O2 结构优化、自洽、非自洽</a> 中结构优化、静电自洽后进行。</p>\\n<p>在 <code>2-scf/</code> 文件夹中进行。</p>\\n<p>有两种方法获得其自旋电荷密度：</p>\\n<h3> 方法 1：通过 VTST 脚本</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token comment\\"># Usage</span>\\n$ chgsplit.pl <span class=\\"token operator\\">&lt;</span>CHGCAR<span class=\\"token operator\\">&gt;</span>\\n\\n<span class=\\"token comment\\"># This example</span>\\n<span class=\\"token punctuation\\">[</span>zjb@op <span class=\\"token number\\">2</span>-scf<span class=\\"token punctuation\\">]</span>$ chgsplit.pl CHGCAR\\nAtoms <span class=\\"token keyword\\">in</span> file: <span class=\\"token number\\">2</span>\\nPoints <span class=\\"token keyword\\">in</span> total charge density: <span class=\\"token number\\">1200000</span>\\nPoints <span class=\\"token keyword\\">in</span> magnetization density: <span class=\\"token number\\">1200000</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{t as data};
