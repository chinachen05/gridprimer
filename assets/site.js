import {percentageChange,columnToNumber,numberToColumn,summarizeNumbers} from './calculations.js';
const pretty = n => { const value=Object.is(n,-0)?0:n; return value!==0 && (Math.abs(value)<1e-7 || Math.abs(value)>=1e16) ? value.toExponential(6) : new Intl.NumberFormat('en-US',{maximumFractionDigits:8}).format(value); };
function setupForm(selector,calculate){
 document.querySelectorAll(selector).forEach(form=>{
  const result=form.querySelector('[data-result]');
  const invalidate=()=>{result.textContent='';result.classList.remove('error')};
  form.addEventListener('input',invalidate);
  form.addEventListener('submit',event=>{
   event.preventDefault();invalidate();
   try{calculate(form,result)}catch(error){result.textContent=error.message;result.classList.add('error')}
  });
 });
}
setupForm('[data-column-letters]',(form,result)=>{
 const letters=form.elements.letters.value.trim().toUpperCase();
 result.textContent=`Column ${letters} is number ${pretty(columnToNumber(letters))}.`;
});
setupForm('[data-column-number]',(form,result)=>{
 const raw=form.elements.number.value.trim();const number=Number(raw);
 if(raw==='')throw new Error('Enter a whole column number.');
 result.textContent=`Column ${pretty(number)} is ${numberToColumn(number)}.`;
});
setupForm('[data-percentage]',(form,result)=>{
 const oldRaw=form.elements.start.value.trim(),newRaw=form.elements.end.value.trim();
 if(oldRaw===''||newRaw==='')throw new Error('Enter both values.');
 const {difference,percent}=percentageChange(Number(oldRaw),Number(newRaw));
 const direction=percent>0?'increase':percent<0?'decrease':'change';
 result.textContent=`${pretty(Math.abs(percent))}% ${direction}. Difference: ${pretty(difference)}. The starting value is the baseline.`;
});
setupForm('[data-summary]',(form,result)=>{
 const values=summarizeNumbers(form.elements.numbers.value);
 const labels=[['Count',values.count],['Sum',values.sum],['Mean',values.mean],['Median',values.median],['Minimum',values.min],['Maximum',values.max],['Range (max − min)',values.range]];
 const dl=document.createElement('dl');for(const [label,value] of labels){const dt=document.createElement('dt'),dd=document.createElement('dd');dt.textContent=label;dd.textContent=pretty(value);dl.append(dt,dd)}result.append(dl);
});
const search=document.querySelector('[data-guide-search]');
if(search){
 const rows=[...document.querySelectorAll('[data-guide]')],groups=[...document.querySelectorAll('[data-guide-group]')];
 const count=document.querySelector('[data-search-count]'),empty=document.querySelector('[data-no-results]');
 const update=()=>{const query=search.value.trim().toLowerCase();let visible=0;for(const row of rows){const match=row.dataset.guide.toLowerCase().includes(query);row.hidden=!match;if(match)visible++}for(const group of groups){group.hidden=!group.querySelector('[data-guide]:not([hidden])')}count.textContent=query?`${visible} of ${rows.length} guides shown`:`${rows.length} guides`;empty.hidden=visible!==0};
 search.addEventListener('input',update);document.querySelectorAll('[data-category-link]').forEach(link=>link.addEventListener('click',()=>{search.value='';update()}));update();
}
