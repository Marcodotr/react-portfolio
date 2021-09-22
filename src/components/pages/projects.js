import React from 'react';
import {  MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from 'mdbreact'
import 'bootstrap/dist/css/bootstrap.min.css';
import pokeProj from '../../asset/img/pokeprojSS.png'
import IMAGine from '../../asset/img/IMAGineDriveSS.png'

export default function Projects() {
  return (
    <section className="my-5 bg-gradient-light">
    <h2 className="h1-responsive font-weight-bold text-center my-5">
      My Projects
    </h2>
    <p className="grey-text w-responsive text-center mx-auto mb-5">
      Here are a couple of the projects I have done with my group mates during my USTA bootcamp.
    </p>

    <MDBRow>
      <MDBCol lg="5" className="mb-lg-0 mb-5">
        <img
          src={pokeProj}
          alt=""
          className="img-fluid rounded z-depth-1"
        />
      </MDBCol>
      <MDBCol lg="7">
        <MDBRow className="mb-3">
          <MDBCol md="1" size="2">
            <MDBIcon far icon="chart-bar" size="2x" className="indigo-text" />
          </MDBCol>
          <MDBCol md="11" size="10">
            <h5 className="font-weight-bold mb-3">Bill's PC</h5>
            <p className="grey-text">
            Bill’s PC is a recreation of pokemons ‘BOX’ system to store pokemon.
            In this project the focus was on calling and displaying API calls.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol md="1" size="2">
            <MDBIcon icon="music" size="2x" className="pink-text" />
          </MDBCol>
          <MDBCol md="11" size="10">
            <h5 className="font-weight-bold mb-3">Technologies</h5>
            <p className="grey-text">
              Javascript, HTML, CSS
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol md="1" size="2">
            <MDBIcon far icon="smile" size="2x" className="blue-text" />
          </MDBCol>
          <MDBCol md="11" size="10">
            <h5 className="font-weight-bold mb-3">Pages</h5>
            <a href='https://github.com/gmunoz94/pokeProj' className="grey-text">-GitHub-Link-            
            </a>
            <a href='https://gmunoz94.github.io/pokeProj/' className='grey-text'>-Deployed Page-</a>
          </MDBCol>
        </MDBRow>
      </MDBCol>
    </MDBRow>
    <hr className="my-5" />
    <MDBRow>
      <MDBCol lg="7">
        <MDBRow className="mb-3">
          <MDBCol md="1" size="2">
            <MDBIcon icon="book" size="2x" className="cyan-text" />
          </MDBCol>
          <MDBCol md="11" size="10">
            <h5 className="font-weight-bold mb-3">IMAGine Drive</h5>
            <p className="grey-text">
            IMAGine Drive is a patient order tracking system for an optometrist office. 
            We used a user authentication system for sign in and created SQL routes for every patient and order.
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol md="1" size="2">
            <MDBIcon icon="code" size="2x" className="red-text" />
          </MDBCol>
          <MDBCol md="11" size="10">
            <h5 className="font-weight-bold mb-3">Technologies</h5>
            <p className="grey-text">
            Javascript, HTML, CSS,  handlebarsJS, nodeJS, MySQL, Sequelize 
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mb-3">
          <MDBCol md="1" size="2">
            <MDBIcon far icon="money-bill-alt" size="2x" className="deep-purple-text" />
          </MDBCol>
          <MDBCol md="11" size="10">
          <h5 className="font-weight-bold mb-3">Pages</h5>
            <a href='https://github.com/gmunoz94/project2' className="grey-text">-GitHub-Link-            
            </a>
            <a href='https://imagine-drive.herokuapp.com/login' className='grey-text'>-Deployed Page-</a>
          </MDBCol>
        </MDBRow>
      </MDBCol>
      <MDBCol lg="5">
        <img
          src={IMAGine}
          alt=""
          className="img-fluid rounded z-depth-1"
        />
      </MDBCol>
    </MDBRow>
  </section>
  );
}
