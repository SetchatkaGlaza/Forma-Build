import {$,$$,reduce} from './utils.js';
/* Плавное появление со ступенчатой задержкой */
$$('.band-in>*,.sec h2,.lead2,.split>div>p,.principles li,.svc,.adv li,.steps li,.grid3 figure,details,.gal button,.calc,.lead-form,.tabs,.mat-panel').forEach(el=>el.classList.add('rv'));
$$('.ph,.svc img,figure img,.mat-panel img').forEach(el=>el.classList.add('rvi'));
$$('.rv').forEach(el=>{const i=[...el.parentElement.children].indexOf(el);el.style.setProperty('--d',Math.min(i,6)*.09+'s')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target;el.classList.add('in');io.unobserve(el);setTimeout(()=>el.style.setProperty('--d','0s'),1400)}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
$$('.rv,.rvi').forEach(el=>io.observe(el));
/* Видео в Hero */
const v=$('.bgvid');if(v){v.addEventListener('playing',()=>v.classList.add('ready'));if(reduce)v.pause()}
/* Видео играет только в зоне видимости */
const vio=new IntersectionObserver(es=>es.forEach(e=>{const v=e.target;if(reduce||document.hidden){v.pause();return}e.isIntersecting?v.play().catch(()=>{}):v.pause()}),{threshold:.2});
$$('.bandvid,.bgvid').forEach(v=>vio.observe(v));
