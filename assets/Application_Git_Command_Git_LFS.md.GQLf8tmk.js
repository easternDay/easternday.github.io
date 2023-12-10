import{_ as s,o as i,c as a,R as t}from"./chunks/framework.sHCxE_M5.js";const F=JSON.parse('{"title":"Git 上传大文件夹","description":"","frontmatter":{},"headers":[],"relativePath":"Application/Git/Command/Git_LFS.md","filePath":"Application/Git/Command/Git_LFS.md","lastUpdated":1701054425000}'),l={name:"Application/Git/Command/Git_LFS.md"},n=t(`<h1 id="git-上传大文件夹" tabindex="-1">Git 上传大文件夹 <a class="header-anchor" href="#git-上传大文件夹" aria-label="Permalink to &quot;Git 上传大文件夹&quot;">​</a></h1><h2 id="什么是-git-lfs" tabindex="-1">什么是 Git LFS <a class="header-anchor" href="#什么是-git-lfs" aria-label="Permalink to &quot;什么是 Git LFS&quot;">​</a></h2><p>Git LFS（Large File Storage） 是 Github 开发的一个 Git 的扩展，用于实现 Git 对大文件的支持。</p><p>简而言之，如果您遇到了无法将大文件（一般是指超过 100M 的文件）上传至 Github，那么您可以考虑此种方式来上传。</p><h2 id="安装-git-lfs" tabindex="-1">安装 Git LFS <a class="header-anchor" href="#安装-git-lfs" aria-label="Permalink to &quot;安装 Git LFS&quot;">​</a></h2><p>对于 Arch 系统来说，仅需要在命令行运行如下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> git-lfs</span></span></code></pre></div><p>其他系统请自行查找安装办法。</p><h2 id="初始化-git-lfs-库" tabindex="-1">初始化 Git LFS 库 <a class="header-anchor" href="#初始化-git-lfs-库" aria-label="Permalink to &quot;初始化 Git LFS 库&quot;">​</a></h2><p>如果您在某个项目中需要启用 Git LFS，那么您需要先使本仓库支持 Git LFS，启用支持请在命令行输入如下指令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><h2 id="增加需要追踪的大型文件" tabindex="-1">增加需要追踪的大型文件 <a class="header-anchor" href="#增加需要追踪的大型文件" aria-label="Permalink to &quot;增加需要追踪的大型文件&quot;">​</a></h2><p>开启支持后，我们可以使用 <code>git lfs track &lt;File&gt;</code> 来记录追踪您需要添加的大型文件。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-h63Me" id="tab-LazT12y" checked="checked"><label for="tab-LazT12y">单个文件</label><input type="radio" name="group-h63Me" id="tab-NBBJ_Sd"><label for="tab-NBBJ_Sd">指定类型</label><input type="radio" name="group-h63Me" id="tab-EiUehbU"><label for="tab-EiUehbU">整个目录</label></div><div class="blocks"><div class="language-zsh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># git lfs track &quot;path/to/file&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> track</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./README.md&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果您想要不再追踪，请使用：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># git lfs untrack &quot;path/to/file&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> untrack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;./README.md&quot;</span></span></code></pre></div><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># git lfs track &quot;path/to/dir/*.type&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> track</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;*.md&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> track</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.config/*.md&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果您想要不再追踪，请使用：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># git lfs untrack &quot;path/to/dir/*.type&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> untrack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;*.md&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> untrack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.config/*.md&quot;</span></span></code></pre></div><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># git lfs track &quot;path/to/dir/*&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> track</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.config/*&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果您想要不再追踪，请使用：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># git lfs untrack &quot;path/to/dir/*&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> untrack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;.config/*&quot;</span></span></code></pre></div></div></div><h2 id="查看已追踪文件" tabindex="-1">查看已追踪文件 <a class="header-anchor" href="#查看已追踪文件" aria-label="Permalink to &quot;查看已追踪文件&quot;">​</a></h2><p>添加/追踪了需要上传的大型文件后，我们可以将目前所有被 Git LFS 管理的具体文件枚举出来：</p><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lfs</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls-files</span></span></code></pre></div><h2 id="克隆支持-git-lfs-文件的仓库" tabindex="-1">克隆支持 Git LFS 文件的仓库 <a class="header-anchor" href="#克隆支持-git-lfs-文件的仓库" aria-label="Permalink to &quot;克隆支持 Git LFS 文件的仓库&quot;">​</a></h2><p>目前最新版本的 <code>git clone &lt;url&gt;</code> 已经能够提供与 <code>git lfs clone &lt;url&gt;</code> 一致的性能，因此 <code>git lfs clone &lt;url&gt;</code> 已不再推荐使用。</p><h2 id="存储库清理" tabindex="-1">存储库清理 <a class="header-anchor" href="#存储库清理" aria-label="Permalink to &quot;存储库清理&quot;">​</a></h2><p>如果您的存储库已经用了很长一段时间，觉得存储库十分的臃肿，您可以尝试运行如下命令：</p><div class="language-zsh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">zsh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --aggressive</span></span></code></pre></div><p>该命令会对本地存储库进行更彻底清理和优化，因此会耗费较长时间。</p>`,23),e=[n];function h(p,k,d,o,r,c){return i(),a("div",null,e)}const u=s(l,[["render",h]]);export{F as __pageData,u as default};
