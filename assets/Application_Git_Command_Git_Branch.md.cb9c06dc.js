import{_ as t,o as a,c as o,Q as i}from"./chunks/framework.c34366e8.js";const p=JSON.parse('{"title":"Github 分支操作","description":"","frontmatter":{},"headers":[],"relativePath":"Application/Git/Command/Git_Branch.md","filePath":"Application/Git/Command/Git_Branch.md","lastUpdated":1685066094000}'),e={name:"Application/Git/Command/Git_Branch.md"},n=i('<h1 id="github-分支操作" tabindex="-1">Github 分支操作 <a class="header-anchor" href="#github-分支操作" aria-label="Permalink to &quot;Github 分支操作&quot;">​</a></h1><h2 id="分支更名" tabindex="-1">分支更名 <a class="header-anchor" href="#分支更名" aria-label="Permalink to &quot;分支更名&quot;">​</a></h2><p>在 Git 的默认分支名称从 &quot;master&quot; 更改为 &quot;main&quot; 后，如果你想将本地仓库的分支名也修改为 &quot;main&quot;，可以按照以下步骤操作：</p><ol><li>首先，将本地分支切换到 &quot;master&quot; 分支：<code>git checkout master</code></li><li>创建一个新的名为 &quot;main&quot; 的分支并切换到该分支：<code>git branch -m main</code></li><li>推送该分支到远程仓库：<code>git push -u origin main</code></li><li>删除名为 &quot;master&quot; 的远程分支：<code>git push origin :master</code></li></ol><p>完成上述操作后，你的本地仓库的默认分支名就变成了 &quot;main&quot;，而旧的 &quot;master&quot; 分支被删除了。在接下来的操作中，请记得使用新的默认分支名 &quot;main&quot;。</p>',5),r=[n];function c(u,s,d,l,m,_){return a(),o("div",null,r)}const q=t(e,[["render",c]]);export{p as __pageData,q as default};
