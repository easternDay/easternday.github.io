import{$ as e,U as t,aq as s,S as i}from"./chunks/framework.B3hCfk8k.js";const r=JSON.parse('{"title":"自定义电脑开机动画","description":"","frontmatter":{},"headers":[],"relativePath":"OS/Arch/Beautify/Splash.md","filePath":"OS/Arch/Beautify/Splash.md","lastUpdated":1704180282000}'),l={name:"OS/Arch/Beautify/Splash.md"};function o(p,a,n,d,c,h){return i(),t("div",null,a[0]||(a[0]=[s('<h1 id="自定义电脑开机动画" tabindex="-1">自定义电脑开机动画 <a class="header-anchor" href="#自定义电脑开机动画" aria-label="Permalink to &quot;自定义电脑开机动画&quot;">​</a></h1><p>如果想要在 Arch Linux 上实现自定义启动关闭动画，我们可以使用 <code>Plymouth</code> 来实现。</p><h2 id="安装-plymouth" tabindex="-1">安装 Plymouth <a class="header-anchor" href="#安装-plymouth" aria-label="Permalink to &quot;安装 Plymouth&quot;">​</a></h2><p>要使用 Plymouth，在 Arch Linux 上需要先安装它。可以使用以下命令来安装：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo pacman -S plymouth</span></span></code></pre></div><h2 id="添加-plymouth-钩子" tabindex="-1">添加 Plymouth 钩子 <a class="header-anchor" href="#添加-plymouth-钩子" aria-label="Permalink to &quot;添加 Plymouth 钩子&quot;">​</a></h2><p>在启动过程中使用 Plymouth 需要添加相关的钩子以启用 <code>Kernel Mode Setting（KMS）</code>。可以通过编辑<code>/etc/mkinitcpio.conf</code>文件来添加钩子。</p><p>在该文件中找到没有警告标志的<code>HOOKS</code>行。在<code>base udev</code>的后面添加以下钩子：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>HOOKS= (... base udev plymouth ...)</span></span></code></pre></div><p>注意，Plymouth 相关的钩子必须添加在<code>udev</code>之后，钩子的顺序很重要。</p><p>完成后，保存并关闭文件。</p><h2 id="添加内核参数" tabindex="-1">添加内核参数 <a class="header-anchor" href="#添加内核参数" aria-label="Permalink to &quot;添加内核参数&quot;">​</a></h2><p>要启用 Plymouth，还需要在 grub 中添加一些内核参数。可以通过编辑<code>/etc/default/grub</code>文件来添加这些参数。</p><p>在<code>GRUB_CMDLINE_LINUX_DEFAULT</code>行后的引号中添加以下参数：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>quiet splash loglevel=3 rd.udev.log_priority=3 vt.global_cursor_default=0</span></span></code></pre></div><p>完成后，保存并关闭文件。</p><h2 id="重建-initrd-镜像" tabindex="-1">重建 initrd 镜像 <a class="header-anchor" href="#重建-initrd-镜像" aria-label="Permalink to &quot;重建 initrd 镜像&quot;">​</a></h2><p>完成上面参数的添加后，还需要执行下面的命令来重新生成 <code>initrd</code> 镜像:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkinitcpio -p linux</span></span></code></pre></div><p>假如你跟我一样也在使用 <code>linux-zen</code> 内核，就可以这样：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mkinitcpio -p linux-zen</span></span></code></pre></div><blockquote><p>如果您不清楚您自己的内核版本，可以执行 <code>uname -a</code> 指令来查询。</p></blockquote><h2 id="更新-grub-配置文件" tabindex="-1">更新 grub 配置文件 <a class="header-anchor" href="#更新-grub-配置文件" aria-label="Permalink to &quot;更新 grub 配置文件&quot;">​</a></h2><p>更新 grub 配置文件以应用更改：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo grub-mkconfig -o /boot/grub/grub.cfg</span></span></code></pre></div><p>如果你使用的是其他发行版，你可能需要使用不同的命令来更新 grub 配置文件。</p><h2 id="安装-plymouth-主题" tabindex="-1">安装 Plymouth 主题 <a class="header-anchor" href="#安装-plymouth-主题" aria-label="Permalink to &quot;安装 Plymouth 主题&quot;">​</a></h2><p>Plymouth 提供了许多主题供你选择，可以使用以下命令来列出可用的主题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>plymouth-set-default-theme -l</span></span></code></pre></div><p>可以使用以下命令来安装某个主题：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo pacman -S plymouth-theme-&lt;name&gt;</span></span></code></pre></div><p>要将主题设置为默认值，请使用以下命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo plymouth-set-default-theme -R &lt;name&gt;</span></span></code></pre></div><p>其中<code>&lt;name&gt;</code>是你想要使用的主题的名称。</p><h2 id="与登录器集成" tabindex="-1">与登录器集成 <a class="header-anchor" href="#与登录器集成" aria-label="Permalink to &quot;与登录器集成&quot;">​</a></h2><p>如果你想在登录屏幕上看到与启动动画相同的主题，你可以禁用登录器默认的服务，并启用对应的 Plymouth 服务。这里以 KDE 的 SDDM 为例。</p><p>首先，禁用 SDDM 服务：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo systemctl disable sddm</span></span></code></pre></div><p>然后，启用 SDDM 对应的 Plymouth 服务：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo systemctl enable sddm-plymouth</span></span></code></pre></div><p>其他登录器也可以通过类似的方式进行集成。</p><blockquote><p><code>GDM</code> 原生支持 <code>plymouth</code>，所以不用配置。</p></blockquote><h2 id="参考" tabindex="-1">参考 <a class="header-anchor" href="#参考" aria-label="Permalink to &quot;参考&quot;">​</a></h2><ul><li><a href="https://wiki.archlinux.org/title/Plymouth" target="_blank" rel="noreferrer">Pluymouth - ArchLinux 官方 Wiki</a></li><li><a href="https://brucezhang1993.github.io/p/linux-%E7%BB%99-arch-linux-%E9%85%8D%E7%BD%AE%E5%90%AF%E5%8A%A8%E7%94%BB%E9%9D%A2-uefi/" target="_blank" rel="noreferrer">[Linux] 给 Arch Linux 配置启动画面 (UEFI)</a></li><li><a href="https://blog.archlinux.tech/plymouth/" target="_blank" rel="noreferrer">给你的 Archlinux 增加一个好看的启动界面</a></li></ul>',44)]))}const b=e(l,[["render",o]]);export{r as __pageData,b as default};
