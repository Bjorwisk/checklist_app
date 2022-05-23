<h1>Sign up</h1>
<div class="sign-in">

<style>




    @keyframes move {
    100% {
        transform: translate3d(0, 0, 1px) rotate(360deg);
    }
}

.background {
    display: flex;
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background: #342361;
    overflow: hidden;
    z-index: -1;
}

.background span {
    width: 20vmin;
    height: 20vmin;
    border-radius: 20vmin;
    backface-visibility: hidden;
    position: absolute;
    animation: move;
    animation-duration: 45;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}


.background span:nth-child(0) {
    color: #FFACAC;
    top: 43%;
    left: 40%;
    animation-duration: 51s;
    animation-delay: -48s;
    transform-origin: -17vw 11vh;
    box-shadow: 40vmin 0 5.9125365605222004vmin currentColor;
}
.background span:nth-child(1) {
    color: #E45A84;
    top: 30%;
    left: 25%;
    animation-duration: 11s;
    animation-delay: -27s;
    transform-origin: 5vw -17vh;
    box-shadow: 40vmin 0 5.9858551383245295vmin currentColor;
}
.background span:nth-child(2) {
    color: #FFACAC;
    top: 91%;
    left: 22%;
    animation-duration: 9s;
    animation-delay: -11s;
    transform-origin: 21vw 19vh;
    box-shadow: -40vmin 0 5.357259206040194vmin currentColor;
}
.background span:nth-child(3) {
    color: #E45A84;
    top: 80%;
    left: 25%;
    animation-duration: 32s;
    animation-delay: -5s;
    transform-origin: 17vw 13vh;
    box-shadow: -40vmin 0 5.384057883801004vmin currentColor;
}
.background span:nth-child(4) {
    color: #E45A84;
    top: 1%;
    left: 64%;
    animation-duration: 50s;
    animation-delay: -30s;
    transform-origin: 22vw -20vh;
    box-shadow: -40vmin 0 5.96390975417196vmin currentColor;
}
.background span:nth-child(5) {
    color: #583C87;
    top: 89%;
    left: 83%;
    animation-duration: 17s;
    animation-delay: -6s;
    transform-origin: 8vw -16vh;
    box-shadow: 40vmin 0 5.178905084899168vmin currentColor;
}
.background span:nth-child(6) {
    color: #E45A84;
    top: 87%;
    left: 30%;
    animation-duration: 9s;
    animation-delay: -8s;
    transform-origin: 9vw 16vh;
    box-shadow: 40vmin 0 5.551676739207345vmin currentColor;
}
.background span:nth-child(7) {
    color: #E45A84;
    top: 58%;
    left: 61%;
    animation-duration: 21s;
    animation-delay: -22s;
    transform-origin: 4vw 9vh;
    box-shadow: 40vmin 0 5.156898984491108vmin currentColor;
}
.background span:nth-child(8) {
    color: #583C87;
    top: 98%;
    left: 46%;
    animation-duration: 53s;
    animation-delay: -6s;
    transform-origin: 1vw 10vh;
    box-shadow: 40vmin 0 5.646159835294662vmin currentColor;
}
.background span:nth-child(9) {
    color: #E45A84;
    top: 3%;
    left: 40%;
    animation-duration: 6s;
    animation-delay: -8s;
    transform-origin: 10vw -18vh;
    box-shadow: 40vmin 0 5.702917949017982vmin currentColor;
}
.background span:nth-child(10) {
    color: #FFACAC;
    top: 35%;
    left: 83%;
    animation-duration: 51s;
    animation-delay: -44s;
    transform-origin: 23vw -12vh;
    box-shadow: -40vmin 0 5.053223938152446vmin currentColor;
}
.background span:nth-child(11) {
    color: #FFACAC;
    top: 82%;
    left: 3%;
    animation-duration: 24s;
    animation-delay: -48s;
    transform-origin: -19vw 8vh;
    box-shadow: -40vmin 0 5.996441156296342vmin currentColor;
}
.background span:nth-child(12) {
    color: #583C87;
    top: 58%;
    left: 68%;
    animation-duration: 12s;
    animation-delay: -48s;
    transform-origin: 21vw -1vh;
    box-shadow: -40vmin 0 5.317657323135094vmin currentColor;
}
.background span:nth-child(13) {
    color: #FFACAC;
    top: 81%;
    left: 51%;
    animation-duration: 17s;
    animation-delay: -19s;
    transform-origin: 22vw 6vh;
    box-shadow: 40vmin 0 5.9006895509633654vmin currentColor;
}
.background span:nth-child(14) {
    color: #E45A84;
    top: 65%;
    left: 44%;
    animation-duration: 44s;
    animation-delay: -30s;
    transform-origin: -19vw 25vh;
    box-shadow: -40vmin 0 5.885563970059219vmin currentColor;
}
.background span:nth-child(15) {
    color: #E45A84;
    top: 86%;
    left: 47%;
    animation-duration: 48s;
    animation-delay: -20s;
    transform-origin: 23vw -21vh;
    box-shadow: 40vmin 0 5.307519993846814vmin currentColor;
}
.background span:nth-child(16) {
    color: #E45A84;
    top: 36%;
    left: 87%;
    animation-duration: 6s;
    animation-delay: -37s;
    transform-origin: 9vw 2vh;
    box-shadow: 40vmin 0 5.99173830246053vmin currentColor;
}
.background span:nth-child(17) {
    color: #583C87;
    top: 74%;
    left: 67%;
    animation-duration: 12s;
    animation-delay: -20s;
    transform-origin: 14vw 4vh;
    box-shadow: -40vmin 0 5.687255727785171vmin currentColor;
}
.background span:nth-child(18) {
    color: #FFACAC;
    top: 19%;
    left: 54%;
    animation-duration: 44s;
    animation-delay: -40s;
    transform-origin: 5vw -9vh;
    box-shadow: 40vmin 0 5.604502001124358vmin currentColor;
}
.background span:nth-child(19) {
    color: #E45A84;
    top: 87%;
    left: 7%;
    animation-duration: 15s;
    animation-delay: -45s;
    transform-origin: 15vw -4vh;
    box-shadow: -40vmin 0 5.86261564056225vmin currentColor;
}
</style>

    <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
     </div>

<script>
    const logIn = (userName) => {
        
    }
</script>

    <div class="login-container">
        <form class="login-container__form">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class='login-container__form__label'>UserName</label>
            <input type="text" name="text" placeholder="UserName" id="userName_txt" class='login-container__form__input' />

            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class='login-container__form__label'>Password</label>
            <input type="password" name="password" placeholder="UserName" class='login-container__form__input' />

            <button onclick="{() => {

            }}">Sign in</button>
        </form>
    </div>
    <a href='./todo'>Todo</a>

</div>