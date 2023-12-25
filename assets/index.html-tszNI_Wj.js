import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as e,o as i,c as l,a as r,b as a,e as c,w as d,d as t}from"./app-1ZTmwhuN.js";const o={},p=t(`<h1 id="为-linux-非-root-用户安装-lrzsz" tabindex="-1"><a class="header-anchor" href="#为-linux-非-root-用户安装-lrzsz" aria-hidden="true">#</a> 为 linux 非 ROOT 用户安装 lrzsz</h1><p><code>lrzsz</code> 是一款在 linux 里可代替 FTP 上传和下载的程序。可以实现在 linux 中支持直接拖拽上传；同时也支持 <code>rz</code> 和 <code>sz</code> 命令进行上传和下载。</p><p>如果拥有 ROOT 权限，可以直接执行下述代码安装：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token parameter variable">-y</span> <span class="token function">install</span> lrzsz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而如果没有 ROOT 权限，是无法写入的，就需要我们自行编译。下面是普通用户安装的办法。</p><h2 id="下载并解压" tabindex="-1"><a class="header-anchor" href="#下载并解压" aria-hidden="true">#</a> 下载并解压</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /tmp
<span class="token function">wget</span> http://www.ohse.de/uwe/releases/lrzsz-0.12.20.tar.gz
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> lrzsz-0.12.20.tar.gz <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> lrzsz-0.12.20
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置安装路径" tabindex="-1"><a class="header-anchor" href="#配置安装路径" aria-hidden="true">#</a> 配置安装路径</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 在等号后写入目标安装路径</span>
./configure <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/public/home/zjb/app/lrzsz
<span class="token comment"># 路径写自己的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="编译安装" tabindex="-1"><a class="header-anchor" href="#编译安装" aria-hidden="true">#</a> 编译安装</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="配置当前用户下的系统命令" tabindex="-1"><a class="header-anchor" href="#配置当前用户下的系统命令" aria-hidden="true">#</a> 配置当前用户下的系统命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> /public/home/zjb/app/lrzsz
$ <span class="token function">mkdir</span> bash-command $ <span class="token builtin class-name">cd</span> bash-command
$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> /public/home/zjb/app/lrzsz/bin/lrz rz 
$ <span class="token function">ln</span> <span class="token parameter variable">-s</span> /public/home/zjb/app/lrzsz/bin/lsz sz
<span class="token comment"># 上面几个路径需要替换成自己的</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置当前用户的环境变量" tabindex="-1"><a class="header-anchor" href="#配置当前用户的环境变量" aria-hidden="true">#</a> 配置当前用户的环境变量</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">cd</span> ~
$ <span class="token function">vi</span> .bashrc
<span class="token comment"># 在PATH列表中添加如下：路径自己的</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;/public/home/zjb/app/lrzsz/bash-command&quot;</span><span class="token builtin class-name">:</span><span class="token environment constant">$PATH</span>
$ <span class="token builtin class-name">source</span> .bashrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h1>`,16);function u(m,h){const s=e("RouterLink");return i(),l("div",null,[p,r("p",null,[a("见 "),c(s,{to:"/code/linux/17.linux-lrzsz-usage.html"},{default:d(()=>[a("linux-lrzsz-usage")]),_:1})])])}const z=n(o,[["render",u],["__file","index.html.vue"]]);export{z as default};
