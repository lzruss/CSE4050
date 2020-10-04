async function hello(){
    return 'world'
}

let lucky: any = 23; //let variables be any type

lucky = '23'



type Style = 'bold' | 'italic' ; //creating own type, Style can only = bold/italic

let font: Style; 

interface Person{
    first: string;
    last: string;
    [key: string]: any
}

const person = {
    first: 'Jeff',
    last: 'Delaney'
}

const person2 = {
    first: 'Usain',
    last: 'Bolt',
    fast: true
}

function pow(x:number, y:number) {
    return Math.pow(x,y);
}

const arr1 = []

arr1.push(1)

const arr2: Person[] = []

type MyList = [number?, string?, boolean?]

const arr3: MyList = []

arr3.push(1)
arr3.push('23')
arr1.push(false)

class Observable<T>{
    constructor(public value: T){}
}

let x: Observable<number>;

let y: Observable<Person>;

let z = new Observable(23)