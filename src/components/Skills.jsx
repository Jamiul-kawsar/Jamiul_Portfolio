import React from 'react'
import SectionHeader from "./SectionHeader";
import SkillCard from './SkillCard';

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 text-white bg-gray-950">
            <div className='max-w-6xl mx-auto'>
                <SectionHeader
                    label="// Capabilities"
                    title="Tech"
                    highlight="Stack"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Programming */}
                    <SkillCard
                        icon="⚙️"
                        title="Programming"
                        skills={["Python", "C/C++", "JavaScript", "Java", "C#"]}
                    />
                    {/* Machine Learning */}
                    <SkillCard
                        icon="🧠"
                        title="Machine Learning"
                        skills={["NumPy", "Pandas","Matplotlib", "Scikit-learn",  "XGBoost"]}
                    />
                    {/* Deep Learning */}
                    <SkillCard
                        icon="🧠"
                        title="Deep Learning"
                        skills={["PyTorch", "TensorFlow (Basic)", "CNN", "ResNet50", "DenseNet121","EfficientNet-B0","Transfer Learning"]}
                    />
                    {/* Web Development */}
                    <SkillCard
                        icon="🌐"
                        title="Web Development"
                        skills={["React", "Vite", "Tailwind CSS", "Node", "HTML/CSS"]}
                    />
                    {/* Robotics */}
                    <SkillCard
                        icon="🤖"
                        title="Robotics"
                        skills={["Arduino", "ESP32", "Sensors", "Embedded C"]}
                    />
                    {/* Tools & DB */}
                    <SkillCard
                        icon="🛠️"
                        title="Tools & DB"
                        skills={["MySQL", "Git", "Linux", "Windows", "GitHub"]}
                    />

                </div>

            </div>

        </section>
    )
}

export default Skills