import { useEffect, useState } from "react";

const Content = ({
  children,
  hide,
  dataNameUp,
  leftContentClass,
  rightContentClass,
  rClassAdd,
}) => {
  const [leftClass, setleftClass] = useState(""); //membuat use state cname
  const [rightClass, setrightClass] = useState(""); //membuat use state cname

  useEffect(() => {
    setleftClass(() => leftContentClass); //set data cname dengan props.className setiap props di render
    setrightClass(() => rightContentClass); //set data cname dengan props.className setiap props di render
  }, [leftContentClass]);

  if (rClassAdd) {
    useEffect(() => {
      setrightClass(() => rClassAdd);
    }, [rightContentClass]);
  }
  // console.log('content:', content)
  // console.log('meta:', meta)
  if (hide) {
    var h1class = "hidden";
  } else {
    var h1class = "text-4xl font-semibold mb-2 -ml-1";
  }
  return (
    <div className="flex w-full pt-10 justify-between">
      <div className={leftClass}></div>
      <div className={rightClass}>
        <h1 className={h1class}>{dataNameUp}</h1>
        <div className="bg-slate-900/70 min-h-screen rounded-lg p-4 dashcontent">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Content;
