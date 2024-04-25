import {  useEffect } from "react";
import Button from "./Button";
import './HomePage.css';

function HomePage() {
    useEffect(() => {
        document.title = "Home - Nourishing Choices";
    }, []);

 
    const handleQuickExit = () => {
  
        window.location.href = "https://www.google.com"; 
    };

    return (
        <>
            <div>
                <a href="#main-content" className="skip-link">Skip to main content</a>
                <main id="main-content">
                    <div className="hero-image">
                        <h1 className="hero-title">A Nourished Life: Exploring Nutritional Wisdom and More</h1>
                        <div className="container-text">
                            <p className="home-text">Welcome to our site, where we blend nutritional knowledge with everyday choices. While we focus on the physical aspects of healthy eating, we also understand the importance of a safe and supportive environment. Here, you can learn not only about food but also about nurturing your well-being in every aspect of life.</p>
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="about-text">
                            <h4>How We Care</h4>
                            <p className="about-info">Our approach is all about caring: for our food, our bodies, and our relationships. We ensure that each bite you take is not only nutritious but also part of a positive life choice, fostering environments that respect and nurture personal growth and safety.</p>
                        </div>
                    </div>
                    <div className="choose-container">
                        <div className="choose-title">
                            <h4>Nourish Your Life in 3 Steps</h4>
                            <div className="choose-steps">
                                <div className="choose-step">
                                    <p className="text-title">First Step</p>
                                    <p>Identify What Nourishes You: Learn about the foods that enhance your health and well-being, and recognize the environments that make you feel safe and supported.</p>
                                </div>
                                <div className="choose-step">
                                    <p className="text-title">Second Step</p>
                                    <p>Seek Information: Utilize our resources to understand how nutritional choices can mirror the choices we make in life, promoting a balanced and healthy lifestyle.</p>
                                </div>
                                <div className="choose-step">
                                    <p className="text-title">Third Step</p>
                                    <p>Empower Yourself: Armed with knowledge, make decisions that support your physical and emotional health, ensuring a nourishing environment for yourself and those around you.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="discover-container">
                            <div className="discover-text">
                                <h4>Deepen Your Understanding</h4>
                                <p>For those interested in more than just surface knowledge, our About page offers deeper insights into how we ensure every meal and every interaction is nurturing. Discover our commitment to not just nourishing the body, but also the soul.</p>
                            </div>
                            <img className="discover-image" alt="Imaginative food presentations that suggest creativity and care in meal preparation." src="https://images.unsplash.com/photo-1621484488308-3fc11031f2b6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYW13b3JrJTIwZm9yJTIwZm9vZHxlbnwwfHwwfHx8MA==" />
                        </div>
                    <Button type="button" visual="link" onClick={handleQuickExit}>
                        Quick Exit
                    </Button>
                </main>
            </div>
        </>
    );
}

export default HomePage;


