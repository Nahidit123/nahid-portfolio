(()=>{const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const sk=[["WordPress","W","#21759b","WordPress website development, customization, responsive layouts, and website management."],["Webflow","Wf","#4353ff","Responsive Webflow development with modern layouts, interactions, and CMS-based content."],["WooCommerce","Woo","#7f54b3","eCommerce website development, product setup, shop customization, and WooCommerce functionality."],["Elementor","E","#d30c5c","Custom responsive WordPress websites and landing pages using Elementor."],["Divi Builder","D","#8a4dff","Professional WordPress page design and customization using Divi Builder."],["Breakdance Builder","B","#f5a300","Modern and responsive WordPress website development using Breakdance."],["WPBakery Page Builder","WP","#2d9cdb","Building and customizing WordPress layouts using WPBakery."],["Frontend Development","&lt;/&gt;","#e44d26","HTML, CSS, and JavaScript for custom layouts, styling, responsive behavior, and interactions."],["PHP","PHP","#6b5bd6","PHP-based WordPress customization and functionality improvements."]];
const sv=[["WordPress Development","W","#21759b","Professional WordPress websites built around your business requirements with responsive and easy-to-manage layouts."],["Webflow Development","Wf","#4353ff","Modern and responsive Webflow websites with clean structure, CMS implementation, and interactive elements."],["WooCommerce Development","Woo","#7f54b3","Professional WooCommerce stores with product pages, shop layouts, responsive design, and eCommerce functionality."],["Elementor Development","E","#d30c5c","Custom Elementor websites and landing pages built from scratch or based on an existing design."]];
const pr=[["Project 01","WordPress Business Website","WordPress • Elementor • Responsive Design","A modern and responsive WordPress website developed with a strong focus on usability, clean presentation, and mobile optimization.","images/project-1.jpg","RC Land Holdings"],["Project 02","Webflow Website","Webflow • Responsive Development • Interactions","A clean Webflow experience featuring responsive layouts, structured content, and smooth interactions.","images/project-2.jpg","Faithful Steward"],["Project 03","WooCommerce Store","WordPress • WooCommerce • Elementor","An eCommerce website designed to provide customers with a simple and user-friendly shopping experience.","images/project-3.jpg","Solar For You"],["Project 04","Custom WordPress Website","WordPress • Custom CSS • JavaScript • PHP","A customized WordPress implementation combining page-builder flexibility with custom development.","images/project-4.jpg","The Vineyard School"]];
const st=[["Understand","I start by understanding the project goals, requirements, target audience, and design expectations."],["Plan","I organize the website structure, content hierarchy, required functionality, and development approach."],["Develop","I turn the design and requirements into a responsive and functional website."],["Optimize","I review responsiveness, layout consistency, functionality, interactions, and usability."],["Launch","After final testing and revisions, the website is prepared for launch."]];
const ic=(l,c)=>`<span class="ic" style="--c:${c}">${l}</span>`;
$('#skg').innerHTML=sk.map(s=>`<article class="card rv tilt">${ic(s[1],s[2])}<div><h3>${s[0]}</h3><p>${s[3]}</p></div></article>`).join('');
$('#svg').innerHTML=sv.map(s=>`<article class="card rv tilt">${ic(s[1],s[2])}<div><h3>${s[0]}</h3><p>${s[3]}</p></div></article>`).join('');
$('#prg').innerHTML=pr.map(p=>`<a href="#" class="proj rv tilt"><div class="th"><img src="${p[4]}" alt="${p[5]} website screenshot" loading="lazy" decoding="async"></div><span class="pn">${p[0]} • ${p[5]}</span><h3>${p[1]}</h3><small>${p[2]}</small><p>${p[3]}</p><em>View Project →</em></a>`).join('');
$('#stp').innerHTML=st.map((s,i)=>`<li class="rv"><span>0${i+1}</span><h3>${s[0]}</h3><p>${s[1]}</p></li>`).join('');
$$('.proj').forEach(p=>p.addEventListener('mouseenter',()=>{const i=$('img',p),d=Math.max(0,i.offsetHeight-(i.parentElement.clientHeight-22));i.style.setProperty('--sh',-d+'px');i.style.setProperty('--dur',Math.max(3,d/200)+'s')}));
const lb=$('#lb'),li=$('img',lb),cl=()=>{lb.classList.remove('open');document.body.style.overflow=''};
$$('.proj').forEach(p=>p.addEventListener('click',e=>{e.preventDefault();li.src=$('img',p).src;lb.classList.add('open');$('.lbs',lb).scrollTop=0;document.body.style.overflow='hidden'}));
lb.addEventListener('click',e=>{if(!e.target.closest('.lbs'))cl()});addEventListener('keydown',e=>e.key==='Escape'&&cl());
const nav=$('#nav'),pg=$('#prog');
const sc=()=>{const h=document.documentElement;pg.style.transform=`scaleX(${scrollY/(h.scrollHeight-innerHeight||1)})`;nav.classList.toggle('s',scrollY>30)};addEventListener('scroll',sc,{passive:true});sc();
$('#bg').onclick=()=>nav.classList.toggle('o');$$('#menu a').forEach(a=>a.onclick=()=>nav.classList.remove('o'));
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
$$('.rv').forEach(el=>{el.style.transitionDelay=Math.min([...el.parentElement.children].indexOf(el),6)*80+'ms';io.observe(el)});
const L=$$('#menu a'),so=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)L.forEach(l=>l.classList.toggle('on',l.hash==='#'+x.target.id))}),{rootMargin:'-45% 0px -50% 0px'});L.forEach(l=>{const s=$(l.hash);s&&so.observe(s)});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches){
$$('.mg').forEach(b=>{b.addEventListener('mousemove',e=>{const r=b.getBoundingClientRect();b.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`});b.addEventListener('mouseleave',()=>b.style.transform='')});
if(matchMedia('(pointer:fine)').matches){$$('.tilt').forEach(c=>{c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(900px) rotateX(${-y*7}deg) rotateY(${x*7}deg) translateY(-4px)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
const h=$('.hero'),sp=$('#spot');h.addEventListener('mousemove',e=>{const r=h.getBoundingClientRect();sp.style.setProperty('--x',e.clientX-r.left+'px');sp.style.setProperty('--y',e.clientY-r.top+'px')})}}
const f=$('#form'),s=$('#st');f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);let ok=true;
$$('[required]',f).forEach(i=>{const b=!i.value.trim()||(i.type==='email'&&!/^\S+@\S+\.\S+$/.test(i.value));i.classList.toggle('bad',b);if(b)ok=false});
if(!ok){s.textContent='Please fill in your name, a valid email, and a message.';s.style.color='#e5484d';return}
location.href=`mailto:nh4381709@gmail.com?subject=${encodeURIComponent('Project inquiry from '+d.get('name'))}&body=${encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nProject type: ${d.get('type')}\nService: ${d.get('service')}\n\n${d.get('message')}`)}`;
s.textContent='Thanks! Your email app should open with your message ready to send.';s.style.color='#1a9a57';f.reset()});
$$('.hd h2').forEach(h=>{h.innerHTML=h.textContent.trim().split(/\s+/).map((w,i)=>`<span class="w"><span style="--i:${i}">${w.replace(/&/g,'&amp;')}</span></span>`).join(' ')});
$$('.card,.steps li').forEach(c=>c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx2',e.clientX-r.left+'px');c.style.setProperty('--my2',e.clientY-r.top+'px')}));
const hr=$('.hero');hr.addEventListener('mousemove',e=>{const r=hr.getBoundingClientRect();hr.style.setProperty('--mx',((e.clientX-r.left)/r.width*2-1).toFixed(3));hr.style.setProperty('--my',((e.clientY-r.top)/r.height*2-1).toFixed(3))});
if(matchMedia('(pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){const cu=document.createElement('div');cu.className='cur';document.body.appendChild(cu);let cx=0,cy=0,tx=0,ty=0;addEventListener('mousemove',e=>{tx=e.clientX;ty=e.clientY;cu.classList.add('on')});document.addEventListener('mouseover',e=>cu.classList.toggle('big',!!e.target.closest('a,button,.proj,input,select,textarea')));const lp=()=>{cx+=(tx-cx)*.18;cy+=(ty-cy)*.18;cu.style.transform=`translate(${cx-18}px,${cy-18}px)`;requestAnimationFrame(lp)};lp()}
(()=>{const cv=document.getElementById('bgc');if(!cv)return;
const fail=()=>{cv.remove();document.body.classList.add('nogl')};
const gl=cv.getContext('webgl',{antialias:false,powerPreference:'low-power'});if(!gl)return fail();
const vs='attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}';
const fs=`#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 r;uniform vec2 m;uniform float t;uniform float s;
float h(vec2 p){vec3 q=fract(vec3(p.xyx)*.1031);q+=dot(q,q.yzx+33.33);return fract((q.x+q.y)*q.z);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1.,0.)),f.x),mix(h(i+vec2(0.,1.)),h(i+vec2(1.,1.)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*n(p);p=p*2.02+vec2(1.7,9.2);a*=.5;}return v;}
void main(){
 vec2 uv=gl_FragCoord.xy/r;vec2 p=(gl_FragCoord.xy-.5*r)/r.y;p.y+=s*1.6;
 vec2 q=vec2(fbm(p*1.3+t*.05),fbm(p*1.3+vec2(5.2,1.3)-t*.04));
 vec2 w=vec2(fbm(p*1.5+2.*q+vec2(1.7,9.2)+t*.08),fbm(p*1.5+2.*q+vec2(8.3,2.8)-t*.06));
 float f=fbm(p*1.4+2.4*w);
 vec3 A=mix(vec3(.075,.16,.24),vec3(.07,.20,.27),.5+.5*sin(s*6.2832));
 vec3 B=mix(vec3(.06,.11,.19),vec3(.05,.15,.22),.5+.5*sin(s*6.2832+1.5));
 vec3 c=mix(vec3(.055,.08,.135),A,smoothstep(.3,.68,f));
 c=mix(c,B,smoothstep(.4,.95,length(q))*.8);
 c+=vec3(.05,.30,.50)*pow(smoothstep(.55,.95,f*w.x*1.7),2.)*.22;
 float rg=1.-abs(2.*fbm(p*2.2+w*2.+t*.03)-1.);c+=vec3(.18,.5,.8)*pow(rg,9.)*.16;
 vec2 mp=(m-.5*r)/r.y;c+=vec3(.06,.30,.50)*.10/(.35+length(p-vec2(mp.x,mp.y+s*1.6))*3.);
 c*=1.05;c*=1.-.35*length(uv-.5);
 gl_FragColor=vec4(c,1.);}`;
const mk=(ty,src)=>{const o=gl.createShader(ty);gl.shaderSource(o,src);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))console.warn(gl.getShaderInfoLog(o));return o};
const pr=gl.createProgram();gl.attachShader(pr,mk(gl.VERTEX_SHADER,vs));gl.attachShader(pr,mk(gl.FRAGMENT_SHADER,fs));gl.linkProgram(pr);
if(!gl.getProgramParameter(pr,gl.LINK_STATUS))return fail();
gl.useProgram(pr);const bf=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,bf);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);
const lc=gl.getAttribLocation(pr,'a');gl.enableVertexAttribArray(lc);gl.vertexAttribPointer(lc,2,gl.FLOAT,false,0,0);
const U=k=>gl.getUniformLocation(pr,k),ur=U('r'),um=U('m'),ut=U('t'),us=U('s');
const sc=innerWidth<700?.4:.55;let w=1,h=1,mx=.5,my=.5,tx=.5,ty=.5;
const rs=()=>{w=cv.width=Math.ceil(innerWidth*sc);h=cv.height=Math.ceil(innerHeight*sc);gl.viewport(0,0,w,h)};rs();
const red=matchMedia('(prefers-reduced-motion:reduce)').matches,t0=performance.now();
const draw=now=>{mx+=(tx-mx)*.05;my+=(ty-my)*.05;
 const sp=scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight);
 gl.uniform2f(ur,w,h);gl.uniform2f(um,mx*w,my*h);gl.uniform1f(ut,red?8:(now-t0)/1000);gl.uniform1f(us,sp);
 gl.drawArrays(gl.TRIANGLES,0,3);if(!red)requestAnimationFrame(draw)};
addEventListener('resize',()=>{rs();if(red)draw(0)});addEventListener('mousemove',e=>{tx=e.clientX/innerWidth;ty=1-e.clientY/innerHeight});
if(red)addEventListener('scroll',()=>draw(0),{passive:true});
requestAnimationFrame(draw)})();
const fitH=()=>{const h=$('h1'),ss=$$('.ln span',h);h.style.fontSize='';if(innerWidth<=640)return;let fs=parseFloat(getComputedStyle(h).fontSize);while(ss.some(s=>s.scrollWidth>s.clientWidth+1)&&fs>30){fs-=1;h.style.fontSize=fs+'px'}};
(document.fonts&&document.fonts.ready?document.fonts.ready:Promise.resolve()).then(fitH);addEventListener('resize',fitH);fitH();
})();