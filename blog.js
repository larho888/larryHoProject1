const formEl = document.querySelector('form');

formEl.addEventListener('submit', function(event) {
      event.preventDefault();
      location.reload(); 
})

const textAreaEl = document.querySelector('textArea');

const commentEl = textAreaEl.value; 

if (commentEl) {
      const divEl = document.createElement('div');
      divEl.classList.add('comment');
      divEl.innerHTML = '<div class="commentText"></div>';
      textAreaEl.value = ''; 
      const paragraphEl = document.createElement('p');
      paragraphEl.textContent = commentEl;
      divEl.appendChild(paragraphEl);
      document.querySelector('.rightBar').appendChild(divEl);
      }

