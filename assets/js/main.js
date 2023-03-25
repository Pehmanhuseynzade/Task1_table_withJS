function Person(name,surname,age){
    this.name = name
    this.surname = surname
    this.age = age
}
const person1 = new Person("Pehman","Huseynzade",20)
const person2 = new Person("Ali","Safarli",20)
const person3 = new Person("Hakim","Habibli",19)
const person4 = new Person("Subhan","Naghiyev",20)

objects = [person1,person2,person3,person4]
console.log(objects)

const table = document.getElementById("mytable")

const tbody = document.querySelector("#tbody")


for (let i = 0; i < objects.length; i++){

    // create a TR
    const tr = document.createElement("tr")


    // create name  
    const name = document.createElement("td")
    const textName = document.createTextNode(objects[i].name);
    name.appendChild(textName);

    
    const surname = document.createElement("td")
    const textSurname = document.createTextNode(objects[i].surname);
    surname.appendChild(textSurname);
    
    const age = document.createElement("td")
    const textAge = document.createTextNode(objects[i].age);
    age.appendChild(textAge);
    
    
    // ageText = document.createTextNode(`${objects[i].age}`)

    tr.append(name,surname,age)
    tbody.appendChild(tr)
}
