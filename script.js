const text = document.getElementById('enter');
const add = document.getElementById('button');
const main = document.getElementsByTagName('main')[0];
const navi = document.getElementsByTagName("nav")[0];

//function for adding their crap
function addText(){
    let enter = text.value.trim()
    const body = document.createElement('div');
    if(enter == ""){return;}
    const storage = [];
    storage.push(body);
    storage.forEach(() =>{
        //creating elements for delete and edit
        const del = document.createElement('div');
        const edit = document.createElement('div');
        const word = document.createElement('div');

        //modifying
        del.className = "del";
        edit.className = "edit";
        body.className = "bodyList";
        word.className = "word";
        word.innerHTML = `<p class="word">${enter}</p>`;
        del.innerHTML = `<p class="delete"><i class="fa-solid fa-trash"></i></p>`
        edit.innerHTML =`<p class="edit"><i class="fa-solid fa-pen"></i></p>`

        //appending to body
        body.appendChild(word);
        body.appendChild(del);
        body.appendChild(edit);
        
        //event listeners and functions
        word.addEventListener('click', () => {
            word.classList.toggle("words");
        });
        del.addEventListener('click', () => {body.remove()});
        edit.addEventListener('click', () =>{
            let make = document.createElement("input");
            const submit = document.createElement('button');
            submit.textContent = "save";
            text.remove();
            add.remove();
            navi.appendChild(make);
            navi.appendChild(submit);
            submit.addEventListener('click', () =>{
                const added = make.value.trim();
                if(added == ""){
                    submit.remove();
                    make.remove();
                    navi.appendChild(text);
                    navi.appendChild(add);
                }
                word.textContent = added;
                submit.remove();
                make.remove();
                navi.appendChild(text);
                navi.appendChild(add);
        });  
     });
        //passing the body to the main
        main.appendChild(body);
})};
add.addEventListener('click', addText);