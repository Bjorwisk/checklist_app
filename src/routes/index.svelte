<style>
    .welcome_txt-container{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .welcome_txt-container_component{
        font-size: 17px;
        color: whitesmoke;
        padding-top: 100px;
        padding-left: 20px;
        padding-right: 20px;
        text-align: center;
    }
    .login_btn_container{
        display: flex;
        justify-content: center;
    }
    .login_btn{
        width: 200px;
        height: 50px;
        background: none;
        border: 2px solid black;
        cursor: pointer;
        margin-top: 50px;
        border-radius: 20px;
    }
    .login_btn:hover{
        filter: blur(1px);
    }
    @media (max-width: 720px) {
        .login_btn:hover{
            filter: none;
        }
    }
</style>

<h1 style="padding-top: 100px; color: whitesmoke">Welcome</h1>
<div class="welcome_txt-container">
    <p class="welcome_txt-container_component">
        Check list app allows you to stay on track with your tasks! log in and try out the application to get ahead of your work!
    </p>
</div>
<a href='./login'>
    <div class="login_btn_container">
       <button class="login_btn">
            Log in
        </button> 
    </div>
    
</a>