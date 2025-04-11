import React from "react";
import styles from "./AboutMe.module.css";
import { Row, Col } from "react-bootstrap";

const AboutMe: React.FC = () => {
    return (
        <Row>
            <Col xs={12} sm={12} md={12}>
                <h1>Who is Jason Alan Smith?</h1>
                <span className={styles.about}>
                    <p>Warning: This piece was written during a pivotal time in my journey. It’s raw, unedited, and fully me—just like the mission I’m on.</p>
                    <p>They call me Jason. Jason Smith. Welcome to my little slice of these vast interwebs, where I go by Quality Addict. I began working as a software tester back in January of 1999, and I remain a software QA guy to this day. That’s nearly sixteen years now in software quality assurance. Why am I addicted to software quality?</p>
                    <p>When I use a software application, whether Web, Mobile, or Desktop, I’m easily annoyed if the application doesn’t look gorgeous and doesn’t function precisely according to my exacting standards. My experience throughout a recent employment opportunity instilled in me just how central to software development software usability really is, for without users there is no need—no purpose–for our software. I can see, taste, touch, hear, and smell software quality; quality software does exist and is possible no matter the circumstance of a new software application’s birth. The art and practice of software development is a pristine orchestration; it’s the human element—the people—that fuck it all up, and I’m not talking about a simple syntax typo, either. I am a user of software, first; a tester of software, second. I was born for this work. I understand; I get it. I see the bigger picture. This is why I’m addicted to software quality. It doesn’t help that I’m a perfectionist-to-the-core, anal-retentive son of a bitch, either. No, not at all.</p>
                    <p>When I’m not dissecting software hunting bugs buried deep within an application’s source code, I dream. I’m a child of two iconic stars: Star Wars and Star Trek. I’m a dreamer, and I dream big; otherwise, what’s the point of dreaming? I can imagine a simple idea for a new software application and rapidly ratchet up the scope-creep until that little idea is a behemoth multi-year, billion-dollar project. Yep, project managers and finance folks love me. Not.</p>
                    <p>Of course, I would not be the nerd I am today if it weren’t for the unwavering love and support of my awesome Mom and Dad, for they both recognized and nurtured my talent for computers and technology beginning with a Commodore 128 computer one chilly Christmas morning while I was still very young. I was subsequently blessed with technology upgrades throughout my childhood. Thank you Mom and Dad. I love you both dearly, and I would not be the person I am today without your constant love and support.</p>
                    <p>Cheers!</p>
                </span>
            </Col>
        </Row>
    )
}

export default AboutMe;
