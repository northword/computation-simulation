import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as s,d as e}from"./app-1ZTmwhuN.js";const l={},i=e(`<h1 id="linux-常用命令" tabindex="-1"><a class="header-anchor" href="#linux-常用命令" aria-hidden="true">#</a> Linux 常用命令</h1><table><thead><tr><th>命令</th><th>说明</th></tr></thead><tbody><tr><td><code>cd</code></td><td>切换目录</td></tr><tr><td><code>ls</code></td><td>列出文件和目录</td></tr><tr><td><code>ll</code></td><td>同上</td></tr><tr><td><code>mkdir</code></td><td>新建文件夹</td></tr><tr><td><code>cp</code></td><td>复制</td></tr><tr><td><code>mv</code></td><td>移动</td></tr><tr><td><code>rm</code></td><td>删除文件</td></tr><tr><td><code>rmdir</code></td><td>删除目录</td></tr><tr><td><code>pwd</code></td><td>当前目录</td></tr><tr><td><code>cat</code></td><td>查看文件全文</td></tr><tr><td><code>tail</code></td><td>预览文件后几行</td></tr><tr><td><code>tar</code></td><td>压缩/解压缩</td></tr></tbody></table><h2 id="cd-change-directory" tabindex="-1"><a class="header-anchor" href="#cd-change-directory" aria-hidden="true">#</a> cd：Change Directory</h2><p>切换当前目录，可以是绝对路径，也可以是相对路径。如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> /root/Docements <span class="token comment"># 切换到目录/root/Docements</span>
<span class="token builtin class-name">cd</span> ./path          <span class="token comment"># 切换到当前目录下的path目录中，“.”表示当前目录  </span>
<span class="token builtin class-name">cd</span> <span class="token punctuation">..</span>/path         <span class="token comment"># 切换到上层目录中的path目录中，“..”表示上一层目录</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>命令</th><th>解释</th></tr></thead><tbody><tr><td><code>cd</code></td><td>进入用户主目录</td></tr><tr><td><code>cd ~</code></td><td>进入用户主目录</td></tr><tr><td><code>cd -</code></td><td>返回进入此目录之前所在目录</td></tr><tr><td><code>cd $OLDPWD</code></td><td>同上，但前者会屏显上次的目录，这个不会</td></tr><tr><td><code>cd ..</code></td><td>返回上一级目录</td></tr><tr><td><code>cd ../..</code></td><td>返回上两级目录</td></tr><tr><td><code>cd !$</code></td><td>把上个命令的参数作为 cd 参数使用</td></tr><tr><td><code>cd /</code></td><td>进入根目录</td></tr><tr><td><code>cd .</code></td><td>当前目录</td></tr></tbody></table><h2 id="ls-与-ll-list" tabindex="-1"><a class="header-anchor" href="#ls-与-ll-list" aria-hidden="true">#</a> ls 与 ll：list</h2><p><code>ls</code>：查看文件与目录，参数如下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-l</span> ：列出长数据串，包含文件的属性与权限数据等
<span class="token parameter variable">-a</span> ：列出全部的文件，连同隐藏文件（开头为.的文件）一起列出来（常用）
<span class="token parameter variable">-d</span> ：仅列出目录本身，而不是列出目录的文件数据
<span class="token parameter variable">-h</span> ：将文件容量以较易读的方式（GB，kB等）列出来
<span class="token parameter variable">-R</span> ：连同子目录的内容一起列出（递归列出），等于该目录下的所有文件都会显示出来
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值得一提的是 <code>-l</code> 参数，它可以用 <code>ll</code> 来简化，如下例：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op app<span class="token punctuation">]</span>$ <span class="token function">ls</span>
get-pip.py  pot_database  python38  Python-3.8.5  scripts  tgz_backup  vaspkit.1.12  vtstscripts-933

<span class="token punctuation">[</span>zjb@op app<span class="token punctuation">]</span>$ <span class="token function">ls</span> <span class="token parameter variable">-l</span>
total <span class="token number">1875</span>
-rw-r--r--  <span class="token number">1</span> zjb energy <span class="token number">1886796</span> Oct <span class="token number">18</span> 06:00 get-pip.py
drwxr-xr-x  <span class="token number">4</span> zjb energy    <span class="token number">4096</span> Dec  <span class="token number">1</span>  <span class="token number">2018</span> pot_database
drwxr-xr-x  <span class="token number">6</span> zjb energy    <span class="token number">4096</span> Oct <span class="token number">29</span> <span class="token number">14</span>:59 python38
drwxr-xr-x <span class="token number">18</span> zjb energy    <span class="token number">4096</span> Oct <span class="token number">29</span> <span class="token number">14</span>:57 Python-3.8.5
drwxr-xr-x  <span class="token number">2</span> zjb energy    <span class="token number">4096</span> Oct <span class="token number">29</span> <span class="token number">15</span>:11 scripts
drwxr-xr-x  <span class="token number">2</span> zjb energy    <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">17</span>:48 tgz_backup
drwxr-xr-x  <span class="token number">7</span> zjb energy    <span class="token number">4096</span> Oct  <span class="token number">9</span> <span class="token number">16</span>:50 vaspkit.1.12
drwxr-xr-x  <span class="token number">5</span> zjb energy    <span class="token number">8192</span> Dec <span class="token number">28</span>  <span class="token number">2017</span> vtstscripts-933

<span class="token punctuation">[</span>zjb@op app<span class="token punctuation">]</span>$ ll
total <span class="token number">1875</span>
-rw-r--r--  <span class="token number">1</span> zjb energy <span class="token number">1886796</span> Oct <span class="token number">18</span> 06:00 get-pip.py
drwxr-xr-x  <span class="token number">4</span> zjb energy    <span class="token number">4096</span> Dec  <span class="token number">1</span>  <span class="token number">2018</span> pot_database
drwxr-xr-x  <span class="token number">6</span> zjb energy    <span class="token number">4096</span> Oct <span class="token number">29</span> <span class="token number">14</span>:59 python38
drwxr-xr-x <span class="token number">18</span> zjb energy    <span class="token number">4096</span> Oct <span class="token number">29</span> <span class="token number">14</span>:57 Python-3.8.5
drwxr-xr-x  <span class="token number">2</span> zjb energy    <span class="token number">4096</span> Oct <span class="token number">29</span> <span class="token number">15</span>:11 scripts
drwxr-xr-x  <span class="token number">2</span> zjb energy    <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">17</span>:48 tgz_backup
drwxr-xr-x  <span class="token number">7</span> zjb energy    <span class="token number">4096</span> Oct  <span class="token number">9</span> <span class="token number">16</span>:50 vaspkit.1.12
drwxr-xr-x  <span class="token number">5</span> zjb energy    <span class="token number">8192</span> Dec <span class="token number">28</span>  <span class="token number">2017</span> vtstscripts-933
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mkdir-make-directory" tabindex="-1"><a class="header-anchor" href="#mkdir-make-directory" aria-hidden="true">#</a> mkdir：Make Directory</h2><p>创建文件夹</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token operator">&lt;</span>文件夹名称<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例 行 9</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op ~<span class="token punctuation">]</span>$ ll
total <span class="token number">21</span>
drwxr-xr-x <span class="token number">9</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">29</span> <span class="token number">15</span>:10 app
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">19</span>:45 backup
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">21</span>:03 NaCl
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">25</span> <span class="token number">22</span>:43 O2_opt
drwxr-xr-x <span class="token number">6</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">20</span>:07 <span class="token builtin class-name">test</span>
-rw-r--r-- <span class="token number">1</span> zjb energy <span class="token number">1288</span> Oct <span class="token number">31</span> <span class="token number">17</span>:53 vasp.pbs
<span class="token punctuation">[</span>zjb@op ~<span class="token punctuation">]</span>$ <span class="token function">mkdir</span> hahahahahahahha
<span class="token punctuation">[</span>zjb@op ~<span class="token punctuation">]</span>$ ll
total <span class="token number">25</span>
drwxr-xr-x <span class="token number">9</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">29</span> <span class="token number">15</span>:10 app
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">19</span>:45 backup
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">21</span>:33 hahahahahahahha
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">21</span>:03 NaCl
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">25</span> <span class="token number">22</span>:43 O2_opt
drwxr-xr-x <span class="token number">6</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">20</span>:07 <span class="token builtin class-name">test</span>
-rw-r--r-- <span class="token number">1</span> zjb energy <span class="token number">1288</span> Oct <span class="token number">31</span> <span class="token number">17</span>:53 vasp.pbs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cp-copy" tabindex="-1"><a class="header-anchor" href="#cp-copy" aria-hidden="true">#</a> cp：Copy</h2><p>复制文件（夹），copy 之意，它还可以把多个文件一次性地复制到一个目录下，它的常用参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-a</span> ：将文件的特性一起复制
<span class="token parameter variable">-p</span> ：连同文件的属性一起复制，而非使用默认方式，与-a相似，常用于备份
<span class="token parameter variable">-i</span> ：若目标文件已经存在时，在覆盖时会先询问操作的进行
<span class="token parameter variable">-r</span> ：递归持续复制，用于目录的复制行为
<span class="token parameter variable">-u</span> ：目标文件与源文件有差异时才会复制
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> <span class="token parameter variable">-a</span> file1 file2 <span class="token comment">#连同文件的所有特性把文件file1复制成文件file2</span>
<span class="token function">cp</span> file1 file2 file3 dir/ <span class="token comment">#把文件file1、file2、file3复制到目录dir中</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mv-move" tabindex="-1"><a class="header-anchor" href="#mv-move" aria-hidden="true">#</a> mv：Move</h2><p>该命令用于移动文件、目录或更名，move 之意，它的常用参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-f</span> ：force强制的意思，如果目标文件已经存在，不会询问而直接覆盖
<span class="token parameter variable">-i</span> ：若目标文件已经存在，就会询问是否覆盖
<span class="token parameter variable">-u</span> ：若目标文件已经存在，且比目标文件新，才会更新
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：该命令可以把一个文件或多个文件一次移动一个文件夹中，但是最后一个目标文件一定要是“目录”。</p><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mv</span> file1 file2 file3 dir/   <span class="token comment"># 把文件file1、file2、file3移动到目录dir中</span>
<span class="token function">mv</span> file1 file2              <span class="token comment"># 把文件file1重命名为file2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rm-remove" tabindex="-1"><a class="header-anchor" href="#rm-remove" aria-hidden="true">#</a> rm：Remove</h2><p>该命令用于删除文件或目录，remove，它的常用参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-f</span> ：就是force的意思，忽略不存在的文件，不会出现警告消息
<span class="token parameter variable">-i</span> ：互动模式，在删除前会询问用户是否操作
<span class="token parameter variable">-r</span> ：递归删除，最常用于目录删除，它是一个非常危险的参数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op ~<span class="token punctuation">]</span>$ ll
total <span class="token number">25</span>
drwxr-xr-x <span class="token number">9</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">29</span> <span class="token number">15</span>:10 app
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">19</span>:45 backup
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">21</span>:33 hahahahahahahha
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">21</span>:03 NaCl
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">25</span> <span class="token number">22</span>:43 O2_opt
drwxr-xr-x <span class="token number">6</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">20</span>:07 <span class="token builtin class-name">test</span>
-rw-r--r-- <span class="token number">1</span> zjb energy <span class="token number">1288</span> Oct <span class="token number">31</span> <span class="token number">17</span>:53 vasp.pbs
<span class="token punctuation">[</span>zjb@op ~<span class="token punctuation">]</span>$ <span class="token function">rm</span> <span class="token parameter variable">-r</span> hahahahahahahha/
<span class="token punctuation">[</span>zjb@op ~<span class="token punctuation">]</span>$ ll
total <span class="token number">21</span>
drwxr-xr-x <span class="token number">9</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">29</span> <span class="token number">15</span>:10 app
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">19</span>:45 backup
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">21</span>:03 NaCl
drwxr-xr-x <span class="token number">2</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">25</span> <span class="token number">22</span>:43 O2_opt
drwxr-xr-x <span class="token number">6</span> zjb energy <span class="token number">4096</span> Oct <span class="token number">31</span> <span class="token number">20</span>:07 <span class="token builtin class-name">test</span>
-rw-r--r-- <span class="token number">1</span> zjb energy <span class="token number">1288</span> Oct <span class="token number">31</span> <span class="token number">17</span>:53 vasp.pbs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rmdir-remove-directory" tabindex="-1"><a class="header-anchor" href="#rmdir-remove-directory" aria-hidden="true">#</a> rmdir：Remove Directory</h2><p>删除指定目录。要么用 <code>rm -r &lt;dir&gt;</code> 要么用 <code>rmdir &lt;dir&gt;</code>。更建议用 <code>rmdir</code>。</p><h2 id="pwd-print-working-directory" tabindex="-1"><a class="header-anchor" href="#pwd-print-working-directory" aria-hidden="true">#</a> pwd：Print Working Directory</h2><p>打印当前工作路径。绝对路径。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op utilities<span class="token punctuation">]</span>$ <span class="token builtin class-name">pwd</span>
/public/home/zjb/app/vaspkit.1.12/utilities
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cat-concatenate-and-print-files" tabindex="-1"><a class="header-anchor" href="#cat-concatenate-and-print-files" aria-hidden="true">#</a> cat：concatenate and print files</h2><p>该命令用于查看文本文件的内容，后接要查看的文件名。通常可用管道与 more 和 less 一起使用，从而可以一页页地查看数据。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>zjb@op utilities<span class="token punctuation">]</span>$ <span class="token function">cat</span> hello.sh 
<span class="token comment">#!/bin/bash</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;I love you&quot;</span>
<span class="token punctuation">[</span>zjb@op utilities<span class="token punctuation">]</span>$ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tar" tabindex="-1"><a class="header-anchor" href="#tar" aria-hidden="true">#</a> tar</h2><p>该命令用于对文件进行打包，默认情况并不会压缩，如果指定了相应的参数，它还会调用相应的压缩程序（如 gzip 和 bzip 等）进行压缩和解压。它的常用参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-c</span> ：新建打包文件
<span class="token parameter variable">-t</span> ：查看打包文件的内容含有哪些文件名
<span class="token parameter variable">-x</span> ：解打包或解压缩的功能，可以搭配-C（大写）指定解压的目录，注意-c,-t,-x不能同时出现在同一条命令中
<span class="token parameter variable">-j</span> ：通过bzip2的支持进行压缩/解压缩
<span class="token parameter variable">-z</span> ：通过gzip的支持进行压缩/解压缩
<span class="token parameter variable">-v</span> ：在压缩/解压缩过程中，将正在处理的文件名显示出来
<span class="token parameter variable">-f</span> filename ：filename为要处理的文件
<span class="token parameter variable">-C</span> <span class="token function">dir</span> ：指定压缩/解压缩的目录dir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通常只需要记住下面三条命令即可：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>压缩：tar <span class="token parameter variable">-zcvf</span> filename.tar.gz 要被处理的文件或目录名称
查询：tar <span class="token parameter variable">-tvf</span> filename.tar
解压：tar <span class="token parameter variable">-zxvf</span> filename.tar.gz
      <span class="token function">tar</span> <span class="token parameter variable">-jxvf</span> xx.tar.bz2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：文件名并不定要以后缀 <code>tar.gz</code> 结尾，这里主要是为了说明使用的压缩程序为 <code>gzip</code>。后缀也可是 <code>.tar</code>，<code>.tar.bz2</code>。</p><h2 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h2><p>该命令常用于分析一行的信息，若当中有我们所需要的信息，就将该行显示出来，该命令通常与管道命令一起使用，用于对一些命令的输出进行筛选加工等等，它的简单语法为</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">grep</span> <span class="token punctuation">[</span>-acinv<span class="token punctuation">]</span> <span class="token punctuation">[</span>--color<span class="token operator">=</span>auto<span class="token punctuation">]</span> <span class="token string">&#39;查找字符串&#39;</span> filename
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它的常用参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-a</span> ：将binary文件以text文件的方式查找数据
<span class="token parameter variable">-c</span> ：计算找到‘查找字符串’的次数
<span class="token parameter variable">-i</span> ：忽略大小写的区别，即把大小写视为相同
<span class="token parameter variable">-v</span> ：反向选择，即显示出没有‘查找字符串’内容的那一行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 例如：</span>
<span class="token comment"># 取出文件/etc/man.config中包含MANPATH的行，并把找到的关键字加上颜色</span>
<span class="token function">grep</span> <span class="token parameter variable">--color</span><span class="token operator">=</span>auto <span class="token string">&#39;MANPATH&#39;</span> /etc/man.config
<span class="token comment"># 把ls -l的输出中包含字母file（不区分大小写）的内容输出</span>
<span class="token function">ls</span> <span class="token parameter variable">-l</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token parameter variable">-i</span> <span class="token function">file</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chown" tabindex="-1"><a class="header-anchor" href="#chown" aria-hidden="true">#</a> chown</h2><p>该命令用于改变文件的所有者，与 chgrp 命令的使用方法相同，只是修改的文件属性不同，不再详述。</p><h2 id="chmod" tabindex="-1"><a class="header-anchor" href="#chmod" aria-hidden="true">#</a> chmod</h2><p>该命令用于改变文件的权限，一般的用法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> xyz 文件或目录
-R：进行递归的持续更改，即连同子目录下的所有文件都会更改
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>同时，chmod 还可以使用 u（user）、g（group）、o（other）、a（all）和 +（加入）、-（删除）、=（设置）跟 rwx 搭配来对文件的权限进行更改。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 例如：</span>
<span class="token function">chmod</span> 0755 <span class="token function">file</span> <span class="token comment"># 把file的文件权限改变为-rxwr-xr-x</span>
<span class="token function">chmod</span> g+w <span class="token function">file</span> <span class="token comment"># 向file的文件权限中加入用户组可写权限</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="find" tabindex="-1"><a class="header-anchor" href="#find" aria-hidden="true">#</a> find</h2><p>find 是一个基于查找的功能非常强大的命令，相对而言，它的使用也相对较为复杂，参数也比较多，所以在这里将给把它们分类列出，它的基本语法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">find</span> <span class="token punctuation">[</span><span class="token environment constant">PATH</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>option<span class="token punctuation">]</span> <span class="token punctuation">[</span>action<span class="token punctuation">]</span>

<span class="token comment"># 与时间有关的参数：</span>
<span class="token parameter variable">-mtime</span> n <span class="token builtin class-name">:</span> n为数字，意思为在n天之前的“一天内”被更改过的文件；
<span class="token parameter variable">-mtime</span> +n <span class="token builtin class-name">:</span> 列出在n天之前（不含n天本身）被更改过的文件名；
<span class="token parameter variable">-mtime</span> <span class="token parameter variable">-n</span> <span class="token builtin class-name">:</span> 列出在n天之内（含n天本身）被更改过的文件名；
<span class="token parameter variable">-newer</span> <span class="token function">file</span> <span class="token builtin class-name">:</span> 列出比file还要新的文件名
<span class="token comment"># 例如：</span>
<span class="token function">find</span> /root <span class="token parameter variable">-mtime</span> <span class="token number">0</span> <span class="token comment"># 在当前目录下查找今天之内有改动的文件</span>

<span class="token comment"># 与用户或用户组名有关的参数：</span>
<span class="token parameter variable">-user</span> name <span class="token builtin class-name">:</span> 列出文件所有者为name的文件
<span class="token parameter variable">-group</span> name <span class="token builtin class-name">:</span> 列出文件所属用户组为name的文件
<span class="token parameter variable">-uid</span> n <span class="token builtin class-name">:</span> 列出文件所有者为用户ID为n的文件
<span class="token parameter variable">-gid</span> n <span class="token builtin class-name">:</span> 列出文件所属用户组为用户组ID为n的文件
<span class="token comment"># 例如：</span>
<span class="token function">find</span> /home/ljianhui <span class="token parameter variable">-user</span> ljianhui <span class="token comment"># 在目录/home/ljianhui中找出所有者为ljianhui的文件</span>

<span class="token comment"># 与文件权限及名称有关的参数：</span>
<span class="token parameter variable">-name</span> filename ：找出文件名为filename的文件
<span class="token parameter variable">-size</span> <span class="token punctuation">[</span>+-<span class="token punctuation">]</span>SIZE ：找出比SIZE还要大（+）或小（-）的文件
<span class="token parameter variable">-tpye</span> TYPE ：查找文件的类型为TYPE的文件，TYPE的值主要有：一般文件（f<span class="token punctuation">)</span>、设备文件（b、c）、
             目录（d）、连接文件（l）、socket（s）、FIFO管道文件（p）；
<span class="token parameter variable">-perm</span> mode ：查找文件权限刚好等于mode的文件，mode用数字表示，如0755；
<span class="token parameter variable">-perm</span> <span class="token parameter variable">-mode</span> ：查找文件权限必须要全部包括mode权限的文件，mode用数字表示
<span class="token parameter variable">-perm</span> +mode ：查找文件权限包含任一mode的权限的文件，mode用数字表示
<span class="token comment"># 例如：</span>
<span class="token function">find</span> / <span class="token parameter variable">-name</span> <span class="token function">passwd</span> <span class="token comment"># 查找文件名为passwd的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-perm</span> 0755 <span class="token comment"># 查找当前目录中文件权限的0755的文件</span>
<span class="token function">find</span> <span class="token builtin class-name">.</span> <span class="token parameter variable">-size</span> +12k <span class="token comment"># 查找当前目录中大于12KB的文件，注意c表示byte</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ps" tabindex="-1"><a class="header-anchor" href="#ps" aria-hidden="true">#</a> ps</h2><p>该命令用于将某个时间点的进程运行情况选取下来并输出，process 之意，它的常用参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-A</span> ：所有的进程均显示出来
<span class="token parameter variable">-a</span> ：不与terminal有关的所有进程
<span class="token parameter variable">-u</span> ：有效用户的相关进程
<span class="token parameter variable">-x</span> ：一般与a参数一起使用，可列出较完整的信息
<span class="token parameter variable">-l</span> ：较长，较详细地将PID的信息列出
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其实我们只要记住 ps 一般使用的命令参数搭配即可，它们并不多，如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ps</span> aux <span class="token comment"># 查看系统所有的进程数据</span>
<span class="token function">ps</span> ax <span class="token comment"># 查看不与terminal有关的所有进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-lA</span> <span class="token comment"># 查看系统所有的进程数据</span>
<span class="token function">ps</span> axjf <span class="token comment"># 查看连同一部分进程树状态</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="kill" tabindex="-1"><a class="header-anchor" href="#kill" aria-hidden="true">#</a> kill</h2><p>该命令用于向某个工作（%jobnumber）或者是某个 PID（数字）传送一个信号，它通常与 ps 和 jobs 命令一起使用，它的基本语法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">kill</span> <span class="token parameter variable">-signal</span> PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>signal 的常用参数如下：</p><p>注：最前面的数字为信号的代号，使用时可以用代号代替相应的信号。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">1</span>：SIGHUP，启动被终止的进程
<span class="token number">2</span>：SIGINT，相当于输入ctrl+c，中断一个程序的进行
<span class="token number">9</span>：SIGKILL，强制中断一个进程的进行
<span class="token number">15</span>：SIGTERM，以正常的结束进程方式来终止进程
<span class="token number">17</span>：SIGSTOP，相当于输入ctrl+z，暂停一个进程的进行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 以正常的结束进程方式来终于第一个后台工作，可用jobs命令查看后台中的第一个工作进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-SIGTERM</span> %1 
<span class="token comment"># 重新改动进程ID为PID的进程，PID可用ps命令通过管道命令加上grep命令进行筛选获得</span>
<span class="token function">kill</span> <span class="token parameter variable">-SIGHUP</span> PID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="killall" tabindex="-1"><a class="header-anchor" href="#killall" aria-hidden="true">#</a> killall</h2><p>该命令用于向一个命令启动的进程发送一个信号，它的一般语法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">killall</span> <span class="token punctuation">[</span>-iIe<span class="token punctuation">]</span> <span class="token punctuation">[</span>command name<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>它的参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-i</span> ：交互式的意思，若需要删除时，会询问用户
<span class="token parameter variable">-e</span> ：表示后面接的command name要一致，但command name不能超过15个字符
<span class="token parameter variable">-I</span> ：命令名称忽略大小写
<span class="token comment"># 例如：</span>
<span class="token function">killall</span> <span class="token parameter variable">-SIGHUP</span> syslogd <span class="token comment"># 重新启动syslogd</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h2><p>该命令用于判断接在 file 命令后的文件的基本数据，因为在 Linux 下文件的类型并不是以后缀为分的，所以这个命令对我们来说就很有用了，它的用法非常简单，基本语法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">file</span> filename
<span class="token comment">#例如：</span>
<span class="token function">file</span> ./test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="chgrp" tabindex="-1"><a class="header-anchor" href="#chgrp" aria-hidden="true">#</a> chgrp</h2><p>该命令用于改变文件所属用户组，它的使用非常简单，它的基本用法如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">chgrp</span> <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> dirname/filename
<span class="token parameter variable">-R</span> ：进行递归的持续对所有文件和子目录更改
<span class="token comment"># 例如：</span>
<span class="token function">chgrp</span> <span class="token function">users</span> <span class="token parameter variable">-R</span> ./dir <span class="token comment"># 递归地把dir目录下中的所有文件和子目录下所有文件的用户组修改为users</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gcc" tabindex="-1"><a class="header-anchor" href="#gcc" aria-hidden="true">#</a> gcc</h2><p>对于一个用 Linux 开发 C 程序的人来说，这个命令就非常重要了，它用于把 C 语言的源程序文件，编译成可执行程序，由于 g++ 的很多参数跟它非常相似，所以这里只介绍 gcc 的参数，它的常用参数如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token parameter variable">-o</span> ：output之意，用于指定生成一个可执行文件的文件名
<span class="token parameter variable">-c</span> ：用于把源文件生成目标文件（.o<span class="token punctuation">)</span>，并阻止编译器创建一个完整的程序
<span class="token parameter variable">-I</span> ：增加编译时搜索头文件的路径
<span class="token parameter variable">-L</span> ：增加编译时搜索静态连接库的路径
<span class="token parameter variable">-S</span> ：把源文件生成汇编代码文件
-lm：表示标准库的目录中名为libm.a的函数库
<span class="token parameter variable">-lpthread</span> ：连接NPTL实现的线程库
<span class="token parameter variable">-std</span><span class="token operator">=</span> ：用于指定把使用的C语言的版本

<span class="token comment"># 例如：</span>
<span class="token comment"># 把源文件test.c按照c99标准编译成可执行程序test</span>
gcc <span class="token parameter variable">-o</span> <span class="token builtin class-name">test</span> test.c <span class="token parameter variable">-lm</span> <span class="token parameter variable">-std</span><span class="token operator">=</span>c99
<span class="token comment">#把源文件test.c转换为相应的汇编程序源文件test.s</span>
gcc <span class="token parameter variable">-S</span> test.c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h2><p>该命令用于测算一个命令（即程序）的执行时间。它的使用非常简单，就像平时输入命令一样，不过在命令的前面加入一个 time 即可，例如：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">time</span> ./process
<span class="token function">time</span> <span class="token function">ps</span> aux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在程序或命令运行结束后，在最后输出了三个时间，它们分别是：</p><p>user：用户 CPU 时间，命令执行完成花费的用户 CPU 时间，即命令在用户态中执行时间总和；</p><p>system：系统 CPU 时间，命令执行完成花费的系统 CPU 时间，即命令在核心态中执行时间总和；</p><p>real：实际时间，从 command 命令行开始执行到运行终止的消逝时间；</p><p>注：用户 CPU 时间和系统 CPU 时间之和为 CPU 时间，即命令占用 CPU 执行的时间总和。实际时间要大于 CPU 时间，因为 Linux 是多任务操作系统，往往在执行一条命令时，系统还要处理其它任务。另一个需要注意的问题是即使每次执行相同命令，但所花费的时间也是不一样，其花费时间是与系统运行相关的。</p>`,96),r=[i];function p(t,c){return a(),s("div",null,r)}const m=n(l,[["render",p],["__file","index.html.vue"]]);export{m as default};
