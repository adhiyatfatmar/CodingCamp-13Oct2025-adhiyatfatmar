// Ambil elemen-elemen dari HTML menggunakan ID
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const dateInput = document.getElementById('date-input');
const todoList = document.getElementById('todo-list');
const validationMessage = document.getElementById('validation-message');
const filterSelect = document.getElementById('filter-select');


let todos = JSON.parse(localStorage.getItem('todos')) || [];

// ===================================
// FUNGSI UTAMA: MENAMPILKAN DAFTAR TUGAS
// ===================================

function renderTodos() {
    
    todoList.innerHTML = '';

    // Lakukan filter 
    const selectedFilter = filterSelect.value;
    const filteredTodos = todos.filter(todo => {
        if (selectedFilter === 'all') {
            return true; // Tampilkan semua
        } else if (selectedFilter === 'completed') {
            return todo.isCompleted; // Hanya yang selesai
        } else if (selectedFilter === 'pending') {
            return !todo.isCompleted; // Hanya yang belum selesai
        }
    });

    // elemen HTML untuk setiap tugas yang sudah difilter
    filteredTodos.forEach(todo => {
        // elemen <li>
        const listItem = document.createElement('li');
        // CSS dan data status untuk styling
        listItem.classList.add('todo-item');
        if (todo.isCompleted) {
            listItem.classList.add('completed');
        }
        
        // Atribut data-id untuk identifikasi unik s
        listItem.dataset.id = todo.id;

        // Isi konten <li>
        listItem.innerHTML = `
            <span class="todo-text">${todo.text}</span>
            <span class="todo-date">(${todo.date})</span>
            <div class="actions">
                <button class="complete-btn">${todo.isCompleted ? 'Batalkan' : 'Selesai'}</button>
                <button class="delete-btn">Hapus</button>
            </div>
        `;
        
        
        todoList.appendChild(listItem);
    });
}

// ===================================
// FUNGSI TAMBAHAN
// ===================================

// Simpan daftar tugas ke Local Storage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// ===================================
// EVENT LISTENER: MENAMBAH TUGAS (ADD)
// ===================================

todoForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah form melakukan refresh halaman

    const text = todoInput.value.trim();
    const date = dateInput.value;

    // VALIDATE INPUT FORM: Cek apakah input kosong
    if (text === '' || date === '') {
        validationMessage.style.display = 'block'; // Tampilkan pesan validasi
        return; // Hentikan proses
    }

    // Sembunyikan pesan validasi jika sudah terisi
    validationMessage.style.display = 'none';

    // Buat objek tugas baru
    const newTodo = {
        id: Date.now(), // ID unik berdasarkan timestamp
        text: text,
        date: date,
        isCompleted: false // Status awal: Belum Selesai
    };

    // tugas baru ke array 'todos'
    todos.push(newTodo);
    saveTodos(); // Simpan ke Local Storage
    
    // Refresh tampilan daftar
    renderTodos();

    // Reset form
    todoInput.value = '';
    dateInput.value = '';
});

// ===================================
// EVENT LISTENER: DELETE & TOGGLE COMPLETE/PENDING
// ===================================

todoList.addEventListener('click', function(e) {
    // elemen <li> terdekat (item tugas)
    const listItem = e.target.closest('.todo-item');
    if (!listItem) return; // Keluar jika bukan bagian dari item tugas

    const todoId = parseInt(listItem.dataset.id);
    const todoIndex = todos.findIndex(t => t.id === todoId);

    if (e.target.classList.contains('delete-btn')) {
        // DELETE: Hapus tugas
        
        // Hapus dari array 'todos'
        todos.splice(todoIndex, 1); 
        saveTodos();
        renderTodos();
        
    } else if (e.target.classList.contains('complete-btn')) {
        // TOGGLE STATUS: Ubah status Selesai/Belum Selesai
        
        // Ubah nilai isCompleted pada objek tugas
        todos[todoIndex].isCompleted = !todos[todoIndex].isCompleted;
        saveTodos();
        renderTodos();
    }
});

// ===================================
// EVENT LISTENER: FILTER
// ===================================

filterSelect.addEventListener('change', renderTodos);

//  fungsi render saat halaman pertama kali dimuat
renderTodos();