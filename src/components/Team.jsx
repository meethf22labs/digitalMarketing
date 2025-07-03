import JohnSmith from "../assets/profileImages/johnSmith.png";
import JaneDoe from "../assets/profileImages/janeDoe.png";
import MichaelBrown from "../assets/profileImages/michaelBrown.png";
import EmilyJohnson from "../assets/profileImages/emilyJohnson.png";
import BrianWilliams from "../assets/profileImages/brianWilliams.png";
import SarahKim from "../assets/profileImages/sarahKim.png";
import ProfileCard from './ProfileCard';


const Team = () => {

  const teamMembers = [
    { name: "John Smith", role: "CEO and Founder", profileImage: JohnSmith, content: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy" },
    { name: "Jane Doe", role: "Director of Operations", profileImage: JaneDoe,  content: "7+ years of experience in project management and team leadership. Strong organizational and communication skills" },
    { name: "Michael Brown", role: "Senior SEO Specialist", profileImage: MichaelBrown,  content: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization" },
    { name: "Emily Johnson", role: "PPC Manager", profileImage: EmilyJohnson,  content: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis" },
    { name: "Brian Williams", role: "Social Media Specialist", profileImage: BrianWilliams,  content: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement" },
    { name: "Sarah Kim", role: "Content Creator", profileImage: SarahKim,  content: "2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries" }
  ];


  return (
    <div className='m-20'>

        <div className='flex gap-10 mb-12'>
            <button className=' bg-[#B9FF66] text-4xl font-normal tracking-wide p-2 rounded-lg'>Team</button>
            <p className=' font-normal text-lg'>Meet the skilled and experienced team behind our <br />successful digital marketing strategies</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6'>
            {teamMembers.map((member, index) => (
                <div key={index}>
                    <ProfileCard member={member}/>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Team