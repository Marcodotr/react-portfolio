import React from 'react';
import fullStack from '../../asset/img/full stack.png'

export default function About() {
  return (
    <div>
    <div>  

  <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
            <img src={fullStack} class="d-block mx-lg-auto img-fluid" alt="full stack pic"
                width="700" height="500" loading="lazy"></img>
        </div>
        <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3 ">Hey Marco here!</h1>
            <p class="lead">Im currently enrolled in a UTSA Bootcamp for full stack dvelopment and eager to keep furthering my education.
            You can find my GitHub and Linkedin above as well as in my resume.
            </p>

        </div>
    </div>
</div>

</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
    integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
    crossorigin="anonymous"></script>
    </div>
    


  );
}