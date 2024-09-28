
// ================ uname and pwd underline anim ==================

const uname = document.getElementById('uname');
const pwd = document.getElementById('pwd');
const uline = document.querySelector('.uline');
const pline = document.querySelector('.pline');

var bval = "4px";
var def = "6px";

// Hover effects for 'uname' input
uname.addEventListener('mouseenter', () => {
    uline.style.bottom = bval;
});

uname.addEventListener('mouseleave', () => {
    if (uname.value === '') {  // Only reset if the input is empty
        uline.style.bottom = def;
    }
});

// Hover effects for 'pwd' input
pwd.addEventListener('mouseenter', () => {
    pline.style.bottom = bval;
});

pwd.addEventListener('mouseleave', () => {
    if (pwd.value === '') {  // Only reset if the input is empty
        pline.style.bottom = def;
    }
});

// Underline stays if 'uname' is not empty
uname.addEventListener('input', () => {
    if (uname.value !== '') {
        uline.style.bottom = bval;  // Keep underline closer if input is not empty
    } else {
        uline.style.bottom = def;   // Reset if input is cleared
    }
});

// Optional: Same logic for 'pwd' if needed
pwd.addEventListener('input', () => {
    if (pwd.value !== '') {
        pline.style.bottom = bval;
    } else {
        pline.style.bottom = def;
    }
});
