import{$ as s,U as i,S as a,at as t}from"./chunks/framework.DgqaZlKJ.js";const F=JSON.parse('{"title":"Git 仓库迁移","description":"","frontmatter":{},"headers":[],"relativePath":"Application/Git/Command/Git_Migrate.md","filePath":"Application/Git/Command/Git_Migrate.md","lastUpdated":1709344595000}'),e={name:"Application/Git/Command/Git_Migrate.md"},h=t('<h1 id="git-仓库迁移" tabindex="-1">Git 仓库迁移 <a class="header-anchor" href="#git-仓库迁移" aria-label="Permalink to &quot;Git 仓库迁移&quot;">​</a></h1><h2 id="原理概述" tabindex="-1">原理概述 <a class="header-anchor" href="#原理概述" aria-label="Permalink to &quot;原理概述&quot;">​</a></h2><p>在 Git 版本控制系统中，迁移仓库意味着将一个仓库的所有提交历史、分支和标签完整地复制到另一个新的 Git 仓库地址。这样做可以出于多种原因，例如更换托管服务提供商、内部网络结构调整或是为了合并多个项目。本教程将指导你如何通过命令行实现这一目标，确保所有的远程分支都被保留在新仓库中。</p><h3 id="步骤详解" tabindex="-1">步骤详解 <a class="header-anchor" href="#步骤详解" aria-label="Permalink to &quot;步骤详解&quot;">​</a></h3><h4 id="准备本地环境" tabindex="-1">准备本地环境 <a class="header-anchor" href="#准备本地环境" aria-label="Permalink to &quot;准备本地环境&quot;">​</a></h4><p>首先，在本地计算机上选择一个合适的位置创建或进入用于保存克隆仓库的文件夹：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">目标文件夹路</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">径</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><h4 id="克隆远程仓库镜像" tabindex="-1">克隆远程仓库镜像 <a class="header-anchor" href="#克隆远程仓库镜像" aria-label="Permalink to &quot;克隆远程仓库镜像&quot;">​</a></h4><p>使用<code>git clone --mirror</code>命令来克隆旧仓库为一个 bare repository（裸库），它包含了完整的提交历史及所有分支与标签信息：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --mirror</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">旧的仓库地</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">址</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>例如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --mirror</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/old-user/old-repo.git</span></span></code></pre></div><h4 id="切换至克隆出的-bare-repository" tabindex="-1">切换至克隆出的 bare repository <a class="header-anchor" href="#切换至克隆出的-bare-repository" aria-label="Permalink to &quot;切换至克隆出的 bare repository&quot;">​</a></h4><p>完成克隆后，进入到刚刚生成的包含.git 后缀的文件夹，这是一个不包含工作目录的纯版本库结构：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">刚刚clone生成的文件</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">夹</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>比如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> old-repo.git</span></span></code></pre></div><h4 id="设置新的远程仓库地址" tabindex="-1">设置新的远程仓库地址 <a class="header-anchor" href="#设置新的远程仓库地址" aria-label="Permalink to &quot;设置新的远程仓库地址&quot;">​</a></h4><p>在 bare repository 中，更新远程仓库的 URL 指向新的地址。请确保在执行此步骤前已在新的 Git 服务上创建了空仓库：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">新的仓库地</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">址</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>例如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> set-url</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://new-github.com/new-user/new-repo.git</span></span></code></pre></div><h4 id="推送所有内容至新仓库" tabindex="-1">推送所有内容至新仓库 <a class="header-anchor" href="#推送所有内容至新仓库" aria-label="Permalink to &quot;推送所有内容至新仓库&quot;">​</a></h4><p>最后一步是强制推送（<code>-f</code> 参数）当前仓库中的所有引用（包括但不限于分支和标签）到新的远程仓库。这会覆盖新仓库中现有的任何内容，确保源仓库的所有分支都被完全迁移过去：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --all</span></span></code></pre></div><p>为了同时迁移标签，还需要单独执行一次推送操作：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> origin</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --tags</span></span></code></pre></div><h2 id="注意事项" tabindex="-1">注意事项 <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项&quot;">​</a></h2><ul><li><code>--mirror</code> 参数在克隆时会创建一个包含所有远程分支、标签和其他引用的本地副本，并且默认配置为 push 时使用 mirror 方式，即同步所有内容。</li><li>使用 <code>-f</code> 或 <code>--force</code> 参数进行强制推送是因为迁移场景下通常需要覆盖新仓库的内容以保证与原仓库完全一致。但在非迁移场景下慎用该选项，因为它会重写远程仓库的历史数据。</li><li>确保在迁移之前备份新仓库，以防意外情况导致数据丢失。</li></ul>',29),l=[h];function p(n,r,o,d,k,c){return a(),i("div",null,l)}const b=s(e,[["render",p]]);export{F as __pageData,b as default};
