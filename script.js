document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".btn");

    if (button) {
        button.addEventListener("click", () => {

            document.querySelector("#creations").scrollIntoView({
    behavior:"smooth"
});

        });
    }

});
