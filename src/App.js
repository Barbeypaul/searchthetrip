import React, { Component } from 'react'
//Css
import './App.css';
//NavBar
import Navbar from './Components/Header/Navbar';
//Les Pages
import Connexion from './Components/Connexion/Connexion'
import Accueil from './Components/Acceuil'
import Series from './Components/Series';
import Films from './Components/Films';
import MesFavoris from './Components/MesFavoris';
import AdminPage from './Components/AdminDashboard/AdminPage';
import Video from './Components/Video/Video';
import Load from './Components/Load';
import NotFound from './Components/NotFound'
//Importation FireBase
import { firebaseApp } from './base'
import firebase from 'firebase/app'
import 'firebase/auth'
//Imporation de react router dom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export class App extends Component {

  state = {
    // Nom de l'utilisateur
    name: null,
    // uid de l'utilisateur
    uid: null,
    // false : données firebase non recupéré
    // true : donn"es firebase recupéré
    dataLoad: false,
    FireBaseBdd: {}
  }

  //Login--
  authenticate = () => {
    const authProvider = new firebase.auth.GoogleAuthProvider()
    firebaseApp.auth().signInWithPopup(authProvider).then(this.handleAuth)
  }
  handleAuth = authData => {
    const uid = authData.user.uid
    const displayName = authData.user.displayName
    const email = authData.user.email
    const photoURL = authData.user.photoURL
    firebaseApp.database().ref(`Utilisateurs/${uid}`).once("value", snapshot => {
      if (snapshot.exists()) {
      } else {
        firebaseApp.database().ref(`Utilisateurs/${uid}`).update({
          photoURL: photoURL,
          displayName: displayName,
          uid: uid,
          email: email,
        });
      }
    })
    this.setState({
      photoURL: photoURL,
      name: displayName,
      uid: uid,
    })
  }
  //Login--
  //Deconnexion--
  logout = () => {
    firebaseApp.auth().signOut()
    this.setState({
      photoURL: null,
      uid: null,
      name: null,
    })
    window.location = '/';
  }
  //Deconnexion--
  //Au Montage du composant on relie le state a la bdd, et si les données sont recupéré on set dataLoad : true
  componentDidMount = async () => {
    const db = await firebase.database().ref('/')
    db.on('value', (snapshot) => {
      const data = snapshot.val();
      this.setState({
        FireBaseBdd: data,
        dataLoad: true
      })
    })
    //au montage si user existe on reconnecte lutilisateur
    firebaseApp.auth().onAuthStateChanged(user => {
      if (user) {
        this.handleAuth({ user })
      }
    })
  }

  //EnvoyerNouveauFilm
  // infoFilm : object film
  EnvoyerNouveauFilm = (infoFilm) => {
    firebaseApp.database().ref(`Films/${Date.now()}`).update({
      infoFilm
    });
  }
  //SuppFilm
  // id : id du film a supprimer
  SupprimerUnFilm = (id) => {
    firebaseApp.database().ref(`Films/${id}`).remove();
  }
  //Envoyer nouvelle serie
  // infoSerie : object avec les différents episodes
  // titreDeLaSerie : titreDeLaSerie
  EnvoyerNouvelleSerie = (infoSerie, titreDeLaSerie) => {
    firebaseApp.database().ref(`Series/${Date.now()}`).update({
      titre: titreDeLaSerie,
      infoSerie
    });
  }
  // Supprimer Une Serie
  // id : id de la serie a supprimer
  SupprimerUneSerie = (id) => {
    firebaseApp.database().ref(`Series/${id}`).remove();
  }
  //FilmALaUne
  // idFilm : id du film a mettre a la une
  EnvoyerFilmALaUne = (idFilm) => {
    firebaseApp.database().ref(`Filmalaune/`).update(
      { id: idFilm }
    );
  }
  //SerieALaUne
  // idSerie ; id de la serie a mettre a la une
  EnvoyerSerieALaUne = (idSerie) => {
    firebaseApp.database().ref(`Seriealaune/`).update(
      { id: idSerie }
    );
  }
  //ModifierTop10Film
  // position: position du film de 1 a 10
  // idFilm : id du film 
  ModifierTop10Film = (position, idFilm) => {
    firebaseApp.database().ref(`Top10Film/`).update(
      { [position]: idFilm }
    );
  }
  //Envoyer ou Supprimer un Favoris
  // idFilm : id du Film
  // Favori : statut du favoris (true / false)
  EnvoyerSuppFavori = (idFilm, Favori) => {
    if (Favori === true) {
      firebaseApp.database().ref(`Utilisateurs/${this.state.uid}/Favoris/`).update({
        [idFilm]: true
      });
    } else {
      firebaseApp.database().ref(`Utilisateurs/${this.state.uid}/Favoris/${idFilm}`).remove();
    }
  }
  render() {
    // si on a pas l'uid de l'utilisateur on affiche la page de connexion Google
    if (this.state.uid === null) {
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <div
                  style={{
                    position: 'absolute', left: '50%', top: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <Connexion authenticate={this.authenticate}></Connexion>
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
      );
    } else {
      // si non on affiche le site
      return (
        < Router >
          {
            this.state.dataLoad === true ?
              // si les données sont chargé on affiche
              <div>
                <Navbar Admin={this.state.FireBaseBdd.Utilisateurs[this.state.uid].Admin} photoURL={this.state.photoURL} logout={this.logout} ></Navbar>
                <Switch>
                  <Route exact path="/">
                    <Accueil idSerieALaUne={this.state.FireBaseBdd.Seriealaune} Series={this.state.FireBaseBdd.Series} EnvoyerSuppFavori={this.EnvoyerSuppFavori} listeFavoris={this.state.FireBaseBdd.Utilisateurs[this.state.uid].Favoris} Filmalaune={this.state.FireBaseBdd.Filmalaune} Top10Accueil={this.state.FireBaseBdd.Top10Film} Films={this.state.FireBaseBdd.Films}></Accueil>
                  </Route>
                  <Route exact path="/Series">
                    <Series idSerieALaUne={this.state.FireBaseBdd.Seriealaune} Series={this.state.FireBaseBdd.Series}></Series>
                  </Route>
                  <Route exact path="/Films">
                    <Films EnvoyerSuppFavori={this.EnvoyerSuppFavori} listeFavoris={this.state.FireBaseBdd.Utilisateurs[this.state.uid].Favoris} Top10Accueil={this.state.FireBaseBdd.Top10Film} Films={this.state.FireBaseBdd.Films}></Films>
                  </Route>
                  <Route exact path="/MesFavoris">
                    <MesFavoris EnvoyerSuppFavori={this.EnvoyerSuppFavori} listeFavoris={this.state.FireBaseBdd.Utilisateurs[this.state.uid].Favoris} Films={this.state.FireBaseBdd.Films}></MesFavoris>
                  </Route>
                  <Route exact path="/Play">
                    <Video></Video>
                  </Route>

                  {this.state.FireBaseBdd.Utilisateurs[this.state.uid].Admin === true ?
                    // si l'utilisateur a true dans FireBaseBdd.Utilisateurs[this.state.uid].Admin on ajoute la route admin avec le composant
                    < Route exact path="/Admin">
                      <AdminPage EnvoyerNouvelleSerie={this.EnvoyerNouvelleSerie} ModifierTop10Film={this.ModifierTop10Film} Top10List={this.state.FireBaseBdd.Top10Film} idFilmALaUne={this.state.FireBaseBdd.Filmalaune} idSerieALaUne={this.state.FireBaseBdd.Seriealaune} EnvoyerFilmALaUne={this.EnvoyerFilmALaUne} EnvoyerSerieALaUne={this.EnvoyerSerieALaUne} EnvoyerNouveauFilm={this.EnvoyerNouveauFilm} SupprimerUnFilm={this.SupprimerUnFilm} SupprimerUneSerie={this.SupprimerUneSerie} Films={this.state.FireBaseBdd.Films} Series={this.state.FireBaseBdd.Series}></AdminPage>
                    </Route>
                    // si non null
                    : (null)
                  }
                  <Route component={NotFound} />
                </Switch>

              </div> :
              // si les données ne sont pas chargé on affiche le chargement
              <div style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
              }}>
                <Load></Load>
              </div>
          }
        </Router >
      )
    }
  }
}

export default App
