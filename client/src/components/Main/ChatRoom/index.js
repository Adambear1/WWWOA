// import React, { useEffect, useContext } from "react";
// import "./styles.css";
// import { Context } from "../../Context";
// import socket from "socket.io";

// function ChatRoom() {
//   const { value, setValue } = useContext(Context);
//   // useEffect(() => {
//   //   socket;
//   // }, [value]);
//   return (
//     <div id="chatroom" uk-modal="true">
//       <div class="uk-modal-dialog uk-modal-body uk-margin">
//         <div class="chat-container">
//           <header class="chat-header">
//             <h1>
//               <i class="fas fa-smile"></i> Chatroom
//             </h1>
//             <a class="btn uk-modal-close">Leave Room</a>
//           </header>
//           <main class="chat-main">
//             <div class="chat-sidebar">
//               <h3>
//                 <i class="fas fa-users"></i> Users
//               </h3>
//               <ul id="users"></ul>
//             </div>
//             <div class="chat-messages"></div>
//           </main>
//           <div class="chat-form-container">
//             <form id="chat-form">
//               <input
//                 id="msg"
//                 type="text"
//                 placeholder="Enter Message"
//                 required
//                 autocomplete="off"
//               />
//               <button class="btn">
//                 <i class="fas fa-paper-plane"></i> Send
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChatRoom;
