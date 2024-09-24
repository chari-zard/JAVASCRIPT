document.getElementById('bmi-form').addEventListener('submit',function(e){
    e.preventDefault()
    const height = parseInt(document.getElementById('height').value)
    const weight = parseInt(document.getElementById('weight').value)

    if(height>0  &&  weight>0){
        const bmi = ((weight*10000)/(height*height)).toFixed(2)
        document.getElementById('result').innerHTML=bmi;
        let cat = ''

        if (bmi<18.6){
            cat = 'underweight'
        }
        else if(bmi>=18.6 && bmi<24.9){
            cat = 'normal range'
        }
        else{
            cat = 'obese'
        }

        document.getElementById('result').innerHTML=`your bmi index ${bmi} falls in ${cat} category`
    }
    else{
        document.getElementById('result').innerHTML='enter right values'
    }

})
