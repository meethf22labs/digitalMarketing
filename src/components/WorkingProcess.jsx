import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function WorkingProcess() {
    const [expanded, setExpanded] = React.useState(null);

    const handleExpansion = (panelIndex) => (event, isExpanded) => {
        setExpanded(isExpanded ? panelIndex : null);
    };



    const processArray = [
        {
            title: "Consultation",
            description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Research and Strategy Development",
            description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Implementation",
            description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Monitoring and Optimization",
            description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Reporting and Communication",
            description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
        {
            title: "Continual Improvement",
            description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
        },
    ]

    return (
        <div className='m-20'>
            <div className='flex gap-10 mb-12'>
                <button className=' bg-[#B9FF66] text-4xl font-normal tracking-wide p-2 rounded-lg'>Our Working Process</button>
                <p className=' font-normal text-lg'>Step-by-Step Guide to Achieving <br />Your Business Goals</p>
            </div>

            {processArray.map((process, index) => (
                <Accordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleExpansion(index)}
                    sx={{
                        backgroundColor: "#B9FF66",
                        marginBottom: 2,
                        borderRadius: 4,
                        minHeight: 80,
                        boxShadow: 0,
                        padding: 4,
                        borderBottom: "5px solid #000",
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${index}-content`}
                        id={`panel${index}-header`}
                    >
                        <Typography component="span">
                            <div className=' flex justify-center items-center'>
                                <p className=' font-medium text-5xl'>{index + 1} </p>
                                   <span className='mx-2'></span>                          
                                <p className=' font-medium text-3xl'>{process.title}</p>
                            </div>
                        </Typography>
                    </AccordionSummary>
                    <div className="flex justify-center">
                        <hr className="border-t-2 border-black w-[96%]" />
                    </div>
                    <AccordionDetails className='text-start'>
                        <Typography>{process.description}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}
