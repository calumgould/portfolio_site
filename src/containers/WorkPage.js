import React from 'react';

const WorkPage = ({history}) => {
    return ( 
        <div>
            <h1>Work</h1>
            <div onClick={() => history.push('/work/design')}>
                <h2>Design</h2>
            </div>
            <div onClick={() => history.push('/work/programming')}>
                <h2>Programming</h2>
            </div>
        </div>
     );
}
 
export default WorkPage;