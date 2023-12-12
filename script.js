container.innerHTML = `
<nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <div class="brand">
                    <a class="navbar-brand" href="#">
                        <img src="/Images/HobbyCue Logo.png" alt="Hobby Cue">
                    </a>
                </div>



                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse main" id="navbarSupportedContent">

                    <div class="serch">
                        <input class="form-control me-2 serch_a" type="search" placeholder="Search" aria-label="Search">
                        <button class=" serch_b" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>


                    <div class="explore mx-0 p-0 mt-1">
                        <div class="img1 ">

                            <img src="/Images/Explore.png" alt="explore">
                        </div>

                        

                        <div class="dropdown mx-0 ">
                                <button class="btne dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <a class="mx-1" href="">Explore</a>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a class="dropdown-item" href="#">People-Communnity</a></li>
                                    <li><a class="dropdown-item" href="#">Places-venues</a></li>
                                    <li><a class="dropdown-item" href="#">Programs-events</a></li>
                                    <li><a class="dropdown-item" href="#">Products-store</a></li>
                                    <li><a class="dropdown-item" href="#">Blogs</a></li>
                                </ul>
                                </div>
                        <i class="fa-solid fa-angle-down  mx-1 mt-4" style="color: #c5cad3; "></i>

                    </div>

                    <div class="explore">
                        <div class="img1 ">

                            <img src="/Images/Hobbies.png" alt="explore">
                        </div>

                        <a class="mx-1" href="">Hobbies</a>
                        <i class="fa-solid fa-angle-down  mx-1 mt-4" style="color: #c5cad3; "></i>

                    </div>
                    <div>
                        <button type="button" class="btn">Sign In</button>
                    </div>

                    <div class=" flexs d-flex">

                    <div class="img2 ">

                        <i class="fa-solid fa-bookmark fa-xl" style="color: #8064a2;"></i>
                    </div>

                    <div class="img2 ">

                        <i class="fa-solid fa-bell fa-xl" style="color: #8064a2;"></i>
                    </div>
                    <div class="img2 ">

                        <i class="fa-solid fa-cart-shopping fa-xl" style="color: #8064a2;"></i>
                    </div>

                    </div>

                    

                   
                    








                </div>
            </div>
        </nav>`
footer.innerHTML = `<footer class="footer">
        <div class="container"></div>
<div class="row me-0"> 
<div class="col-12 col-lg-3 text-white foot">
<h4>Hobby Cue</h4>
<ul>
    <li><a href="">About Us</a></li>
    <li><a href="">Our Services</a></li>
    <li><a href="">Work with Us</a></li>
    <li><a href="">FAQ</a></li>
    <li><a href="">Contact Us</a></li>
</ul>
</div>
<div class="col-12 col-lg-3 text-white foot">
<h4>How Do I</h4>
<ul>
    <li><a href="">Sign Up</a></li>
    <li><a href="">Add a listing</a></li>
    <li><a href="">Claim Listig</a></li>
    <li><a href="">Post a Query</a></li>
    <li><a href="">Add a blog post</a></li>
    <li><a href="">Other Queries</a></li>
</ul>
</div>
<div class=" col-12  col-lg-3 text-white foot">
<h4>Quick Links</h4>
<ul>
    <li><a href="">Listings</a></li>
    <li><a href="">Blog Posts</a></li>
    <li><a href="">Shop/Store</a></li>
    <li><a href="">Community</a></li>
</ul>

</div>
<div class="col-12 col-lg-3 text-white foot">

<h4 >Social media</h4>

<div class ="d-flex row links">
<div class="col-sm-12>

<i class="fa-brands fa-facebook fa-xl me-2" style="color: #c6c7c8"></i>
<i class="fa-brands fa-twitter fa-xl me-2" style="color: #c6c7c8;"></i>
<i class="fa-brands fa-square-instagram fa-xl me-2" style="color: #c6c7c8;"></i>
<i class="fa-brands fa-square-pinterest fa-xl me-2" style="color: #c6c7c8;"></i>
<i class="fa-brands fa-google-plus-g fa-xl me-2" style="color: #c6c7c8;"></i>
<i class="fa-brands fa-youtube fa-xl me-2" style="color: #c6c7c8;"></i>
<i class="fa-brands fa-telegram fa-xl me-2" style="color: #c6c7c8;"></i>
<i class="fa-solid fa-envelope fa-xl me-2" style="color: #c6c7c8;"></i>

</div>

<h6 class= " mt-5"style="color: black;">Invite Friends</h6>


<div class="serche mt-2">

<input class="form-control me-2 serche_a" type="search" placeholder="Email Id" aria-label="Search">
<button class=" serche_b" type="submit">Invite</i></button>
</div>
</div>

</div>


<hr class="">
<p class=" cprt"> © Purple Cues Private Limited
</div>

</footer>
`