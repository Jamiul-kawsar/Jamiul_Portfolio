import { section } from 'motion/react-client'
import React from 'react'
import SectionHeader from "./SectionHeader";

const Skills = () => {
  return (
    <section id="contact" className="py-24 px-6 text-white bg-gray-950">
        <div className='max-w-6xl mx-auto'>
            <SectionHeader
              label="// get in touch"
              title="Let's"
              highlight="Connect"
            />

        </div>
    </section>
  )
}

export default Skills