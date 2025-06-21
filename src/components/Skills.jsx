import React, { useState } from 'react';

const Skills = () => {
    const [skills, setSkills]= useState(['Python', 'java']);
    const handleSkills = ()=>{
        //add
        //setSkills([...skills, 'React']);
        //remove
        //setSkills(skills.filter((item)=>item!='Python'));
        //update
        setSkills(
            skills.map((item)=>(item=="java" ? (item="React"): item))
        );
    };
    return (
        <div>
            <ul className='m-5 list-disc'>
                {skills.map(skill=>(
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
            <button className='bg-amber-300 rounded-sm p-2' onClick={handleSkills}>Update Skill</button>
        </div>
    );
};

export default Skills;