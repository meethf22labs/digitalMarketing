import React from 'react'
import ProposalImage from "../assets/proposal.png"


const Proposal = () => {
  return (
    <div className= 'flex justify-between rounded-2xl p-10 shadow-xl border-b-4 bg-[#F3F3F3] m-16  min-h-[350px]'>
        
        <div className=' flex flex-col justify-between mr-8'>
            <span className=' font-medium text-3xl'>Let’s make things happen</span>
            <p className=' font-normal text-lg'>Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.</p>
            <a href='#'>
                <button className=' font-normal text-xl bg-[#191A23] text-white p-5 rounded-xl'>Get your free proposal</button>
            </a>
        </div>
    
        <div>
            <img src={ProposalImage} alt='ProposalImage'/>
        </div>
    
    </div>
  )
}

export default Proposal