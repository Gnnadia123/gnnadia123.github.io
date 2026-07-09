document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".filter-button");

    const cards = document.querySelectorAll(".project-card");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(b => b.classList.remove("active"));

            button.classList.add("active");

            const filter = button.dataset.filter;

            cards.forEach(card => {

                const tags = card.dataset.tags.split(",");

                if (filter === "All" || tags.includes(filter)) {

                    card.style.display = "flex";

                } else {

                    card.style.display = "none";

                }

            });

        });

    });

});