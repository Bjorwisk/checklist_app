<h1>Sign up</h1>
<div class="sign-in">

<style>
    .login-container{
        display: flex;
        justify-content: center;
        width: auto;
    }
    .login-container__form{
        margin-top: 100px;
    }
    .login-container__form__label{
        margin-right: 100px;
        color: whitesmoke;
    }
    .login-container__form__input{
        background: none;
        width: 500px;
        height: 50px;
        border: none;
        color: whitesmoke;
        border: 1px solid transparent;
        border-bottom: 2px solid white;
    }
    .login_btn{
        display: block;
        border: 2px solid whitesmoke;
        border-radius: 20px;
        width: 200px;
        height: 50px;
        background: none;
        margin-top: 150px;
        margin-left: 200px;
        cursor: pointer;
        color: whitesmoke;
    }
    .login_btn:hover{
        border: 2px solid green;
       
    }
    a{
        text-decoration: none;
        color: whitesmoke;
    }
    @media (max-width: 720px) {
        .sign-in{
            display: flex;
            justify-content: center;
        }
        .data__label{
            display: none;
        }
    }
</style>

<script>
    const handleUserName = (e) => {
        const user = e.target.value
    };
</script>

    <div class="login-container">
        <form class="login-container__form">
            <table>
                <tr>
                    <td class="data__label">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class='login-container__form__label'>UserName</label>
                    </td>
                    <td>
                      <input type="text" name="text" placeholder="UserName" id="userName_txt" class='login-container__form__input'
                      on:input={(e) => {
                        //   const user = e.target.value; Syntax Error
                      }} />  
                    </td>
                </tr>
                <tr>
                    <td class="data__label">
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class='login-container__form__label'>Password</label>
                    </td>
                    <td>
                        <input type="password" name="password" placeholder="UserName" class='login-container__form__input'
                        on:input={(e) => {
                            //   const password = e.target.value; Syntax Error
                        }} />
                    </td>
                </tr>
            </table>
        </form>
        <a href='./todo'>
            <button class="login_btn" on:click={(e) => {
                //   const handleClick = e.target.value; Syntax Error
            }}>
                Log in
            </button> 
        </a>
    </div>
</div>