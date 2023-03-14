import{_ as a,c as r,o as e,a as l}from"./app.fea7f607.js";const f=JSON.parse('{"title":"Arch Linux 简明安装指南","description":"","frontmatter":{},"headers":[{"level":2,"title":"自动安装","slug":"自动安装","link":"#自动安装","children":[{"level":3,"title":"1. 使用 archinstall 安装","slug":"_1-使用-archinstall-安装","link":"#_1-使用-archinstall-安装","children":[{"level":4,"title":"2. 使用具有图形安装界面的第三方 Arch Linux 改版","slug":"_2-使用具有图形安装界面的第三方-arch-linux-改版","link":"#_2-使用具有图形安装界面的第三方-arch-linux-改版","children":[]}]}]},{"level":2,"title":"手动安装","slug":"手动安装","link":"#手动安装","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"Topic/Arch/Installation.md","lastUpdated":1678783125000}'),i={name:"Topic/Arch/Installation.md"},t=l(`<h1 id="arch-linux-简明安装指南" tabindex="-1">Arch Linux 简明安装指南 <a class="header-anchor" href="#arch-linux-简明安装指南" aria-hidden="true">#</a></h1><h2 id="自动安装" tabindex="-1">自动安装 <a class="header-anchor" href="#自动安装" aria-hidden="true">#</a></h2><h3 id="_1-使用-archinstall-安装" tabindex="-1">1. 使用 <code>archinstall</code> 安装 <a class="header-anchor" href="#_1-使用-archinstall-安装" aria-hidden="true">#</a></h3><p>从<a href="https://archlinux.org/download/" target="_blank" rel="noreferrer">Arch官网下载地址</a>选择离你最近的镜像站（例如<a href="https://mirrors.tuna.tsinghua.edu.cn/archlinux/iso/latest/" target="_blank" rel="noreferrer">清华大学 Arch 镜像</a>），下载对应平台架构的镜像文件。</p><p>随后利用 <a href="https://www.balena.io/etcher/" target="_blank" rel="noreferrer">balena-etcher</a> 、 <a href="https://rufus.ie/zh/" target="_blank" rel="noreferrer">rufus</a> 等烧录软件将镜像文件烧录到U盘中。</p><p>连接U盘并将电脑重启到对应的 <code>Live OS</code> 中，并进行网络连接(此部分可以参考<a href="https://arch.icekylin.online/rookie/basic-install.html#_3-%E8%BF%9E%E6%8E%A5%E7%BD%91%E7%BB%9C" target="_blank" rel="noreferrer">连接网络</a>)。</p><p>之后再终端中运行指令：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">archinstall</span></span>
<span class="line"></span></code></pre></div><p>对应菜单信息列举如下：</p><ul><li>配置区域</li><li>选择镜像</li><li>分区磁盘</li><li>格式化分区</li><li>启用磁盘加密（可选）</li><li>设置计算机名</li><li>设置 root 密码</li><li>安装引导加载程序</li></ul><p>在菜单中进行相关的设置之后即可完成安装。安装完成后会出现一条绿色文本，表示安装完成，可以安全重启。这也是用于重启的命令。</p><h4 id="_2-使用具有图形安装界面的第三方-arch-linux-改版" tabindex="-1">2. 使用具有图形安装界面的第三方 Arch Linux 改版 <a class="header-anchor" href="#_2-使用具有图形安装界面的第三方-arch-linux-改版" aria-hidden="true">#</a></h4><p>如果您只是想获得一个开箱即用的 Arch Linux 而不用经过繁琐的安装过程（<s>其实也没有很繁琐</s>），那么您可以尝试一下如下几个发行版：</p><ul><li><a href="https://manjaro.org/" target="_blank" rel="noreferrer">Manjaro</a>: 目前使用人数最多的第三方发行版本</li><li><a href="https://archcraft.io/" target="_blank" rel="noreferrer">Archcraft</a>: 基于 ArchLinux 的第三方版本，个人目前在用，部分版本需要收费</li><li><a href="https://archlinuxgui.in/" target="_blank" rel="noreferrer">ArchLinux GUI</a>: 这是一个纯净的 Arch Linux,只预装了桌面环境</li></ul><h2 id="手动安装" tabindex="-1">手动安装 <a class="header-anchor" href="#手动安装" aria-hidden="true">#</a></h2><p>手动使用命令行安装请阅读<a href="https://wiki.archlinux.org/title/Installation_guide" target="_blank" rel="noreferrer">官方指南</a>。</p><p>如果您觉得官方文档比较难理解，也可以参考 <a href="https://arch.icekylin.online/" target="_blank" rel="noreferrer">archlinux 简明指南</a> 和 <a href="https://archlinuxstudio.github.io/ArchLinuxTutorial/" target="_blank" rel="noreferrer">Arch Linux Studio 指南</a> 中对应部分的教程。</p><blockquote><p>如果您是需要在 Windows 下启用对应的子系统，请参考<a href="/Topic/Windows/Virtual-Machine/Introduction-of-WSL2">WSL部分</a></p></blockquote><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-hidden="true">#</a></h2><ul><li><a href="https://wiki.archlinuxcn.org/wiki/Archinstall" target="_blank" rel="noreferrer">archinstall</a></li></ul>`,20),n=[t];function h(c,s,o,d,u,p){return e(),r("div",null,n)}const x=a(i,[["render",h]]);export{f as __pageData,x as default};
