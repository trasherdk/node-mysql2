"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8368],{1786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>d});var a=n(4848),r=n(8453),s=n(1470),o=n(9365);const u={},l="Row Data Packet (Multi Statements and Row as Array)",i={id:"examples/typescript/row-data/row-as-array-multi-statements",title:"Row Data Packet (Multi Statements and Row as Array)",description:"",source:"@site/docs/examples/typescript/row-data/03-row-as-array-multi-statements.mdx",sourceDirName:"examples/typescript/row-data",slug:"/examples/typescript/row-data/row-as-array-multi-statements",permalink:"/node-mysql2/zh-CN/docs/examples/typescript/row-data/row-as-array-multi-statements",draft:!1,unlisted:!1,editUrl:"https://github.com/sidorares/node-mysql2/tree/master/website/docs/examples/typescript/row-data/03-row-as-array-multi-statements.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"examples",previous:{title:"Row Data Packet (Multi Statements)",permalink:"/node-mysql2/zh-CN/docs/examples/typescript/row-data/multi-statements"}},c={},d=[];function m(e){const t={code:"code",h1:"h1",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"row-data-packet-multi-statements-and-row-as-array",children:"Row Data Packet (Multi Statements and Row as Array)"}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(o.A,{value:"index.ts",default:!0,children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"/**\n * The types are explicity for learning purpose\n * By extending the `RowDataPacket`, you can use your Interface in `query` and `execute`\n */\n\nimport mysql, {\n  ConnectionOptions,\n  ResultSetHeader,\n  RowDataPacket,\n} from 'mysql2/promise';\n\ninterface User extends RowDataPacket {\n  /** id */\n  0: number;\n  /** name */\n  1: string;\n}\n\n(async () => {\n  const access: ConnectionOptions = {\n    host: '',\n    user: '',\n    password: '',\n    database: '',\n    multipleStatements: true,\n    rowsAsArray: true,\n  };\n\n  const conn = await mysql.createConnection(access);\n\n  /** Deleting the `users` table, if it exists */\n  await conn.query<ResultSetHeader>('DROP TABLE IF EXISTS `users`;');\n\n  /** Creating a minimal user table */\n  await conn.query<ResultSetHeader>(\n    'CREATE TABLE `users` (`id` INT(11) AUTO_INCREMENT, `name` VARCHAR(50), PRIMARY KEY (`id`));'\n  );\n\n  /** Inserting some users */\n  const [inserted] = await conn.execute<ResultSetHeader>(\n    'INSERT INTO `users`(`name`) VALUES(?), (?), (?), (?);',\n    ['Josh', 'John', 'Marie', 'Gween']\n  );\n\n  console.log('Inserted:', inserted.affectedRows);\n\n  /** Getting users */\n  const [rows] = await conn.query<User[][]>(\n    [\n      'SELECT * FROM `users` ORDER BY `name` ASC LIMIT 2;',\n      'SELECT * FROM `users` ORDER BY `name` ASC LIMIT 2 OFFSET 2;',\n    ].join(' ')\n  );\n\n  rows.forEach((users) => {\n    users.forEach((user) => {\n      console.log('-----------');\n      console.log('id:  ', user[0]);\n      console.log('name:', user[1]);\n    });\n  });\n\n  await conn.end();\n})();\n\n/** Output\n *\n * Inserted: 4\n * -----------\n * id:   4\n * name: Gween\n * -----------\n * id:   2\n * name: John\n * -----------\n * id:   1\n * name: Josh\n * -----------\n * id:   3\n * name: Marie\n */\n"})})})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(4164);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>R});var a=n(6540),r=n(4164),s=n(3104),o=n(6347),u=n(205),l=n(7485),i=n(1682),c=n(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,i.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=m(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[i,d]=f({queryString:n,groupId:r}),[h,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),w=(()=>{const e=i??h;return p({value:e,tabValues:s})?e:null})();(0,u.A)((()=>{w&&l(w)}),[w]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2303);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(4848);function v(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=u[n].value;r!==a&&(i(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:u.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.A)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=h(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",w.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(g,{...e,...t})]})}function R(e){const t=(0,b.A)();return(0,y.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>u});var a=n(6540);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);