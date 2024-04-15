import "./Chats.css";
import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId='77fcfb5c-508d-44ed-9eda-6f9a9ca51833'
        username={props.user.username}
        secret={props.user.secret}
        style={{ height:'100%'}}
      />
    </div>
  );
};

export default ChatsPage;