import { PlusIcon } from "@heroicons/react/24/outline";

export const NewChat = () => {
  return (
    <div className="chatRow border border-gray-700">
      <PlusIcon className="w-4 h-4" />
      <p>New Chat</p>
    </div>
  );
};
