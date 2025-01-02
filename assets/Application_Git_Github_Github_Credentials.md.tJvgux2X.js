import{$ as i,U as a,aq as e,S as s}from"./chunks/framework.B3hCfk8k.js";const u=JSON.parse('{"title":"在 Git 中缓存 GitHub 凭据","description":"","frontmatter":{},"headers":[],"relativePath":"Application/Git/Github/Github_Credentials.md","filePath":"Application/Git/Github/Github_Credentials.md","lastUpdated":1701054425000}'),h={name:"Application/Git/Github/Github_Credentials.md"};function n(r,t,l,o,c,d){return s(),a("div",null,t[0]||(t[0]=[e('<h1 id="在-git-中缓存-github-凭据" tabindex="-1">在 Git 中缓存 GitHub 凭据 <a class="header-anchor" href="#在-git-中缓存-github-凭据" aria-label="Permalink to &quot;在 Git 中缓存 GitHub 凭据&quot;">​</a></h1><p>本文假定所用 Linux 环境为 Arch Linux ， 一切操作基于此来进行，其他系统大致步骤相同，对应软件包请自行寻找安装方法。</p><p>如果你使用 <code>HTTPS</code> 克隆 GitHub 存储库，我们建议你使用 <code>GitHub CLI</code> 或 <code>Git Credential Manager (GCM)</code> 来记住你的凭据。</p><p>这里只介绍 <code>GitHub CLI</code> 的使用，如果您想使用不同方法请参考<a href="https://docs.github.com/zh/get-started/getting-started-with-git/caching-your-github-credentials-in-git" target="_blank" rel="noreferrer">官方文档</a></p><h2 id="安装-github-cli" tabindex="-1">安装 GitHub CLI <a class="header-anchor" href="#安装-github-cli" aria-label="Permalink to &quot;安装 GitHub CLI&quot;">​</a></h2><p>对于 Arch 系统来说，仅需要在命令行运行如下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yay</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> github-cli</span></span></code></pre></div><h2 id="配置-github-cli" tabindex="-1">配置 GitHub CLI <a class="header-anchor" href="#配置-github-cli" aria-label="Permalink to &quot;配置 GitHub CLI&quot;">​</a></h2><p>安装完毕后，请继续在命令行中输入：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> auth</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> login</span></span></code></pre></div><p>随后按照提示操作，当系统提示输入 Git 操作的首选协议时，请选择 <code>HTTPS</code></p><p>当系统询问是否要使用 GitHub 凭据向 Git 进行身份验证时，请输入 <code>Y</code></p><p>有关使用 GitHub CLI 进行身份验证的详细信息，请参阅 <a href="https://cli.github.com/manual/gh_auth_login" target="_blank" rel="noreferrer">gh auth login</a></p><h2 id="ssh-免密登陆" tabindex="-1">SSH 免密登陆 <a class="header-anchor" href="#ssh-免密登陆" aria-label="Permalink to &quot;SSH 免密登陆&quot;">​</a></h2><p>如果您更喜欢 SSH 这种方式，您也一样可以通过上面的方法，当系统提示输入 Git 操作的首选协议时选择 <code>SSH</code> 即可。</p><p>由于本人不太喜欢 <code>SSH</code> 方式，因此，如果您希望自行配置免密登陆，那么您可以查看<a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh" target="_blank" rel="noreferrer">官方文档</a>来获得更多帮助。</p>',16)]))}const b=i(h,[["render",n]]);export{u as __pageData,b as default};
