/*
 *
 *
*/
window.addEventListener('load', function(){
    /*  GET CLASSES */
    var rForm = new Form();
    var system = new System();
    
    /*  GET BUTTONS`*/
    var regBtn = document.forms.register.submit;
    var regAnchor = document.forms.register.anchor;
    
    regBtn.addEventListener('click', function(){
        /*  GET form elements   */
        let regForm = document.forms.register;
        let fName = regForm.first_name.value;
        let lName = regForm.last_name.value;
        let uName = regForm.user_name.value;
        let eMail = regForm.email.value;
        let passwd = regForm.password.value;
        let cPasswd = regForm.c_password.value;
        
        /*  Set form message    */
        let msgBox = 'form-message';
        
        /*   Check for emptiness    */
        if(!rForm.checkEmpty([fName, lName, uName, eMail, passwd, cPasswd]))
            system.displayFormMessage(msgBox,'Please fill all fields', 3);
        else
        {
            /* Prepare Ajax request */
            let request = system.createAjaxObject();
            let reqBody = 'fname='+fName+'&lname='+lName+'&email='+eMail;
            reqBody += '&uname='+uName+'&passwd='+passwd+'&cpasswd='+cPasswd;
            
            request.open('post', system.loadController('index/register.php'));
            request.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
            request.send(reqBody);
            
            request.onerror = function()
            {
                system.displayFormMessage(msgBox, 'Internal Error: Please, try again',3);
            };
            
            request.onreadystatechange = function()
            {
                if(request.readyState == 4)
                {
                    let response = JSON.parse(request.responseText);
                    if(!response.code) system.displayFormMessage(msgBox, response.body, 3);
                    else system.displayFormMessage(msgBox, response.body, 1);
                }
            };
        }
    });
    
    regAnchor.addEventListener('click', function(){
       system.gotoPage('./login.php');
    });
});