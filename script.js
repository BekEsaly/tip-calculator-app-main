 const bill=document.querySelector('.bill-number');
 const tips=document.querySelectorAll('.tips input');
 const tipsLabel=document.querySelectorAll('.tips label');
 const num=document.querySelector('.people-number');
 var tipsAmount=document.querySelector('.result-1');
 var totalAmount=document.querySelector('.result-2');
 const reset=document.querySelector('.btn');
 
 
 var el;
 tipsLabel.forEach((btn,n) => {
      btn.addEventListener('click', (e)=>{
            e.preventDefault();
              console.log(n);
                el=tips[n].value/100;
      })
});
num.addEventListener('input',(total)=>{
     if (num.value > 0) {
          num.classList.remove('red-border');
         let exp=el*parseFloat(bill.value)/num.value;
          total=(exp*num.value+parseFloat(bill.value))/num.value;
           console.log(total.toFixed(2));
           tipsAmount.innerHTML='$'+exp.toFixed(2);
            totalAmount.innerHTML='$'+total.toFixed(2);
           document.querySelector('.mistake').style.display='none';
     }else{
        document.querySelector('.mistake').style.display='flex';
         num.classList.add('red-border');
          num.value = " ";
    }
      
    });

reset.addEventListener('click', ()=>{
     bill.value=' ';
     num.value=' ';
     tipsAmount.innerHTML='0.00';
      totalAmount.innerHTML='0.00';
})