export function percentageChange(oldValue,newValue){
 if(!Number.isFinite(oldValue)||!Number.isFinite(newValue)||oldValue<=0||newValue<0)throw new Error('Enter a positive starting value and a nonnegative new value.');
 const difference=newValue-oldValue,percent=difference/oldValue*100;
 if(!Number.isFinite(percent))throw new Error('Those values are outside the supported range.');
 return {difference,percent};
}
export function columnToNumber(value){
 const text=String(value).trim().toUpperCase();
 if(!/^[A-Z]{1,3}$/.test(text))throw new Error('Enter one to three letters from A to XFD.');
 let number=0;for(const char of text)number=number*26+char.charCodeAt(0)-64;
 if(number>16384)throw new Error('This tool supports columns A through XFD (1–16,384).');
 return number;
}
export function numberToColumn(number){
 if(!Number.isInteger(number)||number<1||number>16384)throw new Error('Enter a whole number from 1 to 16,384.');
 let n=number,out='';while(n>0){n--;out=String.fromCharCode(65+n%26)+out;n=Math.floor(n/26)}return out;
}
export function summarizeNumbers(text){
 if(typeof text!=='string'||text.length>100000)throw new Error('Enter no more than 100,000 characters.');
 const lines=text.split(/\r\n|\n|\r/);const values=[];
 for(let i=0;i<lines.length;i++){
  const value=lines[i].trim();if(value==='')continue;
  if(!/^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/.test(value))throw new Error(`Line ${i+1} is not a supported number. Use one decimal-point number per line, without commas or symbols.`);
  const n=Number(value);if(!Number.isFinite(n)||Math.abs(n)>1e12)throw new Error(`Line ${i+1} must be between -1,000,000,000,000 and 1,000,000,000,000.`);
  values.push(n);if(values.length>5000)throw new Error('Enter no more than 5,000 numbers.');
 }
 if(values.length===0)throw new Error('Enter at least one number.');
 let sum=0,compensation=0;for(const n of values){const y=n-compensation;const t=sum+y;compensation=(t-sum)-y;sum=t}
 const sorted=[...values].sort((a,b)=>a-b),mid=Math.floor(sorted.length/2);
 const median=sorted.length%2?sorted[mid]:(sorted[mid-1]+sorted[mid])/2;
 return {count:values.length,sum,mean:sum/values.length,median,min:sorted[0],max:sorted.at(-1),range:sorted.at(-1)-sorted[0]};
}
