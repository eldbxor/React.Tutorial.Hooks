import { useEffect, useState, useReducer } from "react";

function reducer(state, action) {
  return {
    ...state, // 전개연산자: 배열 또는 객체를 하나하나 넘기는 용도로 사용된다.
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: "",
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다!");
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // });

  // useEffect(() => {
  //   console.log("마운트될 때만 실행됩니다.");
  // }, []);

  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("unmount");
    };
  }, []);

  // useEffect(() => {
  //   console.log("effect");
  //   console.log(name); // name이 업데이트될 때만 실행됩니다.
  //   return () => {
  //     console.log("cleanup");
  //     console.log(name);
  //   };
  // }, [name]);

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
