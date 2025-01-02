import{$ as i,U as a,aq as e,S as l}from"./chunks/framework.B3hCfk8k.js";const c=JSON.parse('{"title":"Hyper-V 的用途与安装","description":"","frontmatter":{},"headers":[],"relativePath":"OS/Windows/Virtual-Machine/Hyper-V.md","filePath":"OS/Windows/Virtual-Machine/Hyper-V.md","lastUpdated":1704180282000}'),t={name:"OS/Windows/Virtual-Machine/Hyper-V.md"};function h(p,s,n,r,d,o){return l(),a("div",null,s[0]||(s[0]=[e(`<h1 id="hyper-v-的用途与安装" tabindex="-1">Hyper-V 的用途与安装 <a class="header-anchor" href="#hyper-v-的用途与安装" aria-label="Permalink to &quot;Hyper-V 的用途与安装&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">什么是 Hyper-V ?</p><p>Hyper-V 是微软提出的一种系统管理程序虚拟化技术，能够实现桌面虚拟化。</p></div><h2 id="-hyper-v-简介及其附属产物" tabindex="-1"> Hyper-V 简介及其附属产物 <a class="header-anchor" href="#-hyper-v-简介及其附属产物" aria-label="Permalink to &quot; Hyper-V 简介及其附属产物&quot;">​</a></h2><p>Hyper-V其实分两个部分：</p><ul><li>底层的虚拟机平台，</li><li>上层的虚拟机管理软件</li></ul><p>以前的Windows版本，这两个是同一个选项，现在的新版本则是分成Hyper-V和虚拟机平台两个选项。</p><p>WSL2 和 WSA 都是基于 Hyper-V 技术实现的虚拟化功能。WSL2 是在 Hyper-V 中虚拟化出一个轻量级的 Linux 环境，而 WSA 是在 Hyper-V 中虚拟化出一个 Android 环境，允许在 Windows 上运行 Android 应用程序。</p><p>因此，要使用 WSL2 和 WSA，需要先启用 Windows 中的 Hyper-V 功能。虚拟化出来的系统映像均以 <code>vhdx</code> 格式存储在电脑对应的部分，<em><strong>所以虚拟机平台要打开才能用，但无需额外使用管理软件对虚拟机进行管理</strong></em>。</p><h2 id="-hyper-v-的安装" tabindex="-1"> Hyper-V 的安装 <a class="header-anchor" href="#-hyper-v-的安装" aria-label="Permalink to &quot; Hyper-V 的安装&quot;">​</a></h2><h3 id="系统要求" tabindex="-1">系统要求 <a class="header-anchor" href="#系统要求" aria-label="Permalink to &quot;系统要求&quot;">​</a></h3><ol><li>Windows 10 及以上的企业版、专业版或教育版</li><li>最少 4 GB 内存(<s>WSA系统安装还要求硬盘为固态硬盘，此处不作过多介绍</s>)</li></ol><h3 id="方法一-使用-powershell-开启-hyper-v" tabindex="-1">方法一：使用 PowerShell 开启 Hyper-V <a class="header-anchor" href="#方法一-使用-powershell-开启-hyper-v" aria-label="Permalink to &quot;方法一：使用 PowerShell 开启 Hyper-V&quot;">​</a></h3><p>以管理员身份启动 PowerShell 控制台并输入如下指令：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Enable-WindowsOptionalFeature</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Online </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FeatureName Microsoft</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Hyper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">V </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">All</span></span></code></pre></div><p>随后重启电脑即可开启 Hyper-V 功能。</p><h3 id="方法二-使用-cmd-配合-dism-开启-hyper-v" tabindex="-1">方法二：使用 Cmd 配合 DISM 开启 Hyper-V <a class="header-anchor" href="#方法二-使用-cmd-配合-dism-开启-hyper-v" aria-label="Permalink to &quot;方法二：使用 Cmd 配合 DISM 开启 Hyper-V&quot;">​</a></h3><p>DISM 可以在操作系统运行时启用 Windows 功能，因此我们可以以管理员身份运行 Cmd 来调用如下 DISM 命令开启对应功能。</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DISM </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Online </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Enable-Feature</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">All </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FeatureName:Microsoft</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Hyper</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">V</span></span></code></pre></div><h3 id="方法三-通过-设置-功能启用-hyper-v" tabindex="-1">方法三：通过&quot;设置&quot;功能启用 Hyper-V <a class="header-anchor" href="#方法三-通过-设置-功能启用-hyper-v" aria-label="Permalink to &quot;方法三：通过&quot;设置&quot;功能启用 Hyper-V&quot;">​</a></h3><ol><li>打开 <code>控制面板</code> 选择 <code>程序</code></li><li>选择 <code>启用或关闭 Windows 功能</code></li><li>选择 <code>Hyper-V</code> ，然后单击 <code>确定</code></li><li>重新启动电脑</li></ol><h3 id="检查-hyper-v-是否启动" tabindex="-1">检查 Hyper-V 是否启动 <a class="header-anchor" href="#检查-hyper-v-是否启动" aria-label="Permalink to &quot;检查 Hyper-V 是否启动&quot;">​</a></h3><p>以管理员权限运行 Cmd 并执行如下命令：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bcdedit </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enum {current}</span></span></code></pre></div><p>检查是否有 <code>hypervisorlaunchtype auto</code> 字段，如果有该字段则开启成功，反之失败。</p><h2 id="-hyper-v-虚拟机的创建" tabindex="-1"> Hyper-V 虚拟机的创建 <a class="header-anchor" href="#-hyper-v-虚拟机的创建" aria-label="Permalink to &quot; Hyper-V 虚拟机的创建&quot;">​</a></h2><p>详细请参考 <a href="https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/quick-create-virtual-machine" target="_blank" rel="noreferrer">微软官方文档</a> 或自行用搜索引擎进行搜索。</p><h2 id="-虚拟机镜像存储压缩" tabindex="-1"> 虚拟机镜像存储压缩 <a class="header-anchor" href="#-虚拟机镜像存储压缩" aria-label="Permalink to &quot; 虚拟机镜像存储压缩&quot;">​</a></h2><h3 id="压缩-vhdx-镜像" tabindex="-1">压缩 VHDX 镜像 <a class="header-anchor" href="#压缩-vhdx-镜像" aria-label="Permalink to &quot;压缩 VHDX 镜像&quot;">​</a></h3><p>Windows 的各种子系统/虚拟机系统的映像均以虚拟硬盘( VHDX，后缀为<code>.vhdx</code> )的形式存储在我们的硬盘中。</p><p>日常使用的过程中，随着文件的增多，对应虚拟磁盘的大小也会不断增加。但由于虚拟机的特性，即使我们手动删除一些文件后，虚拟硬盘不能自己释放空间减少硬盘占用。</p><p>为了避免电脑硬盘空间被浪费，当我们虚拟硬盘容量虚高的时候，可以运行如下代码进行虚拟硬盘的压缩，从而释放空间。</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">diskpart                                </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 打开 diskpart 工具</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">select vdisk file</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;\\path\\to\\your\\vhdx&quot;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 选择vhdk镜像</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">attach vdisk readonly                   </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 以只读附加镜像</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">compact vdisk                           </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 压缩镜像</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">detach vdisk                            </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 分离镜像</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">exit</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">                                    # 退出 diskpart</span></span></code></pre></div><h3 id="报错解决" tabindex="-1">报错解决 <a class="header-anchor" href="#报错解决" aria-label="Permalink to &quot;报错解决&quot;">​</a></h3><h4 id="问题一" tabindex="-1">问题一 <a class="header-anchor" href="#问题一" aria-label="Permalink to &quot;问题一&quot;">​</a></h4><p>如果您遇到 <code>Virtual hard disk files must be uncompressed and unencrypted and must not be sparse</code> 这类提示，请在命令行中运行如下代码：</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fsutil sparse setflag path</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">to</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">file.vhdx </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span></code></pre></div><p>随后再次压缩镜像即可完成操作。</p>`,37)]))}const y=i(t,[["render",h]]);export{c as __pageData,y as default};
