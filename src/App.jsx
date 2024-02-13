import React, { useState, useEffect } from "react";
import { Suspense } from "react";
import { BarLoader } from "react-spinners";
import Home from "./pages/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);


  return (
    //suspense tag waits to load this component untill children components are loaded
    <Suspense
      //fallback will return a div, this div is displayed until the children components are loaded
       fallback={
         <div className="h-screen w-full flex items-center justify-center">
           <BarLoader color="teal" height={4} />
         </div>
       }
    >
      {loading ? (
          <div className="h-screen w-full flex items-center justify-center">
            <BarLoader color="teal" height={4}/>
          </div>
      ) : (
        <Home/>        
      )}
    </Suspense>
  );
};

export default App;
