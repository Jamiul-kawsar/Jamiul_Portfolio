import { section } from 'motion/react-client'
import React from 'react'
import SectionHeader from "./SectionHeader";
import SkillCard from './SkillCard';
import { } from "lucide-react";

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 text-white bg-gray-950">
            <div className='max-w-6xl mx-auto'>
                <SectionHeader
                    label="// Capabilities"
                    title="Tech"
                    highlight="Stack"
                />

                <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6">
                    {/* Programming */}
                    <SkillCard
                        icon="⚙️"
                        title="Programming"
                        skills={["C", "C++", "Python", "JavaScript", "Java"]}
                    />
                    {/* Machine Learning */}
                    <SkillCard
                        icon="🧠"
                        title="Machine Learning"
                        skills={["NumPy", "Pandas", "Scikit-learn", "PyTorch", "XGBoost"]}
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