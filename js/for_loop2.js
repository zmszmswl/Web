// for_loop2.js
let data = `[{"id":1,"first_name":"Tabbie","last_name":"Sparry","email":"tsparry0@yahoo.co.jp","gender":"Female","salary":1639},
{"id":2,"first_name":"Coriss","last_name":"Babbage","email":"cbabbage1@simplemachines.org","gender":"Female","salary":1271},
{"id":3,"first_name":"Margie","last_name":"Kaplan","email":"mkaplan2@newsvine.com","gender":"Female","salary":2843},
{"id":4,"first_name":"Eduardo","last_name":"Choulerton","email":"echoulerton3@mit.edu","gender":"Polygender","salary":1654},
{"id":5,"first_name":"Sauveur","last_name":"Bertelmot","email":"sbertelmot4@prweb.com","gender":"Male","salary":2128},
{"id":6,"first_name":"Milka","last_name":"Tomkowicz","email":"mtomkowicz5@free.fr","gender":"Genderfluid","salary":1300},
{"id":7,"first_name":"Leanna","last_name":"Camellini","email":"lcamellini6@clickbank.net","gender":"Female","salary":2674},
{"id":8,"first_name":"Ward","last_name":"Johnsson","email":"wjohnsson7@who.int","gender":"Genderqueer","salary":4781},
{"id":9,"first_name":"Hunfredo","last_name":"Fincken","email":"hfincken8@slate.com","gender":"Male","salary":4266},
{"id":10,"first_name":"Stephanus","last_name":"Staries","email":"sstaries9@spiegel.de","gender":"Male","salary":4866},
{"id":11,"first_name":"Craggy","last_name":"Dinnis","email":"cdinnisa@ibm.com","gender":"Male","salary":3877},
{"id":12,"first_name":"Madelene","last_name":"Bloggett","email":"mbloggettb@hc360.com","gender":"Female","salary":1853},
{"id":13,"first_name":"Garrott","last_name":"Scrammage","email":"gscrammagec@behance.net","gender":"Male","salary":3406},
{"id":14,"first_name":"Sofia","last_name":"Deathridge","email":"sdeathridged@youku.com","gender":"Female","salary":2955},
{"id":15,"first_name":"Adorne","last_name":"Gorke","email":"agorkee@indiegogo.com","gender":"Female","salary":4175}]`;

let ary = JSON.parse(data); // 문자열을 사용하기 어려우니 오브젝트타입으로 변경 parse()
console.log(ary);
// forEach.
ary.forEach(elem => {
    if (elem.gender == 'Female') {
        console.log(elem)
    }
}); // elem => {}오브젝트값 1개 1개 1개

// let femaleAry = ary.filter(); // gender == 'Female'
// console.log(femaleAry);
console.clear();
let newCompany = ary.map(elem => { // mapping 의미를 눈으로 확인하자. A -> A'
        let newElem = {}; // A'
        newElem.nId = elem.id;
        newElem.name = elem.first_name + ',' + elem.last_name;
        newElem.salary = elem.salary * 1.5;
        newElem.isNew = elem.salary > 4000 ? false : true;
        return newElem;
    })
    .filter(elem => elem.isNew) // true 값만 넣어주는 filter
// .forEach(elem => console.log(elem))
console.log(newCompany);

result = newCompany.reduce((accum, curr, currIdx) => { // curr = 오브젝트타입 
    return accum + curr.salary;
}, 0); // 새로운 회사 직원 급여
console.log(result);