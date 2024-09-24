const any = document.querySelectorAll('.color-box')
const fake = document.querySelector('body')
any.forEach((i)=>{
    // console.log(i)
    i.addEventListener('click',function(e){
        console.log(e.target.id);
        
        if(e.target.id ==='Grey'){          
            fake.style.backgroundColor =e.target.id;
        }
        if(e.target.id ==='White'){          
            fake.style.backgroundColor =e.target.id;
        }
        if(e.target.id ==='Blue'){          
            fake.style.backgroundColor = e.target.id;
        }
        if(e.target.id ==='Yellow'){          
            fake.style.backgroundColor = e.target.id;
        }
    })

})