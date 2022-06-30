import {Observable} from 'rxjs';

let obj=new Observable(ref=>{
        ref.next(1001);
});

obj.subscribe({
     next(x){console.log(x)},
     error(x){console.log(x)},
     complete(){console.log('completed')}
})