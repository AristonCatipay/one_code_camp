import React from "react";
import PropsChildComponentArrayIterationActivity from './PropsChildComponentArrayIterationActivity';
import Image1 from '../assets/images/image1.jpg';
import Image2 from '../assets/images/image2.jpg';
import Image3 from '../assets/images/image3.jpg';

const ArrayIterationComponent = () => {
    const feed = [
        ['johndoe', 'This is awesome!', 'January 16, 2022', Image1],
        ['marydoe', 'Dinner with the fam!', 'January 16, 2022', Image2], 
        ['itsdoe', 'Just got home!', 'January 16, 2022', Image3]
    ];

    return (
        <div>
            {feed.map((post, index) => (
                <PropsChildComponentArrayIterationActivity
                    key={index}
                    username={post[0]}
                    message={post[1]}
                    date={post[2]}
                    image={post[3]}
                />
            ))}
        </div>
    );
}

export default ArrayIterationComponent;
