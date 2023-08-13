(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[262],{9313:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/table",function(){return r(179)}])},5080:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(1527),a=r(716),i=r(1670),l=r.n(i),s=r(1054),o=r.n(s),d=r(313);let h=[{name:"Home",href:"/"},{name:"Posts",href:"/posts"},{name:"About",href:"/about"}];function c(e){let t=(0,a.useRouter)(),{route:r}=e,i=t.pathname.startsWith("/posts/"),l=()=>{i?window.history.back():t.push("/")};return(0,n.jsx)("div",{className:"navbar mb-8 flex justify-between items-center",children:(0,n.jsx)("div",{className:"ml-auto",children:i?(0,n.jsx)("button",{onClick:l,className:"inline-block px-2 transition-colors font-normal text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 no-underline",children:"Back"}):h.map(e=>(0,n.jsx)(o(),{href:e.href,className:function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")}("inline-block px-2 transition-colors font-normal","/"===e.href?t.pathname===e.href?"text-gray-900 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-100":"text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 no-underline":t.asPath.startsWith(e.href)?"text-gray-900 hover:text-gray-900 dark:text-gray-100 dark:hover:text-gray-100":"text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 no-underline"),"aria-current":t.pathname===e.href?"page":void 0,children:e.name},e.name))})})}var g=r(959),x=r(2886);let u=()=>{let[e,t]=(0,g.useState)(!1),{theme:r,setTheme:a,resolvedTheme:i}=(0,x.F)();return((0,g.useEffect)(()=>{t(!0)},[]),e)?(0,n.jsx)("div",{children:(0,n.jsx)("button",{"aria-label":"Toggle Dark Mode",type:"button",className:"flex h-8 w-8 touch-manipulation items-center justify-center rounded-md ring-gray-300 transition-all hover:ring-2 dark:bg-gray-600",onClick:()=>a("dark"===r||"dark"===i?"light":"dark"),children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",className:"text-gray-900 dark:text-gray-100 w-6 h-6",children:e&&("dark"===r||"dark"===i)?(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"}):(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"})})})}):null};function j(e){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("footer",{className:"my-12",children:[(0,n.jsx)("hr",{}),(0,n.jsxs)("div",{className:"flex justify-between items-center",children:[(0,n.jsx)("div",{children:"2023 \xa9 Nextra."}),(0,n.jsx)("div",{children:(0,n.jsx)(u,{})})]})]})})}function m(e){let{pageOpts:t,children:r}=e,{route:i}=(0,a.useRouter)(),{pageMap:s}=t,h=e=>e.reduce((e,t)=>("MdxPage"===t.kind?e.push(t):t.children&&e.push(...h(t.children)),e),[]),g=s.find(e=>"Folder"===e.kind&&"posts"===e.name),x=null,u=null;if(g){let e=h(g.children),t=e.filter(e=>"index"!==e.name).slice(0,3);u=(0,n.jsxs)("div",{children:[(0,n.jsx)("h2",{children:"Latest Posts:"}),(0,n.jsx)("ul",{children:t.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:e.route,children:e.frontMatter.title})},e.route))})]});let r=e.filter(e=>"index"!==e.name);x=(0,n.jsx)("ul",{children:r.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)(o(),{href:e.route,children:e.frontMatter.title})},e.route))})}let m="/posts"===i;return(0,n.jsxs)("div",{className:"flex flex-col min-h-screen dark:border-white",children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:t.title}),(0,n.jsx)("link",{rel:"icon",href:"./favicon.png"})]}),(0,n.jsxs)("div",{className:"flex flex-col prose prose-slate dark:prose-invert flex-grow container mx-auto mb-6 w-full",children:[(0,n.jsxs)("main",{className:"flex-grow",children:[(0,n.jsx)("h1",{children:t.title}),(0,n.jsx)(c,{}),(0,n.jsxs)("article",{children:[(!m||"/posts"===i)&&(0,n.jsx)(d.Zo,{components:{h1:e=>(0,n.jsx)("h1",{...e}),pre:e=>{let{filename:t,...r}=e;return(0,n.jsxs)("div",{children:[t&&(0,n.jsx)("div",{children:t}),(0,n.jsx)("pre",{...r})]})}},children:r}),"/"===i&&u,m&&x]})]}),(0,n.jsx)(j,{})]})]})}function p(e){let{route:t}=(0,a.useRouter)(),r=globalThis.__nextra_pageContext__[t];if(!r)throw Error("No content found for ".concat(t,"."));let{pageOpts:i,Content:l}=r;return(0,n.jsx)(m,{pageOpts:i,children:(0,n.jsx)(l,{...e})})}},179:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s.Z}});var n,a=r(1527),i=r(1179),l=r(313);r(9033);var s=r(5080);let o={filePath:"pages/posts/table.mdx",route:"/posts/table",frontMatter:{title:"Table",date:"2022/8/28",description:"En example of using table.",tag:"web development",author:"Dimitri POSTOLOV"},pageMap:[{kind:"MdxPage",name:"about",route:"/about",frontMatter:{type:"page",title:"About",date:"2020-01-01T00:00:00.000Z"}},{kind:"Folder",name:"docs",route:"/docs",children:[{kind:"Folder",name:"v19",route:"/docs/v19",children:[{kind:"MdxPage",name:"globals",route:"/docs/v19/globals"},{kind:"Meta",data:{globals:"Globals"}}]}]},{kind:"MdxPage",name:"index",route:"/",frontMatter:{title:"Hello World",trademark:"Trademark"}},{kind:"Folder",name:"posts",route:"/posts",children:[{kind:"MdxPage",name:"aaron-swartz-a-programmable-web",route:"/posts/aaron-swartz-a-programmable-web",frontMatter:{title:"Notes on A Programmable Web by Aaron Swartz",date:"2016/5/21",description:"At the time when I was getting into web development, I had the chance to read one of the most inspiring book about the web, Aaron Swartz's A Programmable Web. And it completely changed my mind.",tag:"web development",author:"Shu"}},{kind:"MdxPage",name:"code-blocks",route:"/posts/code-blocks",frontMatter:{title:"Code blocks",date:"2022/7/29",description:"En example of using code blocks in your blog.",tag:"web development,JavaScript,GraphQL,C++,Java,React,Next.js,The Guild,MacBook Pro",author:"Dimitri POSTOLOV"}},{kind:"MdxPage",name:"index",route:"/posts",frontMatter:{type:"posts",title:"Posts",date:"2020-01-03T00:00:00.000Z"}},{kind:"MdxPage",name:"table",route:"/posts/table",frontMatter:{title:"Table",date:"2022/8/28",description:"En example of using table.",tag:"web development",author:"Dimitri POSTOLOV"}},{kind:"Meta",data:{table:"Table","code-blocks":"Code blocks",index:"Posts","aaron-swartz-a-programmable-web":"Notes on A Programmable Web by Aaron Swartz"}}]},{kind:"Meta",data:{about:"About",docs:"Docs",index:"Hello World",posts:"Posts"}}],headings:[{type:"heading",depth:2,children:[{type:"text",value:"Test table",position:{start:{line:2,column:4,offset:4},end:{line:2,column:14,offset:14}}}],position:{start:{line:2,column:1,offset:1},end:{line:2,column:14,offset:14}},value:"Test table"}],timestamp:169082585e4,flexsearch:{codeblocks:!0}};function d(e){let t=Object.assign({h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,l.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"test-table",children:"Test table"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Left"}),(0,a.jsx)(t.th,{align:"center",children:"Center"}),(0,a.jsx)(t.th,{align:"right",children:"Right"}),(0,a.jsx)(t.th,{align:"right",children:"Right"}),(0,a.jsx)(t.th,{align:"right",children:"Right"}),(0,a.jsx)(t.th,{align:"right",children:"Right"}),(0,a.jsx)(t.th,{align:"right",children:"Right"}),(0,a.jsx)(t.th,{align:"right",children:"Right"}),(0,a.jsx)(t.th,{align:"right",children:"Right"}),(0,a.jsx)(t.th,{align:"right",children:"Right"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"ss2"}),(0,a.jsx)(t.td,{align:"center",children:"333"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{align:"center",children:"222"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"}),(0,a.jsx)(t.td,{align:"right",children:"3232"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{}),(0,a.jsx)(t.td,{align:"center",children:"23"}),(0,a.jsx)(t.td,{align:"right"}),(0,a.jsx)(t.td,{align:"right"}),(0,a.jsx)(t.td,{align:"right"}),(0,a.jsx)(t.td,{align:"right"}),(0,a.jsx)(t.td,{align:"right"}),(0,a.jsx)(t.td,{align:"right"}),(0,a.jsx)(t.td,{align:"right"}),(0,a.jsx)(t.td,{align:"right"})]})]})]})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}globalThis.__nextra_internal__={pageMap:o.pageMap,route:o.route},o.title="Table";let c=e=>(0,a.jsx)(i.mK.Provider,{value:e,children:(0,a.jsx)(h,{})});(n=globalThis).__nextra_pageContext__||(n.__nextra_pageContext__=Object.create(null)),globalThis.__nextra_pageContext__["/posts/table"]={Content:c,pageOpts:o,themeConfig:null}}},function(e){e.O(0,[210,774,888,179],function(){return e(e.s=9313)}),_N_E=e.O()}]);