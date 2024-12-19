

const headingContent = document.querySelector("h1")
const nameChangeBtn = document.querySelector("button")
const storedName = localStorage.getItem("name")

const changeName = (name) => {
  headingContent.innerText = name
  nameChangeBtn.innerText = "Rename"
}

if(storedName){
  changeName(storedName)
}

const setName = async () => {
  const name = prompt("Please enter your name as you want!!!")
  if(!name){
    setName()
  }else{
    localStorage.setItem("name",name)
    changeName(name)
  }
}

nameChangeBtn.onclick = () =>{
  setName()
}