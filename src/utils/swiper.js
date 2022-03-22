import { useSwipeable } from 'react-swipeable';

export const Swipeable = ({children, ...props}) => {
  const handlers = useSwipeable(props);
  return (<div { ...handlers }>{children}</div>);
}


// export const Swipeable = ({children, innerRef, ...props}) => {
//   const handlers = useSwipeable(props);
//   const refCallback = (ref) => {
//     handlers.ref(ref);
//     innerRef(ref);
//   }
//   return (<div { ...handlers } ref={refCallback} >{children}</div>);
// }