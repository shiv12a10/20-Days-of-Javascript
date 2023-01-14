const toast = document.getElementById("wrapper-toast");

function showToast() {
    toast.style.transform = 'translateX(0px)';
}

function closeToast() {
    toast.style.transform = 'translateX(400px)';
}