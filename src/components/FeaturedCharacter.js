import React from "react"
const FeaturedCharacter = ({children}) => {
  return (
    <>
      {React.Children.map(children, child => {
        if(React.isValidElement(child)) {
          return React.cloneElement(child);
        }
        return child;
      })}
    </>
  )
}

export default FeaturedCharacter
