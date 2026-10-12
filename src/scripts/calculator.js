import {$,$$,reduce} from './utils.js';
const fmt=n=>new Intl.NumberFormat('ru-RU').format(Math.round(n/10000)*10000);
let lo=0,hi=0,raf;
const render=(a,b)=>$('#price').textContent=`${fmt(a)} – ${fmt(b)} ₽`;
const calc=()=>{const a=+$('#area').value;$('#areaOut').textContent=a;
 const base=a*70000*$('#cx').value*$('#mat').value*$('#scope').value,tl=base*.9,th=base*1.15;
 if(reduce){lo=tl;hi=th;render(tl,th);return}
 const l0=lo,h0=hi,t0=performance.now();cancelAnimationFrame(raf);
 const tick=t=>{const k=Math.min(1,(t-t0)/450),e=1-Math.pow(1-k,3);lo=l0+(tl-l0)*e;hi=h0+(th-h0)*e;render(lo,hi);if(k<1)raf=requestAnimationFrame(tick)};
 raf=requestAnimationFrame(tick)};
$$('#calc input,#calc select').forEach(el=>el.oninput=calc);calc();
$('#toForm').onclick=()=>{const t=id=>$('#'+id).selectedOptions[0].textContent.toLowerCase();
 document.dispatchEvent(new CustomEvent('calc-to-form',{detail:{type:+$('#scope').value<.5?'Проектирование':'Строительство',
 text:`Предварительный расчёт: ${$('#area').value} м², сложность — ${t('cx')}, материалы — ${t('mat')}, объём — ${t('scope')}. Оценка: ${$('#price').textContent}.`}}))};
