document.getElementById("toggle-menu").addEventListener("click", function() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("collapsed");

    // Ajustar largura conforme o estado
    if (sidebar.classList.contains("collapsed")) {
        sidebar.style.width = "150px";
    } else {
        sidebar.style.width = "250px";
    }
});
