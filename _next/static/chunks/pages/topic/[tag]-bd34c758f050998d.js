(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[918],{2688:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/topic/[tag]",function(){return t(5186)}])},4636:function(e,s,t){"use strict";t.d(s,{J:function(){return w}});var r=t(5893),n=t(9417),i=t(7814),l=t(7294),a=t(8533),o=t(7484),c=t.n(o),u=t(4110),d=t.n(u),x=t(4288);let p=e=>{let{numIssues:s}=e;return(0,r.jsxs)("div",{className:"flex flex-row items-center justify-end mt-1 w-10",children:[(0,r.jsx)("span",{className:"mr-2 text-sm leading-snug",children:s}),(0,r.jsx)(i.G,{icon:x.Mzg})]})},m=e=>{let{issue:s}=e;return(0,r.jsxs)("li",{className:"flex flex-row items-start justify-start py-1",children:[(0,r.jsxs)("span",{className:"text-slate text-right w-30 px-2 leading-snug",children:["#",s.number]}),(0,r.jsxs)("div",{className:"flex items-start flex-row flex-auto",children:[(0,r.jsx)("a",{className:"leading-snug font-semibold hover:text-juniper text-vanilla-300 block flex-auto",href:s.url,rel:"noopener noreferrer",target:"_blank",title:"Open issue on GitHub",children:s.title}),s.comments_count>0&&(0,r.jsx)(p,{numIssues:s.comments_count})]})]},s.url)},f=e=>{let{issues:s}=e;return(0,r.jsx)("ol",{className:"px-5 py-3 text-base leading-loose border-t border-ink-200",children:s.map(e=>(0,r.jsx)(m,{issue:e},e.id))})},j=e=>{let{repositoryDescription:s}=e;return(0,r.jsx)("div",{className:"flex-row flex text-sm py-1 overflow-auto text-neutral-content",children:s})},h=e=>{let{isIssueOpen:s,numberOfIssues:t}=e;return(0,r.jsxs)("span",{className:"hidden md:inline text-sm border px-3 py-1 ml-2 rounded-full font-semibold ".concat(s?"text-ink-400 bg-juniper border-transparent":"text-vanilla-200"),children:[t,t>=10?"+":""," issue",t>1?"s":""]})},N=e=>{let{isIssueOpen:s,repositoryName:t,repositoryOwner:n,repositoryUrl:i}=e;return(0,r.jsxs)("a",{className:"text-xl font-bold group-hover:text-juniper ".concat(s?"text-juniper":""),href:i,rel:"noopener noreferrer",target:"_blank",title:"Open ".concat(n,"/").concat(t," on GitHub"),children:[n," / ",t]})},v=e=>{let{isIssueOpen:s,repositoryHasNewIssues:t,repositoryName:n,repositoryNumIssues:i,repositoryOwner:l,repositoryUrl:a}=e;return(0,r.jsxs)("div",{className:"flex flex-row",children:[(0,r.jsx)(N,{isIssueOpen:s,repositoryName:n,repositoryOwner:l,repositoryUrl:a}),(0,r.jsx)("div",{className:"flex flex-1 justify-end items-center",children:(0,r.jsx)("div",{className:"w-2 h-2 rounded-full ".concat(t?"bg-juniper":"")})}),(0,r.jsx)(h,{isIssueOpen:s,numberOfIssues:i})]})},y=e=>{let{isIssueOpen:s,lastModified:t,repositoryLang:n,repositoryStars:i}=e;return(0,r.jsxs)("div",{className:"flex-row flex text-sm py-1 font-mono ".concat(s?"text-honey":"text-vanilla-200"),children:[(0,r.jsxs)("div",{className:"mr-4",children:[(0,r.jsx)("span",{className:"text-green-600",children:"lang: "}),n]}),(0,r.jsxs)("div",{className:"mr-4",children:[(0,r.jsx)("span",{className:"text-blue-600",children:"stars: "}),i]}),(0,r.jsxs)("div",{className:"mr-4",children:[(0,r.jsx)("span",{className:"text-red-600",children:"last activity: "}),(0,r.jsx)("span",{children:t})]})]})},g=e=>{let{repository:s}=e,[t,n]=(0,l.useState)(!1);c().extend(d());let i=(e=>{let[s,t]=(0,l.useState)("");return(0,l.useEffect)(()=>t(c()(e).fromNow()),[e]),s})(s.last_modified);return(0,r.jsxs)("div",{id:"repo-".concat(s.id),className:"select-none border w-full rounded-md mb-4 cursor-pointer hover:bg-ink-300 group ".concat(t?"border-juniper hover:bg-ink-400":"border-ink-200"),onClick:()=>n(!t),children:[(0,r.jsxs)("div",{className:"px-5 py-3",children:[(0,r.jsx)(v,{isIssueOpen:t,repositoryHasNewIssues:s.has_new_issues,repositoryName:s.name,repositoryNumIssues:s.issues.length,repositoryOwner:s.owner,repositoryUrl:s.url}),(0,r.jsx)(j,{repositoryDescription:s.description}),(0,r.jsx)(y,{isIssueOpen:t,lastModified:i,repositoryLang:s.language.display,repositoryStars:s.stars_display})]}),t&&(0,r.jsx)(f,{issues:s.issues})]})},b=()=>(0,r.jsx)("div",{className:"p-4 w-full",children:(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)(i.G,{icon:n.IJ7,className:"fa-spin"})})}),w=e=>{let{repositories:s}=e,[t,n]=(0,l.useState)(15);return(0,r.jsx)("main",{children:(0,r.jsx)("div",{className:"p-4 w-full",children:(0,r.jsx)(a.Z,{dataLength:t,next:()=>n(t+15),hasMore:t<s.length,loader:(0,r.jsx)(b,{}),children:s.slice(0,t).map(e=>(0,r.jsx)(g,{repository:e},e.id))})})})}},5186:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return c}});var r=t(5893),n=t(9008),i=t.n(n),l=t(1163),a=t(4636),o=t(6379);function c(){let{repositories:e,topics:s}=(0,o.useAppContext)(),t=(0,l.useRouter)(),{tag:n}=t.query,c=s.find(e=>e.id==n),u="First Issue | Topic ".concat(null==c?void 0:c.display);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i(),{children:(0,r.jsx)("title",{children:u})}),(0,r.jsx)(a.J,{repositories:e.filter(e=>{var s;return null===(s=e.topics)||void 0===s?void 0:s.some(e=>e.id==n)})})]})}}},function(e){e.O(0,[976,130,774,888,179],function(){return e(e.s=2688)}),_N_E=e.O()}]);
//# sourceMappingURL=[tag]-bd34c758f050998d.js.map