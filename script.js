//your JS code here. If required.
const codes = document.querySelectorAll(".code");

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener("input", (e) => {
        code.value = code.value.replace(/\D/g, "");

        if (code.value && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    code.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            e.preventDefault();

            if (code.value) {
                code.value = "";
            } else if (idx > 0) {
                codes[idx - 1].value = "";
                codes[idx - 1].focus();
            }
        }
    });
});
