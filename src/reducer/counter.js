 // eslint-disable-next-line
export default (counters=40 ,action)=>{

    switch(action.type){
        case 'INC':{
               return counters + 1;
            }
        case  'DEC':{
            return counters -1;
            }
        default:{
            return counters;
        }
    }   
}