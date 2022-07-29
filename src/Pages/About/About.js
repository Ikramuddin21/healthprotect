import React from 'react';
import aboutImage from '../../images/about.jpg';
import HeroRoute from '../Shared/HeroRoute/HeroRoute';
import './About.css';

const About = () => {
    return (
        <>
            {/* hero route */}
            <HeroRoute heading="About HealthProtect" />
            <div className="about">
                <div className="about-wrapper d-flex items-center">
                    <div className="about-left">
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className="about-right">
                        <h1>15+ years we provide services</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime porro repellendus commodi! Iure quam obcaecati eaque quis blanditiis voluptates mollitia quod modi porro praesentium. Quisquam et vero quo delectus! Unde doloremque debitis necessitatibus rerum odit voluptatum nemo officiis architecto, aut nisi neque error, placeat illo ab similique, ipsum saepe suscipit. Sequi accusamus labore, voluptate adipisci placeat aspernatur id totam reprehenderit doloremque ad necessitatibus repellat corporis quidem perspiciatis dolore. Nam accusamus sapiente error et nobis fugit, quod ex aperiam commodi voluptatem ut aut! Ex placeat velit, accusamus fugiat reiciendis veniam itaque modi necessitatibus eligendi sed delectus perferendis cum ab minima quam illo nulla dicta libero rerum voluptatum eveniet maiores praesentium qui.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;