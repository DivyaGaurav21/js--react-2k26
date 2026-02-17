// import React , {useState , useEffect} from "react";

// function EffectHooks() {
//   const [count, setCount] = useState(0);
//   const [name, setName] = useState('Alice');
  
//   // Runs ONLY on first render (like componentDidMount)
//   useEffect(() => {
//     console.log('Component mounted');
//   }, []); // Empty dependency array
  
//   // Runs when 'count' changes
//   useEffect(() => {
//     console.log('Count changed:', count);
//   }, [count]); // Only re-runs if count changes
  
//   // Runs when 'name' changes
//   useEffect(() => {
//     console.log('Name changed:', name);
//   }, [name]);
  
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Name: {name}</p>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setName('Bob')}>Change Name</button>
//     </div>
//   );
// }

// export default EffectHooks;

//------- cleanup fn-----------//
// import React , {useState , useEffect} from "react";

// function EffectHooks() {
//   const [seconds, setSeconds] = useState(0);
  
//   useEffect(() => {
//     console.log('Setting up interval');
    
//     const interval = setInterval(() => {
//       setSeconds(s => s + 1);
//     }, 1000);
    
//     // Cleanup function - runs before next effect or on unmount
//     return () => {
//       console.log('Cleaning up interval');
//       clearInterval(interval);
//     };
//   }, []); // Only run once
  
//   return <div>Seconds: {seconds}</div>;
// }

// export default EffectHooks;


//----------------
// ---------Event Listeners:-------
import React , {useState , useEffect} from "react";
function EffectHooks() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Only set up once
  
  return <div>{size.width} x {size.height}</div>;
}

// -------------------------------
//  Document Title:


// export default EffectHooks;

// function PageTitle({ title }) {
//   useEffect(() => {
//     document.title = title;
    
//     // Cleanup: restore default title
//     return () => {
//       document.title = 'My App';
//     };
//   }, [title]);
  
//   return <h1>{title}</h1>;
// }

// -------------------------------
// common useEffect mistake

// ❌ MISTAKE 1: Missing dependencies
// function Counter() {
//   const [count, setCount] = useState(0);
  
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount(count + 1); // 'count' is a dependency!
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []); // Missing 'count' in dependencies
  
//   // ✅ FIX: Use functional update or add to dependencies
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCount(c => c + 1); // No dependency needed
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);
// }

// // ❌ MISTAKE 2: Infinite loop
// function InfiniteLoop() {
//   const [count, setCount] = useState(0);
  
//   useEffect(() => {
//     setCount(count + 1); // This causes infinite loop!
//   }); // No dependency array = runs after every render
// }

// // ❌ MISTAKE 3: Object/Array dependencies
// function ObjectDependency() {
//   const [data, setData] = useState([]);
//   const config = { page: 1 }; // New object every render!
  
//   useEffect(() => {
//     fetchData(config);
//   }, [config]); // This will run on every render!
  
//   // ✅ FIX: Move object inside effect or use useMemo
//   useEffect(() => {
//     const config = { page: 1 };
//     fetchData(config);
//   }, []); // Now it only runs once
// }