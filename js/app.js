import data from '../data.json' assert { type: 'json' };;

let card_activities = document.querySelectorAll('.card-activities');
let time_link = document.querySelectorAll('.time_link');

let timeframes = 'daily';

const f = {
    setTitle: ({title,index}) => {
        title.innerText = data[index].title
    },
    setTime: ({timeframes,current_time,index})=>{
        switch(timeframes){
            case 'daily':
                current_time.innerText = `${data[index].timeframes.daily.current}hrs`;
                break;
            case 'weekly':
                current_time.innerText = `${data[index].timeframes.weekly.current}hrs`;
                break;
            case 'monthly':
                current_time.innerText = `${data[index].timeframes.monthly.current}hrs`;
                break;            
        }   
    },
    setPrevious: ({timeframes,previous_time,index}) => {
        switch(timeframes){
            case 'daily':
                previous_time.innerText = `Last daily - ${data[index].timeframes.daily.previous}hrs`;
                break;
            case 'weekly':
                previous_time.innerText = `Last weekly - ${data[index].timeframes.weekly.previous}hrs`;
                break;
            case 'monthly':
                previous_time.innerText = `Last monthly - ${data[index].timeframes.monthly.previous}hrs`;
                break;            
        }
    } 
}

card_activities.forEach((element,index) => {
    let title = element.querySelector('.title')
    let current_time = element.querySelector('.current_time');
    let previous_time = element.querySelector('.previous_time');
    //console.log(index,current_time);

    //title.innerText = data[index].title
    
    f.setTitle({title,index})
    f.setTime({timeframes,current_time,index})
    f.setPrevious({timeframes,previous_time,index})
     
});


time_link.forEach( (element) => {
    element.addEventListener('click',function(){       
        time_link.forEach( (link) => {
            link.classList.remove('active')
        } );
        element.classList.add('active');

        timeframes = element.dataset.type;
        
        card_activities.forEach((element,index) => {
            let title = element.querySelector('.title')
            let current_time = element.querySelector('.current_time');
            let previous_time = element.querySelector('.previous_time');
            //console.log(index,current_time);        
            //title.innerText = data[index].title           
            f.setTitle({title,index})
            f.setTime({timeframes,current_time,index})
            f.setPrevious({timeframes,previous_time,index})
             
        });
        
    });
});