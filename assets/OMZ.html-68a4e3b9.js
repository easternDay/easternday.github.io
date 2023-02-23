import{_ as d,M as o,p as c,q as h,R as s,N as a,t as e,V as n,a1 as r}from"./framework-96b046e1.js";const u={},p=s("h1",{id:"oh-my-zsh-安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#oh-my-zsh-安装","aria-hidden":"true"},"#"),e(" Oh-my-zsh 安装")],-1),m=s("h2",{id:"omz-简介",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#omz-简介","aria-hidden":"true"},"#"),e(" OMZ 简介")],-1),b=s("p",null,[s("code",null,"Zsh"),e(" 是一个功能强大的 shell ，既可以作为交互式 shell ，也可以作为脚本语言解释器。虽然与 POSIX sh 兼容（默认情况下，只有在发出仿真sh时才兼容），但它提供了改进的制表符完成和 globbing 等优点。")],-1),g={href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"Oh My Zsh",-1),_=s("h2",{id:"zsh-安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#zsh-安装","aria-hidden":"true"},"#"),e(" Zsh 安装")],-1),z=s("p",null,[e("在安装 "),s("code",null,"OMZ"),e(" 之前，请务必确保您拥有 "),s("code",null,"Zsh"),e(" 。")],-1),k=s("p",null,[e("1） 运行如下命令安装 "),s("code",null,"Zsh"),e("：")],-1),f=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sudo"),e(" pacman "),s("span",{class:"token parameter variable"},"-Sy"),e(),s("span",{class:"token function"},"zsh"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),y=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[e("yay "),s("span",{class:"token parameter variable"},"-Sy"),e(),s("span",{class:"token function"},"zsh"),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),x=r(`<blockquote><p>安装 <code>zsh</code> 包。如果想要更精确地补全命令，可以同时安装 <code>zsh-completions</code> 包。</p></blockquote><p>2） 在终端里面输入以下命令，确保已经正确安装了 <code>Zsh</code> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">zsh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行后你应该会看到新用户向导（zsh-newuser-install），它可以协助你完成一些基础配置。如果要跳过这一步骤，可以按 q 退出。如果你没有看到新用户向导（zsh-newuser-install），可以手动运行以下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>autoload <span class="token parameter variable">-Uz</span> zsh-newuser-install
zsh-newuser-install <span class="token parameter variable">-f</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3） 设置 <code>Zsh</code> 为默认终端</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>chsh <span class="token parameter variable">-s</span> /usr/bin/zsh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),Z=s("code",null,"Zsh",-1),O={href:"https://wiki.archlinux.org/title/zsh",target:"_blank",rel:"noopener noreferrer"},M=s("h2",{id:"omz-安装",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#omz-安装","aria-hidden":"true"},"#"),e(" OMZ 安装")],-1),w=s("p",null,"1） 手动安装",-1),S={href:"https://ohmyz.sh/#install",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/ohmyzsh/ohmyzsh/wiki",target:"_blank",rel:"noopener noreferrer"},C=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sh"),e(),s("span",{class:"token parameter variable"},"-c"),e(),s("span",{class:"token string"},[e('"'),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"curl"),e(),s("span",{class:"token parameter variable"},"-fsSL"),e(" https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh"),s("span",{class:"token variable"},")")]),e('"')]),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),G=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sh"),e(),s("span",{class:"token parameter variable"},"-c"),e(),s("span",{class:"token string"},[e('"'),s("span",{class:"token variable"},[s("span",{class:"token variable"},"$("),s("span",{class:"token function"},"wget"),e(" https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh "),s("span",{class:"token parameter variable"},"-O"),e(" -"),s("span",{class:"token variable"},")")]),e('"')]),e(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),I=s("p",null,"2） 利用 Pacman 安装",-1),N=s("p",null,"::: Pacman",-1),V=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token function"},"sudo"),e(" pacman "),s("span",{class:"token parameter variable"},"-Sy"),e(` oh-my-zsh-git
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),q=s("p",null,":::",-1),P=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[e("yay "),s("span",{class:"token parameter variable"},"-Sy"),e(` oh-my-zsh-git
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"})])],-1),A=r(`<p>如果是通过这种方式安装，那么我们还需要在命令行输入如下指令复制默认配置：</p><div class="language-BASH line-numbers-mode" data-ext="BASH"><pre class="language-BASH"><code>cp /usr/share/oh-my-zsh/zshrc ~/.zshrc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="omz-插件推荐" tabindex="-1"><a class="header-anchor" href="#omz-插件推荐" aria-hidden="true">#</a> OMZ 插件推荐</h2><p>本人一般只使用如下两个插件：</p>`,4),E={href:"https://github.com/zsh-users/zsh-syntax-highlighting",target:"_blank",rel:"noopener noreferrer"},H={href:"https://github.com/zsh-users/zsh-autosuggestions",target:"_blank",rel:"noopener noreferrer"},L=r(`<p>插件安装建议参考官方文档，但是官方文档的安装方式无法做到自动更新，如果您不想自行手动更新，可以安装仓库中的对应插件并使用 <code>oh-my-zsh-git</code> ：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yay <span class="token parameter variable">-Sy</span> zsh-syntax-highlighting zsh-autosuggestions
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>由于 OMZ 找不到这两个插件，因此我们要进行一下特殊解决，创立这两个插件的符号链接到 OMZ 的插件目录。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 仅适用于使用pacman安装了oh-my-zsh-git包的方式</span>
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/share/zsh/plugins/zsh-syntax-highlighting /usr/share/oh-my-zsh/custom/plugins/
<span class="token function">sudo</span> <span class="token function">ln</span> <span class="token parameter variable">-s</span> /usr/share/zsh/plugins/zsh-autosuggestions /usr/share/oh-my-zsh/custom/plugins/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用这些方式完成安装后，配置 <code>.zshrc</code> 文件，找到plugins=(git)，在这里添加自己想要的插件就可，多个插件名称之间使用空格或者者换行分开（不能使用逗号）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>...
plugins=(
    git
    zsh-syntax-highlighting
    zsh-autosuggestions
)
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重新打开终端或者终端输入 <code>zsh</code> 即可看到效果。</p>`,7);function $(R,T){const l=o("ExternalLinkIcon"),t=o("CodeGroupItem"),i=o("CodeGroup");return c(),h("div",null,[p,m,b,s("p",null,[s("a",g,[v,a(l)]),e("是一个开源、社区驱动的框架，用于管理Zsh配置。")]),_,z,k,a(i,null,{default:n(()=>[a(t,{title:"Pacman"},{default:n(()=>[f]),_:1}),a(t,{title:"yay"},{default:n(()=>[y]),_:1})]),_:1}),x,s("p",null,[e("至此， "),Z,e(" 设置基本完成，更多设置可以参考"),s("a",O,[e("官方Wiki"),a(l)])]),M,w,s("p",null,[e("这部分的安装基本参考"),s("a",S,[e("官方文档"),a(l)]),e("，或者您可以参考"),s("a",B,[e("Github页面"),a(l)]),e("。")]),a(i,null,{default:n(()=>[a(t,{title:"通过 curl 安装 OMZ"},{default:n(()=>[C]),_:1}),a(t,{title:"通过 wget 安装 OMZ"},{default:n(()=>[G]),_:1})]),_:1}),I,a(i,null,{default:n(()=>[N,V,q,a(t,{title:"yay"},{default:n(()=>[P]),_:1})]),_:1}),A,s("ul",null,[s("li",null,[s("a",E,[e("zsh-syntax-highlighting(命令语法高亮)"),a(l)])]),s("li",null,[s("a",H,[e("zsh-autosuggestions(命令自动补全)"),a(l)])])]),L])}const W=d(u,[["render",$],["__file","OMZ.html.vue"]]);export{W as default};
