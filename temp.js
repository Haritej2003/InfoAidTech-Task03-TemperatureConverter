function convertTemperature() {
   let cInput = document.querySelector('#celsius input[type="number"]');
   let fInput = document.querySelector('#fahrenheit input[type="number"]');
   let kInput = document.querySelector('#kelvin input[type="number"]');
   let flag=0;
   let checkboxes = document.querySelectorAll('input[name="degree"]');
   let cvalue = cInput.value;
   let fvalue = fInput.value;
   let kvalue = kInput.value;
 
   if (cInput.value != '' && fInput.value == '' && kInput.value == '') {
     for (let i = 0; i < checkboxes.length; i++) {
       if (checkboxes[i].checked) {
        flag=1;
         let check = checkboxes[i].value;
         if (check == 'celsius') {
           cvalue = cInput.value;
         }
         if (check == 'fahrenheit') {
           fvalue = ((cInput.value * 9 / 5) + 32).toFixed(4);
         }
         if (check == 'kelvin') {
           kvalue = (parseInt(cInput.value) + 273.15).toFixed(4);
         }
       }
     }
   } else if (fInput.value != '' && cInput.value == '' && kInput.value == '') {
     for (let i = 0; i < checkboxes.length; i++) {
       if (checkboxes[i].checked) {
        flag=1;
         let check = checkboxes[i].value;
         if (check == 'celsius') {
           cvalue = ((fInput.value - 32) * 5 / 9).toFixed(4);
         }
         if (check == 'fahrenheit') {
           fvalue = fInput.value;
         }
         if (check == 'kelvin') {
           kvalue = ((fInput.value - 32) * 5 / 9 + 273.15).toFixed(4);
         }
       }
     }
   } else if (kInput.value != '' && cInput.value == '' && fInput.value == '') {
     for (let i = 0; i < checkboxes.length; i++) {
       if (checkboxes[i].checked) {
        flag=1;
         let check = checkboxes[i].value;
         if (check == 'celsius') {
           cvalue = (kInput.value - 273.15).toFixed(4);
         }
         if (check == 'fahrenheit') {
           fvalue = ((kInput.value - 273.15) * 9 / 5 + 32).toFixed(4);
         }
         if (check == 'kelvin') {
           kvalue = kInput.value;
         }
       }
     }
   } else {
     alert('Enter temperature to convert');
     return;
   }
   if(flag==0)
   {
    alert('Choose a  temperature to convert');
    return;
   }
 
   document.querySelector('#celsius input[type="number"]').value = cvalue;
   document.querySelector('#fahrenheit input[type="number"]').value = fvalue;
   document.querySelector('#kelvin input[type="number"]').value = kvalue;
 }
 
function clearFields(){
   document.querySelector('#celsius input[type="number"]').value='';
   document.querySelector('#fahrenheit input[type="number"]').value='';
   document.querySelector('#kelvin input[type="number"]').value='';
   let checkboxes = document.querySelectorAll('input[name="degree"]');
   checkboxes.forEach((checkbox) => {
     checkbox.checked = false;
   });
}

 