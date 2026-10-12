import {$,$$,reduce,folder} from './utils.js';
const B=import.meta.env.BASE_URL;
/* Проекты (концептуальные) */
const P=[
 {id:'residence',name:'RESIDENCE 01',type:'Загородный дом',area:'320 м²',img:['project-residence','project-residence-gallery-1','project-residence-gallery-2'],text:'Двухэтажный объём с консольным вторым этажом, бетоном и тёмным деревом среди берёз.'},
 {id:'courtyard',video:'project-courtyard-loop',name:'COURTYARD 02',type:'Дом с двором',area:'260 м²',img:['project-courtyard','project-courtyard-gallery-1','project-courtyard-gallery-2'],text:'Одноэтажный дом вокруг внутреннего двора с панорамным остеклением и одним деревом в центре.'},
 {id:'horizon',name:'HORIZON 03',type:'Резиденция',area:'380 м²',img:['project-horizon','project-horizon-gallery-1','project-horizon-gallery-2'],text:'Длинная низкая резиденция с тонкой плоской кровлей, раскрытая к горизонту.'}
];
$('#cards').innerHTML=P.map((p,i)=>`<button class="card rv" data-i="${i}" data-t="${p.type}" aria-label="${p.name}: подробнее"><div class="im"><img loading="lazy" src="${B}images/${folder(p.img[0])}/${p.img[0]}-m.webp" srcset="${B}images/${folder(p.img[0])}/${p.img[0]}-m.webp 800w,${B}images/${folder(p.img[0])}/${p.img[0]}.webp 1600w" sizes="(max-width:767px) 100vw,33vw" alt="${p.name}: ${p.type.toLowerCase()}"></div><div class="tx"><span class="num">0${i+1}</span><h3>${p.name}</h3><p>${p.type} · ${p.area}</p><p>Подробнее</p></div></button>`).join('');
$$('#projects .chip').forEach(b=>b.onclick=()=>{$$('#projects .chip').forEach(c=>c.classList.toggle('on',c===b));$$('.card').forEach(c=>c.classList.toggle('hide',b.dataset.f!=='all'&&c.dataset.t!==b.dataset.f))});

/* Модальное окно + галерея */
const M=$('#modal');let cur=0,pi=0,opener=null;
const mv=$('#mVid');
const show=()=>{const p=P[cur],isV=!!p.video&&pi===0;mv.hidden=!isV;$('#mImg').hidden=isV;
 if(isV){mv.poster=`${B}images/${folder(p.img[0])}/${p.img[0]}.webp`;const s=`${B}video/${p.video}.${mv.canPlayType('video/webm')?'webm':'mp4'}`;
  if(!mv.src.endsWith(s.replace(/^\.\//,'')))mv.src=s;if(!reduce)mv.play().catch(()=>{})}
 else{mv.pause();$('#mImg').src=`${B}images/${folder(p.img[pi])}/${p.img[pi]}.webp`;$('#mImg').alt=`${p.name}, фото ${pi+1} из ${p.img.length}`}};
const open=i=>{cur=i;pi=0;opener=document.activeElement;const p=P[i];$('#mTitle').textContent=p.name;$('#mMeta').textContent=`${p.type} · ${p.area}`;$('#mText').textContent=p.text;show();M.hidden=false;document.body.style.overflow='hidden';$('.x',M).focus()};
const close=()=>{mv.pause();M.hidden=true;document.body.style.overflow='';opener&&opener.focus()};
const step=d=>{pi=(pi+d+P[cur].img.length)%P[cur].img.length;show()};
$('#cards').onclick=e=>{const c=e.target.closest('.card');c&&open(+c.dataset.i)};
$('.x',M).onclick=close;$('.pv',M).onclick=()=>step(-1);$('.nx',M).onclick=()=>step(1);M.onclick=e=>{if(e.target===M)close()};
addEventListener('keydown',e=>{if(M.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1);
 if(e.key==='Tab'){const f=$$('button',M),a=f[0],z=f[f.length-1];if(e.shiftKey&&document.activeElement===a){e.preventDefault();z.focus()}else if(!e.shiftKey&&document.activeElement===z){e.preventDefault();a.focus()}}});

