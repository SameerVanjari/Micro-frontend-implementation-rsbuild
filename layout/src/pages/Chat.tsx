import { lazy, Suspense } from "react";

const Chat = lazy(() => import("chat/Chat"));

const ChatApp = () => {
  return (
    <>
      <Suspense fallback={<p>Loading .... </p>}>
        <Chat />
      </Suspense>
    </>
  );
};

export default ChatApp;
