//custom hook을 만들때는 use를 붙여준다
//useState, useEffect, useReducer, useCallback 등 Hooks 를 사용
//컴포넌트에서 사용하고 싶은 값들을 반환

import { useState, useCallback } from 'react';

function useInputs(initialForm) {
  const [form, setForm] = useState(initialForm);
  // change
  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
}

export default useInputs;