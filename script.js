const addBtn = document.getElementById('add');

addBtn.addEventListener('click', () => {
    addNewNote();
})

const addNewNote = () => {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="notes">
    <div class="tools">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main hidden">


</div>
<textarea name="" id="" cols="30" rows="10"></textarea>
</div>
    `;


    const editBtn = note.querySelector('.edit');
    const delBtn = note.querySelector('.delete');

    const main = note.querySelector('.main');
    const textArea = note.querySelector('textarea');


    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    })

    delBtn.addEventListener('click', () => {
        note.remove()
    })

    textArea.addEventListener('input', (event) => {
        const { value } = event.target;
        main.innerHTML = marked(value);
    })


    document.body.append(note)
}





/*  */