(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[679],{5537:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts",function(){return n(2825)}])},5792:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(1527),o=n(716),a=n(1670),s=n.n(a),l=n(1054),i=n.n(l),d=n(313);let c=[{name:"Home",href:"/"},{name:"Posts",href:"/posts"},{name:"About",href:"/about"}];function h(e){let t=(0,o.useRouter)(),{route:n}=e,a=t.pathname.startsWith("/posts/"),s=()=>{a?window.history.back():t.push("/")};return(0,r.jsx)("div",{className:"navbar mb-8 flex justify-between items-center",children:(0,r.jsx)("div",{className:"ml-auto",children:a?(0,r.jsx)("button",{onClick:s,className:"inline-block px-2 transition-colors font-normal text-gray-500 hover:text-gray-900 no-underline",children:"Back"}):c.map(e=>(0,r.jsx)(i(),{href:e.href,className:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}("inline-block px-2 transition-colors font-normal","/"===e.href?t.pathname===e.href?"text-gray-900 hover:text-gray-900":"text-gray-500 hover:text-gray-900 no-underline":t.asPath.startsWith(e.href)?"text-gray-900 hover:text-gray-900":"text-gray-500 hover:text-gray-900 no-underline"),"aria-current":t.pathname===e.href?"page":void 0,children:e.name},e.name))})})}function u(e){let{pageOpts:t,children:n}=e,{route:a}=(0,o.useRouter)(),{pageMap:l}=t,c=e=>e.reduce((e,t)=>("MdxPage"===t.kind?e.push(t):t.children&&e.push(...c(t.children)),e),[]),u=l.find(e=>"Folder"===e.kind&&"posts"===e.name),p=null,x=null;if(u){let e=c(u.children),t=e[0];x=(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{children:"Latest Post:"}),(0,r.jsx)(i(),{href:t.route,children:t.frontMatter.title})]});let n=e.filter(e=>"index"!==e.name);p=(0,r.jsx)("ul",{children:n.map(e=>(0,r.jsx)("li",{children:(0,r.jsx)(i(),{href:e.route,children:e.frontMatter.title})},e.route))})}let m="/posts"===a;return(0,r.jsxs)("div",{className:"flex flex-col min-h-screen",children:[(0,r.jsx)(s(),{children:(0,r.jsx)("title",{children:t.title})}),(0,r.jsxs)("div",{className:"flex flex-col prose prose-slate flex-grow container mx-auto mb-6 w-full",children:[(0,r.jsxs)("main",{className:"flex-grow",children:[(0,r.jsx)("h1",{children:t.title}),(0,r.jsx)(h,{}),(0,r.jsxs)("article",{children:[(!m||"/posts"===a)&&(0,r.jsx)(d.Zo,{components:{h1:e=>(0,r.jsx)("h1",{...e}),pre:e=>{let{filename:t,...n}=e;return(0,r.jsxs)("div",{children:[t&&(0,r.jsx)("div",{children:t}),(0,r.jsx)("pre",{...n})]})}},children:n}),"/"===a&&x,m&&p]})]}),(0,r.jsx)("footer",{children:"This is the footer"})]})]})}function p(e){let{route:t}=(0,o.useRouter)(),n=globalThis.__nextra_pageContext__[t];if(!n)throw Error("No content found for ".concat(t,"."));let{pageOpts:a,Content:s}=n;return(0,r.jsx)(u,{pageOpts:a,children:(0,r.jsx)(s,{...e})})}},2825:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l.Z}});var r,o=n(1527),a=n(1179),s=n(313);n(9033);var l=n(5792);let i={filePath:"pages/posts/index.md",route:"/posts",frontMatter:{type:"posts",title:"Posts",date:"2020-01-03T00:00:00.000Z"},pageMap:[{kind:"MdxPage",name:"about",route:"/about",frontMatter:{type:"page",title:"About",date:"2020-01-01T00:00:00.000Z"}},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Folder",name:"v19",route:"/docs/v19",children:[{kind:"MdxPage",name:"globals",route:"/docs/v19/globals"},{kind:"Meta",data:{globals:"Globals"}}]}]},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Hello World",trademark:"Trademark"}},{kind:"Folder",name:"posts",route:"/posts",children:[{kind:"MdxPage",name:"aaron-swartz-a-programmable-web",route:"/posts/aaron-swartz-a-programmable-web",frontMatter:{title:"Notes on A Programmable Web by Aaron Swartz",date:"2016/5/21",description:"At the time when I was getting into web development, I had the chance to read one of the most inspiring book about the web, Aaron Swartz's A Programmable Web. And it completely changed my mind.",tag:"web development",author:"Shu"}},{kind:"MdxPage",name:"code-blocks",route:"/posts/code-blocks",frontMatter:{title:"Code blocks",date:"2022/7/29",description:"En example of using code blocks in your blog.",tag:"web development,JavaScript,GraphQL,C++,Java,React,Next.js,The Guild,MacBook Pro",author:"Dimitri POSTOLOV"}},{kind:"MdxPage",name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts",date:"2020-01-03T00:00:00.000Z"}},{kind:"MdxPage",name:"table",route:"/posts/table",frontMatter:{title:"Table",date:"2022/8/28",description:"En example of using table.",tag:"web development",author:"Dimitri POSTOLOV"}},{kind:"Meta",data:{table:"Table","code-blocks":"Code blocks",index:"Posts","aaron-swartz-a-programmable-web":"Notes on A Programmable Web by Aaron Swartz"}}]},{kind:"Meta",data:{about:"About",docs:"Docs",index:"Hello World",posts:"Posts"}}],headings:[],timestamp:1691251211e3,flexsearch:{codeblocks:!0}};function d(e){let t=Object.assign({p:"p"},(0,s.ah)(),e.components);return(0,o.jsx)(t.p,{children:"Yoo"})}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}globalThis.__nextra_internal__={pageMap:i.pageMap,route:i.route},i.title="Posts";let h=e=>(0,o.jsx)(a.mK.Provider,{value:e,children:(0,o.jsx)(c,{})});(r=globalThis).__nextra_pageContext__||(r.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/posts"]={Content:h,pageOpts:i,themeConfig:null}}},function(e){e.O(0,[210,774,888,179],function(){return e(e.s=5537)}),_N_E=e.O()}]);