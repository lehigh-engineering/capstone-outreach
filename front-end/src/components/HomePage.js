import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div class="home">
        <h1>Computer Science Outreach</h1>
        <h2>Modules in progress...</h2>
            <div class="modules-ip-container">
            <div class="module-ip">Module 1</div>
            <div class="module-ip">Module 2</div>
            <div class="module-ip">Module 3</div>
            <div class="module-ip">Module 4</div>
            <div class="module-ip">Module 5</div>
            <div class="module-ip">Module 6</div>
            </div>
            <div class="left-column">
            <h2>Table of Contents</h2>
            <ul class="toc">
                <li class="content">Materials</li>
                <li class="content">Vocab</li>
                <li class="content">Overview</li>
                <li class="content">Lesson</li>
                <li class="content">Summary</li>
                <li class="content">Next Steps</li>
            </ul>
            </div>
            <div class="body">
            <h1>Modules</h1>
            <div class="search-bar">
                <input type="text" placeholder="Search modules..."></input>
                <button type="button">Search</button>
            </div>
            <div class="module">Module A</div>
            <div class="module">Module B</div>
            <div class="module">Module C</div>
            <div class="module">Module D</div>
            <div class="module">Module E</div>
            <div class="module">Module F</div>
            </div>
        </div>
    );
}

export default HomePage;