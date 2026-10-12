import {$,$$,reduce} from './utils.js';
const B=import.meta.env.BASE_URL;
/* Полноэкранный просмотр */
const lb=$('#lb'),li=$('img',lb);let back=null;
const openLb=(src,alt)=>{back=document.activeElement;li.src=src;li.alt=alt||'';lb.hidden=false;$('button',lb).focus()};
const closeLb=()=>{lb.hidden=true;back&&back.focus()};
$('button',lb).onclick=closeLb;lb.onclick=e=>{if(e.target===lb)closeLb()};
addEventListener('keydown',e=>{if(!lb.hidden&&e.key==='Escape'){e.stopImmediatePropagation();closeLb()}},true);
$$('.gal button').forEach(b=>b.onclick=()=>{const i=$('img',b);openLb(B+i.dataset.full,i.alt)});
$('#mImg').onclick=()=>openLb($('#mImg').src,$('#mImg').alt);
