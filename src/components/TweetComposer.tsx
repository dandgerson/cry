import React, { useState } from "react";
import {
  Image,
  Smile,
  Calendar,
  MapPin,
  BarChart2,
  PenSquare,
} from "lucide-react";
import {
  TweetComposerContainer,
  ComposerAvatar,
  ComposerContent,
  ComposerTextarea,
  ComposerActions,
  ComposerTools,
  PostButton,
} from "./styled";
import Avatar from "./Avatar";
import { currentUser } from "../data/mockData";

interface TweetComposerProps {
  onTweet?: (content: string) => void;
}

const TweetComposer: React.FC<TweetComposerProps> = ({ onTweet }) => {
  const [content, setContent] = useState("");

  const handleTweet = () => {
    if (content.trim() && onTweet) {
      onTweet(content);
      setContent("");
    }
  };

  return (
    <TweetComposerContainer>
      <ComposerAvatar>
        <Avatar src={currentUser.profileImageUrl} alt={currentUser.name} />
      </ComposerAvatar>

      <ComposerContent>
        <ComposerTextarea
          placeholder="What's happening?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <ComposerActions>
          <ComposerTools>
            <Image size={20} />
            <Smile size={20} />
            <Calendar size={20} />
            <MapPin size={20} />
            <BarChart2 size={20} />
          </ComposerTools>

          <PostButton disabled={!content.trim()} onClick={handleTweet}>
            Tweet
          </PostButton>
        </ComposerActions>
      </ComposerContent>
    </TweetComposerContainer>
  );
};

export default TweetComposer;
