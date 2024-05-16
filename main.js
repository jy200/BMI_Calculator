var checkbox = document.getElementById('switchMeasure');
const measure1 = document.querySelector('.defaultMeasure');
const measure2 = document.querySelector('.altMeasure');
const submit = document.getElementById('submitBox');
const BMI_info = document.querySelector('.BMI-container')
const BMI_num = document.getElementById('BMI-number');

checkbox.addEventListener('change', ()=>{
    validateSwitchMeasure();
});

submit.addEventListener('click', ()=>{
    outputBMI();
});

function validateSwitchMeasure(){
    if (checkbox.checked){
        measure1.style.display ='none';
        measure2.style.display = 'block';
    }else{
        measure2.style.display ='none';
        measure1.style.display = 'block';
    }
};

function outputBMI(){
    if (checkbox.checked){
        const weight = measure2.children[1].children[0].value;
        const height = measure2.children[0].children[0].value;
        if (!weight || !height){
            alert("Please enter your measurements");
            return;
        }
        let result = parseInt(weight) / (parseInt(height) /100) **2;
        BMI_num.textContent = result.toFixed(1);
        BMI_info.style.display='flex';
        //weight (kg) / [height (m)]^2
    }else{
        // console.log(measure1.children[1].children);
        const weight = measure1.children[1].children[0].value;
        const height = measure1.children[0].children;
        const feet = height[0].value;
        const inches = height[1].value;
        if (!weight || !feet || !inches){
            alert("Please enter your measurements");
            return;
        }
        let result = (parseInt(weight) / (parseInt(feet) * 12 + parseInt(inches)) **2) *703;
        BMI_num.textContent = result.toFixed(1);
        BMI_info.style.display='flex';

        //weight (lb) / [height (in)]^2 x 703
    }
}