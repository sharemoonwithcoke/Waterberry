import  { useEffect } from 'react';
import './About.css';

function About() {
    useEffect(() => {
        document.title = 'About Our Food Wisdom';
    }, []);


 


    return (
        <div>
            <a href="#main-content" className="skip-link">Skip to main content</a>
            <main id="main-content">
                <div className="panel">
                    <h1 className='about'>About Our Food Wisdom</h1>
                    <div className="content">
                        <img className="panel-image" alt="A colorful assortment of fruits on a table." src="https://plus.unsplash.com/premium_photo-1700053460290-f47d0726e7db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fE51dHJpdGlvbmFsJTIwaW5mb2dyYXBoaWNzfGVufDB8fDB8fHww" />
                        <div className="text">
                            <h3>Nutrition and Safety</h3>
                            <p>Just as it is important to choose the right foods for physical health, it is crucial to ensure safety in our personal environments. Understanding the signs of a toxic environment is key to taking care of our overall well-being.</p>
                        </div>
                    </div>
                    <div>
                        <div className="content">
                            <img className="panel-image" alt="A calm kitchen scene, portraying a safe and peaceful cooking environment." src="https://plus.unsplash.com/premium_photo-1681490887474-91ab98ef56c3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMHRlYW13b3JrJTIwcGxhY2V8ZW58MHx8MHx8fDA%3D" />
                            <div className="text">
                                <h3>Creating a Safe Space</h3>
                                <p>Creating a safe space in your kitchen and life involves more than just physical safety. It is about emotional and psychological safety too. Recognizing controlling or harmful behaviors in relationships is the first step toward creating a healthier life.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="content">
                            <img className="panel-image" alt="A supportive team working together in a kitchen, symbolizing community support." src="https://plus.unsplash.com/premium_photo-1677087121017-b779a16ff921?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHRlYW0lMjBmb29kfGVufDB8fDB8fHww" />
                            <div className="text">
                                <h3>Support Systems</h3>
                                <p>Everyone deserves support, whether in the kitchen or life. If you or someone you know needs help, it is important to know that support systems exist, including legal resources and counseling services that can provide assistance in times of need.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="content">
                            <div className="text-choose">
                                <h3>Empowerment Through Knowledge</h3>
                                <p>Understanding the full picture of your food includes knowing how to ensure safety and health in your relationships. We provide information not only on the best dietary choices but also on recognizing and addressing unhealthy relationship dynamics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default About;
