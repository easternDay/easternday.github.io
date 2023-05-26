import{_ as e,o as s,c as o,a}from"./app.b2e462ab.js";const y=JSON.parse('{"title":"VSCodium 安装配置手册","description":"","frontmatter":{},"headers":[{"level":2,"title":"Extensions + Marketplace","slug":"extensions-marketplace","link":"#extensions-marketplace","children":[{"level":3,"title":"如何使用 Open VSX Registry","slug":"如何使用-open-vsx-registry","link":"#如何使用-open-vsx-registry","children":[]},{"level":3,"title":"如何使用不同的扩展程序库","slug":"如何使用不同的扩展程序库","link":"#如何使用不同的扩展程序库","children":[]}]}],"relativePath":"Application/VSCodium/index.md","lastUpdated":1685066094000}'),n={name:"Application/VSCodium/index.md"},l=a(`<h1 id="vscodium-安装配置手册" tabindex="-1">VSCodium 安装配置手册 <a class="header-anchor" href="#vscodium-安装配置手册" aria-hidden="true">#</a></h1><h2 id="extensions-marketplace" tabindex="-1">Extensions + Marketplace <a class="header-anchor" href="#extensions-marketplace" aria-hidden="true">#</a></h2><p>VSCodium 是一个基于 VSCode 的编辑器，通过安装 VS Code 扩展可以获得额外的功能。但是，由于微软禁止其他产品使用 Microsoft Marketplace（市场），也禁止从市场中重新分发“.vsix”文件，因此，在非微软产品中使用 VS Code 扩展需要以不同的方式安装。</p><p>默认情况下，<code>product.json</code>文件设置为使用<a href="https://open-vsx.org/" target="_blank" rel="noreferrer">open-vsx.org</a>作为扩展程序库，该库具有适配器，可以使用 VS Code 使用的 Marketplace API。由于这是一个相对较新的项目，您可能会错过一些您从 VS Code Marketplace 中了解的扩展程序。您有以下选项来获取这些缺失的扩展：</p><ul><li>请求扩展程序维护者在<a href="https://open-vsx.org/" target="_blank" rel="noreferrer">open-vsx.org</a>上发布扩展程序，以补充 VS Code Marketplace。发布过程在<a href="https://github.com/eclipse/openvsx/wiki/Publishing-Extensions" target="_blank" rel="noreferrer">Open VSX Wiki</a>中得到说明。</li><li>在<a href="https://github.com/open-vsx/publish-extensions" target="_blank" rel="noreferrer">此存储库</a>上创建拉取请求，让<a href="https://github.com/open-vsx" target="_blank" rel="noreferrer">@open-vsx</a>服务帐户为您发布扩展程序。</li><li>下载并<a href="https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix" target="_blank" rel="noreferrer">安装 vsix 文件</a>，例如从源代码库的发布页面。</li></ul><h3 id="如何使用-open-vsx-registry" tabindex="-1">如何使用 Open VSX Registry <a class="header-anchor" href="#如何使用-open-vsx-registry" aria-hidden="true">#</a></h3><p>如上所述，<a href="https://open-vsx.org/" target="_blank" rel="noreferrer">Open VSX Registry</a>是 VSCodium 中预设的扩展程序库。因此，使用 VSCodium 中的扩展视图将默认使用它。有关 Open VSX 背后的动机，请参见<a href="https://www.gitpod.io/blog/open-vsx/" target="_blank" rel="noreferrer">此文章</a>。</p><h3 id="如何使用不同的扩展程序库" tabindex="-1">如何使用不同的扩展程序库 <a class="header-anchor" href="#如何使用不同的扩展程序库" aria-hidden="true">#</a></h3><p>您可以通过以下解决方案配置终端点，从而切换预设的 Open VSX Registry。这些示例使用 Microsoft 的 VS Code Marketplace 的 URL，请参见下文，以获取有关此 URL 的更多信息。</p><p>使用以下环境变量：</p><ul><li><code>VSCODE_GALLERY_SERVICE_URL=&#39;https://marketplace.visualstudio.com/_apis/public/gallery&#39;</code></li><li><code>VSCODE_GALLERY_ITEM_URL=&#39;https://marketplace.visualstudio.com/items&#39;</code></li><li><code>VSCODE_GALLERY_CACHE_URL=&#39;https://vscode.blob.core.windows.net/gallery/index&#39;</code></li><li><code>VSCODE_GALLERY_CONTROL_URL=&#39;&#39;</code></li></ul><p>或通过创建以下位置的自定义<code>product.json</code>文件（如果您使用 VSCodium - Insiders，则将<code>VSCodium</code>替换为<code>VSCodium - Insiders</code>）：</p><ul><li>Windows：<code>%APPDATA%\\VSCodium</code>或<code>%USERPROFILE%\\AppData\\Roaming\\VSCodium</code></li><li>macOS：<code>~/Library/Application Support/VSCodium</code></li><li>Linux：<code>$XDG_CONFIG_HOME/VSCodium</code>或<code>~/.config/VSCodium</code></li></ul><p>并将其内容设置为：</p><ul><li>注意：对于其他扩展程序库，请将<code>cacheUrl</code>设置为空字符串</li></ul><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">extensionsGallery</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">serviceUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://marketplace.visualstudio.com/_apis/public/gallery</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">itemUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://marketplace.visualstudio.com/items</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">cacheUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://vscode.blob.core.windows.net/gallery/index</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">controlUrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,16),t=[l];function p(r,c,i,d,D,u){return s(),o("div",null,t)}const C=e(n,[["render",p]]);export{y as __pageData,C as default};
