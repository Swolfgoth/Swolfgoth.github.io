document.addEventListener('DOMContentLoaded', function () {
    const select = document.getElementById("page-select");
    if (select) {
        select.addEventListener("change", function () {
            const page = this.value;
            if (page) {
                window.location.href = page;
            }
        });
    };

    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {
        edge: 'left',
        draggable: true
    });
});
