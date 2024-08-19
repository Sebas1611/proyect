document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('assignment-form');
    const roomSelect = document.getElementById('room');
    const assignmentList = document.getElementById('assignment-list');
  
    // Cargar aulas desde un archivo JSON
    fetch('data/rooms.json')
      .then(response => response.json())
      .then(rooms => {
        rooms.forEach(room => {
          let option = document.createElement('option');
          option.value = room;
          option.textContent = room;
          roomSelect.appendChild(option);
        });
      });
  
    // Maneja el evento de envío del formulario
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const room = form.room.value;
      const course = form.course.value;
      const time = form.time.value;
  
      // Crea una nueva asignación
      let li = document.createElement('li');
      li.textContent = `Aula: ${room}, Curso: ${course}, Hora: ${time}`;
      assignmentList.appendChild(li);
  
      // Limpia el formulario
      form.reset();
    });
  });
  