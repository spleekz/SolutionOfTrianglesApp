window.addEventListener('DOMContentLoaded',function(){
  let calcBtn = document.querySelector('#calc-btn'),
    resetBtn = document.querySelector('#reset-btn'),
    error = document.querySelector('.error'),
    errorText = document.querySelector('.error-text'),
    result = document.querySelector('#result'),
    cornerα = document.querySelector('#corner-α'),
    cornerβ = document.querySelector('#corner-β'),
    cornerγ = document.querySelector('#corner-γ'),
    sideA = document.querySelector('#side-a'),
    sideB = document.querySelector('#side-b'),
    sideC = document.querySelector('#side-c'),
    sideCpr = 0,
    sideApr= 0,
    sideBpr= 0,
    cornerαpr= 0,
    cornerαsin = 0,
    cornerβsin = 0,
    cornerγsin = 0,
    cornerβpr= 0,
    cornerγpr= 0,
    inputs = document.querySelectorAll('.input'),
  
    cornerαResult = document.querySelector('#corner-α-result'),
    cornerβResult = document.querySelector('#corner-β-result'),
    cornerγResult = document.querySelector('#corner-γ-result'),
    sideAResult = document.querySelector('#side-a-result'),
    sideBResult = document.querySelector('#side-b-result'),
    sideCResult = document.querySelector('#side-c-result');
    let i = 0;
    let errCount = 0;
    let errorsub;

    let arrow = document.querySelector('.arrow-img'),
        textBlock = document.querySelector('.how-description'),
        clickCount = 0;

// Анимация стрелки
arrow.addEventListener('click',function(){
  textBlock.classList.toggle('how-description-show');
  clickCount++;
  if(clickCount%2 != 0){
    textBlock.style.borderTop = "1px solid black";
    arrow.style.transform = 'rotate(180deg)';
  }
  else{
    textBlock.style.borderTop = "0px";
    arrow.style.transform = 'rotate(0deg)';
  }
})

calcBtn.addEventListener('click',function(){
  errorsCheck();
  calculateTrinagle();
})

  //Блок инпутов 
  inputs.forEach((item) => {
    item.addEventListener('change',function(event){
          if(event.target.value !==''){
            i++;
            event.target.classList.remove('disable');
            event.target.classList.add('no-disable');
          }
          inputs.forEach((item) => {
            if((item.classList.contains('no-disable'))){
              item.classList.add('no-disable')
            }
            else{
              item.classList.add('disable');
            }
          })
            if(i == 3){
              inputs.forEach((item) => {
                if(item.classList.contains('disable')){
                  item.disabled = true;
                }   
                else if(item.classList.contains('no-disable')){
                  item.disabled = false;
                }
              })
              resetBtn.classList.remove('reset-btn-hide');
              resetBtn.classList.add('reset-btn-show');
              resetBtn.addEventListener('click',function(){
                i=0;
                error.classList.remove('error-show');
                error.classList.add('error-hide');
                result.style.display = 'none';
                sideAResult.innerHTML ='';
                sideBResult.innerHTML ='';
                sideCResult.innerHTML ='';
                cornerαResult.innerHTML ='';
                cornerβResult.innerHTML ='';
                cornerγResult.innerHTML ='';
                sideCpr = 0,
                sideApr = 0,
                sideBpr = 0,
                cornerαpr = 0,
                cornerβpr = 0,
                cornerγpr= 0,
                errCount = 0;
                errCount = 0;
              inputs.forEach((item) => {
                item.classList.remove('disable');
                item.classList.remove('no-disable');
                item.disabled  = false;
              })
              resetBtn.classList.remove('reset-btn-show');
              resetBtn.classList.add('reset-btn-hide');
              })
            }
          })
        })
        
  

      // Проверка на ошибки 
      function errorsCheck(){

        if(((isNaN(cornerα.value))&&cornerα.value!=undefined) || ((isNaN(cornerβ.value))&&cornerβ.value!=undefined) || ((isNaN(cornerγ.value))&&cornerγ.value!=undefined)  || ((isNaN(sideA.value))&&sideA.value!=undefined) || ((isNaN(sideB.value))&&sideB.value!=undefined)  || ((isNaN(sideC.value))&&sideC.value!=undefined)){
          errorsub = 'Используйте только цифры';
          errCount++;
        }
        else if(cornerα.value == ''&&cornerβ.value == ''&& cornerγ.value == ''&&sideA.value == ''&&sideB.value == ''&&sideC.value == ''){
          errorsub = 'Вы не заполнили ни одно поле';
          errCount++;
        }
        else if(+cornerα.value<0||+cornerβ.value<0||+cornerγ.value<0||+sideA.value<0||+sideB.value<0||+sideC.value<0){
          errorsub = 'Заначения не могут быть отрицательными';
          errCount++;
        }
        else if(i<3){
          errorsub = 'Недостаточно данных';
          errCount++;
        }
        else if(cornerα.value!=''&&cornerβ.value!=''&&cornerγ.value!=''){
          let cornerSum;
          cornerSum = +cornerα.value + +cornerβ.value + +cornerγ.value;
          if(cornerSum > 180){
            errorsub = 'Сумма углов треугольника не может быть больше 180°';
            errCount++;
          }
          else if(cornerSum < 180 &&(sideA.value == ''&&sideB.value == ''&&sideC.value == '')&&(cornerα.value != ''&&cornerβ.value != ''&& cornerγ.value != '')){
            errorsub = 'Сумма углов треугольника не может быть меньше 180°';
            errCount++;
          }
          else if((cornerα.value!==''&&cornerβ.value!==''&&cornerγ.value!==''&&cornerSum==180)&&(sideA.value==''&&sideB.value==''&&sideC.value=='')){
            errorsub = 'Трёх углов не достаточно для решения треугольника';
            errCount++;
          }
        }
        else if(((+cornerα.value+ +cornerβ.value>=180)||(+cornerβ.value+ +cornerγ.value>=180)||(+cornerγ.value + +cornerα.value>=180))){
          errorsub = 'Сумма углов треугольника не может быть больше 180°';
          errCount++;
        }
        else if((sideA.value==0&&sideA.value!=='')||(sideB.value==0&&sideB.value!=='')||(sideC.value==0&&sideC.value!=='')||(cornerα.value==0&&cornerα.value!=='')||(cornerβ.value==0&&cornerβ.value!=='')||(cornerγ.value==0&&cornerγ.value!=='')){
          errorsub = 'Значения не могут быть равны 0';
          errCount++;
        }
        else if(cornerα.value == ''&&cornerβ.value == ''&& cornerγ.value == ''&&sideA.value == ''&&sideB.value == ''&&sideC.value == ''&&cornerSum < 180){
          errorsub = 'Вы не заполнили ни одно поле';
          errCount++;
        }
        else if(+cornerα.value == 180||+cornerβ.value == 180||+cornerγ.value == 180){
          errorsub = 'Угол треугольника не может быть равен 180°';
          errCount++;
        }
        else if((+sideA.value > +sideB.value + +sideC.value || +sideB.value > +sideA.value + +sideC.value || +sideC.value > +sideA.value + +sideB.value) && (sideA.value != ''&&sideB.value != ''&&sideC.value != '')){
          errorsub = 'Сторона треугольника не может быть больше суммы двух других сторон';
          errCount++;
        }
        if(errCount==0){
          result.style.display = 'block';
          error.classList.remove('error-show');
          error.classList.add('error-hide');
        }
        else if(errCount > 0){
          result.style.display = 'none';
          error.classList.remove('error-hide');
          error.classList.add('error-show');
          errorText.innerHTML = errorsub;
          resetBtn.classList.remove('reset-btn-hide');
          resetBtn.classList.add('reset-btn-show');
          resetBtn.addEventListener('click',function(){
            i=0;
            error.classList.remove('error-show');
            error.classList.add('error-hide');
            result.style.display = 'none';
            sideAResult.innerHTML ='';
            sideBResult.innerHTML ='';
            sideCResult.innerHTML ='';
            cornerαResult.innerHTML ='';
            cornerβResult.innerHTML ='';
            cornerγResult.innerHTML ='';
            sideCpr = 0,
            sideApr = 0,
            sideBpr = 0,
            cornerαpr = 0,
            cornerβpr = 0,
            cornerγpr = 0,
            errCount = 0;
            errCount = 0;
          inputs.forEach((item) => {
            item.classList.remove('disable');
            item.classList.remove('no-disable');
            item.disabled  = false;
          })
          resetBtn.classList.remove('reset-btn-show');
          resetBtn.classList.add('reset-btn-hide');
          })
          
        }
      }
    function calculateTrinagle(){
      if(errCount==0&&(cornerα.value!==''||cornerβ.value!==''||cornerγ.value!==''||sideA.value!==''||sideB.value!==''||sideC.value!=='')){
    // Решение по 3 сторонам
    if(sideA.value!==''&&sideB.value!==''&&sideC.value!==''){
      let cosα,
          cosβ;
      cosα = ((Math.pow(sideB.value,2))+(Math.pow(sideC.value,2))-(Math.pow(sideA.value,2)))/(2*sideC.value*sideB.value);
      cosβ = ((Math.pow(sideB.value,2))+(Math.pow(sideA.value,2))-(Math.pow(sideC.value,2)))/(2*sideA.value*sideB.value);
      sideAResult.innerHTML = (+sideA.value).toFixed(1);
      sideBResult.innerHTML = (+sideB.value).toFixed(1);
      sideCResult.innerHTML = (+sideC.value).toFixed(1);
      cornerαpr = ((Math.acos(cosα)*180)/Math.PI).toFixed(1)
      cornerβpr = ((Math.acos(cosβ)*180)/Math.PI).toFixed(1);
      cornerγpr = (180 - cornerαpr - cornerβpr).toFixed(1)
      cornerαResult.innerHTML = cornerαpr+'°';
      cornerβResult.innerHTML = cornerβpr+'°';
      cornerγResult.innerHTML = cornerγpr+'°';
    }
    //Решение по двум сторонам и углу МЕЖДУ НИМИ
    // (1)
     else if(sideA.value!==''&&sideB.value!==''&&cornerγ.value!==''){
      cosγ = (Math.cos(((cornerγ.value*Math.PI)/180)));
      sideCpr = (Math.sqrt(Math.pow(sideA.value,2)+Math.pow(sideB.value,2)-2*sideA.value*sideB.value*cosγ));
      cosα = ((Math.pow(sideB.value,2))+(Math.pow(sideCpr,2))-(Math.pow(sideA.value,2)))/(2*sideCpr*sideB.value);
      sideAResult.innerHTML = (+sideA.value).toFixed(1);
      sideBResult.innerHTML = (+sideB.value).toFixed(1);
      sideCResult.innerHTML = (+sideCpr).toFixed(1);
      cornerαpr = ((Math.acos(cosα)*180)/Math.PI).toFixed(1)
      cornerβpr = (180-(+(((Math.acos(cosα)*180)/Math.PI))+(+(cornerγ.value)))).toFixed(1);
      cornerαResult.innerHTML = cornerαpr+'°';
      cornerβResult.innerHTML = cornerβpr+'°';
      cornerγResult.innerHTML = (+cornerγ.value).toFixed(1)+'°';
    }
    // (2)
     else if(sideB.value!==''&&sideC.value!==''&&cornerα.value!==''){
      cosα = (Math.cos(((cornerα.value*Math.PI)/180)));
      sideApr =(Math.sqrt(Math.pow(sideB.value,2)+Math.pow(sideC.value,2)-2*sideB.value*sideC.value*cosα));
      cosγ = ((Math.pow(sideApr,2))+(Math.pow(sideB.value,2))-(Math.pow(sideC.value,2)))/(2*sideApr*sideB.value);
      sideAResult.innerHTML = (+sideApr).toFixed(1);
      sideBResult.innerHTML = (+sideB.value).toFixed(1);
      sideCResult.innerHTML = (+sideC.value).toFixed(1);
      cornerβpr = (180-(+(((Math.acos(cosγ)*180)/Math.PI))+(+(cornerα.value)))).toFixed(1);
      cornerγpr = ((Math.acos(cosγ)*180)/Math.PI).toFixed(1);
      cornerαResult.innerHTML = (+cornerα.value).toFixed(1)+'°';
      cornerβResult.innerHTML = cornerβpr+'°';
      cornerγResult.innerHTML = cornerγpr+'°';
    }
    // (3)
     else if(sideA.value!==''&&sideC.value!==''&&cornerβ.value!==''){
      cosβ = (Math.cos(((cornerβ.value*Math.PI)/180)));
      sideBpr = (Math.sqrt(Math.pow(sideA.value,2)+Math.pow(sideC.value,2)-2*sideA.value*sideC.value*cosβ));
      cosγ = ((Math.pow(sideA.value,2))+(Math.pow(sideBpr,2))-(Math.pow(sideC.value,2)))/(2*sideA.value*sideBpr);
      cornerαpr = (180-(+(((Math.acos(cosγ)*180)/Math.PI))+(+(cornerβ.value)))).toFixed(1);
      cornerγpr = ((Math.acos(cosγ)*180)/Math.PI).toFixed(1);
      sideAResult.innerHTML = (+sideA.value).toFixed(1);
      sideBResult.innerHTML = (+sideBpr).toFixed(1);
      sideCResult.innerHTML = (+sideC.value).toFixed(1);
      cornerαResult.innerHTML = cornerαpr+'°';
      cornerβResult.innerHTML = (+cornerβ.value).toFixed(1)+'°';
      cornerγResult.innerHTML = cornerγpr+'°';
    }
    //Решение по стороне и двум углам
    // (1)
    else if(sideA.value!==''&& cornerγ.value!==''&&cornerβ.value!==''){
      cornerαpr = 180 - cornerβ.value - cornerγ.value;
      if(+cornerγ.value>90){
        cornerγsin = ((180-cornerγ.value)*Math.PI)/180;
      }
      else{
        cornerγsin = ((cornerγ.value)*Math.PI)/180;
      }
      if(+cornerβ.value>90){
        cornerβpr = ((180- +cornerβ.value)*Math.PI)/180;;
      }
      else{
        cornerβpr = ((cornerβ.value)*Math.PI)/180;
      }
      if(+cornerαpr>90){
        cornerαsin = ((180-cornerαpr)*Math.PI)/180;
      }
      else{
        cornerαsin = ((cornerαpr)*Math.PI)/180;
      }
      sinα = cornerαsin - (Math.pow(cornerαsin,3)/6);
      sinβ = cornerβpr - (Math.pow(cornerβpr,3)/6);
      sinγ = cornerγsin - (Math.pow(cornerγsin,3)/6);
      sideAResult.innerHTML = (+sideA.value).toFixed(1);
      sideBpr = (sideA.value*(sinβ/sinα)).toFixed(1);
      sideCpr = (sideA.value*(sinγ/sinα)).toFixed(1);
      sideBResult.innerHTML = sideBpr;
      sideCResult.innerHTML = sideCpr;
      cornerαResult.innerHTML = (+cornerαpr).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβ.value).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγ.value).toFixed(1)+'°';
    }
    // (2)
    else if(sideC.value!==''&& cornerα.value!==''&&cornerβ.value!==''){
      cornerγpr = 180 - cornerβ.value - cornerα.value;
      if(+cornerγpr>90){
        cornerγsin = ((180-cornerγpr)*Math.PI)/180;
      }
      else{
        cornerγsin = ((cornerγpr)*Math.PI)/180;
      }
      if(+cornerβ.value>90){
        cornerβpr = ((180- +cornerβ.value)*Math.PI)/180;;
      }
      else{
        cornerβpr = ((cornerβ.value)*Math.PI)/180;
      }
      if(+cornerα.value>90){
        cornerαsin = ((180-cornerα.value)*Math.PI)/180;
      }
      else{
        cornerαsin = ((cornerα.value)*Math.PI)/180;
      }
      sinα = cornerαsin - (Math.pow(cornerαsin,3)/6);
      sinβ = cornerβpr - (Math.pow(cornerβpr,3)/6);
      sinγ = cornerγsin - (Math.pow(cornerγsin,3)/6);
      sideApr =(sideC.value*(sinα/sinγ)).toFixed(1);
      sideBpr = (sideC.value*(sinβ/sinγ)).toFixed(1)
      sideAResult.innerHTML = sideApr;
      sideBResult.innerHTML = sideBpr;
      sideCResult.innerHTML = (+sideC.value).toFixed(1);
      cornerαResult.innerHTML = (+cornerα.value).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβ.value).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγpr).toFixed(1)+'°';
    }
    // (3)
    else if(sideB.value!==''&& cornerα.value!==''&&cornerγ.value!==''){
      cornerβpr = 180- cornerα.value - cornerγ.value;
      if(+cornerγ.value>90){
        cornerγsin = ((180- +cornerγ.value)*Math.PI)/180;
      }
      else{
        cornerγsin = ((cornerγ.value)*Math.PI)/180;
      }
      if(+cornerβpr>90){
        cornerβsin = ((180- +cornerβpr)*Math.PI)/180;
      }
      else{
        cornerβsin = ((cornerβpr)*Math.PI)/180;
      }
      if(+cornerα.value>90){
        cornerαsin = ((180-cornerα.value)*Math.PI)/180;
      }
      else{
        cornerαsin = ((cornerα.value)*Math.PI)/180;
      }
      sinα = cornerαsin - (Math.pow(cornerαsin,3)/6);
      sinβ = cornerβsin - (Math.pow(cornerβsin,3)/6);
      sinγ = cornerγsin - (Math.pow(cornerγsin,3)/6);
      sideApr = (+sideB.value*(sinα/sinβ)).toFixed(1);
      sideCpr = (+sideB.value*(sinγ/sinβ)).toFixed(1);
      sideAResult.innerHTML = sideApr;
      sideBResult.innerHTML = (+sideB.value).toFixed(1);
      sideCResult.innerHTML = sideCpr;
      cornerαResult.innerHTML = (+cornerα.value).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβpr).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγ.value).toFixed(1)+'°';
    }
    // (4)
    else if(sideA.value!==''&& cornerα.value!==''&&cornerβ.value!==''){
      cornerγpr = 180 - cornerβ.value - cornerα.value;
      if(+cornerγpr>90){
        cornerγsin = ((180- +cornerγpr)*Math.PI)/180;
      }
      else{
        cornerγsin = ((cornerγpr)*Math.PI)/180;
      }
      if(+cornerβ.value>90){
        cornerβsin = ((180- +cornerβ.value)*Math.PI)/180;
      }
      else{
        cornerβsin = ((cornerβ.value)*Math.PI)/180;
      }
      if(+cornerα.value>90){
        cornerαsin = ((180-cornerα.value)*Math.PI)/180;
      }
      else{
        cornerαsin = ((cornerα.value)*Math.PI)/180;
      }
      sinα = cornerαsin - (Math.pow(cornerαsin,3)/6);
      sinβ = cornerβsin - (Math.pow(cornerβsin,3)/6);
      sinγ = cornerγsin - (Math.pow(cornerγsin,3)/6);
      sideBpr = (+sideA.value*(sinβ/sinα)).toFixed(1);
      sideCpr = (+sideA.value*(sinγ/sinα)).toFixed(1);
      sideAResult.innerHTML = (+sideA.value).toFixed(1);
      sideBResult.innerHTML = sideBpr;
      sideCResult.innerHTML = sideCpr;
      cornerαResult.innerHTML = (+cornerα.value).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβ.value).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγpr).toFixed(1)+'°';
    }
    // (5)
    else if(sideA.value!==''&& cornerα.value!==''&&cornerγ.value!==''){
      cornerβpr = 180 - cornerγ.value - cornerα.value;
      if(+cornerγ.value>90){
        cornerγsin = ((180- +cornerγ.value)*Math.PI)/180;
      }
      else{
        cornerγsin = ((cornerγ.value)*Math.PI)/180;
      }
      if(+cornerβpr>90){
        cornerβsin = ((180- +cornerβpr)*Math.PI)/180;
      }
      else{
        cornerβsin = ((cornerβpr)*Math.PI)/180;
      }
      if(+cornerα.value>90){
        cornerαsin = ((180-cornerα.value)*Math.PI)/180;
      }
      else{
        cornerαsin = ((cornerα.value)*Math.PI)/180;
      }
      sinα = cornerαsin - (Math.pow(cornerαsin,3)/6);
      sinβ = cornerβsin - (Math.pow(cornerβsin,3)/6);
      sinγ = cornerγsin - (Math.pow(cornerγsin,3)/6);
      sideBpr = (sideA.value*(sinβ/sinα)).toFixed(1);
      sideCpr = (sideA.value*(sinγ/sinα)).toFixed(1);
      sideAResult.innerHTML = (+sideA.value).toFixed(1);
      sideBResult.innerHTML = sideBpr;
      sideCResult.innerHTML = sideCpr;
      cornerαResult.innerHTML = (+cornerα.value).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβpr).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγ.value).toFixed(1)+'°';
    }
    // (6)
    else if(sideB.value!==''&& cornerβ.value!==''&&cornerγ.value!==''){
      cornerαpr = 180 - cornerγ.value - cornerβ.value;
      if(+cornerγ.value>90){
        cornerγsin = ((180- +cornerγ.value)*Math.PI)/180;
      }
      else{
        cornerγsin = ((cornerγ.value)*Math.PI)/180;
      }
      if(+cornerβ.value>90){
        cornerβsin = ((180- +cornerβ.value)*Math.PI)/180;
      }
      else{
        cornerβsin = ((cornerβ.value)*Math.PI)/180;
      }
      if(+cornerαpr>90){
        cornerαsin = ((180-cornerαpr)*Math.PI)/180;
      }
      else{
        cornerαsin = ((cornerαpr)*Math.PI)/180;
      }
      sinα = cornerαsin - (Math.pow(cornerαsin,3)/6);
      sinβ = cornerβsin - (Math.pow(cornerβsin,3)/6);
      sinγ = cornerγsin - (Math.pow(cornerγsin,3)/6);
      sideApr = (+sideB.value*(sinα/sinβ)).toFixed(1);
      sideCpr = (+sideB.value*(sinγ/sinβ)).toFixed(1);
      sideAResult.innerHTML = sideApr;
      sideBResult.innerHTML = (+sideB.value).toFixed(1);
      sideCResult.innerHTML = sideCpr;
      cornerαResult.innerHTML = (+cornerαpr).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβ.value).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγ.value).toFixed(1)+'°';
    }
    // (7)
    else if(sideB.value!==''&& cornerβ.value!==''&&cornerα.value!==''){
      cornerγpr = 180 - cornerα.value - cornerβ.value;
      if(+cornerγpr>90){
        cornerγsin = ((180- +cornerγpr)*Math.PI)/180;
      }
      else{
        cornerγsin = ((cornerγpr)*Math.PI)/180;
      }
      if(+cornerβ.value>90){
        cornerβsin = ((180- +cornerβ.value)*Math.PI)/180;
      }
      else{
        cornerβsin = ((cornerβ.value)*Math.PI)/180;
      }
      if(+cornerα.value>90){
        cornerαsin = ((180-cornerα.value)*Math.PI)/180;
      }
      else{
        cornerαsin = ((cornerα.value)*Math.PI)/180;
      }
      sinα = cornerαsin - (Math.pow(cornerαsin,3)/6);
      sinβ = cornerβsin - (Math.pow(cornerβsin,3)/6);
      sinγ = cornerγsin - (Math.pow(cornerγsin,3)/6);
      sideApr = (+sideB.value*(sinα/sinβ)).toFixed(1);
      sideCpr = (+sideB.value*(sinγ/sinβ)).toFixed(1);
      sideAResult.innerHTML = sideApr;
      sideBResult.innerHTML = (+sideB.value).toFixed(1);
      sideCResult.innerHTML = sideCpr;
      cornerαResult.innerHTML = (+cornerα.value).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβ.value).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγpr).toFixed(1)+'°';
    }
    // (8)
    else if(sideC.value!==''&& cornerγ.value!==''&&cornerα.value!==''){
      cornerβpr = 180 - cornerα.value - cornerγ.value;
      if(+cornerγ.value>90){
        cornerγsin = ((180- +cornerγ.value)*Math.PI)/180;
      }
      else{
        cornerγsin = ((cornerγ.value)*Math.PI)/180;
      }
      if(+cornerβpr>90){
        cornerβsin = ((180- +cornerβpr)*Math.PI)/180;
      }
      else{
        cornerβsin = ((cornerβpr)*Math.PI)/180;
      }
      if(+cornerα.value>90){
        cornerαsin = ((180-cornerα.value)*Math.PI)/180;
      }
      else{
        cornerαsin = ((cornerα.value)*Math.PI)/180;
      }
      sinα = cornerαsin - (Math.pow(cornerαsin,3)/6);
      sinβ = cornerβsin - (Math.pow(cornerβsin,3)/6);
      sinγ = cornerγsin - (Math.pow(cornerγsin,3)/6);
      sideApr = (+sideC.value*(sinα/sinγ)).toFixed(1);
      sideBpr = (+sideC.value*(sinβ/sinγ)).toFixed(1);
      sideAResult.innerHTML = sideApr;
      sideBResult.innerHTML = sideBpr;
      sideCResult.innerHTML = (+sideC.value).toFixed(1);
      cornerαResult.innerHTML = (+cornerα.value).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβpr).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγ.value).toFixed(1)+'°';
    }
    // (9)
    else if(sideC.value!==''&& cornerγ.value!==''&&cornerβ.value!==''){
      cornerαpr = 180 - cornerβ.value - cornerγ.value;
      if(+cornerγ.value>90){
        cornerγsin = ((180- +cornerγ.value)*Math.PI)/180;
      }
      else{
        cornerγsin = ((cornerγ.value)*Math.PI)/180;
      }
      if(+cornerβ.value>90){
        cornerβsin = ((180- +cornerβ.value)*Math.PI)/180;
      }
      else{
        cornerβsin = ((cornerβ.value)*Math.PI)/180;
      }
      if(+cornerαpr>90){
        cornerαsin = ((180-cornerαpr)*Math.PI)/180;
      }
      else{
        cornerαsin = ((cornerαpr)*Math.PI)/180;
      }
      sinα = cornerαsin - (Math.pow(cornerαsin,3)/6);
      sinβ = cornerβsin - (Math.pow(cornerβsin,3)/6);
      sinγ = cornerγsin - (Math.pow(cornerγsin,3)/6);
      sideApr = (+sideC.value*(sinα/sinγ)).toFixed(1);
      sideBpr = (+sideC.value*(sinβ/sinγ)).toFixed(1);
      sideAResult.innerHTML = sideApr;
      sideBResult.innerHTML = sideBpr;
      sideCResult.innerHTML = (+sideC.value).toFixed(1);
      cornerαResult.innerHTML = (+cornerαpr).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβ.value).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγ.value).toFixed(1)+'°';
    }
    // Решение по двум сторонам и углу НЕ МЕЖДУ НИМИ
    // (1)
    else if(sideA.value!=='' && sideB.value!=='' && cornerβ.value!==''){
      if(+cornerβ.value>90){
        cornerβsin = ((180-cornerβ.value)*Math.PI)/180;
      }
      else{
        cornerβsin = (cornerβ.value*Math.PI)/180;
      }
      sinβ = (cornerβsin - (Math.pow(cornerβsin,3)/6));
      sinα = (sinβ*sideA.value)/sideB.value;
      cornerαpr = ((Math.asin(sinα)*180/Math.PI));
      cornerγpr = 180 - cornerαpr - (+cornerβ.value);
      if( +cornerγpr>90){
        cornerγsin = ((180- +cornerγpr)*Math.PI)/180;
      }
      else{
        cornerγsin = ((cornerγpr)*Math.PI)/180;
      }
      sinγ = cornerγsin - (Math.pow(cornerγsin,3)/6);
      sideCpr = (+sideA.value*(sinγ/sinα)).toFixed(1);
      sideAResult.innerHTML = (+sideA.value).toFixed(1);
      sideBResult.innerHTML = (+sideB.value).toFixed(1);
      sideCResult.innerHTML = sideCpr;
      cornerαResult.innerHTML = (+cornerαpr).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβ.value).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγpr).toFixed(1)+'°';
    }
    // (2)
    else if(sideA.value!=='' && sideB.value!=='' && cornerα.value!==''){
      if(+cornerα.value>90){
        cornerαsin = ((180-cornerα.value)*Math.PI)/180;
      }
      else{
        cornerαsin = (cornerα.value*Math.PI)/180;
      }
      sinα = (cornerαsin - (Math.pow(cornerαsin,3)/6));
      sinβ= (sinα*sideB.value)/sideA.value;
      cornerβpr = ((Math.asin(sinβ)*180/Math.PI));    //
      cornerγpr = 180 - cornerβpr - (+cornerα.value);
      if( +cornerγpr>90){
        cornerγsin = ((180- +cornerγpr)*Math.PI)/180;
      }
      else{
        cornerγsin = ((cornerγpr)*Math.PI)/180;
      }
      sinγ = cornerγsin - (Math.pow(cornerγsin,3)/6);
      sideCpr = (+sideA.value*(sinγ/sinα)).toFixed(1);
      sideAResult.innerHTML = (+sideA.value).toFixed(1);
      sideBResult.innerHTML = (+sideB.value).toFixed(1);
      sideCResult.innerHTML = sideCpr;
      cornerαResult.innerHTML = (+cornerα.value).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβpr).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγpr).toFixed(1)+'°';
    }
    // (3)
    else if(sideB.value!=='' && sideC.value!=='' && cornerβ.value!==''){
      if(+cornerβ.value>90){
        cornerβsin = ((180-cornerβ.value)*Math.PI)/180;
      }
      else{
        cornerβsin = (cornerβ.value*Math.PI)/180;
      }
      sinβ = (cornerβsin - (Math.pow(cornerβsin,3)/6));
      sinγ= (sinβ*sideC.value)/sideB.value;
      cornerγpr = (Math.asin(sinγ)*180/Math.PI);
      cornerαpr = 180 - cornerγpr - (+cornerβ.value);
      if( +cornerαpr>90){
        cornerαsin = ((180- +cornerαpr)*Math.PI)/180;
      }
      else{
        cornerαsin = ((cornerαpr)*Math.PI)/180;
      }
      sinα = cornerαsin - (Math.pow(cornerαsin,3)/6);
      sideApr = (+sideB.value*(sinα/sinβ)).toFixed(1);
      sideAResult.innerHTML = sideApr;
      sideBResult.innerHTML = (+sideB.value).toFixed(1);
      sideCResult.innerHTML = (+sideC.value).toFixed(1);
      cornerαResult.innerHTML = (+cornerαpr).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβ.value).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγpr).toFixed(1)+'°';
    }
    // (4)
    else if(sideB.value!=='' && sideC.value!=='' && cornerγ.value!==''){
      if(+cornerγ.value>90){
        cornerγsin= ((180-cornerγ.value)*Math.PI)/180;
      }
      else{
        cornerγsin = (cornerγ.value*Math.PI)/180;
      }
      sinγ = (cornerγsin - (Math.pow(cornerγsin,3)/6));
      sinβ= (sinγ*sideB.value)/sideC.value;
      cornerβpr = (Math.asin(sinβ)*180/Math.PI);
      cornerαpr = 180 - cornerγ.value - (+cornerβpr);
      if( +cornerαpr>90){
        cornerαsin = ((180- +cornerαpr)*Math.PI)/180;
      }
      else{
        cornerαsin = ((cornerαpr)*Math.PI)/180;
      }
      sinα = cornerαsin - (Math.pow(cornerαsin,3)/6);
      sideApr = (+sideC.value*(sinα/sinγ)).toFixed(1);
      sideAResult.innerHTML = sideApr;
      sideBResult.innerHTML = (+sideB.value).toFixed(1);
      sideCResult.innerHTML = (+sideC.value).toFixed(1);
      cornerαResult.innerHTML = (+cornerαpr).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβpr).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγ.value).toFixed(1)+'°';
    }
    // (5)
    else if(sideA.value!=='' && sideC.value!=='' && cornerγ.value!==''){
      if(+cornerγ.value>90){
        cornerγsin= ((180-cornerγ.value)*Math.PI)/180;
      }
      else{
        cornerγsin = (cornerγ.value*Math.PI)/180;
      }
      sinγ = (cornerγsin - (Math.pow(cornerγsin,3)/6));
      sinα= (sinγ*sideA.value)/sideC.value;
      cornerαpr = (Math.asin(sinα)*180/Math.PI);
      cornerβpr = 180 - cornerγ.value - (+cornerαpr);
      if( +cornerβpr>90){
        cornerβsin = ((180- +cornerβpr)*Math.PI)/180;
      }
      else{
        cornerβsin = ((cornerβpr)*Math.PI)/180;
      }
      sinβ = cornerβsin - (Math.pow(cornerβsin,3)/6);
      sideBpr = (+sideC.value*(sinβ/sinγ)).toFixed(1);
      sideAResult.innerHTML = (+sideA.value).toFixed(1);
      sideBResult.innerHTML = sideBpr;
      sideCResult.innerHTML = (+sideC.value).toFixed(1);
      cornerαResult.innerHTML = (+cornerαpr).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβpr).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγ.value).toFixed(1)+'°';
    }
    // (6)
    else if(sideA.value!=='' && sideC.value!=='' && cornerα.value!==''){
      if(+cornerα.value>90){
        cornerαsin = ((180-cornerα.value)*Math.PI)/180;
      }
      else{
        cornerαsin = (cornerα.value*Math.PI)/180;
      }
      sinα = (cornerαsin - (Math.pow(cornerαsin,3)/6));
      sinγ= (sinα*sideC.value)/sideA.value;
      cornerγpr = (Math.asin(sinγ)*180/Math.PI);
      cornerβpr = 180 - cornerγpr - (+cornerα.value);
      if( +cornerβpr>90){
        cornerβsin = ((180- +cornerβpr)*Math.PI)/180;
      }
      else{
        cornerβsin = ((cornerβpr)*Math.PI)/180;
      }
      sinβ = cornerβsin - (Math.pow(cornerβsin,3)/6);
      sideBpr = (+sideA.value*(sinβ/sinα)).toFixed(1);
      sideAResult.innerHTML = (+sideA.value).toFixed(1);
      sideBResult.innerHTML = sideBpr;
      sideCResult.innerHTML = (+sideC.value).toFixed(1);
      cornerαResult.innerHTML = (+cornerα.value).toFixed(1)+'°';
      cornerβResult.innerHTML = (+cornerβpr).toFixed(1)+'°';
      cornerγResult.innerHTML = (+cornerγpr).toFixed(1)+'°';
    }
    if(
      sideApr == 'NaN' ||sideBpr== 'NaN' ||sideCpr== 'NaN'||cornerαpr == 'NaN' ||cornerβpr == 'NaN' || cornerγpr == 'NaN'||
      (sideApr <= 0&&sideA.value =="" )|| (sideBpr <= 0&&sideB.value =="" )|| (sideCpr <= 0&&sideC.value =="")|(cornerαpr <= 0 && cornerα.value == '') ||(cornerβpr <= 0 && cornerβ.value == '') || (cornerγpr <= 0 && cornerγ.value == '')||
      sideApr == Infinity ||sideBpr == Infinity ||sideCpr == Infinity||cornerαpr  == Infinity ||cornerβpr  == Infinity || cornerγpr  == Infinity||
      sideApr == -Infinity ||sideBpr == -Infinity ||sideCpr == -Infinity||cornerαpr  == -Infinity ||cornerβpr  == -Infinity || cornerγpr  == -Infinity){
        result.style.display = 'none';
        error.classList.remove('error-hide');
        error.classList.add('error-show');
        errorText.innerHTML = 'Треугольник не может иметь такие значения';
        resetBtn.classList.remove('reset-btn-hide');
        resetBtn.classList.add('reset-btn-show');
      }
    }
  }
})