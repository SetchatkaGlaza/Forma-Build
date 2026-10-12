import {$,$$,reduce} from './utils.js';
const EP=import.meta.env.VITE_FORM_ENDPOINT;
const f=$('#lead'),st=$('.status',f),btn=$('button[type=submit]',f);
const setErr=(el,m)=>{const s=el.closest('label').querySelector('.err');s.textContent=m;el.setAttribute('aria-invalid',!!m);return !m};
const toForm=()=>{$('#contact').scrollIntoView({behavior:reduce?'auto':'smooth'});setTimeout(()=>f.elements.name.focus({preventScroll:true}),reduce?0:700)};
$$('[data-type]').forEach(a=>a.onclick=e=>{e.preventDefault();f.elements.type.value=a.dataset.type;toForm()});
document.addEventListener('calc-to-form',e=>{f.elements.msg.value=e.detail.text;f.elements.type.value=e.detail.type;toForm()});
f.addEventListener('input',e=>{if(e.target.getAttribute('aria-invalid')==='true')setErr(e.target,'')});
f.onsubmit=e=>{e.preventDefault();const d=f.elements;
 const okN=setErr(d.name,d.name.value.trim().length<2?'Введите имя (от 2 символов)':'');
 const c=d.contact.value.trim(),isMail=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c),isTel=c.replace(/\D/g,'').length>=10&&/^[+\d\s()\-]+$/.test(c);
 const okC=setErr(d.contact,isMail||isTel?'':'Укажите телефон (от 10 цифр) или email');
 const okA=setErr(d.agree,d.agree.checked?'':'Нужно согласие на обработку данных');
 if(!(okN&&okC&&okA)){st.className='status bad';st.textContent='Проверьте выделенные поля.';f.querySelector('[aria-invalid=true]')?.focus();return}
 btn.disabled=true;btn.textContent='Отправляем…';f.setAttribute('aria-busy','true');st.textContent='';
 const done=(ok,msg,reset)=>{btn.disabled=false;btn.textContent='Обсудить мой проект';f.removeAttribute('aria-busy');st.className='status '+(ok?'ok':'bad');st.textContent=msg;if(reset)f.reset()};
 if(EP){const data=Object.fromEntries(new FormData(f));
  fetch(EP,{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
   .then(r=>{if(!r.ok)throw new Error(r.status);done(true,'Спасибо! Заявка отправлена, мы свяжемся с вами.',true)})
   .catch(()=>done(false,'Не удалось отправить заявку. Позвоните нам или попробуйте позже.',false))}
 else setTimeout(()=>done(true,'Спасибо! В демонстрационной версии заявки не отправляются.',true),reduce?0:700)};
