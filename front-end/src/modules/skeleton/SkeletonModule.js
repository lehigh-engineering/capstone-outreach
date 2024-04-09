import React from 'react';
import './SkeletonModule.css';

import skeletonImg from './skeleton.avif';

function SkeletonModule() {
    return (
        <div class="skeleton">
            <h1>Title:<br></br><i>Subtitle</i></h1>
            <img src={skeletonImg} alt="Skeleton"></img>
            {/* <div class="left-column">
                <h2>Table of Contents</h2>
                <ul>
                    <li>STEELS Standards</li>
                    <li>Objectives</li>
                    <li>Materials</li>
                    <li>Basic Vocab</li>
                    <li>Introduction</li>
                    <li>Ceaser Cipher</li>
                    <li>Class Activity</li>
                    <li>Summary</li>
                    <li>Discussion</li>
                </ul>
            </div> */}
            <div class="body">
                <h2>STEELS Standards</h2>
                    <ul>
                        <li>Standard 1</li>
                        <li>Standard 2</li>
                        <li>And so on...</li>
                    </ul>
                <h2>Objectives</h2>
                    <ul>
                        <li>Objective 1</li>
                        <li>Objective 2</li>
                        <li>Objective 3</li>
                    </ul>
                <h2>Materials</h2>
                    <ul>
                        <li><a href="[link]">Some website</a></li>
                        <li>Some other thing</li>
                    </ul>
                <h2>Basic Vocab</h2>
                    <ul>
                        <li><b>Term</b>
                            <ul><li>Definition.</li>
                                <li>Other relevant notes/terms:
                                    <ul>
                                        <li><b>Term 1</b>: Definition.</li>
                                        <li><b>Term 2</b>: Definition.</li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><b>Term</b>
                            <ul><li>Definition.</li></ul>
                        </li>
                        <li><b>Term</b>
                            <ul><li>Definition.</li></ul>
                        </li>
                    </ul>
                <h2>Introduction</h2>
                    <p>Bla bla bla.</p>
                    <p>Bla, bla bla bla!</p>
                <h2>Activity Name</h2>
                    <p>Bla bla bla.</p>
                    <p>Bla, bla bla bla!</p>
                <h2>Class Activity</h2>
                    <p>Bla bla bla.</p>
                    <p>Bla, bla bla bla!</p>
                <h2>Summary</h2>
                    <p>Bla bla bla.</p>
                    <p>Bla, bla bla bla!</p>
                <h2>Discussion</h2>
                    <p><i>(Try to guide student discussion to touch on these)</i></p>
                    <ul>
                        <li>Bla bla bla.</li>
                        <li>Bla, bla bla bla!</li>
                    </ul>
            </div>
        </div>
    );
}

export default SkeletonModule;