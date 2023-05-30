import React from "react";

const FeaturedCharacter = ({children}) => {
  return (
    <>
      <div className="featured">
        {React.Children.map(children, child => {
          if(React.isValidElement(child)) {
            return React.cloneElement(child);
          }
          return child;
        })}
      </div>
      
    </>
  )
}

export default FeaturedCharacter
