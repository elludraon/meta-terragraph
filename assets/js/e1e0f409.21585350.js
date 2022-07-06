"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5438],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(g,l(l({ref:t},s),{},{components:n})):a.createElement(g,l({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={},l="Terragraph CLI",o={unversionedId:"developer/Terragraph_CLI",id:"developer/Terragraph_CLI",title:"Terragraph CLI",description:"This document describes Terragraph command-line utilities for interacting with",source:"@site/../docs/developer/Terragraph_CLI.md",sourceDirName:"developer",slug:"/developer/Terragraph_CLI",permalink:"/docs/developer/Terragraph_CLI",draft:!1,editUrl:"https://github.com/terragraph/meta-terragraph/edit/main/docs/../docs/developer/Terragraph_CLI.md",tags:[],version:"current",frontMatter:{},sidebar:"developerManualSidebar",previous:{title:"Stats, Events, Logs",permalink:"/docs/developer/Stats_Events_Logs"},next:{title:"API Service",permalink:"/docs/developer/API_Service"}},p={},d=[{value:"&quot;tg2&quot; CLI",id:"tg2-cli",level:2},{value:"&quot;tg&quot; CLI",id:"tg-cli",level:2},{value:"Resources",id:"resources",level:2}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"terragraph-cli"},"Terragraph CLI"),(0,r.kt)("p",null,"This document describes Terragraph command-line utilities for interacting with\nTerragraph software."),(0,r.kt)("h2",{id:"tg2-cli"},'"tg2" CLI'),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tg2")," is a Lua-based command-line utility for interacting with various software\ncomponents including the E2E controller, E2E minion, driver interface, and stats\nagent. Most CLI commands are translated into ZMQ messages and sent to the\nrespective services."),(0,r.kt)("p",null,"The CLI is intended to serve as a tool for basic debugging, ",(0,r.kt)("em",{parentName:"p"},"not")," to provide a\ncomprehensive API. Documentation for individual CLI commands is available via\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"--help")," flag. Some top-level commands are shown in the table below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},'"tg2" commands'))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stats"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"stats"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"event"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Driver interface"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fw"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E2E minion"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"minion"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E2E controller"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"controller"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"topology"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Information"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"version"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"tech-support"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"whoami"))))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tg2")," source code is largely contained within\n",(0,r.kt)("inlineCode",{parentName:"p"},"src/terragraph-e2e/lua/tg2.lua"),". It parses arguments using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/luarocks/argparse"},"Argparse"),", uses\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeromq/lzmq"},"lzmq")," for ZMQ bindings, and uses Apache Thrift client libraries and code\ngenerators (",(0,r.kt)("em",{parentName:"p"},"not")," fbthrift, which lacks Lua support)."),(0,r.kt)("p",null,"Unit tests for ",(0,r.kt)("inlineCode",{parentName:"p"},"tg2")," reside in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/terragraph-e2e/lua/tests/tg2_test.lua"),". The\ntests are written using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bluebird75/luaunit"},"LuaUnit")," testing framework."),(0,r.kt)("a",{id:"terragraph-cli-tg-cli"}),(0,r.kt)("h2",{id:"tg-cli"},'"tg" CLI'),(0,r.kt)("p",null,"Terragraph also provides ",(0,r.kt)("inlineCode",{parentName:"p"},"tg"),", a Python-based CLI. ",(0,r.kt)("inlineCode",{parentName:"p"},"tg")," is similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"tg2"),"\n(though usage is not identical) and implements a slightly broader feature set,\nbut runs significantly slower and has largely been deprecated."),(0,r.kt)("p",null,"A rough categorization of the top-level commands is shown in the table below."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Category"),(0,r.kt)("th",{parentName:"tr",align:null},'"tg" commands'))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E2E"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"config"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"event"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ignition"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"link"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"node"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"scan"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"site"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"status"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"topology"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"traffic"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"upgrade"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"version"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Firmware"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fw"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Stats"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"counters"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Debug"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"minion"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"scp"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"ssh"))))),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"tg")," source code resides in ",(0,r.kt)("inlineCode",{parentName:"p"},"src/tg/"),". The main class is ",(0,r.kt)("inlineCode",{parentName:"p"},"tg.py"),", which\nparses arguments using ",(0,r.kt)("a",{parentName:"p",href:"http://click.pocoo.org"},"Click")," and invokes the appropriate command submodule.\nAll command submodules reside in the ",(0,r.kt)("inlineCode",{parentName:"p"},"commands/")," subdirectory, and inherit the\nbase class ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseCmd")," (in ",(0,r.kt)("inlineCode",{parentName:"p"},"commands/base.py"),")."),(0,r.kt)("p",null,"The CLI behaves like a standard Click program, with the following exceptions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The program provides an explicit ",(0,r.kt)("inlineCode",{parentName:"li"},"help")," command (in ",(0,r.kt)("inlineCode",{parentName:"li"},"commands/help.py"),") which\nrecursively prints Click's ",(0,r.kt)("inlineCode",{parentName:"li"},"--help")," output for every available command."),(0,r.kt)("li",{parentName:"ul"},"The main class does some preliminary parsing or arguments before passing them\ninto Click. This is an optimization so that it can only import submodules\nwhich are actually needed (i.e. for the command being called).")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/luarocks/argparse"},"Argparse")," - Lua package for command-line interfaces (based on Python)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/zeromq/lzmq"},"lzmq")," - Lua ZMQ bindings"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/bluebird75/luaunit"},"LuaUnit")," - Lua unit testing framework"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://click.pocoo.org"},"Click")," - Python package for command-line interfaces")))}m.isMDXComponent=!0}}]);