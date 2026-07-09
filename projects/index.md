---
layout: default
title: Projects
permalink: /projects/
---

# Projects

<div class="project-filters">

    <button class="filter-button active" data-filter="All">All</button>

    <button class="filter-button" data-filter="Robotics">Robotics</button>

    <button class="filter-button" data-filter="Competition">Competition</button>

    <button class="filter-button" data-filter="Engineering">Engineering</button>

</div>

<div class="projects-grid">

{% for project in site.projects %}

{% include project-card.html project=project %}

{% endfor %}

</div>

<script src="{{ '/assets/js/filter.js' | relative_url }}"></script>