<h1>Sign up</h1>
<div class="sign-in">

<style>
    .login-container{
        display: flex;
        justify-content: center;
        width: auto;
        border: 2px solid black;
    }
</style>

<script>
    const logIn = (userName) => {
        
    }
</script>

    <div class="login-container">
        <form class="login-container__form">
            <table>
                <tr>
                    <td>
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class='login-container__form__label'>UserName</label>
                    </td>
                    <td>
                      <input type="text" name="text" placeholder="UserName" id="userName_txt" class='login-container__form__input' />  
                    </td>
                </tr>
                <tr>
                    <td>
                        <!-- svelte-ignore a11y-label-has-associated-control -->
                        <label class='login-container__form__label'>Password</label>
                    </td>
                    <td>
                        <input type="password" name="password" placeholder="UserName" class='login-container__form__input' />
                    </td>
                </tr>
                <tr>
                    <td>
                       <button onclick="{() => {
                           const userName = document.getElementById('');
                           const password = document.getElementById('');
                        }}">Sign in</button> 
                    </td>
                </tr>
            </table>
        </form>
    </div>
    <a href='./todo'>Todo</a>

</div>