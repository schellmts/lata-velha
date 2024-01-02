(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

// navegação dos cards
$(document).ready(function() {
  var itemsPerPage = 6;
  var currentPage = 1;

  // Esconder todos os cards e mostrar os primeiros 6
  $(".card-item").hide();
  $(".card-item").slice(0, itemsPerPage).show();

  // Função para mostrar os cards da página atual
  function showPage(page) {
    var startIndex = (page - 1) * itemsPerPage;
    var endIndex = startIndex + itemsPerPage;

    $(".card-item").hide();
    $(".card-item").slice(startIndex, endIndex).show();
  }

  // Botão "Próximo"
  $(".next").click(function() {
    var totalPages = Math.ceil($(".card-item").length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      showPage(currentPage);
    }
  });

  // Botão "Anterior"
  $(".prev").click(function() {
    if (currentPage > 1) {
      currentPage--;
      showPage(currentPage);
    }
  });
});

