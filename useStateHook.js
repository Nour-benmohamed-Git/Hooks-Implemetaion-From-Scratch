const useState = (initialValue) => {
    let state = initialValue;
    const setState = (newValue) => {
      state = newValue;
    };
    return [() => state, setState];
  };
  const [state, setState] = useState(0);
  console.log("first", state());
  setState(1);
  console.log("second", state());
