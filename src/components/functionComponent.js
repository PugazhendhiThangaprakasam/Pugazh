import { useState} from 'react';
function MyFunctionComponent()
{
    const [cnt,setCount] = useState(10);
    function changeCount()
    {
        if(cnt>0)
        {
            setCount(cnt - 1)
        }
      
    }
    return(
        // <div>
        //     <h3>Message from function component</h3>
        //     <h4>Nothing</h4>
        // </div>
        // <h4></h4>
        <div>
        <h3>Count: {cnt}</h3>
        <button  onClick={changeCount}>Decrement</button>

        </div>
    );
}
export default MyFunctionComponent;