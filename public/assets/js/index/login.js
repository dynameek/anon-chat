/*
 *
*/
window.addEventListener('load', function(){
    /*  Required classes    */
    var rForm = new Form();
    var system = new System();
    
    /*  Form Message Element ID*/
    var msgBox = 'form-message';
    /*  */
    var lgForm = document.forms.login;
    var loginBtn = lgForm.submit;
    var linkBtn = lgForm.anchor;
    
    /*  */
    loginBtn.addEventListener('click', function(){
        /*   Get Form Values */
        let loginText = lgForm.lgText.value;
        let passwd = lgForm.password.value;
        
        /*   Check if form fields are empty*/
        if(!rForm.checkEmpty([loginText, passwd]))
        {
            system.displayFormMessage(msgBox, 'Please fill all fields', 3);
        }else
        {
            /*  Prepare request */
            let request = system.createAjaxObject();
            let reqBody = "login="+loginText+"&passwd="+passwd;
            
            request.open('post', system.loadController('index/login.php'));
            request.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            request.send(reqBody);
            
            request.onerror = function()
            {
                system.displayFormMessage(msgBox, 'Internal Error: Please try again', 3);
            };
            
            request.onreadystatechange = function()
            {
                if(request.readyState === 4)
                {
                    let response = JSON.parse(request.responseText);
                    if(!response.code)
                        system.displayFormMessage(msgBox, response.body, 3);
                    else system.gotoPage('./dashboard/'+response.body);
                }else system.displayFormMessage(msgBox, 'Processing', 2);
            };
        }
    });
    
    /*  */
    linkBtn.addEventListener('click', function(){
        system.gotoPage('./register.php');
    });
});