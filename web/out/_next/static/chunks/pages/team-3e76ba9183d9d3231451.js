_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[22],{"1MXG":function(t,a,e){t.exports={description:"team_description__1BxFd",name:"team_name__HFCO9",title:"team_title__2tsga",note:"team_note__2szHs",spacer:"team_spacer__9asNO",centered:"team_centered__2VHp_",cards:"team_cards__Zb4Y3",card:"team_card__302Fx",tags:"team_tags__3u1r1"}},"3k9m":function(t,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/team",function(){return e("m7oY")}])},m7oY:function(t,a,e){"use strict";e.r(a),e.d(a,"__N_SSG",(function(){return j})),e.d(a,"default",(function(){return G}));var n=e("1OyB"),r=e("vuIU"),o=e("Ji7U"),c=e("md7G"),i=e("foSv"),s=e("8Kt/"),u=e.n(s),l=e("CafY"),m=e("YFqc"),f=e.n(m),_=e("q1tI"),d=e.n(_),p=e("Z4Yb"),v=e.n(p),h=e("1MXG"),g=e.n(h),b=e("7O5W"),w=e("wHSu"),N=e("8tEE"),y=e("IP2g"),k=d.a.createElement;function E(t){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=Object(i.a)(t);if(a){var r=Object(i.a)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return Object(c.a)(this,e)}}b.b.add(w.b);var M=function(t){Object(o.a)(e,t);var a=E(e);function e(t){var r;Object(n.a)(this,e);var o=(r=a.call(this,t)).props.contacts.map((function(t,a){return k(O,{key:a,name:t.name,position:t.position,organization:t.organization,website:t.website,twitter:t.twitter,note:t.note,tags:t.tags})}));return r.state={contact_cards:o},r}return Object(r.a)(e,[{key:"componentDidMount",value:function(){for(var t=this.state.contact_cards.slice(),a=t.length-1;a>0;a--){var e=Math.floor(Math.random()*(a+1)),n=[t[e],t[a]];t[a]=n[0],t[e]=n[1]}this.setState({contact_cards:t})}},{key:"render",value:function(){return k("section",{className:g.a.cards},this.state.contact_cards)}}]),e}(d.a.Component);function O(t){var a="";""!=t.website&&(a=k("a",{href:t.website,target:"_blank"},k(y.a,{icon:"user"})));var e="";if(""!=t.twitter){var n="https://twitter.com/"+t.twitter;e=k("a",{href:n,target:"_blank"},k(y.a,{icon:N.b}))}var r="";""==e&&""==a||(r=k("div",null,a," ",k("span",{className:g.a.spacer})," ",e));var o="";return""!=t.tags&&void 0!=t.tags&&(o=k("div",{className:g.a.tags},t.tags.map((function(t,a){return k("div",{key:a},t)})))),k("div",{className:g.a.card},k("h3",{className:g.a.name},t.name),k("p",{className:g.a.title},t.organization),k("div",{className:g.a.note},t.note),r,o)}var j=!0;function G(t){var a=t.teamData;return k(l.a,{home:!0},k(u.a,null,k("title",null,"GEMv2 Team")),k("article",null,k("div",{className:v.a.headingXl},"GEMv2 Team"),k("p",{className:g.a.description},"GEM is a community-driven effort to improve evaluation of natural language generation. It would not be possible without a large group of collaborators to take on challenging tasks. You can see the contributor list to GEMv1 ",k(f.a,{href:"/team/2021"},k("a",null,"here")),".",k("p",null,"This page acts as a directory of our amazing contributors. If you want to join the organization,  ",k(f.a,{href:"/team/join"},k("a",null,"click here to fill out the sign-up form.")))),k("div",{className:g.a.centered},k(M,{contacts:a.teamMembers}))))}}},[["3k9m",0,1,4,5,2,3]]]);