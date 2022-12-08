import Image from "next/image";
import profile from '../public/me2.png'

function Profile(props) {

    return (
        
        <div>
        <Image className='animate-updown rounded-full w-40 z-10 md:w-80' src={profile} alt='Joatan Sampaio' />
        <div className="w-full h-full bg-j_main_dark absolute top-1 rounded-full animate-updown -translate-y-1/2 -z-10"></div>
        </div>
    
    );


}

export default Profile;