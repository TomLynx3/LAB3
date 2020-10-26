
const btn_1 = document.getElementById('formula_1');
const btn_2 = document.getElementById("formula_2");
const input = document.getElementById("input")
const calculate = document.getElementById("calculate")
const output = document.getElementById('output')
const span_1 = document.querySelector('.formula_1');
const span_2 = document.querySelector('.formula_2');
const refresh = document.getElementById("refresh");


const state = {
    formula:1
}



function callCalculate(e){
    e.preventDefault()
   const result =  calculateFunc(input.value);
   span_1.style.display = 'none'
   span_2.style.display ='none'
   refresh.style.display='block'
   calculate.style.display='none';
   input.style.display='none'
   output.innerHTML = "Result =" + " " +result


}

const calculateFunc = (value)=>{
   
    if(state.formula === 1){
        return (Math.sqrt(3*value))/(2*value-1);
    }else if (state.formula ===2){
        return (Math.sin(value)+1.5)/(Math.cos(value));
    }
}

function toggle (e){
    e.preventDefault()
    

    if(e.target.id === 'formula_1'){
        span_1.style.display = 'block'
        span_2.style.display ='none'
        state.formula =1;
    }else{
        span_2.style.display ='block'
        span_1.style.display ='none'
        state.formula = 2;
    }

    

}

btn_1.addEventListener('click',toggle);
btn_2.addEventListener('click',toggle);
calculate.addEventListener('click',callCalculate)






