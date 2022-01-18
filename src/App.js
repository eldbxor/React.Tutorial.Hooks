import Counter from "./Counter";
import Info from "./Info";
import Info2 from "./Info2";
import Average from "./Average";
import { useState } from "react";

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };

const App = () => {
  return <Info2 />;
};

export default App;
