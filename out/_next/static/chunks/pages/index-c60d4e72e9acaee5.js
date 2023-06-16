(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7423:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return B}});var a=s(7294),r=s(1163),n=s(4298),i=s.n(n),l=s(3454).env.NEXT_PUBLIC_GOOGLE_ADS_ID,o=s(3454).env.NEXT_PUBLIC_GOOGLE_ANALYTICS,c=s(5893),d=function(){var e=(0,r.useRouter)();return(0,a.useEffect)((function(){var t=function(e){!function(e){window.gtag("config",o,{page_path:e})}(e)};return e.events.on("routeChangeComplete",t),function(){e.events.off("routeChangeComplete",t)}}),[e.events]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i(),{strategy:"afterInteractive",src:"https://www.googletagmanager.com/gtag/js?id=".concat(o)}),(0,c.jsx)(i(),{id:"gtag-init",strategy:"afterInteractive",dangerouslySetInnerHTML:{__html:"\n            window.dataLayer = window.dataLayer || [];\n            function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date());\n            gtag('config', '".concat(o,"', {\n              page_path: window.location.pathname,\n            });\n          ")}}),(0,c.jsx)(i(),{async:!0,src:l,crossOrigin:"anonymous"})]})},m=(0,a.createContext)({context:void 0}),u=function(){var e=(0,a.useState)(0),t=e[0],s=e[1],r=(0,a.useState)(0),n=r[0],i=r[1],l=(0,a.useCallback)((function(){s(window.innerWidth),i(window.innerHeight)}),[s,i]);return(0,a.useEffect)((function(){window.addEventListener("resize",l),l()}),[l]),{width:t,height:n}},x=s(2640),h=s(2262),g=s(2777),p=s(9499),f=(0,h.Z)((function e(t,s){var a=this;(0,g.Z)(this,e),(0,p.Z)(this,"waveLength",void 0),(0,p.Z)(this,"color",void 0),(0,p.Z)(this,"draw",(function(e,t,s,r){if(e.beginPath(),e.moveTo(0,s),!(a.waveLength.length<3)){for(var n=0;n<t;n++){var i,l,o,c=Math.sin(n*(null!==(i=null===a||void 0===a?void 0:a.waveLength[0])&&void 0!==i?i:0)-r),d=Math.sin(n*(null!==(l=a.waveLength[1])&&void 0!==l?l:0)-r),m=Math.sin(n*(null!==(o=a.waveLength[2])&&void 0!==o?o:0)-r);e.lineTo(2.5*n,s-400+c*d*m*200)}e.lineTo(t,s),e.fillStyle=a.color,e.fill(),e.closePath()}})),this.waveLength=t,this.color=s})),v=function(){var e=(0,a.useContext)(m).context,t=u().width,s=.013,r={frontWave:new f([.0211,.028,.015],"rgb(236, 71, 85, 0.1)"),backWave:new f([.0122,.018,.005],"rgb(249, 168, 168, 0.1)")};return e&&function a(){null===e||void 0===e||e.clearRect(0,0,t,600),Object.entries(r).forEach((function(a){(0,x.Z)(a,2)[1].draw(e,t,600,s)})),s+=.013,requestAnimationFrame(a)}(),null},j=function(){var e=(0,a.useRef)(null),t=u().width,s=(0,a.useState)(),r=s[0],n=s[1];return(0,a.useEffect)((function(){var t,s=null===e||void 0===e||null===(t=e.current)||void 0===t?void 0:t.getContext("2d");s&&n(s)}),[]),(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)(m.Provider,{value:{context:r},children:[(0,c.jsx)("canvas",{id:"canvas",ref:e,width:t,height:220}),(0,c.jsx)(v,{})]})})},y=JSON.parse('{"S9":{"name":"React landing page 2021","logo":"/assets/images/logo.png"},"G":[{"name":"Product","href":"product"},{"name":"Features","href":"features"},{"name":"About Us","href":"pricing"}],"PL":{"title":"Let we find a","subtitle":"Charging Station.","description":"Our mission is to make charging electric cars easier, cheaper, and more accessible to everyone. Join us and help accelerate the transition to sustainable transportation.","img":"/assets/images/charger.jpg","primaryAction":{"text":"Join as a Driver","href":"#"},"secondaryAction":{"text":"Be a host","href":"mailto:ozancanakn@gmail.com?subject=I like to join as a host!"}},"O7":{"title":"Our new released products","items":[{"title":"Mobile App for Drivers","description":"Find affordable charging options near you. Pay half the price compared to regular charging stations and discover the freedom to choose any road you wish to travel.","img":"/assets/images/product1.png"},{"title":"Web App for Hosts!","description":"As a host, offer your place as a charging station and earn money. Make more than your electricity bill by just plugging in a car. Help expand the charging network to places it\'s never reached before.","img":"/assets/images/product2.png"}]},"R2":{"title":"Smart Charging with Advanced Features","subtitle":"All the best technologies out there!","description":"","items":[{"name":"Book Charging Times","description":"Never worry about charging station availability. Make reservations ahead of time, just reach the location at your booked slot, plug in, and relax.","icon":"/assets/images/react.png"},{"name":"Make It Cheaper","description":"Make your car fully charged in half price","icon":"/assets/images/tailwindcss.svg"},{"name":"Vision of Charge","description":"Show all charging stations near you.","icon":"/assets/images/nextjs.svg"},{"name":"Pay Pre-defined Prices","description":"When you show stations on map you can see prices.","icon":"/assets/images/ts.png"}]},"D":{"title":"About Us","items":[{"name":"Free","price":"$0","priceDetails":"for one user","features":["1 user","Basic Support","1 GB of storage","Email support"]},{"name":"Pro","price":"$15","priceDetails":"per user","features":["5 users","Priority Support","10 GB of storage","Phone and Email support"]},{"name":"Enterprise","price":"$29","priceDetails":"per user","features":["50 users","24/7 Support","100 GB of storage","Phone and Email support"]}]}}'),b=function(){var e=y.R2,t=e.title,s=e.subtitle,a=e.description,r=e.items;return(0,c.jsx)("div",{className:"py-12 bg-background",id:"features",children:(0,c.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,c.jsxs)("div",{className:"lg:text-center",children:[(0,c.jsx)("h2",{className:"text-base text-primary font-semibold tracking-wide uppercase",children:t}),(0,c.jsx)("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:s}),(0,c.jsx)("p",{className:"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto",children:a})]}),(0,c.jsx)("div",{className:"mt-10",children:(0,c.jsx)("dl",{className:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10",children:r.map((function(e){return(0,c.jsxs)("div",{className:"relative",children:[(0,c.jsxs)("dt",{children:[(0,c.jsx)("div",{className:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4",children:(0,c.jsx)("img",{className:"inline-block h-6 w-6 rounded-full",src:e.icon,alt:e.name})}),(0,c.jsx)("p",{className:"ml-16 text-lg leading-6 font-medium text-gray-900",children:e.name})]}),(0,c.jsx)("dd",{className:"mt-2 ml-16 text-base text-gray-500",children:e.description})]},e.name)}))})})]})})},w=s(1203),N=s(5685),k=s(3801),_=s(6261),E=function(){var e=y.G,t=y.S9,s=t.name,r=t.logo;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("svg",{className:"hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2",fill:"currentColor",viewBox:"0 0 100 100",preserveAspectRatio:"none","aria-hidden":"true",children:(0,c.jsx)("polygon",{points:"50,0 100,0 50,100 0,100"})}),(0,c.jsxs)(w.J,{children:[(0,c.jsx)("div",{className:"relative pt-6 px-4 sm:px-6 lg:px-8",children:(0,c.jsxs)("nav",{className:"relative flex items-center justify-between sm:h-10 lg:justify-start","aria-label":"Global",children:[(0,c.jsx)("div",{className:"flex items-center flex-grow flex-shrink-0 lg:flex-grow-0",children:(0,c.jsxs)("div",{className:"flex items-center justify-between w-full md:w-auto",children:[(0,c.jsxs)("a",{href:"#",children:[(0,c.jsx)("span",{className:"sr-only",children:s}),(0,c.jsx)("img",{alt:"logo",className:"h-16 w-auto sm:h-16",src:r})]}),(0,c.jsx)("div",{className:"-mr-2 flex items-center md:hidden",children:(0,c.jsxs)(w.J.Button,{className:"bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary",children:[(0,c.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,c.jsx)(k.Oqj,{className:"h-6 w-6","aria-hidden":"true"})]})})]})}),(0,c.jsx)("div",{className:"hidden md:block md:ml-10 md:pr-4 md:space-x-8",children:e.map((function(e){return(0,c.jsx)(_.rU,{spy:!0,active:"active",smooth:!0,duration:1e3,to:e.href,className:"font-medium text-gray-500 hover:text-gray-900",children:e.name},e.name)}))})]})}),(0,c.jsx)(N.u,{as:a.Fragment,enter:"duration-150 ease-out",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"duration-100 ease-in",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,c.jsx)(w.J.Panel,{focus:!0,className:"absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden",children:(0,c.jsxs)("div",{className:"rounded-lg shadow-md bg-background ring-1 ring-black ring-opacity-5 overflow-hidden",children:[(0,c.jsxs)("div",{className:"px-5 pt-4 flex items-center justify-between",children:[(0,c.jsx)("div",{children:(0,c.jsx)("img",{className:"h-8 w-auto",src:r,alt:""})}),(0,c.jsx)("div",{className:"-mr-2",children:(0,c.jsxs)(w.J.Button,{className:"bg-background rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary",children:[(0,c.jsx)("span",{className:"sr-only",children:"Close main menu"}),(0,c.jsx)(k.b0D,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),(0,c.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:e.map((function(e){return(0,c.jsx)(_.rU,{spy:!0,active:"active",smooth:!0,duration:1e3,to:e.href,className:"block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",children:e.name},e.name)}))})]})})})]})]})},C=s(6513),L=s(2688);var P=function(e){var t=e.children,s=(0,C._)(),r=(0,a.useRef)(null),n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",s=(0,a.useState)(!1),r=s[0],n=s[1];return(0,a.useEffect)((function(){var s=null,a=new IntersectionObserver((function(e){var t=(0,x.Z)(e,1)[0];null!==t&&void 0!==t&&t.isIntersecting&&n(null===t||void 0===t?void 0:t.isIntersecting)}),{rootMargin:t});return e&&null!==e&&void 0!==e&&e.current&&(s=e.current,a.observe(s)),function(){a.unobserve(s)}}),[e,t]),r}(r);return(0,a.useEffect)((function(){n&&s.start({x:0,opacity:1,transition:{duration:.5,ease:"easeOut"}})}),[n,s]),(0,c.jsx)(L.E.div,{className:"lazy-div",ref:r,initial:{opacity:0,x:-50},animate:s,children:t})},A=function(){var e=y.PL;return(0,c.jsx)("main",{className:"mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28",children:(0,c.jsxs)("div",{className:"sm:text-center lg:text-left",children:[(0,c.jsxs)("h1",{className:"text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl",children:[(0,c.jsx)("span",{className:"block xl:inline",children:e.title})," ",(0,c.jsx)("span",{className:"block text-primary xl:inline",children:e.subtitle})]}),(0,c.jsx)("p",{className:"mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0",children:e.description}),(0,c.jsxs)("div",{className:"mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start",children:[(0,c.jsx)("div",{className:"rounded-md shadow",children:(0,c.jsx)("a",{href:e.primaryAction.href,className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-primary hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10",children:e.primaryAction.text})}),(0,c.jsx)("div",{className:"mt-3 sm:mt-0 sm:ml-3",children:(0,c.jsx)("a",{href:e.secondaryAction.href,className:"w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md border-primary text-secondary bg-background hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10",children:e.secondaryAction.text})})]})]})})},O=function(){var e=y.PL;return(0,c.jsx)("div",{className:"lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2",children:(0,c.jsx)("img",{className:"h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full",src:e.img,alt:"happy team image"})})},S=function(){var e=y.D.title;return(0,c.jsx)("section",{className:"bg-background py-8",id:"pricing",children:(0,c.jsxs)("div",{className:"container mx-auto px-2 pt-4 pb-12 text-primary",children:[(0,c.jsx)("h1",{className:"w-full my-2 text-5xl font-bold leading-tight text-center text-primary",children:e}),(0,c.jsx)("div",{className:"w-full mb-4",children:(0,c.jsx)("div",{className:"h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t"})}),(0,c.jsx)("div",{className:"flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4",children:(0,c.jsx)("div",{className:"video-section",children:(0,c.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/K5iUO5Hjsl4",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0})})})]})})},F=function(e){var t=e.width,s=void 0===t?"w-64":t;return(0,c.jsx)("div",{className:"w-full mb-4",children:(0,c.jsx)("div",{className:"h-1 mx-auto bg-primary ".concat(s," opacity-25 my-0 py-0 rounded-t mb-10")})})},T=function(){var e=y.O7,t=(0,x.Z)(e.items,2),s=t[0],a=t[1];return(0,c.jsx)("section",{className:"bg-background py-8",id:"product",children:(0,c.jsxs)("div",{className:"container max-w-5xl mx-auto m-8",children:[(0,c.jsx)("h1",{className:"w-full my-2 text-5xl font-bold leading-tight text-center text-primary",children:e.title.split(" ").map((function(e,t){return(0,c.jsxs)("span",{className:t%2?"text-primary":"text-border",children:[e," "]},t)}))}),(0,c.jsx)(F,{}),(0,c.jsxs)("div",{className:"flex flex-wrap",children:[(0,c.jsxs)("div",{className:"w-5/6 sm:w-1/2 p-6 mt-20",children:[(0,c.jsx)("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3",children:null===s||void 0===s?void 0:s.title}),(0,c.jsx)("p",{className:"text-gray-600",children:null===s||void 0===s?void 0:s.description})]}),(0,c.jsx)("div",{className:"w-full sm:w-1/2 p-6",children:(0,c.jsx)("img",{className:"h-[30rem] rounded-3xl",src:null===s||void 0===s?void 0:s.img,alt:null===s||void 0===s?void 0:s.title})})]}),(0,c.jsxs)("div",{className:"flex flex-wrap flex-col-reverse sm:flex-row",children:[(0,c.jsx)("div",{className:"w-full sm:w-1/2 p-6",children:(0,c.jsx)("img",{className:"h-6/6",src:null===a||void 0===a?void 0:a.img,alt:null===a||void 0===a?void 0:a.title})}),(0,c.jsx)("div",{className:"w-full sm:w-1/2 p-6 mt-20",children:(0,c.jsxs)("div",{className:"align-middle",children:[(0,c.jsx)("h3",{className:"text-3xl text-gray-800 font-bold leading-none mb-3",children:null===a||void 0===a?void 0:a.title}),(0,c.jsx)("p",{className:"text-gray-600 mb-8",children:null===a||void 0===a?void 0:a.description})]})})]})]})})},B=function(){return(0,c.jsxs)("div",{className:"bg-background grid gap-y-16 overflow-hidden",children:[(0,c.jsxs)("div",{className:"relative bg-background",children:[(0,c.jsx)("div",{className:"max-w-7xl mx-auto",children:(0,c.jsxs)("div",{className:"relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32",children:[(0,c.jsx)(E,{}),(0,c.jsx)(A,{})]})}),(0,c.jsx)(O,{})]}),(0,c.jsx)(j,{}),(0,c.jsx)(P,{children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(T,{}),(0,c.jsx)(j,{})]})}),(0,c.jsx)(P,{children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(b,{}),(0,c.jsx)(j,{})]})}),(0,c.jsx)(P,{children:(0,c.jsx)(S,{})}),(0,c.jsx)(P,{children:(0,c.jsx)(c.Fragment,{children:(0,c.jsx)(j,{})})}),(0,c.jsx)(d,{})]})}},8312:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(7423)}])}},function(e){e.O(0,[961,774,888,179],(function(){return t=8312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);