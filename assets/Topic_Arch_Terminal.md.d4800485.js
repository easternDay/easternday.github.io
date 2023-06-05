import{_ as s,o as a,c as n,a as l}from"./app.7fe27f92.js";const D=JSON.parse('{"title":"Arch Linux 终端相关内容","description":"","frontmatter":{},"headers":[{"level":2,"title":" Oh-my-zsh","slug":"-oh-my-zsh","link":"#-oh-my-zsh","children":[]},{"level":2,"title":" Zim","slug":"-zim","link":"#-zim","children":[]},{"level":2,"title":" 插件推荐","slug":"-插件推荐","link":"#-插件推荐","children":[{"level":3,"title":"omz 自动更新插件","slug":"omz-自动更新插件","link":"#omz-自动更新插件","children":[]}]},{"level":2,"title":"󱚥 终端美化","slug":"󱚥-终端美化","link":"#󱚥-终端美化","children":[{"level":3,"title":"Nerd Fonts","slug":"nerd-fonts","link":"#nerd-fonts","children":[]},{"level":3,"title":"Powerlevel10k","slug":"powerlevel10k","link":"#powerlevel10k","children":[{"level":4,"title":"1. Zim 安装","slug":"_1-zim-安装","link":"#_1-zim-安装","children":[]},{"level":4,"title":"2. OMZ 安装","slug":"_2-omz-安装","link":"#_2-omz-安装","children":[]}]}]}],"relativePath":"Topic/Arch/Terminal.md","lastUpdated":1685959021000}'),e={name:"Topic/Arch/Terminal.md"},p=l(`<h1 id="arch-linux-终端相关内容" tabindex="-1">Arch Linux 终端相关内容 <a class="header-anchor" href="#arch-linux-终端相关内容" aria-hidden="true">#</a></h1><p>本人目前使用的终端是 <code>zsh</code> 。</p><p><code>Zsh</code> 是一个功能强大的 shell ，既可以作为交互式 shell ，也可以作为脚本语言解释器。虽然与 POSIX sh 兼容（默认情况下，只有在发出仿真 sh 时才兼容），但它提供了改进的制表符完成和 globbing 等优点。</p><p>安装命令如下：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pacman</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Sy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zsh</span></span>
<span class="line"></span></code></pre></div><p>运行后你应该会看到新用户向导（zsh-newuser-install），它可以协助你完成一些基础配置。如果要跳过这一步骤，可以按 q 退出。如果你没有看到新用户向导（zsh-newuser-install），可以手动运行以下命令：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">autoload</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Uz</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zsh-newuser-install</span></span>
<span class="line"><span style="color:#FFCB6B;">zsh-newuser-install</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span></span>
<span class="line"></span></code></pre></div><p>设置 <code>Zsh</code> 为默认终端</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">chsh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/bin/zsh</span></span>
<span class="line"></span></code></pre></div><p>至此， <code>Zsh</code> 设置基本完成，更多设置可以参考<a href="https://wiki.archlinux.org/title/zsh" target="_blank" rel="noreferrer">官方 Wiki</a>。</p><h2 id="-oh-my-zsh" tabindex="-1"> Oh-my-zsh <a class="header-anchor" href="#-oh-my-zsh" aria-hidden="true">#</a></h2><p><a href="https://github.com/ohmyzsh/ohmyzsh" target="_blank" rel="noreferrer"><code>Oh My Zsh</code></a>是一个开源、社区驱动的框架，用于管理 Zsh 配置。</p><p>1） 手动安装</p><p>这部分的安装基本参考<a href="https://ohmyz.sh/#install" target="_blank" rel="noreferrer">官方文档</a>，或者您可以参考<a href="https://github.com/ohmyzsh/ohmyzsh/wiki" target="_blank" rel="noreferrer">Github 页面</a>。</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-5DYOT" id="tab-08caIJx" checked="checked"><label for="tab-08caIJx">通过 curl 安装 OMZ</label><input type="radio" name="group-5DYOT" id="tab-yUiGfig"><label for="tab-yUiGfig">通过 wget 安装 OMZ</label></div><div class="blocks"><div class="language-sh active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">curl</span><span style="color:#C3E88D;"> -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sh</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-c</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#FFCB6B;">wget</span><span style="color:#C3E88D;"> https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre></div></div></div><p>2） 利用 Pacman 安装</p><div class="vp-code-group"><div class="tabs"><input type="radio" name="group-mwqCY" id="tab-3S8OQE8" checked="checked"><label for="tab-3S8OQE8">Paru</label></div><div class="blocks"><div class="language-bash active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">paru</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Sy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">oh-my-zsh-git</span></span>
<span class="line"></span></code></pre></div></div></div><p>如果是通过这种方式安装，那么我们还需要在命令行输入如下指令复制默认配置：</p><div class="language-BASH"><button title="Copy Code" class="copy"></button><span class="lang">BASH</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/share/oh-my-zsh/zshrc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">~/.zshrc</span></span>
<span class="line"></span></code></pre></div><h2 id="-zim" tabindex="-1"> Zim <a class="header-anchor" href="#-zim" aria-hidden="true">#</a></h2><p>现在本人已换用 <code>Zim</code> 框架来驱动我的 <code>Zsh</code>，安装 <code>Zim</code> 框架请在命令行输入如下指令:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-fsSL</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://raw.githubusercontent.com/zimfw/install/master/install.zsh</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">zsh</span></span>
<span class="line"></span></code></pre></div><p>随后即可安装完成。</p><h2 id="-插件推荐" tabindex="-1"> 插件推荐 <a class="header-anchor" href="#-插件推荐" aria-hidden="true">#</a></h2><p>本人一般只使用如下两个插件：</p><ul><li><a href="https://github.com/zsh-users/zsh-syntax-highlighting" target="_blank" rel="noreferrer">zsh-syntax-highlighting(命令语法高亮)</a></li><li><a href="https://github.com/zsh-users/zsh-autosuggestions" target="_blank" rel="noreferrer">zsh-autosuggestions(命令自动补全)</a></li></ul><p>插件安装建议参考官方文档。</p><h3 id="omz-自动更新插件" tabindex="-1">omz 自动更新插件 <a class="header-anchor" href="#omz-自动更新插件" aria-hidden="true">#</a></h3><p>如果您使用 <code>Oh-my-zsh</code>, 通过手动安装的方式(官方文档的安装方式)可能无法做到自动更新，如果您不想自行手动更新，可以安装仓库中的对应插件，对应指令如下:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">paru</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Sy</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zsh-syntax-highlighting</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">zsh-autosuggestions</span></span>
<span class="line"></span></code></pre></div><p>由于 OMZ 找不到这两个插件，因此我们要进行一下特殊解决，创立这两个插件的符号链接到 OMZ 的插件目录。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 仅适用于使用pacman安装了oh-my-zsh-git包的方式</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/share/zsh/plugins/zsh-syntax-highlighting</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-</span><span style="color:#A6ACCD;">$HOME</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">.oh-my-zsh</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/plugins/</span></span>
<span class="line"><span style="color:#FFCB6B;">sudo</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ln</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-s</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/usr/share/zsh/plugins/zsh-autosuggestions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-</span><span style="color:#A6ACCD;">$HOME</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">.oh-my-zsh</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/plugins/</span></span>
<span class="line"></span></code></pre></div><p>利用这些方式完成安装后，配置 <code>.zshrc</code> 文件，找到 plugins=(git)，在这里添加自己想要的插件就可，多个插件名称之间使用空格或者者换行分开（不能使用逗号）。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">plugins</span><span style="color:#89DDFF;">=(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">git</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">zsh-syntax-highlighting</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C3E88D;">zsh-autosuggestions</span></span>
<span class="line"><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#82AAFF;">...</span></span>
<span class="line"></span></code></pre></div><p>重新打开终端或者终端输入 <code>zsh</code> 即可看到效果。</p><h2 id="󱚥-终端美化" tabindex="-1">󱚥 终端美化 <a class="header-anchor" href="#󱚥-终端美化" aria-hidden="true">#</a></h2><h3 id="nerd-fonts" tabindex="-1">Nerd Fonts <a class="header-anchor" href="#nerd-fonts" aria-hidden="true">#</a></h3><p>如果您想要更好看的终端，可能大部分时候都会需要一个 <code>Nerd Font</code> 类型的字体，你可以使用如下指令来查看可安装的字体:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">paru</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-Ss</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nerd-font</span></span>
<span class="line"></span></code></pre></div><p>个人推荐使用如下字体，这个字体文件较大，因为包含了全量的图标(其他一些字体可能缺少一些不常用字体):</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">paru</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-S</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nerd-fonts-complete</span></span>
<span class="line"></span></code></pre></div><h3 id="powerlevel10k" tabindex="-1">Powerlevel10k <a class="header-anchor" href="#powerlevel10k" aria-hidden="true">#</a></h3><h4 id="_1-zim-安装" tabindex="-1">1. Zim 安装 <a class="header-anchor" href="#_1-zim-安装" aria-hidden="true">#</a></h4><p><code>Zim</code> 下主题的安装非常简单，只需要打开 <code>~/.zimrc</code>,而后在文件最后加入这一行:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">zmodule</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">romkatv/powerlevel10k</span></span>
<span class="line"></span></code></pre></div><p>随后在终端中执行 <code>zimfw install</code> 或者直接重启终端即可查看到效果。</p><h4 id="_2-omz-安装" tabindex="-1">2. OMZ 安装 <a class="header-anchor" href="#_2-omz-安装" aria-hidden="true">#</a></h4><p>同样的，<code>Oh-my-zsh</code> 安装主题也很简单，只需要在命令行执行如下指令即可:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--depth=1</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://gitee.com/romkatv/powerlevel10k.git</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\${</span><span style="color:#A6ACCD;">ZSH_CUSTOM</span><span style="color:#89DDFF;">:-</span><span style="color:#A6ACCD;">$HOME</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">.oh-my-zsh</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">custom</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">/themes/powerlevel10k</span></span>
<span class="line"></span></code></pre></div>`,49),o=[p];function t(c,r,i,h,d,y){return a(),n("div",null,o)}const u=s(e,[["render",t]]);export{D as __pageData,u as default};
