import React from "react";




//Render main menu 
class Menu extends React.Component {
    render() {
        const { active, menuItems, songImgUrl } = this.props

        return (
            <div className="menu-container">
               <div className="menu">
                <ul>
                    {menuItems.map((element,index) => {
                        return active===index?<li key={index} className="active">
                            &nbsp; {element}
                        </li>:<li key={index}>
                            &nbsp;{element}</li>
                    })}
                </ul>

               </div>
               <div className="leaf">
                {active === 0 && <img src={songImgUrl} alt=""> </img>}
                {active === 1 && <img src={music} alt=""> </img>}
                {active === 2 && <img src={game} alt=""> </img>}
                {active === 3 && <img src={settings} alt=""> </img>}
              
                

               </div>
            </div>
        )
    }
    }
  

export default Menu;