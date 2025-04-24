import InChat from "./InChat";

function ChatSection() {
  return (
    <div className="bg-gray-800 rounded-md shadow-md w-80 md:w-96 h-11/12 max-h-screen">
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold mb-4">Xiryuu</h2>
        <InChat />
      </div>
    </div>
  );
}
export default ChatSection;
