import { ImYoutube2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

export const ActorSocial: React.FC<{ external: IExternalIds }> = ({ external }) => {
  return (
    <div className="flex flex-row gap-2">
      {external.facebook_id && (
        <a target="_blank" href={'https://www.facebook.com/' + external.facebook_id}>
          <FaFacebookSquare size={24}/>
        </a>
      )}
      {external.twitter_id && (
        <a target="_blank" href={'https://www.x.com/' + external.twitter_id}>
          <FaXTwitter size={24} />
        </a>
      )}
      {external.youtube_id && (
        <a target="_blank" href={'https://www.youtube.com/' + external.youtube_id}>
          <ImYoutube2 size={24}/>
        </a>
      )}
      {external.instagram_id && (
        <a target="_blank" href={'https://www.instagram.com/' + external.instagram_id}>
          <AiOutlineInstagram size={24}/>
        </a>
      )}
    </div>
  )
}
