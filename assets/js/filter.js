document.addEventListener("DOMContentLoaded", () => {

    console.log("Filter loaded!");

    const buttons = document.querySelectorAll(".filter-button");
    const cards = document.querySelectorAll(".project-card");

    console.log("Buttons:", buttons.length);
    console.log("Cards:", cards.length);

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const filter = button.dataset.filter;

            console.log("Clicked:", filter);

            buttons.forEach(b => b.classList.remove("active"));
            button.classList.add("active");

            cards.forEach(card => {

                const tags = card.dataset.tags
                    .split(",")
                    .map(tag => tag.trim());

                console.log(card.dataset.tags, tags);

                if (
                    filter === "All" ||
                    tags.some(tag => tag.toLowerCase() === filter.toLowerCase())
                ) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }

            });

        });

    });

});