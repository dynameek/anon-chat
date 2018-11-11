/*
 *
 *
*/

class Form
{
    checkEmpty( arr = [])
    {
        let retVal;
        
        for(let i = 0; i < arr.length; i++)
        {
            if(arr[i].length <= 0)
            {
                retVal = false;
                break;
            }
            retVal = true;
        }
        
        return retVal;
    }
}