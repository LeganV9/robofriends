import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
          {
            robots.map((user, i) => {
              return (
                <Card 
                 key={i} // key props should have something that doesnt change, because here i index can change if array items get moved; better key would be something unique like id.
                 id={robots[i].id} 
                 name={robots[i].name} 
                 email={robots[i].email}
                 />
              );
            })
          }
        </div>
    );
}

export default CardList;