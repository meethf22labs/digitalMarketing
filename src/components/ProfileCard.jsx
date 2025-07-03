import LinkedinIcon from '../assets/linkedin.png';

const ProfileCard = ({ member }) => {
  return (
    <div className="w-[400px] h-[300px] bg-white rounded-[30px] shadow-md p-6 m-4 flex flex-col justify-between border border-black border-b-[5px]">
        <div className="flex justify-between items-start">
            <img src={member.profileImage} alt={member.name} className="w-[80px] h-[80px] object-cover " />
            <img src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6" />
        </div>
        <div className="mt-4">
            <p className="text-lg font-bold text-black">{member.name}</p>
            <p className="text-sm text-gray-600 mb-4">{member.role}</p>
            <hr className="border-t border-gray-400 my-4" />
            <p className="text-sm text-black leading-snug">{member.content}</p>
        </div>
    </div>
  );
};

export default ProfileCard;
