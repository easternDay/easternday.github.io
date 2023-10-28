import{_ as a,o as s,c as e,Q as n}from"./chunks/framework.c34366e8.js";const g=JSON.parse('{"title":"从零开始的内核编译","description":"","frontmatter":{},"headers":[],"relativePath":"Topic/Android/ROM/Kernel/Compile.md","filePath":"Topic/Android/ROM/Kernel/Compile.md","lastUpdated":1687685751000}'),l={name:"Topic/Android/ROM/Kernel/Compile.md"},o=n(`<h1 id="从零开始的内核编译" tabindex="-1">从零开始的内核编译 <a class="header-anchor" href="#从零开始的内核编译" aria-label="Permalink to &quot;从零开始的内核编译&quot;">​</a></h1><blockquote><p>本教程将基于小米 10S 的内核源码进行实例，其他型号的手机请自行寻找内核源码。具体内容可以参考我的<a href="https://github.com/DogDayAndroid/KSU_Thyme_BuildBot" target="_blank" rel="noreferrer">内核编译项目</a>。</p></blockquote><h2 id="-手机型号查询" tabindex="-1"> 手机型号查询 <a class="header-anchor" href="#-手机型号查询" aria-label="Permalink to &quot; 手机型号查询&quot;">​</a></h2><h3 id="_1-获取设备-手机-代号" tabindex="-1">1. 获取设备（手机）代号 <a class="header-anchor" href="#_1-获取设备-手机-代号" aria-label="Permalink to &quot;1. 获取设备（手机）代号&quot;">​</a></h3><p>在安卓设备终端（<code>adb shell</code>）上执行:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">getprop</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">grep</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">device</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">getprop</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">device</span></span></code></pre></div><p>并寻找带有 <code>ro.xx.device</code> 这一行，里面的内容即为你的手机代号，例如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 手机代号为 thyme</span></span>
<span class="line"><span style="color:#E1E4E8;">[ro.product.device]: [thyme]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 手机代号为 thyme</span></span>
<span class="line"><span style="color:#24292E;">[ro.product.device]: [thyme]</span></span></code></pre></div><h3 id="_2-获取设备架构" tabindex="-1">2. 获取设备架构 <a class="header-anchor" href="#_2-获取设备架构" aria-label="Permalink to &quot;2. 获取设备架构&quot;">​</a></h3><p>在安卓设备终端（<code>adb shell</code>）上执行:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">uname</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-m</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">uname</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span></span></code></pre></div><p>我的设备显示为 <code>aarch64</code>, 即可判断我的设备架构为 <code>aarch64</code>。</p><h3 id="_3-获取设备内核版本" tabindex="-1">3. 获取设备内核版本 <a class="header-anchor" href="#_3-获取设备内核版本" aria-label="Permalink to &quot;3. 获取设备内核版本&quot;">​</a></h3><p>在安卓设备终端（<code>adb shell</code>）上执行:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">uname</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-r</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">uname</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span></span></code></pre></div><p>输出内容的格式为：</p><ul><li>[版本].[补丁版本].[子版本号]-[内核标识]-[提交记录]</li></ul><p>例如我的设备显示为 <code>4.19.157-Margatroid-gb1b98c3d4fd0</code></p><h2 id="-内核源码获取" tabindex="-1"> 内核源码获取 <a class="header-anchor" href="#-内核源码获取" aria-label="Permalink to &quot; 内核源码获取&quot;">​</a></h2><p>内核源码的一般格式为 <code>[android_]kernel_设备厂商_cpu/代号</code>，例如，小米 10S（thyme）的代号为 <code>thyme</code>, CPU 型号为 <code>sm8250</code>，生产厂商为 <code>xiaomi</code>，则搜索格式应为下面几种：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">kernel_xiaomi_thyme</span></span>
<span class="line"><span style="color:#B392F0;">kernel_xiaomi_sm8250</span></span>
<span class="line"><span style="color:#B392F0;">android_kernel_xiaomi_thyme</span></span>
<span class="line"><span style="color:#B392F0;">android_kernel_xiaomi_sm8250</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">kernel_xiaomi_thyme</span></span>
<span class="line"><span style="color:#6F42C1;">kernel_xiaomi_sm8250</span></span>
<span class="line"><span style="color:#6F42C1;">android_kernel_xiaomi_thyme</span></span>
<span class="line"><span style="color:#6F42C1;">android_kernel_xiaomi_sm8250</span></span></code></pre></div><p>以下是我收集的一些小米 10S（thyme）的源码仓库：</p><ul><li><a href="https://github.com/Lynnrin-Studio/android_kernel_xiaomi_thyme" target="_blank" rel="noreferrer">Lynnrin-Studio/android_kernel_xiaomi_thyme</a>: 这是我目前编译内核所使用的内核源码。</li><li><a href="https://github.com/UtsavBalar1231/kernel_xiaomi_sm8250" target="_blank" rel="noreferrer">UtsavBalar1231/kernel_xiaomi_sm8250</a>: CLO 内核升级为 CAF 标签 <code>LA.UM.9.12.r1-14700-SMxx50</code>，AOSP 源码同步上游 <code>android-4.19-stable</code>。</li><li><a href="https://github.com/WeeAris/RK-KSU-mi-kernel-SM8250" target="_blank" rel="noreferrer">WeeAris/RK-KSU-mi-kernel-SM8250</a>: 支持 <code>KernelSU</code> 的 <a href="https://github.com/Rohail33/RealKing-kernel-SM8250.git" target="_blank" rel="noreferrer">Rohail33/RealKing-kernel-SM8250</a> 分支。</li><li><a href="https://github.com/Official-Ayrton990/android_kernel_xiaomi_sm8250" target="_blank" rel="noreferrer">Rohail33/RealKing-kernel-SM8250</a>: 基于 <code>LA.UM.9.12.r1-08000-SMxx50.0</code> 标签的内核。</li></ul><p>当然除此之外还有很多源码，但这些源码对于我来说是我前期学习的一个途径，因此在这里列出给大家。</p><table><thead><tr><th style="text-align:right;">途径</th><th style="text-align:left;">具体介绍</th></tr></thead><tbody><tr><td style="text-align:right;">各厂商开源</td><td style="text-align:left;"><a href="https://github.com/MiCode/Xiaomi_Kernel_OpenSource/" target="_blank" rel="noreferrer">小米内核开源</a><br><a href="https://consumer.huawei.com/en/opensource/" target="_blank" rel="noreferrer">华为开源代码</a></td></tr><tr><td style="text-align:right;">去手机社区找源码</td><td style="text-align:left;"><a href="https://forum.xda-developers.com/" target="_blank" rel="noreferrer">XDA 论坛</a></td></tr></tbody></table><h2 id="-获取编译工具链" tabindex="-1"> 获取编译工具链 <a class="header-anchor" href="#-获取编译工具链" aria-label="Permalink to &quot; 获取编译工具链&quot;">​</a></h2><blockquote><p>强烈推荐您学习<a href="https://www.akr-developers.com/d/129" target="_blank" rel="noreferrer">[内核向] 交叉编译器的选择</a>以及<a href="https://www.akr-developers.com/d/121" target="_blank" rel="noreferrer">[白话文版] ClangBuiltLinux Clang 的使用</a>来学习工具链的配置。</p><p>同时可以配合 <a href="https://github.com/Neutron-Toolchains/clang-build-catalogue/blob/main/README.md" target="_blank" rel="noreferrer">Neutron-Clang 的说明文档</a>来进行编译参数配置。</p></blockquote><p>目前比较推荐的几个预编译工具链如下：</p><table><thead><tr><th style="text-align:right;">工具名称</th><th style="text-align:left;">简介</th></tr></thead><tbody><tr><td style="text-align:right;"><a href="https://github.com/Neutron-Toolchains/clang-build-catalogue" target="_blank" rel="noreferrer">Neutron-Clang</a></td><td style="text-align:left;">这是为内核开发构建的 LLVM 和 Clang 编译器工具链。构建始终是从最新的 LLVM 源代码而不是稳定版本构建的，<s>因此无法保证完全的稳定性</s>。</td></tr><tr><td style="text-align:right;"><a href="https://gitea.com/Mandi-Sa/clang" target="_blank" rel="noreferrer">阿菌•未霜 Clang/LLVM Toolchain with Binutils</a></td><td style="text-align:left;">这是一个预构建的工具链，构建始终来自最新的 LLVM 和 Binutils 源而不是稳定版本，因此无法保证完全的稳定性。它是用 Full LTO、PGO 和 BOLT 构建的，以尽可能减少编译时间。</td></tr><tr><td style="text-align:right;"><a href="https://github.com/ClangBuiltLinux/tc-build" target="_blank" rel="noreferrer">ClangBuiltLinux/tc-build</a></td><td style="text-align:left;">类似前两个工具，但是这个工具需要自己在本地从 LLVM 的源码进行构建，但编译时间较长。</td></tr></tbody></table><p>除此之外，一个比较保险的方法是从预编译内核机器的 <code>/proc/config.gz</code> 提取\`，需要对应版本的<a href="https://android.googlesource.com/platform/prebuilts/gcc/linux-x86/aarch64/aarch64-linux-android-4.9/+refs" target="_blank" rel="noreferrer">交叉编译器</a>以及 <a href="https://android.googlesource.com/platform/prebuilts/clang/host/linux-x86/+/refs/heads/master" target="_blank" rel="noreferrer">Clang</a>，自行选择合适版本下载即可，通过这种方式编译出来的内核一般是不会存在错误的。</p><h3 id="_1-neutron-clang-使用介绍" tabindex="-1">1. Neutron-Clang 使用介绍 <a class="header-anchor" href="#_1-neutron-clang-使用介绍" aria-label="Permalink to &quot;1. Neutron-Clang 使用介绍&quot;">​</a></h3><p>这是为内核开发构建的 LLVM 和 Clang 编译器工具链。构建始终是从最新的 LLVM 源代码而不是稳定版本构建的，因此不能保证完全的稳定性。目前该编译链工具使用 <code>AntMan</code> 来同步工具，具体使用方法如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">mkdir</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/toolchains/neutron-clang&quot;</span></span>
<span class="line"><span style="color:#79B8FF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">$HOME</span><span style="color:#9ECBFF;">/toolchains/neutron-clang&quot;</span></span>
<span class="line"><span style="color:#B392F0;">bash</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&lt;(</span><span style="color:#B392F0;">curl</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">-s</span><span style="color:#9ECBFF;"> &quot;https://raw.githubusercontent.com/Neutron-Toolchains/antman/main/antman&quot;)</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-S</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/toolchains/neutron-clang&quot;</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">$HOME</span><span style="color:#032F62;">/toolchains/neutron-clang&quot;</span></span>
<span class="line"><span style="color:#6F42C1;">bash</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&lt;(</span><span style="color:#6F42C1;">curl</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">-s</span><span style="color:#032F62;"> &quot;https://raw.githubusercontent.com/Neutron-Toolchains/antman/main/antman&quot;)</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-S</span></span></code></pre></div><p>一些更多的 <code>AntMan</code> 命令：</p><table><thead><tr><th>功能</th><th>对应命令</th></tr></thead><tbody><tr><td>同步最新的工具链构建</td><td><code>./antman -S</code> 或 <code>./antman -S=latest</code></td></tr><tr><td>同步特定的工具链版本</td><td><code>./antman -S=&lt;release tag&gt;</code></td></tr><tr><td>检查更新</td><td><code>./antman -U</code></td></tr><tr><td>检查更新和同步更新</td><td><code>./antman -Uy</code></td></tr><tr><td>同步特定更新</td><td><code>./antman -S=&lt;release tag&gt;</code></td></tr><tr><td>删除同步构建</td><td><code>./antman -D</code></td></tr><tr><td>显示有关同步构建的信息</td><td><code>./antman -I</code></td></tr><tr><td>同步特定的工具链版本</td><td><code>./antman -S=&lt;release tag&gt;</code></td></tr></tbody></table><blockquote><p>如果需要更多细节介绍，请运行 <code>./antman --help</code> 获取。</p></blockquote><h3 id="_2-clangbuiltlinux" tabindex="-1">2. ClangBuiltLinux <a class="header-anchor" href="#_2-clangbuiltlinux" aria-label="Permalink to &quot;2. ClangBuiltLinux&quot;">​</a></h3><p>如果您想要使用这个工具链的话，那么其中的编译工具则需要你自行编译，对应的编译脚本为 <a href="https://github.com/ClangBuiltLinux/tc-build" target="_blank" rel="noreferrer">ClangBuiltLinux/tc-build</a>。</p><p>诚然，自行编译确实是一件造轮子且费时费力的方法，但是通过这种方式编译出来的工具是最适合您的系统的，不会发生其他的编译中的关于 <code>glibc</code> 等方面的错误。</p><h3 id="_3-阿菌•未霜-clang-llvm-toolchain-with-binutils" tabindex="-1">3. 阿菌•未霜 Clang/LLVM Toolchain with Binutils <a class="header-anchor" href="#_3-阿菌•未霜-clang-llvm-toolchain-with-binutils" aria-label="Permalink to &quot;3. 阿菌•未霜 Clang/LLVM Toolchain with Binutils&quot;">​</a></h3><p>这是一个预构建的工具链，构建始终来自最新的 LLVM 和 Binutils 源而不是稳定版本，因此无法保证完全的稳定性。它是用 Full LTO、PGO 和 BOLT 构建的，以尽可能减少编译时间。</p><p>其编译链工具存储在：</p><ul><li><a href="https://github.com/Mandi-Sa/clang" title="GitHub" target="_blank" rel="noreferrer">GitHub</a>：仅用于发布预构建的压缩文件（*.7z）</li><li><a href="https://gitea.com/Mandi-Sa/clang" title="Gitea" target="_blank" rel="noreferrer">Gitea</a>：仅用于存储预构建的二进制文件（Current AR Archive、ELF 64-bit LSB shared object 存储在 LFS）</li></ul><h2 id="󱆃-编译脚本编写" tabindex="-1">󱆃 编译脚本编写 <a class="header-anchor" href="#󱆃-编译脚本编写" aria-label="Permalink to &quot;󱆃 编译脚本编写&quot;">​</a></h2><p>内核编译流程其实只有两步：</p><ol><li>生成对应设备的配置文件 <code>make &lt;theDefConfig&gt;</code></li><li>开始编译内核 <code>make</code></li></ol><p>您可以直接执行这些指令进行编译（参数设置一定要正确），或参考我下面的编译流程：</p><h3 id="_1-设置编译链环境" tabindex="-1">1. 设置编译链环境 <a class="header-anchor" href="#_1-设置编译链环境" aria-label="Permalink to &quot;1. 设置编译链环境&quot;">​</a></h3><p>最简单的设置环境办法就是将编译链工具的路径添加到系统路径中，例如：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> PATH</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;&lt;absolute/path/to/ur/toolchains&gt;/bin:</span><span style="color:#E1E4E8;">$PATH</span><span style="color:#9ECBFF;">&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 例如，您正在使用 neutron-clang</span></span>
<span class="line"><span style="color:#6A737D;"># export PATH=&quot;home/user/toolchains/neutron-clang/bin:$PATH&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 其中的路径必须为绝对路径</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> PATH</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;&lt;absolute/path/to/ur/toolchains&gt;/bin:</span><span style="color:#24292E;">$PATH</span><span style="color:#032F62;">&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 例如，您正在使用 neutron-clang</span></span>
<span class="line"><span style="color:#6A737D;"># export PATH=&quot;home/user/toolchains/neutron-clang/bin:$PATH&quot;</span></span>
<span class="line"><span style="color:#6A737D;"># 其中的路径必须为绝对路径</span></span></code></pre></div><blockquote><p>如果您在使用 <code>gcc</code>，可能还需要将 <code>gcc</code> 工具链的路径加入到环境变量中。</p></blockquote><h3 id="_2-简易配置脚本" tabindex="-1">2. 简易配置脚本 <a class="header-anchor" href="#_2-简易配置脚本" aria-label="Permalink to &quot;2. 简易配置脚本&quot;">​</a></h3><p>首先给出一个最基础的配置脚本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#E1E4E8;">args</span><span style="color:#F97583;">=</span><span style="color:#9ECBFF;">&quot;-j$(</span><span style="color:#B392F0;">nproc</span><span style="color:#9ECBFF;"> </span><span style="color:#79B8FF;">--all</span><span style="color:#9ECBFF;">) </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">O=out </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">ARCH=arm64 </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">CROSS_COMPILE=aarch64-linux-gnu- </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">CC=clang </span><span style="color:#79B8FF;">\\</span></span>
<span class="line"><span style="color:#9ECBFF;">CROSS_COMPILE_COMPAT=arm-linux-gnueabi- &quot;</span></span>
<span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> \${args} </span><span style="color:#F97583;">&lt;</span><span style="color:#9ECBFF;">config</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">nam</span><span style="color:#E1E4E8;">e</span><span style="color:#F97583;">&gt;</span></span>
<span class="line"><span style="color:#B392F0;">make</span><span style="color:#E1E4E8;"> \${args}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">#!/bin/bash</span></span>
<span class="line"><span style="color:#24292E;">args</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">&quot;-j$(</span><span style="color:#6F42C1;">nproc</span><span style="color:#032F62;"> </span><span style="color:#005CC5;">--all</span><span style="color:#032F62;">) </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">O=out </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">ARCH=arm64 </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">CROSS_COMPILE=aarch64-linux-gnu- </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">CC=clang </span><span style="color:#005CC5;">\\</span></span>
<span class="line"><span style="color:#032F62;">CROSS_COMPILE_COMPAT=arm-linux-gnueabi- &quot;</span></span>
<span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> \${args} </span><span style="color:#D73A49;">&lt;</span><span style="color:#032F62;">config</span><span style="color:#24292E;"> </span><span style="color:#032F62;">nam</span><span style="color:#24292E;">e</span><span style="color:#D73A49;">&gt;</span></span>
<span class="line"><span style="color:#6F42C1;">make</span><span style="color:#24292E;"> \${args}</span></span></code></pre></div><blockquote><p>该脚本是在使用上一节的三个工具时才可以正常使用的，如果您使用其他工具可以需要进行其他配置。</p></blockquote><p>下面是一些参数对应的说明：</p><table><thead><tr><th>参数</th><th>说明</th><th>一般参数</th></tr></thead><tbody><tr><td><code>CC</code></td><td>指定使用的编译器，因为 <code>make</code> 默认使用 <code>gcc</code>，因此实际上只有你在使用 <code>clang</code> 进行编译的时候才会使用该参数</td><td><code>clang</code></td></tr><tr><td><code>CROSS_COMPILE</code></td><td>您的主要交叉编译链工具，如果你在使用谷歌的 gcc 4.9，请指定参数为 <code>aarch64-linux-android-</code>，32 位同理</td><td><code>aarch64-linux-gnu-</code></td></tr><tr><td><code>CLANG_TRIPLE</code></td><td>只在使用 <code>clang</code> 进行编译的时候才需要使用，用于指定当 <code>clang</code> 不生效时候使用的工具链，但在使用上一节我们提到的工具中基本不用设置该参数</td><td><code>aarch64-linux-gnu-</code></td></tr><tr><td><code>CROSS_COMPILE_ARM32</code></td><td>只在编译 32 位内核或者带 vdso 补丁的内核时需要指定该参数</td><td><code>arm-linux-gnueabi-</code></td></tr><tr><td><code>CROSS_COMPILE_COMPAT</code></td><td>类似于参数 <code>CROSS_COMPILE_ARM32</code> ，但内核版本为 4.19 及更新版本应使用本参数而非 <code>CROSS_COMPILE_ARM32</code></td><td><code>arm-linux-gnueabi-</code></td></tr></tbody></table><p>更多参数介绍可以参考一下 <a href="https://github.com/Neutron-Toolchains/clang-build-catalogue#building-linux" target="_blank" rel="noreferrer">Neutron-Clang 的编译说明</a>，里面对于一些参数的说明比较详细。</p><blockquote><p>正常情况下，clang 是无法独立完成内核编译的，需要 gcc 的辅助。但使用上一节介绍的几种工具并不需要并不需要单独指定 <code>gcc</code> 来辅助编译。</p></blockquote><h3 id="_3-部分参考脚本" tabindex="-1">3. 部分参考脚本 <a class="header-anchor" href="#_3-部分参考脚本" aria-label="Permalink to &quot;3. 部分参考脚本&quot;">​</a></h3><ul><li><a href="https://github.com/DogDayAndroid/KSU_Thyme_BuildBot/blob/main/build.sh" target="_blank" rel="noreferrer">DogDayAndroid/KSU_Thyme_BuildBot</a>：我自己编译的内核使用的本地编译脚本。</li><li><a href="https://github.com/UtsavBalar1231/Drone-scripts" target="_blank" rel="noreferrer">UtsavBalar1231/Drone-scripts</a>：一个很多人使用的编译脚本，我的部分代码也是参考自这里。</li><li><a href="https://github.com/EndCredits/kernel_xiaomi_sm7250/blob/android-4.19-main/build.sh" target="_blank" rel="noreferrer">EndCredits/kernel_xiaomi_sm7250</a>：同样的一个编译脚本，但并未提供编译链，但是其中的脚本流程我也有参考。</li><li><a href="https://github.com/xiaoleGun/KernelSU_Action" target="_blank" rel="noreferrer">xiaoleGun/KernelSU_Action</a>：<code>KernelSU</code> 的编译脚本，同样有参考。</li></ul><h2 id="-制作刷机包镜像" tabindex="-1"> 制作刷机包镜像 <a class="header-anchor" href="#-制作刷机包镜像" aria-label="Permalink to &quot; 制作刷机包镜像&quot;">​</a></h2><p>内核编译完成后的打包请参考文章<a href="https://www.akr-developers.com/d/125" target="_blank" rel="noreferrer">[内核向] 论如何优雅的刷入内核</a>,目前最流行的方法是使用 <a href="https://github.com/osm0sis/AnyKernel3" target="_blank" rel="noreferrer">osm0sis/AnyKernel3</a> 来完成整个内核的打包刷入工作。</p><p>如果您更喜欢自己动手，那么请参考文章内的其他方法。</p><blockquote><p>值得注意的是，不同版本的内核编译出来的内容并不相同，因此需要区分他们之间的打包，详情请参考文章：<a href="https://www.akr-developers.com/d/482" target="_blank" rel="noreferrer">关于 Image.xx-dtb 和 Image.xx + dtb 的区别</a>。</p><p>来自文章的评论区：_对应芯片组的。比如 865 只需要 kona-v2.1.dtb。如果弄不清楚，可以使用 cat 命令将多个 dtb 连接在一起，bootloader 会自动识别。</p></blockquote><h1 id="-编译常见问题" tabindex="-1"> 编译常见问题 <a class="header-anchor" href="#-编译常见问题" aria-label="Permalink to &quot; 编译常见问题&quot;">​</a></h1><blockquote><p>本教程将基于小米 10S 的内核源码进行实例，其他型号的手机请自行寻找内核源码。具体内容可以参考我的<a href="https://github.com/DogDayAndroid/KSU_Thyme_BuildBot" target="_blank" rel="noreferrer">内核编译项目</a>。</p></blockquote><h3 id="_1-werror-implicit-int" tabindex="-1">1. -Werror=implicit-int <a class="header-anchor" href="#_1-werror-implicit-int" aria-label="Permalink to &quot;1. -Werror=implicit-int&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">/arch/arm64/kernel/smp.c:834:8:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">error:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">defaults</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">to</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">‘int’</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">declaration</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">of</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">‘in_long_press’</span><span style="color:#E1E4E8;"> [-Werror=implicit-int]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">/arch/arm64/kernel/smp.c:834:8:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">error:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">type</span><span style="color:#24292E;"> </span><span style="color:#032F62;">defaults</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">‘int’</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">declaration</span><span style="color:#24292E;"> </span><span style="color:#032F62;">of</span><span style="color:#24292E;"> </span><span style="color:#032F62;">‘in_long_press’</span><span style="color:#24292E;"> [-Werror=implicit-int]</span></span></code></pre></div><p>您可以修改 <code>extern in_long_press</code> 为 <code>extern int in_long_press</code>;或者去除<a href="https://github.com/MiCode/Xiaomi_Kernel_OpenSource/blob/b286e90108628643abec72c90deefbd1c17c4f94/Makefile#L922" target="_blank" rel="noreferrer">MakeFile 中对应错误限制</a>。</p><h3 id="_2-函数参数错误" tabindex="-1">2. 函数参数错误 <a class="header-anchor" href="#_2-函数参数错误" aria-label="Permalink to &quot;2. 函数参数错误&quot;">​</a></h3><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">/home/easternday/Documents/KSU_Thyme_BuildBot/Kernel_Source/Lynnrin/drivers/input/touchscreen/xiaomi/xiaomi_touch.c:141:37:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">error:</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">declaration</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">without</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">a</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">prototype</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">is</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">deprecated</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">in</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">versions</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">of</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">C</span><span style="color:#E1E4E8;"> [-Werror,-Wstrict-prototypes]</span></span>
<span class="line"><span style="color:#B392F0;">struct</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">class</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">*</span><span style="color:#9ECBFF;">get_xiaomi_touch_class</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">                                    </span><span style="color:#B392F0;">^</span></span>
<span class="line"><span style="color:#E1E4E8;">                                     </span><span style="color:#B392F0;">void</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">/home/easternday/Documents/KSU_Thyme_BuildBot/Kernel_Source/Lynnrin/drivers/input/touchscreen/xiaomi/xiaomi_touch.c:141:37:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">error:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">function</span><span style="color:#24292E;"> </span><span style="color:#032F62;">declaration</span><span style="color:#24292E;"> </span><span style="color:#032F62;">without</span><span style="color:#24292E;"> </span><span style="color:#032F62;">a</span><span style="color:#24292E;"> </span><span style="color:#032F62;">prototype</span><span style="color:#24292E;"> </span><span style="color:#032F62;">is</span><span style="color:#24292E;"> </span><span style="color:#032F62;">deprecated</span><span style="color:#24292E;"> </span><span style="color:#032F62;">in</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;"> </span><span style="color:#032F62;">versions</span><span style="color:#24292E;"> </span><span style="color:#032F62;">of</span><span style="color:#24292E;"> </span><span style="color:#032F62;">C</span><span style="color:#24292E;"> [-Werror,-Wstrict-prototypes]</span></span>
<span class="line"><span style="color:#6F42C1;">struct</span><span style="color:#24292E;"> </span><span style="color:#032F62;">class</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#032F62;">get_xiaomi_touch_class</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">                                    </span><span style="color:#6F42C1;">^</span></span>
<span class="line"><span style="color:#24292E;">                                     </span><span style="color:#6F42C1;">void</span></span></code></pre></div><p>将 <code>struct class *get_xiaomi_touch_class()</code> 修改为 <code>struct class *get_xiaomi_touch_class(void)</code> 即可。</p><h3 id="_3-数组长度不匹配" tabindex="-1">3. 数组长度不匹配 <a class="header-anchor" href="#_3-数组长度不匹配" aria-label="Permalink to &quot;3. 数组长度不匹配&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">/home/easternday/Documents/KSU_Thyme_BuildBot/Kernel_Source/Lynnrin/drivers/staging/qcacld-3.0/core/mac/src/sys/legacy/src/utils/src/parser_api.c:5914:14: error: argument &#39;mdie&#39; of type &#39;uint8_t[3]&#39; (aka &#39;unsigned char[3]&#39;) with mismatched bound [-Werror,-Warray-parameter]</span></span>
<span class="line"><span style="color:#e1e4e8;">                   uint8_t mdie[SIR_MDIE_SIZE])</span></span>
<span class="line"><span style="color:#e1e4e8;">                           ^</span></span>
<span class="line"><span style="color:#e1e4e8;">/home/easternday/Documents/KSU_Thyme_BuildBot/Kernel_Source/Lynnrin/drivers/staging/qcacld-3.0/core/mac/src/include/parser_api.h:1028:14: note: previously declared as &#39;uint8_t[]&#39; (aka &#39;unsigned char[]&#39;) here</span></span>
<span class="line"><span style="color:#e1e4e8;">                   uint8_t mdie[]);</span></span>
<span class="line"><span style="color:#e1e4e8;">                           ^</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">/home/easternday/Documents/KSU_Thyme_BuildBot/Kernel_Source/Lynnrin/drivers/staging/qcacld-3.0/core/mac/src/sys/legacy/src/utils/src/parser_api.c:5914:14: error: argument &#39;mdie&#39; of type &#39;uint8_t[3]&#39; (aka &#39;unsigned char[3]&#39;) with mismatched bound [-Werror,-Warray-parameter]</span></span>
<span class="line"><span style="color:#24292e;">                   uint8_t mdie[SIR_MDIE_SIZE])</span></span>
<span class="line"><span style="color:#24292e;">                           ^</span></span>
<span class="line"><span style="color:#24292e;">/home/easternday/Documents/KSU_Thyme_BuildBot/Kernel_Source/Lynnrin/drivers/staging/qcacld-3.0/core/mac/src/include/parser_api.h:1028:14: note: previously declared as &#39;uint8_t[]&#39; (aka &#39;unsigned char[]&#39;) here</span></span>
<span class="line"><span style="color:#24292e;">                   uint8_t mdie[]);</span></span>
<span class="line"><span style="color:#24292e;">                           ^</span></span></code></pre></div><p>将 <code>uint8_t mdie[SIR_MDIE_SIZE])</code> 更改为 <code>uint8_t mdie[])</code> 即可。</p><h2 id="-参考" tabindex="-1"> 参考 <a class="header-anchor" href="#-参考" aria-label="Permalink to &quot; 参考&quot;">​</a></h2><ul><li><a href="https://parrotsec-cn.org/t/topic/2168" target="_blank" rel="noreferrer">自己编译定制一个牛逼的安卓内核</a></li><li><a href="https://sspai.com/post/56296" target="_blank" rel="noreferrer">让 Android 手机更省电流畅，你可以试试「刷内核」</a></li><li><a href="https://www.akr-developers.com/d/129" target="_blank" rel="noreferrer">[内核向] 交叉编译器的选择</a></li><li><a href="https://www.akr-developers.com/d/121" target="_blank" rel="noreferrer">[白话文版] ClangBuiltLinux Clang 的使用</a></li><li><a href="https://github.com/Neutron-Toolchains/clang-build-catalogue#building-linux" target="_blank" rel="noreferrer">Neutron-clang 的编译说明</a></li><li><a href="https://www.akr-developers.com/d/125" target="_blank" rel="noreferrer">[内核向] 论如何优雅的刷入内核</a></li></ul>`,78),t=[o];function r(p,c,i,d,h,y){return s(),e("div",null,t)}const E=a(l,[["render",r]]);export{g as __pageData,E as default};
