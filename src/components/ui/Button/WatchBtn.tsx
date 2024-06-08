import { CirclePlay } from "lucide-react";

const WatchBtn = () => {
  return (
    <a
      href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
      className="flex items-center space-x-2 text-white hover:text-[#18A74D] text-lg font-bold no-underline"
    >
      <CirclePlay className="h-10 w-10" />
      <span>Watch Video</span>
    </a>
  );
};

export default WatchBtn;
