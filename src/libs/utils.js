function getPropsFromObject(props) {
  let result = {};
  const loop = (obj) => {
    for (const key in obj) {
      if (props.includes(key)) {
        result[key] = obj[key];
      } else if (typeof obj[key] === "object") {
        loop(obj[key]);
      }
    }
    return result;
  };
  const clear = () => (result = {});
  const nullify = () => (result = null);
  return { loop, clear, nullify };
}

export { getPropsFromObject };
