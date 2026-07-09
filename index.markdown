---
layout: default
---

<div class="hero">
    <div class="hero-overlay">
        <p><b>Robotics • Programming • Engineering</b></p>
    </div>
</div>

<br>

Hi! I am Aidan Ng, a student graduating from SST's Intergrated Diploma Program class of 2027, and from Ngee Ann Polytechnic in 2030!

## Featured Projects

<div class="projects-grid">

{% assign featured_projects = site.projects | where: "featured", true %}

{% for project in featured_projects %}

    {% include project-card.html project=project %}

{% endfor %}

</div>

<p style="text-align:center; margin-top:30px;">
    <a class="view-projects-button" href="/projects/">
        View All Projects →
    </a>
</p>
