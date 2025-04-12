import { ImYoutube2 } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

export const ActorSocial: React.FC<{ external_ids: IExternalIds }> = ({ external_ids }) => {
  return (
    <div className="flex flex-row gap-2">
      {external_ids.facebook_id && (
        <a target="_blank" href={'https://www.facebook.com/' + external_ids.facebook_id}>
          <FaFacebookSquare/>
        </a>
      )}
      {external_ids.twitter_id && (
        <a target="_blank" href={'https://www.x.com/' + external_ids.twitter_id}>
          <FaXTwitter/>
        </a>
      )}
      {external_ids.youtube_id && (
        <a target="_blank" href={'https://www.youtube.com/' + external_ids.youtube_id}>
          <ImYoutube2/>
        </a>
      )}
      {external_ids.instagram_id && (
        <a target="_blank" href={'https://www.instagram.com/' + external_ids.instagram_id}>
          <AiOutlineInstagram/>
        </a>
      )}
    </div>
  )
}
