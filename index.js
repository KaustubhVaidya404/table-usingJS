

function show(){
    // console.log('in');
    let idValue = document.getElementById('id')
    let nameValue = document.getElementById('name')
    let contactValue = document.getElementById('contact')
    let table1 = document.getElementById('table1')
    let r1=document.createElement("tr")
    let c1=document.createElement("td")
    c1.innerText=idValue.value
    r1.append(c1)
    table1.append(r1)
    let c2 = document.createElement('td')
    c2.innerText=nameValue.value
    r1.append(c2)
    table1.append(r1)
    console.log(idValue.value)
    let c3 = document.createElement('td')
    c3.innerText=contactValue.value
    r1.append(c3)
    table1.append(r1)
}